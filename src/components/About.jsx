import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub} from "react-icons/fa";
import { SiX } from "react-icons/si";
export default function Myinfo() {
  return (
    <>
      <div className="w-full  min-h-screen  flex flex-col  overscroll-x-none overflow-x-hidden bg-black/95  ">
        <div className="w-full lg:h-[80dvh] md:h-[70dvh] h-[75dvh] flex flex-col gap-2 lg:flex-row  text-white ">
          <div className="  lg:w-1/2  w-full   md:h-3/4 flex flex-col  ml-5 lg:ml-10 md:justify-center mt-10">
            <div className="lg:h-[60dvh] h-1/2 md:w-3/4 w-5/6  flex flex-col mb-5 lg:mt-30">
              <h1 className="md:text-4xl lg:text-3xl  text-md text-xl  font-bold">
                HEY!
                <span className="text-purple-800 md:text-4xl  lg:text-3xl text-2xl">
                  {" "}
                  I AM MERNSTACK{" "}
                </span>
                DEVELOPER
              </h1>
              <p className="lg:text-lg md:text-xl  text-gray-300 text-sm mt-1">
                a passionate web developer creating reponsive and modren web
                experiences. I specialize in React, Tailwind, CSS, and building
                user-friendly interfaces.
              </p>

              <div className="w-full py-4  grid border-t  border-gray-700 mt-10 gap-4 grid-cols-1  text-white">
                <div className=" w-full flex  flex-col  ">
                  <div className="    flex rounded ">
                    <div className="h-15 w-15  text-purple-800 border-t border-l bg-[#202020] rounded-lg border-gray-600 p-4">
                      <FaEnvelope size={28} />
                    </div>

                    <h1 className="py-1 px-3 text-sm font-semibold flex flex-col">
                      <span className="text-gray-500 font-semibold mb-1">
                        EMAIL
                      </span>
                      khadijazafar2511@gmail.com
                    </h1>
                  </div>
                </div>
                <div className="h-1/3  w-full flex flex-col ">
                  <div className="  rounded-lg flex ">
                    <div className="h-15 w-15  text-purple-800 border-t border-l bg-[#202020] rounded-lg border-gray-600 p-4">
                      <FaPhoneAlt size={28} />
                    </div>
                    <h1 className="py-1 px-3 font-semibold flex flex-col">
                      <span className="text-gray-500 font-semibold  text-sm mb-1">
                        PHONE NO
                      </span>
                      +92 (344) 6680619
                    </h1>
                  </div>
                </div>
                <div className="h-1/3  w-full flex flex-col">
                  <div className="  rounded flex ">
                    <div className="h-15 w-15  text-purple-800 border-t border-l bg-[#202020] rounded-lg border-gray-600 p-4">
                      <FaMapMarkerAlt size={28} />
                    </div>
                    <h1 className="py-1 px-3 font-semibold flex flex-col">
                      <span className="text-gray-500 font-semibold  text-sm mb-1">
                        LOCATION
                      </span>
                      Sahiwal, Punjab
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 ml-17 mt-2 text-gray-400 ">
                <div>< FaLinkedin size={18} /></div>
                <div><FaGithub size={18} /></div>
                <div><SiX size={18}/></div>
              </div>
            </div>
          </div>

          <div className="lg:h-full lg:w-1/2 w-full h-1/3 md:h-2/3 flex md:mt-25 mt-5  lg:justify-start justify-center">
            <div className="lg:h-[55dvh] lg:w-[55dvh]  h-[33dvh] w-[33dvh]  border border-none rounded-full flex items-center justify-center">
              <div className="lg:h-[50dvh] lg:w-[50dvh] h-[30dvh] w-[30dvh] flex items-center justify-center  rounded-full border-dashed  border-2 border-purple-500">
                <div className="bg-[#202020] lg:h-[40dvh] lg:w-[40dvh] h-[25dvh] w-[25dvh] border border-gray-700 rounded-full">
                  <img
                    className="lg:h-[40dvh] lg:w-[40dvh] h-[25dvh] w-[25dvh] brder rounded-full  "
                    src="/assets/images2.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





