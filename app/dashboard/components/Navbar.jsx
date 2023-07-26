import "../style.css";
import Image from "next/image";
import logo from "/public/images/logo.png";


function Navbar() {
  return (
    <div className="navbar sticky left-1/3 top-0 flex h-[70px] w-[620px] justify-center gap-8 rounded-lg rounded-t-none shadow-md">
      <div className="logo flex items-center">
        <Image className="h-10 w-auto" src={logo} alt="RU" />
        <h1 className="ml-2 text-lg font-bold text-red-500">
          <a href=""></a> RUCE
        </h1>
      </div>
      <div className="content  flex items-center gap-5 font-semibold">
        <a
          href="#student-details"
          className=" rounded-md  p-2 text-black transition duration-300 ease-in-out hover:bg-[#dce6e7] "
        >
          Student Details
        </a>
        <a
          href="#student-performance"
          className=" rounded-md p-2 text-black transition duration-300 ease-in-out hover:bg-[#dce6e7] "
        >
          Student Performance
        </a>
        <a
          href="#parent-details"
          className="  rounded-md p-2 text-black transition duration-300 ease-in-out hover:bg-[#dce6e7] "
        >
          Parent Details
        </a>
      </div>
    </div>
  );
}

export default Navbar;
