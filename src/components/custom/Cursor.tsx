'use client'

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
export default function Cursor() {
    const cursorOutline = useRef<HTMLDivElement>(null);
    const cursorDot = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const links = document.querySelectorAll("a");

        const onMouseMove = (e: MouseEvent) => {
            gsap.to('#cursor-outline', {
                duration: 1.5,
                x: e.pageX-25,
                y: e.pageY-25,
                ease: 'expo'
            })

            if (cursorDot.current) {
                cursorDot.current.style.top = `${e.pageY-10}px`;
                cursorDot.current.style.left = `${e.pageX-10}px`;
            }

            if(e.pageX !== 0 && e.pageY !== 0 && cursorDot.current && cursorOutline.current) {
                cursorDot.current.style.opacity = '1'
                cursorOutline.current.style.opacity = '1'
            }
        }

        const onMouseEnterLink = () => {
            gsap.to('#custom-cursor', {scale: 4})
            gsap.to('#cursor-outline', {scale: 1.7})
        }

        const onMouseLeaveLink = () => {
            gsap.to('#custom-cursor', {scale: 1})
            gsap.to('#cursor-outline', {scale: 1})
        }

        window.addEventListener('mousemove', onMouseMove)
        links.forEach(link => {
            link.addEventListener("mouseenter", onMouseEnterLink)
            link.addEventListener("mouseleave", onMouseLeaveLink)
        })

        document.addEventListener("mouseleave", () => {
            if (cursorOutline.current && cursorDot.current) {
                cursorOutline.current.style.opacity = '0'
                cursorDot.current.style.opacity = '0'
            }
        })

        document.addEventListener("mouseenter", () => {
            if (cursorOutline.current && cursorDot.current) {
                cursorOutline.current.style.opacity = '1'
                cursorDot.current.style.opacity = '1'
            }
        })

    }, []);

    return (
        <>
            <div ref={cursorOutline} style={{opacity: 0}} id={'cursor-outline'} className="cursor"/>
            <div ref={cursorDot} style={{opacity: 0}} id={'custom-cursor'} className="custom-cursor" />
        </>
    )
}