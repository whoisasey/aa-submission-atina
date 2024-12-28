import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image src={logo} alt="Agency Analytics logo" />
      </Link>
    </header>
  );
};

export default Header;
