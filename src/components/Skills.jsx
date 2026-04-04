import React from 'react'

export default function skills() {
    return (
      <>
        <div className="w-full h-screen bg-black flex items-center justify-center overflow-y-scroll ">
          <div className="md:w-3/4 w-10/11 h-20/21  flex flex-col items-center border border-gray-400 rounded-2xl   shadow-[0_0_3px_rgba(255,255,255,0.3)]  ">
            <div className="w-full h-[25dvh]  rounded-t-2xl flex flex-col px-2 items-center border border-gray-400 text-gray-200 ">
              <h1 className=" md:text-3xl md:font-bold text-purple-800 text-2xl font-semibold md:mt-3">
                What I do
              </h1>
              <p className="md:text-sm text-[13px] md:font-base   font-base">
                I am a Full Stack WebDeveloper skilled in HTML, CSS, JAVASCRIPT,
                and modren frameworks like REACT. I build scalable backened
                solutions using NODE.JS, EXPRESS.JS , MONGODB and folloe best
                practises with GIT & GITHUB.
              </p>
            </div>
            <div className=" md:w-3/4 w-full h-4/5  md:text-lg text-[11px] text-gray-200  font-semibold  shadow-2xl shadow-gray-900">
              <div className="w-full h-1/2 grid md:grid-cols-4 grid-cols-2  gap-3 lg:gap-4 lg:px-18 md:py-4 py-2 px-7 ">
                <div className=" transition duration-300 hover:scale-110   border rounded-2xl md:rounded-4xl border-gray-400  bg-black  flex items-center justify-center flex-col">
                  <img
                    className="md:h-[10dvh] h-[8dvh] object-contain "
                    src="/assets/css.png"
                  ></img>
                  CSS
                </div>
                <div className=" transition duration-300   hover:scale-110 border   rounded-2xl md:rounded-4xl border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className=" h-[9dvh] md:h-[10dvh]"
                    src="/assets/html.png"
                  ></img>
                  HTML
                </div>
                <div className=" transition duration-300 hover:scale-110 hover:shadow-xl border  rounded-2xl md:rounded-4xl   border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/java.png"
                  ></img>
                  JAVASCRIPT
                </div>
                <div className=" transition duration-300 hover:scale-110 hover:shadow-xl border  rounded-2xl md:rounded-4xl  border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/github.png"
                  ></img>
                  GITHUB
                </div>
              </div>
              <div className="w-full h-1/2 grid md:grid-cols-4 grid-cols-2 gap-3 lg:gap-4 lg:px-18 md:py-4 py-2 px-7 ">
                <div className=" transition duration-300 hover:scale-110 hover:shadow-xl border  rounded-2xl md:rounded-4xl  border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh] "
                    src="/assets/mongodb.png"
                  ></img>
                  MONGO DB
                </div>
                <div className=" transition duration-300 hover:scale-110 hover:shadow-xl border rounded-2xl md:rounded-4xl  border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/expressjs.png"
                  ></img>
                  EXPRESS.JS
                </div>
                <div className=" transition duration-300 hover:scale-110 hover:shadow-xl border  rounded-2xl md:rounded-4xl  border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/react.png"
                  ></img>
                  REACT.JS
                </div>
                <div className=" transition duration-300 hover:scale-110 hover:shadow-xl border rounded-2xl md:rounded-4xl   border-gray-400  bg-black flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/next.png"
                  ></img>
                  NEXT.JS
                </div>
              </div>
            </div>
            <div className="w-full h-[10dvh] md:h-[15dvh]  border border-gray-400 rounded-b-2xl ">
              <h1 className=" md:text-3xl md:font-bold  text-purple-800 text-2xl font-semibold mt-3 flex justify-center">
                SKILLS
              </h1>
            </div>
          </div>
        </div>
      </>
    );
}
