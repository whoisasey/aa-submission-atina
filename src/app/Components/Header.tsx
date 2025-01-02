import Image from "next/image";
import Link from "next/link";
import background1 from "@/assets/background.svg";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="header z-10 relative">
      <nav>
        <Link href={"/"} className="z-10 absolute">
          <Image src={logo} alt="Agency Analytics logo" />
        </Link>
        <div className="absolute background">
          <Image src={background1} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
