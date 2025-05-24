import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="absolute abottom-0 w-full bg-[#707070] text-white p-2.5 flex justify-between">
            <Link href="/">
                <Image
                    id="logo"
                    src="/photos/logo.png"
                    alt="Barbershop Logo"
                    width={100}
                    height={100}
                    priority
                />
            </Link>
            <ul className="navUL">
                <a
                    href="https://instagram.com/nickkblendz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram color="white" size={30} />
                </a>

                <a
                    href="mailto:nickkblendz@gmail.com"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <IoIosMail color="white" size={30} />
                </a>
            </ul>
        </footer>

    )
}