import Image from "next/image";
import footer from "@/assets/footer.svg";

const Footer = () => {
  return (
    <footer className="pt-8 sm:pt-20 lg:pt-28 border-t relative">
      <Image src={footer} alt="footer background" />
      <div className="absolute footer-text text-white text-sm">
        <p>&copy; All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
