import React from 'react'

export default function Myinfo() {
  return (
    <>
      <div className="w-full min-h-screen  bg-gradient-to-tl from-white-500 via-[rgb(192,149,239)] to-[rgb(192,149,239)] ">
        <div className="w-full h-[100dvh]  flex flex-col  md:flex-row ">
          <div className="  md:h-[100dvh] md:w-1/2  w-full h-3/4 flex flex-col  items-center justify-center ">
            <div className="md:h-[60dvh] h-1/2 w-3/4 flex flex-col md:mt-30 ">
              <h1 className="md:text-3xl text-xl  font-bold">
                HEY! <br /> I AM MERNSTACK DEVELOPER
              </h1>
              <p className="md:text-lg text-sm">
                a passionate web developer creating reponsive
                <br /> and modren web experiences. I specialize in <br />
                React, Tailwind, CSS, and building user-friendly
                <br /> interfaces.
              </p>
            </div>
            <div className="h-1/3 w-full">
              <div className="  md:text-xl text-sm md:h-[10dvh] h-[10dvh] w-full text-white  grid grid-cols-3 gap-1 md:px-15  px-10">
                <dv className=" flex justify-center items-center  bg-[rgb(172,129,239)]  border  border-solid border-1">
                  experience
                </dv>
                <div className=" flex justify-center items-center border  border-solid border-1 bg-[rgb(172,129,239)]">
                  project
                </div>
                <div className=" flex justify-center items-center border border-rounded border-white border-solid border-1 bg-[rgb(172,129,239)] ">
                  happy clients
                </div>
              </div>
            </div>
          </div>
          <div className=" md:h-[100dvh] md:w-1/2 w-full h-1/3 flex items-center md:justify-start justify-center">
            <div className=" ml-10 md:h-[60dvh] h-[35dvh] w-[35dvh]  md:w-[60dvh] flex items-center justify-center border  border-none rounded-full  bg-gradient-to-tr from-[rgb(61,53,68)] to[rgba(198,252,216,1)]">
              <div className="md:h-[55dvh] md:w-[55dvh]  h-[33dvh] w-[33dvh] bg-gradient-to-b from-[rgba(193,142,232,1)] via-[rgba(193,142,232,1)] to-[rgba(218,210,234,1)] border border-none rounded-full flex items-center justify-center">
                <div className="md:h-[50dvh] md:w-[50dvh] h-[30dvh] w-[30dvh] flex items-center justify-center border rounded-full border-dashed  border-2 border-purple-400">
                  <div className="bg-[rgba(164,118,212,1)] md:h-[40dvh] md:w-[40dvh] h-[25dvh] w-[25dvh] brder rounded-full">
                    <img
                      className="md:h-[40dvh] md:w-[40dvh] h-[25dvh] w-[25dvh] brder rounded-full  "
                      src="/assets/images2.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


