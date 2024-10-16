import Image from "next/image";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

export default function Creations() {
    return (
        <section id={'creations'} className={'bg-[#121212] min-h-screen px-5 md:px-10 lg:px-24 py-12 lg:py-24 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-full rounded-b-[50px] lg:rounded-b-[70px] xl:rounded-b-[80px]'}>
            <div className={'flex flex-col gap-10 lg:gap-0 justify-between'}>
                <Image className={'p-5 lg:p-10 rounded-[50px] bg-background max-w-[60vw] md:max-w-[auto]'} src={'/Casa-fragola-phone.png'}
                       alt={'Casa fragola on phone'} width={303} height={615}/>
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
            <Image src={'/Casa-fragola-laptop.png'} alt={'Casa fragola on laptop'} width={1109} height={832}/>
        </section>
    )
}