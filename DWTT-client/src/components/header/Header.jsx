import React from "react";
import styles from "./header.module.css";
import { RiHome9Line } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { TbMapPinSearch } from "react-icons/tb";
import Container from "../Container";

export default function Header() {
  console.log(styles);
  return (
    <>
      <header className={`${styles.header} h-[40vh]`}>
        <Container styles={`w-full md:w-[90%] lg:w-[90%] mx-auto relative ${styles.wrapper} rounded-3xl h-14 mt-2`}>
            {/* header Navbar */}
          <div className="flex items-center justify-between">
            {/*  header logo & title */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/header_logo.svg"
                alt="Logo"
                className=" h-14 object-cover p-1"
              />
              <NavLink>
                <h1 className="text-2xl font-normal italic">
                  <span className="text-fuchsia-400">Dev</span>
                  <span className="text-orange-300"> Travellers</span>
                </h1>
              </NavLink>
            </div>
            {/* navigation */}
            <nav className="hidden md:flex gap-4 mr-2 items-center text-sm">
              <NavLink to="/" className="hover:text-gray-300 inline-flex justify-center items-center">
                <RiHome9Line size={20} className="text-gray-300" /> <span className="pl-1"> Home</span>
              </NavLink>

              <NavLink to="/about" className="hover:text-gray-300">
                About
              </NavLink>

              <NavLink to="/about" className="hover:text-gray-300">
                Plan & Packages
              </NavLink>

              <NavLink to="/sign-in" className="hover:text-fuchsia-400">
                <Button variant="outline" className="bg-transparent hover:bg-slate-900 hover:border-slate-800 hover:text-gray-200 border-gray-400 shadow-md"> Sign in <IoIosLogIn size={20} /> </Button>
              </NavLink>

              <NavLink className="hover:text-gray-300 font-normal" to={"/sign-up"}>
                <Button variant="outline" className="bg-gradient-to-r from-sky-500 to-indigo-500  hover:bg-gradient-to-l hover:from-sky-500 hover:to-indigo-500 transition-all duration-500 ease-in-out"> Sign up </Button>
              </NavLink>
            </nav>
          </div>

          {/* header context */}
          <div className="flex flex-col justify-center items-center text-center py-2 mt-6 z-40">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal text-white">
              {" "}
              Explore the World
            </h1>
            <p className="text-gray-200 mt-4 italic text-sm md:text-md lg:text-lg font-normal">
              “Fall in love with the journey — not just the destination. Let us
              take you there, beautifully.”
            </p>

            {/* searchBar */}
            <div className="flex items-center justify-center gap-4 mt-[2.5rem] bg-gray-200 border-1 border-green-400 px-2 w-10 h-10 rounded-[100px] shadow-md hover:justify-start hover:w-[25%] transition-all ease-in duration-[.2s] hover:delay-75 text-black group search-bar">
              <TbMapPinSearch size={24} className="text-green-600" />
              <div className="w-full h-full hidden group-hover:flex group-hover:items-center">
                <input
                  type="text"
                  placeholder="Search for a destination"
                  className="bg-transparent text-black outline-none border-none px-2 py-1 focus:border-none focus:outline-none focus:ring-0 text-sm w-full placeholder:text-slate-600"
                />
              </div>
            </div>
          </div>

          {/* Todo: if needs */}
        </Container>
      </header>
    </>
  );
}

