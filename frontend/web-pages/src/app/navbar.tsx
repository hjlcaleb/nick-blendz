import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="nav">
            <Link href="/">
                <img id="logo" src="../photos/logo.png" />
            </Link>
            <ul className="navUL">
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/booking">BOOKING</Link>
                </li>
                <li>
                    <Link href="/contact">CONTACT</Link>
                </li>

            </ul>
        </nav>
    )
}