import {ChevronRight} from "lucide-react";
import Link from "next/link";

export default function FooterCTA() {
    return (
        <section className="h-screen bg-[#121212] flex justify-center items-center w-full px-24">
            <div className={'flex flex-col justify-center items-center gap-16 w-full py-32 bg-background rounded-[50px]'}>
                <h1 className={'text-4xl'}>Ready to start a new project?</h1>
                <Link href={'/#contact'}
                      className={'flex relative overflow-hidden group justify-center items-center gap-5 w-fit px-7 py-3.5 border border-white rounded-full'}>
                    <p className={'text-lg group-hover:text-background transition-all z-10'}>Book a call</p>
                    <ChevronRight size={30} className={'p-1.5 rounded-full bg-white text-black z-10'}/>
                    <div
                        className={'absolute size-7 p-1.5 bg-transparent right-5 rounded-full group-hover:text-black group-hover:right-0 group-hover:bg-white group-hover:size-52 transition-all duration-300'}/>
                </Link>
            </div>
        </section>
    )
}