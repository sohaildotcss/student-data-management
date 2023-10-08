"use client";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import "../globals.css";

const checkAuth = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "1" && password === "1") {
    window.open("https://heliums.netlify.app/dashboard");
    // return <Link href="/dashboard"></Link>;
    // return true;
  } else {
    alert("Invalid username or password. Please try again.");
  }
};
function LoginCard() {
  // Dynamically changing name functionality
  const [username, setUsername] = useState("");
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <>
      <div className="right-section flex flex-1 items-center justify-center">
        <div className="login-card z-10 flex h-auto w-auto flex-col gap-16 bg-slate-100 p-9 rounded-lg">
          <div className="header flex justify-center">
            <img
              src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif"
              alt="wave-handshake"
              className="mr-2 h-9 w-auto"
            />
            <h1 className="from-pink-500 to-violet-500 text-2xl font-extrabold text-black ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:transition">
              Welcome {username}{" "}
            </h1>
          </div>
          <div className="auth flex  flex-col gap-8">
            <div className="input-forms w-96 flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Enter Your Name:
              </label>
              <input
                type="text"
                onChange={handleChange}
                required="true"
                placeholder="Sohail Ahamed"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm "
              />
              <div className="flex">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <FaEnvelope className="faDuoTone ml-2 mt-0.5 text-[18px] text-pink-500" />
              </div>
              <input
                id="username"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="text"
                placeholder="name@ruce.ac.in"
              />
              <div className="flex">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <FaLock className="ml-2 mt-0.5 text-[18px] text-pink-500" />
              </div>
              <input
                id="password"
                className=" block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="password"
                placeholder="•••••••"
              />
            </div>
            <div className="login-btn flex flex-col bg-slate-100">
              <button
                onClick={checkAuth}
                className="rounded-md border-2 bg-pink-500 p-2 font-semibold tracking-wider text-white duration-300 ease-in-out hover:border-2 hover:border-pink-500 hover:bg-white hover:text-black  hover:transition "
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
