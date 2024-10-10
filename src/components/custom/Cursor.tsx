'use client'

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Cursor() {
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            gsap.to(cursorOutlineRef.current, {
                duration: 1.5,
                x: clientX - 25,
                y: clientY - 25,
                ease: 'expo.out'
            });

            gsap.to(cursorDotRef.current, {
                duration: 0.1,
                x: clientX - 10,
                y: clientY - 10,
                ease: 'expo.out'
            });

            setIsVisible(true);
        };

        const onMouseEnterLink = () => {
            gsap.to(cursorDotRef.current, { scale: 4 });
            gsap.to(cursorOutlineRef.current, { scale: 1.7 });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursorDotRef.current, { scale: 1 });
            gsap.to(cursorOutlineRef.current, { scale: 1 });
        };

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorOutlineRef}
                id={'cursor-outline'} className={`cursor ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
            <div
                ref={cursorDotRef}
                id={'custom-cursor'} className={`custom-cursor ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
        </>
    );
}