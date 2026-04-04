import React from 'react'

export default function Myinfo() {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden overscroll-x-none ">
        <div className="w-full h-dvh  flex flex-col  md:flex-row bg-black text-white ">
          <div className="  md:w-1/2  w-full h-1/2 md:h-3/4 flex flex-col  ml-5 md:ml-10 justify-center">
            <div className="md:h-[60dvh] h-1/2 w-3/4 flex flex-col md:mt-30">
              <h1 className="md:text-3xl text-md text-xl  font-bold">
                HEY!
                <span className="text-purple-800 md:text-3xl text-2xl">
                  {" "}
                  I AM MERNSTACK{" "}
                </span>
                DEVELOPER
              </h1>
              <p className="md:text-lg text-sm mt-1">
                a passionate web developer creating reponsive and modren web
                experiences. I specialize in React, Tailwind, CSS, and building
                user-friendly interfaces.
              </p>
              <botton className="p-4 font-bold rounded-md border-none bg-purple-800 border text-white text-base lg:mt-10 mt-4 flex items-center justify-center lg:text-xl text-sm">
                SAY HELLO!
              </botton>
            </div>
            {/* <div className="h-1/4 w-full"> */}
            {/* <div1 className=" hidden md:block md:text-xl text-sm lg:h-[10dvh] h-[10dvh] w-full text-white  grid grid-cols-3 gap-1 md:px-15  px-8 lg:mt-1 mt-5">
                <dv className=" flex justify-center items-center  bg-[rgb(172,129,239)]  border ">
                  experience
                </dv>
                <div className=" flex justify-center items-center border   bg-[rgb(172,129,239)] ">
                  project
                </div>
                <div className=" flex justify-center items-center border   bg-[rgb(172,129,239)]  ">
                  happy clients
                </div>
              </div1> */}
            {/* </div> */}
          </div>
          {/* <div className=" md:h-[100dvh] md:w-1/2 w-full h-1/3 flex items-center md:justify-start justify-center">
            <div className=" ml-10 md:h-[60dvh] h-[35dvh] w-[35dvh]  md:w-[60dvh] flex items-center justify-center border  border-none rounded-full bg-purple-800"> */}
          <div className="md:h-dvh md:w-1/2 w-full h-1/3 flex md:mt-25 mt-5  md:justify-start justify-center">
            <div1 className="md:h-[55dvh] md:w-[55dvh]  h-[33dvh] w-[33dvh]  border border-none rounded-full flex items-center justify-center">
              <div className="md:h-[50dvh] md:w-[50dvh] h-[30dvh] w-[30dvh] flex items-center justify-center  rounded-full border-dashed  border-2 border-purple-400">
                <div className="bg-purple-800 md:h-[40dvh] md:w-[40dvh] h-[25dvh] w-[25dvh] brder rounded-full">
                  <img
                    className="md:h-[40dvh] md:w-[40dvh] h-[25dvh] w-[25dvh] brder rounded-full  "
                    src="/assets/images2.png"
                  ></img>
                </div>
              </div>
            </div1>
          </div>
        </div>
        {/* </div>
        </div> */}
        <div className="w-full h-[40dvh] bg-gray-800 grid lg:grid-cols-3  md:grid-cols-2 text-white">
          <div className="h-1/3 w-full flex flex-col">
            <h1 className="text-2xl font-bold">Contact me</h1>
            <h1>malikzafar0982@gmail.com</h1>
            <h1>03446680619</h1>
          </div>
          <div className="h-1/3 w-full ">
            <h1>Visit Me</h1>
            <h1>Chak No 118/9-l, District Sahiwal</h1>
          </div>
          <div className="h-1/3 w-full">
            <h1>Connect With Me</h1>
          </div>
        </div>
      </div>
    </>
  );
}


