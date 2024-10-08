'use client';
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

export default function GridBackground() {
    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const targetPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

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

    let dynamicStyle = {
        maskImage: `radial-gradient(
            300px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
        WebkitMaskImage: `radial-gradient(
            300px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
        background: `rgba(0, 187, 191, 0.2)`,
    };

    if(mousePosition.x === 0 && mousePosition.y === 0) {
        dynamicStyle = {
            maskImage: `radial-gradient(
            0px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
            WebkitMaskImage: `radial-gradient(
            0px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.5),
            transparent
        )`,
            background: `rgba(0, 187, 191, 0.2)`,
        };
    }

    return (
        <div className="absolute top-3 -z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[80px] bg-[#121212]">
            <GridPattern className={cn("h-[200%]")} style={dynamicStyle}/>
        </div>
    );
}