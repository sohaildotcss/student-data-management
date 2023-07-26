import Image from "next/image";
import "../globals.css";

import logo from "/public/images/logo.png";
function Brand() {
  return (
    <div className=" left-section  flex flex-1 items-center justify-center bg-fixed bg-no-repeat">
      <div className="l-section-wrap z-10 flex  h-[500px] w-[500px] flex-col items-center justify-center backdrop-blur-sm ">
        <Image className="h-[20rem] w-auto" src={logo} />
        <h1 className="from-pink-500 to-violet-500 text-2xl font-extrabold text-black duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent  hover:transition">
          Rayalaseema University <br /> College of Engineering
        </h1>
      </div>
    </div>
  );
}

export default Brand;
