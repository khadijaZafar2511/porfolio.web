import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TbCircleLetterK, TbSquareLetterK, TbLetterK } from "react-icons/tb";
import { LuKey } from "react-icons/lu";
export default function Navbar() {
    const { pathname } = useLocation();
    return (
      <>
        <nav>
          <div className="w-full h-16 bg-[#202020] border-b border-gray-700  overflow-x-hidden overscroll-x-none flex">
            {/* div one content */}

            <div className="lg:w-1/2  lg:flex hidden h-full gap-5 items-center font-bold">
              <div className="h-9 w-9 md:ml-20  text-purple-800">
              
                <  TbLetterK strokeWidth={4} size={38}  />
              </div>
              <h1 className="  text-gray-100  font-semibold tracking-normal text-2xl ">
                Khadija Zafar
              </h1>
            </div>

            {/* route content */}

            <div className="lg:w-1/2 w-full flex items-center justify-center  md:gap-15 md:text-lg text-sm gap-5  text-gray-200  font-semibold  h-full  ">
              <Link
                to="/"
                className={
                  pathname === "/" ? "text-purple-800" : "text-gray-300"
                }
                aria-current="page"
              >
                About
              </Link>
              <Link
                href="/resume"
                className={
                  pathname === "/resume" ? "text-purple-800 " : "text-gray-300"
                }
                to="/resume"
              >
                Resume
              </Link>
              <Link
                className={
                  pathname === "/skills" ? "text-purple-800" : "text-gray-300"
                }
                to="/skills"
              >
                Skills
              </Link>
              <Link
                className={
                  pathname === "/projects" ? "text-purple-800" : "text-gray-300"
                }
                to="/projects"
              >
                Projects
              </Link>

              <button className="md:py-3 md:px-5  py-2 px-3 rounded font-bold bg-purple-800 text-white text-base ">
                <a href="">Contact</a>
              </button>
            </div>
          </div>
        </nav>
      </>
    );
        }
