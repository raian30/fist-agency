import Image from "next/image";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

export default function Creations() {
    return (
        <>
            <section className={'bg-[#121212] h-screen p-24 flex justify-between w-full rounded-b-[80px]'}>
                <div className={'flex flex-col justify-between'}>
                    <Image className={'p-10 rounded-[50px] bg-background'} src={'/Casa-fragola-phone.png'}
                           alt={'Casa fragola on phone'} width={303} height={615}/>
                    <div className={'flex gap-12 items-center'}>
                        <div className={'bg-blue h-0.5 w-16'}/>
                        <a href={'https://www.casafragola.com/'}
                           className={'text-lg uppercase opacity-40 w-max'}>CASAFRAGOLA.COM</a>
                    </div>
                    <Link href={'/#case-study'}
                          className={'flex relative overflow-hidden group justify-center items-center gap-5 w-fit px-7 py-3.5 border border-white rounded-full'}>
                        <p className={'text-lg group-hover:text-background transition-all z-10'}>Case study</p>
                        <ChevronRight size={30} className={'p-1.5 rounded-full bg-white text-black z-10'}/>
                        <div
                            className={'absolute size-7 p-1.5 bg-transparent right-5 rounded-full group-hover:text-black group-hover:right-0 group-hover:bg-white group-hover:size-52 transition-all duration-300'}/>
                    </Link>
                </div>
                <Image src={'/Casa-fragola-laptop.png'} alt={'Casa fragola on laptop'} width={1109} height={832}/>
            </section>
        </>
    )
}