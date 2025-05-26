import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-[#707070] text-white p-2.5 flex justify-between">
      <Link href="/">
        <img id="logo" src="/photos/logo.png" />
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
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
      </ul>
    </nav>
  );
}


