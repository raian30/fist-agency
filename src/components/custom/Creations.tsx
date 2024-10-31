'use client'
import Image from "next/image";
import {ChevronRight, ExternalLink} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {useEffect, useRef, useState} from "react";

export default function Creations() {
    const triggerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(triggerRef.current && imgRef.current) {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline();

            tl
                .to(imgRef.current, {
                scale: 1,
                ease: "none",
                duration: 1
            })
                .to(triggerRef.current, {
                x: triggerRef.current.clientWidth,
                ease: "none",
                duration: 5,
            });

            ScrollTrigger.create({
                id: 'Trigger2',
                trigger: triggerRef.current,
                start: "center center",
                end: "+=100%",
                pin: true,
                animation: tl,
                scrub: 0.75,
                invalidateOnRefresh: true,
            });


            return () => {
                ScrollTrigger.getById("Trigger2")?.kill();
            };
        }
    })

    return (
        <section ref={triggerRef} id={'creations'} className={'h-screen lg:m-0 will-change-transform relative bg-[#121212] px-5 md:px-10 lg:px-24 py-12 lg:py-24 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center lg:justify-between w-full rounded-b-[50px] lg:rounded-b-[70px] xl:rounded-b-[80px]'}>
            <Link target={'_blank'} href={'https://www.casa-fragola.com'} className={'absolute left-0 right-0 top-0 bottom-0 m-auto -translate-x-[100vw] h-full flex justify-center items-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase opacity-30'}>casa-fragola.com</Link>
            <div id={'image'} className={'flex flex-col gap-10 lg:gap-5 xl:gap-0 justify-between'}>
                <Image ref={imgRef} className={'will-change-transform scale-50 p-5 lg:p-10 rounded-[50px] bg-background mx-auto lg:m-0 max-w-[60vw] md:max-w-[auto]'} src={'/Casa-fragola-phone.png'}
                       alt={'Casa fragola on phone'} width={272} height={554}/>
                <div className={'flex gap-12 items-center'}>
                    <div className={'bg-blue h-0.5 w-16'}/>
                    <a target={"_blank"} href={'https://www.casa-fragola.com/'}
                       className={'text-lg uppercase opacity-40 w-max'}>CASA-FRAGOLA.COM</a>
                </div>
                <Link target={"_blank"}  href={'https://www.casa-fragola.com/'}
                      className={'flex relative overflow-hidden group justify-center items-center gap-5 w-fit px-7 py-3.5 border border-white rounded-full'}>
                    <p className={'text-lg group-hover:text-background transition-all z-10'}>Live preview</p>
                    <ChevronRight size={30} className={'p-1.5 rounded-full bg-white text-black z-10'}/>
                    <div
                        className={'absolute size-7 p-1.5 bg-transparent right-5 rounded-full group-hover:text-black group-hover:right-0 group-hover:bg-white group-hover:size-52 transition-all duration-300'}/>
                </Link>
            </div>
            <Image className={'hidden lg:block object-cover rounded-3xl lg:w-[60%] 2xl:w-2/3'} src={'/Casa-fragola-laptop.png'} alt={'Casa fragola on laptop'} width={1109} height={832}/>
        </section>
    )
}