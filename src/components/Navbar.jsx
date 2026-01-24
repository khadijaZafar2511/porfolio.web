import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Navbar() {
    return (
      <>
        <nav
          className="w-full overflow-x-hidden h-13 bg-gray-50 sticky top-0 z-10 transition duration-300 "
       
        >
          <div className=" flex items-center font-medium md:text-normal font-bold px-5 md:px-2  gap-8 md:gap-5 ">
            <img className="h-[4svh] md:ml-20 " src="/assets/k.png"></img>
            <h1 className=" mr-0 md:mr-100 text-purple-800 flex font-bold  text-xl hidden lg:block">
              khadija Zafar
            </h1>

            <Link
              to="/"
              className="flex  h-[7dvh] w-[6dvw] items-center justify-center rounded-md hover:border hover:border-purple-500 hover:border-t-3 hover:border-b-3 transition duration-300 ease-in-out text-base"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="flex  h-[7dvh] w-[6dvw] items-center justify-center rounded-md hover:border  hover:border-purple-500 hover:border-t-3 hover:border-b-3 transition duration-300 ease-in-out text-base"
              aria-current="page"
              to="/about"
            >
              About
            </Link>
            <Link
              className="flex  h-[7dvh] w-[6dvw] items-center justify-center rounded-md hover:border  hover:border-purple-500 hover:border-t-3 hover:border-b-3 transition duration-300 ease-in-out text-base"
              aria-current="page"
              to="/services"
            >
              Service
            </Link>
            <Link
              className="flex  h-[7dvh] w-[6dvw] items-center justify-center rounded-md hover:border  hover:border-purple-500 hover:border-t-3 hover:border-b-3 transition duration-300 ease-in-out text-base"
              aria-current="page"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="flex  h-[7dvh] w-[6dvw] items-center justify-center rounded-md hover:border  hover:border-purple-500 hover:border-t-3 hover:border-b-3 transition duration-300 ease-in-out text-base"
              aria-current="page"
              to="/"
            >
              Blog
            </Link>

            <button className="md:h-[5svh] h-[3svh] md:w-[7svw] rounded bg-purple-400 text-white text-base ">
              <a href="">Contact</a>
            </button>
          </div>
        </nav>
      </>
    );
        }
