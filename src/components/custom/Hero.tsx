import Link from "next/link";
import {ChevronRight} from "lucide-react";
import GridBackground from "@/components/custom/GridBackground";

export default function Hero() {
    return (
        <>
            <section id={'home'} className={'flex flex-col gap-20 lg:gap-14 min-h-screen justify-center px-5 md:px-10 lg:px-24'}>
                <div className={'flex gap-5 lg:gap-12 items-center'}>
                    <div className={'bg-blue h-0.5 w-16'}/>
                    <div className={'overflow-hidden relative animation-wrapper'}>
                        <p className={'text-lg lg:text-xl text-transparent select-none leading-[1.6rem] pointer-events-none font-medium'}>Total
                            commitment</p>
                        <p className={' text-lg lg:text-xl font-medium absolute top-0 left-0 animation-item-1'}>Total commitment</p>
                        <p className={'text-lg lg:text-xl font-medium absolute top-0 left-0 translate-y-full animation-item-2'}>100%
                            dedication</p>
                        <p className={'text-lg lg:text-xl font-medium absolute top-0 left-0 translate-y-full animation-item-3'}>No
                            bull$hit</p>
                    </div>
                </div>
                <h1 className={'text-5xl xl:text-8xl leading-[1.4] font-medium '}>We Don&apos;t Build Pretty Sites,<br/> We Build
                    Winners.
                </h1>
                <Link href={'/#contact'}
                      className={'flex relative overflow-hidden group justify-center items-center gap-5 w-fit px-7 py-3.5 border border-white rounded-full'}>
                    <p className={'text-lg group-hover:text-background transition-all'}>Let&apos;s begin</p>
                    <ChevronRight size={30} className={'p-1.5 rounded-full bg-white text-black'}/>
                    <div
                        className={'absolute size-7 p-1.5 bg-transparent right-5 [z-index:-1] rounded-full group-hover:right-0 group-hover:bg-white group-hover:size-52 transition-all duration-300'}/>
                </Link>
            </section>
            <GridBackground/>
        </>
    )
}