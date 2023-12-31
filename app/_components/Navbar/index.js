"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleMenu = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className=" z-10 w-full bg-blue-500  relative">
      <div className="flex justify-between items-center h-20 container m-auto px-4">
        <div>
          <a href="/" className=" text-white font-bold text-2xl">
            Basketball
          </a>
        </div>
        <div className="space-x-4 lg:flex hidden">
          <Link
            href="/players"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Players
          </Link>
          <Link
            href="/teams"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Teams
          </Link>
          <Link
            href="/games"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Games
          </Link>
        </div>
        <FaBarsStaggered
          className="lg:hidden text-2xl text-black cursor-pointer "
          onClick={toggleMenu}
        />
        {toggleBtn && (
          <div className="bg-black text-white flex flex-col w-full h-full fixed top-20 right-0 py-1 z-10">
            <h1 className=" text-white font-bold text-2xl">NBA</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
