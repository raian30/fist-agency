import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className={'w-full h-[80px] bg-background rounded-t-[80px] relative'}>
                <div className={'w-full h-[80px] bg-[#121212] absolute -z-10'}/>
            </div>
            <footer className={'bg-background px-24 pb-12 flex flex-col gap-10'}>
                <div className={'flex gap-5 justify-start items-center'}>
                    <Image src={'/favicon.svg'} alt={"Fist Agency Logo"} width={50} height={35} />
                    <p className={'text-2xl'}>Fist Agency</p>
                </div>
                <div className={'flex justify-between'}>
                    <div className={'flex flex-col gap-12'}>
                        <div className={'flex gap-12'}>
                            <Link href={'/#process'} className={'text-lg'}>Process</Link>
                            <Link href={'/#creations'} className={'text-lg'}>Creations</Link>
                            <Link href={'/#services'} className={'text-lg'}>Services</Link>
                            <Link href={'/#contact'} className={'text-lg'}>Contact</Link>
                        </div>
                        <div className={'flex gap-12'}>
                            <p className={'text-lg'}>Copyright 2024 Fist Agency LLC</p>
                            <p className={'text-lg'}>Terms of Service</p>
                            <p className={'text-lg'}>Privacy Policy</p>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-lg'}>Fist Agency LLC</p>
                        <p className={'text-lg'}>30 N Gould St Ste R Sheridan, WY 82801, USA</p>
                        <Link href={'tel:+13072716878'} className={'text-lg'}>+1 (307) 271-6878</Link>
                        <Link href={'mailto:hello@fist.agency'} className={'text-lg'}>hello@fist.agency</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}