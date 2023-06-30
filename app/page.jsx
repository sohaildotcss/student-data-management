"use client";
import Image from "next/image";
import logo from "./images/logo.png";
import { useState } from "react";
import "./globals.css";

// Authentication functionality
function Home() {
  const checkAuth = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "1" && password === "1") {
      window.open("https://heliums.netlify.app/dashboard");
      // return <Link href="/dashboard">Dashboard</Link>;
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  // Dynamically changing name functionality
  const [username, setUsername] = useState("");
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <body>
      <div className=" card flex w-full h-full ">
        <div className=" left-section  bg-no-repeat bg-fixed flex flex-1 justify-center items-center">
          <div className="l-section-wrap z-10 backdrop-blur-sm  flex justify-center items-center flex-col h-[500px] w-[500px] ">
            <Image className="w-auto h-[20rem]" src={logo} />
            <h1 className="text-2xl font-extrabold text-black hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:transition ease-in-out  duration-300">
              Rayalaseema University <br /> College of Engineering
            </h1>
          </div>
        </div>
        <div className="right-section flex flex-1  justify-center items-center">
          <div className="login-card z-10 bg-slate-100 flex flex-col gap-16  h-auto w-auto  p-9">
            <div className="header flex justify-center">
              <img
                src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif"
                alt="wave-handshake"
                className="mr-2 h-9 w-auto"
              />
              <h1 className="font-extrabold text-2xl text-black hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:transition ease-in-out">
                Welcome {username}{" "}
              </h1>
            </div>
            <div className="auth flex flex-col gap-8 w-96">
              <div className="input-forms flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Enter Your Name:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  required="true"
                  placeholder="Sohail Ahamed"
                  className="  placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all "
                />
                <label htmlFor="email" className="font-semibold">
                  Email:
                </label>
                <input
                  id="username"
                  className=" placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                  type="text"
                  placeholder="name@ruce.ac.in"
                />
                <label htmlFor="password" className="font-semibold">
                  Password:
                </label>
                <input
                  id="password"
                  className=" placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                  type="password"
                  placeholder="•••••••"
                />
              </div>
              <div className="login-btn bg-slate-100 flex flex-col">
                <button
                  onClick={checkAuth}
                  className="text-slate-200 p-2 font-semibold border-2 rounded-md bg-pink-500 tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-pink-500 hover:transition ease-in-out  duration-300 "
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
