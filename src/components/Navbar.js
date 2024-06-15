"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

import logo from "./../../public/newlogomeera.png"
export default function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const goDonate = () => {
    router.push("/donate");
  };

  return (
    <>
      <div className="  lg:hidden   absolute right-6 top-5 ">
        <FontAwesomeIcon
          icon={faBars}
          className="bold  text-black cursor-pointer font-bold text-2xl max-lg:mt-2 transition-transform duration-2000 transform hover:scale-110"
          onClick={toggleMenu}
        />
      </div>

      <nav className=" max-lg:overflow-x-hidden flex items-center justify-between h-20 w-screen px-8 bg-white max-lg:flex-col max-lg:z-10">



        <div className="relative max-md:absolute max-md:h-[75px] max-md:w-[200px]  max-md:left-6 max-md:top-1 lg:mr-10 max-lg:absolute max-lg:h-[75px] max-lg:w-[250px] max-lg:left-[16px] max-lg:top-1 
       lg:h-[80px] lg:w-[300px] lg:left-[10px] lg:top-0 lg:bottom-[150px]
      
      ">
          <Image

            src={logo}
            fill={true}
            alt="Logo"
          />
        </div>


        <div
          className={`lg:w-9/12 lg:h-screen lg:absolute lg:z-10 lg:left-0 lg:top-20 transition-transform duration-500 ease-in-out transform ${isOpen ? "lg:translate-x-250" : "lg:-translate-x-full"
            } px-4 py-2 lg:block`}
        >
          {/* Your content */}
        </div>

        <div
          className={` max-lg:w-9/12 max-lg:h-screen max-lg:absolute max-lg:z-10  max-lg:left-0 max-lg:top-20  transition-transform duration-200 ease-in-out transform ${isOpen ? "max-lg:translate-x-300" : "max-lg:-translate-x-full"
            }  px-4 py-2  ${isOpen ? "" : "opacity-none lg:block"}`}
        >


          <ul
            className={` flex flex-row w-auto text-center  justify-evenly  w-96 max-lg:flex-col max-lg:bg-gradient-to-br from-white to-[#27AB61] max-lg:absolute max-lg:left-0 max-lg:top-12 max-lg:pt-16 max-lg:w-64 max-lg:h-screen max-lg:justify-normal max-lg:text-left transition-transform duration-200 ease-in-out transform max-lg:z-10 ${isOpen ? "max-lg:translate-x-300" : "max-lg:-translate-x-full"
              }  px-0 py-2 rounded-r-lg ${isOpen ? "" : "max-lg:none lg:block"}`}
          >



            <FontAwesomeIcon
              icon={faClose}
              className="bold text-black cursor-pointer font-bold text-2xl lg:hidden  p-2 rounded-md absolute right-1 top-1  transition-transform duration-300 transform hover:scale-110"
              onClick={toggleMenu}
            />



            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black  ">
              <Link className="font-tittle max-lg:font-semibold font-[420] max-lg:active:bg-white max-lg:active:text-[#27AB61] max-lg:p-2 rounded active:text-[#27AB61] " href="/">Home</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle max-lg:font-semibold font-[420] max-lg:active:bg-white max-lg:active:text-[#27AB61] max-lg:p-2 rounded active:text-[#27AB61]" href="/ourmission">Our Mission</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle max-lg:font-semibold  font-[420] max-lg:active:bg-white max-lg:active:text-[#27AB61] max-lg:p-2 rounded active:text-[#27AB61]" href="/whatwedo">What We Do</Link>
            </li>
            {/* <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle " href="/donate">Donate</Link>
            </li> */}
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle max-lg:font-semibold font-[420] max-lg:active:bg-white max-lg:active:text-[#27AB61] max-lg:p-2 rounded active:text-[#27AB61]" href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div
          className={`  w-auto max-lg:mt-56  max-lg:absolute max-lg:top-[180px] max-lg:z-10 max-lg:left-4 transition-transform duration-200 ease-in-out transform ${isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
            }  px-20 py-2 rounded-lg ${isOpen ? "" : "opacity-none lg:block"}`}
        >
          <button
            className="text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 font-[420] "
            onClick={goDonate}
          >
            Donate
          </button>
        
        </div>
      </nav>
    </>
  );
}
