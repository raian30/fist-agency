import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-8 z-10 w-full flex justify-between items-center px-24">
            <Image src={'/favicon.svg'} alt={"Fist Agency Logo"} width={50} height={35} />
            <div className="flex items-center justify-center gap-10 px-10 rounded-full py-3.5 bg-background shadow-[0px_0px_3px_0px_#fff]">
                <Link href={'/#process'}>Process</Link>
                <Link href={'/#creations'}>Creations</Link>
                <Link href={'/#services'}>Services</Link>
                <Link href={'/#contact'}>Contact</Link>
            </div>
            <Link href={'/book-a-call'} className={'bg-blue px-7 py-3 rounded-full'}>Book a call</Link>
        </div>
    )
}