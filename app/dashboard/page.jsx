"use client";
import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import "./style.css";

import instagram from "../images/insta.svg";

function Home() {
  return (
    <body>
      <div className="navbar flex shadow-md rounded-t-none rounded-lg left-1/3  justify-center gap-8 w-[620px] h-[70px] sticky top-0">
        <div className="logo flex items-center">
          <Image className="h-10 w-auto" src={logo} alt="RU" />
          <h1 className="text-red-500 text-lg font-bold ml-2">
            <a href=""></a> RUCE
          </h1>
        </div>
        <div className="content  font-semibold flex items-center gap-5">
          <a
            href="#student-details"
            className=" text-black  p-2 rounded-md hover:bg-[#dce6e7] transition ease-in-out duration-300 "
          >
            Student Details
          </a>
          <a
            href="#student-performance"
            className=" text-black p-2 rounded-md hover:bg-[#dce6e7] transition ease-in-out duration-300 "
          >
            Student Performance
          </a>
          <a
            href="#parent-details"
            className="  text-black p-2 rounded-md hover:bg-[#dce6e7] transition ease-in-out duration-300 "
          >
            Parent Details
          </a>
        </div>
      </div>
      <div className="hero">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
        >
          <input type="hidden" name="oid" value="00D2w00000RpmMA" />
          <input
            type="hidden"
            name="retURL"
            value="http://login.salesforce.com"
          />
          <div className="student-details-form flex flex-col items-center mt-14">
            <div className="form-header ">
              <h1
                id="student-details"
                className="underline mb-6 text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
              >
                Student details
              </h1>
            </div>
            <div className="form-details flex gap-60">
              <div className="wrap flex flex-col gap-3 w-96">
                <label htmlFor="salutation">Salutation:- </label>
                <select
                  id="salutation"
                  name="salutation"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                >
                  <option value="">--None--</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Prof.">Prof.</option>
                </select>

                <label htmlFor="first_name">First Name:- </label>
                <input
                  id="first_name"
                  maxlength="40"
                  name="first_name"
                  size="20"
                  type="text"
                  placeholder="Sohail"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="last_name">Last Name:- </label>
                <input
                  id="last_name"
                  maxlength="80"
                  name="last_name"
                  size="20"
                  type="text"
                  placeholder="Ahamed"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="branch">Branch:- </label>
                <input
                  id="00N2w00000aY2Dn"
                  maxlength="30"
                  name="00N2w00000aY2Dn"
                  size="20"
                  type="text"
                  placeholder="Computer Science & Engineering"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
                <label htmlFor="roll-no"> Roll No:- </label>
                <input
                  id="00N2w00000aY2E2"
                  maxlength="10"
                  name="00N2w00000aY2E2"
                  size="20"
                  type="text"
                  placeholder="19RU1A0XXX"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="gender">Gender:-</label>
                <select
                  id="00N2w00000aY2EH"
                  name="00N2w00000aY2EH"
                  title="Gender"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                >
                  <option value="">--None--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>

                <label htmlFor="phone">Phone:- </label>
                <input
                  id="phone"
                  maxlength="40"
                  name="phone"
                  size="20"
                  type="text"
                  placeholder="91XXXXXXXX"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="email">Email:- </label>
                <input
                  id="email"
                  maxlength="80"
                  name="email"
                  size="20"
                  type="text"
                  placeholder="name@example.com"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
                <label htmlFor="ssc-marks">
                  SSC Marks/ Percentage / G.P.A:-
                </label>
                <input
                  id="00N2w00000aY2EW"
                  name="00N2w00000aY2EW"
                  size="20"
                  type="text"
                  placeholder="540 / 97% / 9.7"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
              </div>
              <div className="wrap flex flex-col gap-3 w-96">
                <label htmlFor="+2marks">Inter/Diploma Marks:-</label>
                <input
                  id="00N2w00000aY2Eb"
                  name="00N2w00000aY2Eb"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
                <label htmlFor="joining-date">Student Joining Date:-</label>
                <span className="dateInput dateOnlyInput">
                  <input
                    id="00N2w00000aY2El"
                    name="00N2w00000aY2El"
                    size="12"
                    type="text"
                    placeholder="01/09/2019"
                    className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                  />
                </span>

                <label htmlFor="passout-date">Student Passedout Date:-</label>

                <span className="dateInput dateOnlyInput">
                  <input
                    id="00N2w00000aY2Gm"
                    name="00N2w00000aY2Gm"
                    size="12"
                    type="text"
                    placeholder="01/09/2019"
                    className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                  />
                </span>

                <label htmlFor="street">Street:- </label>
                <textarea
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                  id="street"
                  name="street"
                  type="text"
                ></textarea>

                <label htmlFor="city">City:- </label>
                <input
                  id="city"
                  maxlength="40"
                  name="city"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="zip">Zip/Postal Code:- </label>
                <input
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                  id="zip"
                  maxlength="20"
                  name="zip"
                  size="20"
                  type="text"
                />

                <label htmlFor="state">State/Province:- </label>
                <input
                  id="state"
                  maxlength="20"
                  name="state"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="country">Country:- </label>
                <input
                  id="country"
                  maxlength="40"
                  name="country"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
              </div>
            </div>
          </div>
          <div className="student-performance-form flex flex-col items-center mt-14">
            <div className="form-header">
              <h1
                id="student-performance"
                className="underline mb-6 text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
              >
                Student Performance
              </h1>
            </div>
            <div className="form-details flex gap-60">
              <div className="wrap flex flex-col gap-3 w-96">
                <label htmlFor="college-website">College Website:-</label>
                <input
                  id="00N2w00000aY2F5"
                  maxlength="255"
                  name="00N2w00000aY2F5"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="about-student">About Student:-</label>
                <textarea
                  id="00N2w00000aY2FF"
                  name="00N2w00000aY2FF"
                  type="text"
                  wrap="soft"
                  placeholder="Good / Bad"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                ></textarea>

                <label htmlFor="sem-1">Semester 1:-</label>
                <input
                  id="00N2w00000aY2FK"
                  name="00N2w00000aY2FK"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="sem-2">Semester 2:-</label>
                <input
                  id="00N2w00000aY2FP"
                  name="00N2w00000aY2FP"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="sem-3">Semester 3:-</label>
                <input
                  id="00N2w00000aY2Fe"
                  name="00N2w00000aY2Fe"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="sem-4">Semester 4:-</label>
                <input
                  id="00N2w00000aY2Ft"
                  name="00N2w00000aY2Ft"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
              </div>
              <div className="wrap flex flex-col gap-3 w-96">
                <label htmlFor="sem-5">Semester 5:-</label>
                <input
                  id="00N2w00000aY2Fo"
                  name="00N2w00000aY2Fo"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="sem-6">Semester 6:-</label>
                <input
                  id="00N2w00000aY2G8"
                  name="00N2w00000aY2G8"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="sem-7">Semester 7:-</label>
                <input
                  id="00N2w00000aY2GD"
                  name="00N2w00000aY2GD"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="sem-8">Semester 8:-</label>
                <input
                  id="00N2w00000aY2GN"
                  name="00N2w00000aY2GN"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="btech-marks">B.Tech Marks:-</label>
                <input
                  id="00N2w00000aYbjt"
                  name="00N2w00000aYbjt"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="backlogs">Backlogs in all Semesters:-</label>
                <input
                  id="00N2w00000aYbjjEAC"
                  name="00N2w00000aYbjjEAC"
                  rows="25"
                  type="text"
                  wrap="soft"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
              </div>
            </div>
          </div>
          <div className="parent-details-form flex flex-col items-center mt-14">
            <div className="form-header">
              <h1
                id="parent-details"
                className="underline mb-6 text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
              >
                Parent Details
              </h1>
            </div>
            <div className="form-details flex gap-60">
              <div className="wrap flex flex-col gap-3 w-96">
                <label htmlFor="parent-name">Parent Name:-</label>
                <input
                  id="00N2w00000aY2GS"
                  maxlength="30"
                  name="00N2w00000aY2GS"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="parent-pn-num">Parent Phone Number:-</label>
                <input
                  id="00N2w00000aY2GX"
                  maxlength="40"
                  name="00N2w00000aY2GX"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />

                <label htmlFor="parent-email">Parent Email Address:-</label>
                <input
                  id="00N2w00000aY2Gc"
                  maxlength="80"
                  name="00N2w00000aY2Gc"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
                <label htmlFor="parent-occupation">Parent Occupation:-</label>
                <input
                  id="00N2w00000aY2Gc"
                  maxlength="80"
                  name="00N2w00000aY2Gc"
                  size="20"
                  type="text"
                  className="placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm placeholder:opacity-0 placeholder:hover:opacity-100 placeholder:transition-all"
                />
              </div>
            </div>
          </div>
          <div className="submit flex items-center justify-center mt-8 mb-6">
            <button
              type="submit"
              name="submit"
              className="text-slate-200  p-2 font-semibold border-2 rounded-md bg-pink-500 tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-pink-500 hover:transition ease-in-out  duration-300 "
            >
              SUBMIT
            </button>
          </div>
        </form>
        <footer className="bg-[#1d1d1f] text-white h-20 flex justify-evenly items-center ">
          <div className="footer-heading ">
            <h1 className="text-white font-bold">
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
      </div>

    </body>
  );
}

export default Home;
