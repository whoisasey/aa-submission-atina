import Image from "next/image";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="absolute top-0 left-20 lg:left-96 z-0">
      <Image src={logo} alt="Agency Analytics logo" />
    </header>
  );
};

export default Header;
