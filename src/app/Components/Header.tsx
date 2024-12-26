import Image from "next/image";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Image src={logo} alt="Agency Analytics logo" />
    </header>
  );
};

export default Header;
