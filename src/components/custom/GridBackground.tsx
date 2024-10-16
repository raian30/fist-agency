'use client';
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

export default function GridBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: 0 });
    const dynamicStyle = {
        maskImage: `radial-gradient(
            ${mousePosition.x === 0 && mousePosition.y === 0 ? '0px' : '300px'} circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
        WebkitMaskImage: `radial-gradient(
            ${mousePosition.x === 0 && mousePosition.y === 0 ? '0px' : '300px'} circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
        background: `rgba(0, 187, 191, 0.2)`,
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const followCursor = () => {
            setMousePosition((prev) => {
                const dx = targetPosition.current.x - prev.x;
                const dy = targetPosition.current.y - prev.y;

                return {
                    x: prev.x + dx * 0.025,
                    y: prev.y + dy * 0.025,
                };
            });
            requestAnimationFrame(followCursor);
        };

        followCursor();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div className="absolute top-0 lg:top-3 -z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[50px] lg:rounded-[70px] xl:rounded-[80px] bg-[#121212]">
            <GridPattern className={cn("h-[200%] hidden lg:block")} style={dynamicStyle}/>
            <GridPattern className={cn("h-[200%] block lg:hidden")} style={{
                maskImage: `radial-gradient(
            '300px' circle at 100% 50%,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
                WebkitMaskImage: `radial-gradient(
            300px circle at 100% 50%,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
                background: `rgba(0, 187, 191, 0.2)`,
            }}/>
        </div>
    );
}