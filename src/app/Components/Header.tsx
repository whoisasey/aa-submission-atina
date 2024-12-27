import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";

const Header = () => {
  // TODO: set timeout so that redirects to home after 5 seconds, add countdown?
  return (
    // <header className="absolute top-0 left-8 sm:left-20 lg:left-96 z-0">
    <header>
      <Link href={"/"}>
        <Image src={logo} alt="Agency Analytics logo" />
      </Link>
    </header>
  );
};

export default Header;
