import React from 'react'

export default function skills() {
    return (
      <>
        <div className="w-full h-screen  bg-gradient-to-tl from-white-500 via-[rgb(192,149,239)] to-[rgb(192,149,239)] flex items-center justify-center">
          <div className="w-3/4 h-5/6 bg-purple-300 flex flex-col items-center border border-none rounded-2xl  shadow-2xl shadow-purple-400 ">
            <div className="w-full h-[25dvh] bg-[rgb(122,96,160,1)] border border-none rounded-2xl flex flex-col items-center  text-gray-200 ">
              <h1 className=" md:text-3xl md:font-bold  text-2xl font-semibold mt-3">
                What I do
              </h1>
              <p className="md:text-base md:font-base  text-sm font-base">
                I am a Full Stack WebDeveloper skilled in HTML, CSS, JAVASCRIPT,
                and modren frameworks like REACT. I build scalable backened
                solutions using NODE.JS, EXPRESS.JS , MONGODB and folloe best
                practises with GIT & GITHUB.
              </p>
            </div>
            <div className=" md:w-3/4 w-full h-5/6  md:text-lg text-[7px]  text-purple-500 font-semibold  shadow-2xl shadow-purple-400">
              <div className="w-full h-1/2 grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-2  md:px-20 md:py-6 py-2 px-7 ">
                <div className="border rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="md:h-[10dvh] h-[8dvh] object-contain "
                    src="/assets/css.png"
                  ></img>
                  CSS
                </div>
                <div className="border   rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className=" h-[9dvh] md:h-[10dvh]"
                    src="/assets/html.png"
                  ></img>
                  HTML
                </div>
                <div className="border  rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/java.png"
                  ></img>
                  JAVASCRIPT
                </div>
                <div className="border  rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/github.png"
                  ></img>
                  GITHUB
                </div>
              </div>
              <div className="w-full h-1/2 grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-12  md:px-20 md:py-6 py-2 px-7 ">
                <div className="border  rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh] "
                    src="/assets/mongodb.png"
                  ></img>
                  MONGO DB
                </div>
                <div className="border rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/expressjs.png"
                  ></img>
                  EXPRESS.JS
                </div>
                <div className="border  rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/react.png"
                  ></img>
                  REACT.JS
                </div>
                <div className="border rounded-2xl md:rounded-4xl border-none shadow-2xl shadow-purple-400 bg-purple-300 flex items-center justify-center flex-col">
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/next.png"
                  ></img>
                  NEXT.JS
                </div>
              </div>
            </div>
            <div className="w-full h-[1dvh] md:h-[15dvh] bg-[rgb(122,96,160,1)] border border-none rounded-2xl">
              <h1 className=" md:text-3xl md:font-bold  text-gray-200 text-2xl font-semibold mt-3 flex justify-center">
                SKILLS
              </h1>
            </div>
          </div>
        </div>
      </>
    );
}
