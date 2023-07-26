import Image from "next/image";
import logo from "/public/images/logo.png"


function Footer() {
  return (
    <footer className="flex h-20 items-center justify-evenly bg-[#1d1d1f] text-white ">
      <div className="footer-heading ">
        <h1 className="font-bold text-white">
          <span className="text-gray-400 hover:text-white"> ©2023 </span>
          Rayalaseema University College of Engineering
        </h1>
      </div>
      <div className="logo ">
        <a href="http://ruce.ac.in/" target="_blank">
          <Image className="h-16 w-auto" src={logo} alt="RU" />
        </a>
      </div>
      {/* <div className="links"></div> */}
    </footer>
  );
}

export default Footer;
