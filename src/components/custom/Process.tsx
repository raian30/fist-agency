'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Process() {
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(triggerRef.current) {
            gsap.registerPlugin(ScrollTrigger);

            const tween = gsap.to(triggerRef.current, {
                x: -triggerRef.current.scrollWidth + triggerRef.current.offsetWidth,
                ease: "none",
            });

            const animation = ScrollTrigger.create({
                id: 'Trigger1',
                trigger: triggerRef.current,
                start:"center center",
                end: () => `+=${triggerRef.current?.scrollWidth}`,
                pin: true,
                animation:tween,
                invalidateOnRefresh: true,
                scrub: 2,
            })

            return () => {
                ScrollTrigger.getById("Trigger1")?.kill();
                animation.kill();
            };
        }
    }, []);

    return (
        <>
            <section className={'px-24'} id={'Trigger1'}>
                <div ref={triggerRef}>
                    <div className={'flex gap-28 w-fit flex-nowrap'}>
                        <div className={'h-fit flex flex-col gap-12'}>
                            <div className={'flex gap-12 items-center'}>
                                <div className={'bg-blue h-0.5 w-16'}/>
                                <p className={'text-lg font-medium uppercase opacity-40 w-max'}>Web Development
                                    Process</p>
                            </div>
                            <h1 className={'text-5xl w-max'}>From an idea to launch</h1>
                        </div>
                        <div className={'w-max max-w-3xl flex flex-col gap-20'}>
                            <div className={'flex gap-5 items-center'}>
                                <p className={'text-lg opacity-40'}>01</p>
                                <p className={'text-lg uppercase text-blue'}>Consultating</p>
                            </div>
                            <div className={'flex flex-col gap-10'}>
                                <h1 className={'text-6xl leading-normal'}>Clearing your mind with fresh ideas</h1>
                                <p className={'text-lg opacity-40'}>Personalized expert advice on web design,
                                    development
                                    and
                                    strategies to optimize online presence, tailored to meet your clients&apos; business
                                    goals.</p>
                            </div>
                        </div>
                        <div className={'w-max max-w-3xl flex flex-col gap-20'}>
                            <div className={'flex gap-5 items-center'}>
                                <p className={'text-lg opacity-40'}>02</p>
                                <p className={'text-lg uppercase text-blue'}>Web design</p>
                            </div>
                            <div className={'flex flex-col gap-10'}>
                                <h1 className={'text-6xl leading-normal'}>Bringing Your Vision to Life</h1>
                                <p className={'text-lg opacity-40'}>Our web design service turns your ideas into
                                    beautifully
                                    crafted, responsive websites that perfectly reflect your brand while ensuring a
                                    seamless
                                    and engaging user experience.</p>
                            </div>
                        </div>
                        <div className={'w-max max-w-3xl flex flex-col gap-20'}>
                            <div className={'flex gap-5 items-center'}>
                                <p className={'text-lg opacity-40'}>03</p>
                                <p className={'text-lg uppercase text-blue'}>Web development</p>
                            </div>
                            <div className={'flex flex-col gap-10'}>
                                <h1 className={'text-6xl leading-normal'}>Turning Concepts into Code</h1>
                                <p className={'text-lg opacity-40'}>Our web development service takes your beautifully
                                    designed website and builds it into a high-performance, functional platform,
                                    ensuring
                                    seamless interactions and robust functionality to elevate your brand online.</p>
                            </div>
                        </div>
                        <div className={'w-max max-w-3xl flex flex-col gap-20'}>
                            <div className={'flex gap-5 items-center'}>
                                <p className={'text-lg opacity-40'}>04</p>
                                <p className={'text-lg uppercase text-blue'}>SEO</p>
                            </div>
                            <div className={'flex flex-col gap-10'}>
                                <h1 className={'text-6xl leading-normal'}>Enhancing Your Visibility Online</h1>
                                <p className={'text-lg opacity-40'}>Our SEO services optimize your website to improve
                                    search
                                    engine rankings, driving organic traffic and increasing visibility, ensuring your
                                    brand
                                    reaches the right audience effectively.</p>
                            </div>
                        </div>
                        <div className={'w-max max-w-3xl flex flex-col gap-20'}>
                            <div className={'flex gap-5 items-center'}>
                                <p className={'text-lg opacity-40'}>05</p>
                                <p className={'text-lg uppercase text-blue'}>Deploying</p>
                            </div>
                            <div className={'flex flex-col gap-10'}>
                                <h1 className={'text-6xl leading-normal'}>Launching Your Vision to the World</h1>
                                <p className={'text-lg opacity-40'}>Our deployment service ensures a smooth transition
                                    from
                                    development to live status, meticulously managing the launch process to guarantee
                                    your
                                    website is fully operational, secure, and optimized for performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={'w-full h-[150px] bg-background rounded-b-[80px] relative'}>
                <div className={'w-full h-[150px] bg-[#121212] absolute -z-10'}/>
            </div>
        </>
    )
}