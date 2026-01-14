import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Navbar() {
    return (
      <>
        <nav className="w-full  py-2 bg-gray-50 relative z-10 ">
          <div className=" flex  font-medium text-sm md:text-base px-5 md:px-2  gap-4 md:gap-9">
            <img className="h-[4svh] md:ml-20 " src="/assets/k.png"></img>
            <h1 className=" mr-0 md:mr-130 text-purple-900  font-bold hidden lg:block">
              khadija Zafar
            </h1>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Service</Link>
            <Link to="/">Portfolio</Link>
            <Link to="/">Blog</Link>
            <button className="md:h-[5svh] h-[3svh] md:w-[7svw] rounded bg-purple-500 text-white text-base">
              <a href="">Contact</a>
            </button>
          </div>
        </nav>
        </>
        )
        }
