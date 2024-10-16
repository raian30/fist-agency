import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed max-w-[100vw] w-full top-0 lg:top-2 z-10 flex justify-between items-center py-6 px-5 md:px-10 lg:px-24">
            <Link href={'/#home'}>
                <Image src={'/favicon.svg'} alt={"Fist Agency Logo"} width={50} height={35} />
            </Link>
            <div className="hidden lg:flex items-center justify-center gap-10 px-10 rounded-full py-3.5 bg-background shadow-[0px_0px_3px_0px_#fff]">
                <Link href={'/#process'}>Process</Link>
                <Link href={'/#creations'}>Creations</Link>
                <Link href={'/#services'}>Services</Link>
                <Link href={'/#contact'}>Contact</Link>
            </div>
            <Link href={'/#book-a-call'} className={'bg-blue text-black font-medium px-7 py-3 rounded-full'}>Book a call</Link>
        </div>
    )
}