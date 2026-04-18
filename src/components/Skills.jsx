import React from 'react'

export default function skills() {
    return (
      <>
        <div className="w-full mt-15 h-screen bg-black/95 flex items-center justify-center overflow-y-scroll ">
          <div className="md:w-3/4 w-10/11 h-20/21  flex flex-col items-center border border-gray-700 rounded-2xl   shadow-[0_0_3px_rgba(255,255,255,0.3)]  ">
            <div className="w-full h-[25dvh] md:h-[18dvh] bg-[#202020] rounded-t-2xl flex flex-col md:gap-4 px-2 items-center border border-gray-700 text-gray-200 ">
              <h1 className=" md:text-4xl lg:text-3xl md:font-bold  text-2xl font-semibold md:mt-3 lg:mt-0 ">
                What I do
              </h1>
              <p className="lg:text-sm md:text-lg text-[12px] md:font-base   font-base">
                I am a Full Stack WebDeveloper skilled in HTML, CSS, JAVASCRIPT,
                and modren frameworks like REACT. I build scalable backened
                solutions using NODE.JS, EXPRESS.JS , MONGODB and folloe best
                practises with GIT & GITHUB.
              </p>
            </div>

            <div className="lg:w-3/4 w-full h-4/5  md:text-sm text-[11px] text-gray-200  font-semibold  shadow-2xl shadow-[#202020]">
              <div className=" *:shadow  *:shadow-gray-500 *:shadow-5xl *:transition *:duration-300 *:bg-[#202020] *:hover:scale-110  *:rounded-5xl *:md:rounded-2xl  *:flex *:items-center *:justify-center *:flex-col *:gap-2 w-full h-1/2  grid lg:grid-cols-4  grid-cols-2  gap-3 lg:gap-4 lg:px-18 md:py-4 py-2 px-7 ">
                <div >
                  <img
                    className="lg:h-[10dvh] h-[8dvh] object-contain "
                    src="/assets/css.png"
                  ></img>
                  CSS
                </div>
                <div>
                  <img
                    className=" h-[9dvh] lg:h-[10dvh]"
                    src="/assets/html.png"
                  ></img>
                  HTML
                </div>
                <div>
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/java.png"
                  ></img>
                  JAVASCRIPT
                </div>
                <div>
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/github.png"
                  ></img>
                  GITHUB
                </div>
              </div>
              <div className=" *:shadow  *:shadow-gray-600 *:shadow-5xl *:transition *:duration-300 *:bg-[#202020] *:hover:scale-110  *:rounded-5xl *:md:rounded-2xl  *:flex *:items-center *:justify-center *:flex-col *:gap-2 w-full h-1/2  grid lg:grid-cols-4  grid-cols-2 gap-3 lg:gap-4 lg:px-18 md:py-4 py-2 px-7 ">
                <div>
                  <img
                    className="h-[8dvh] md:h-[10dvh] "
                    src="/assets/mongodb.png"
                  ></img>
                  MONGO DB
                </div>
                <div>
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/expressjs.png"
                  ></img>
                  EXPRESS.JS
                </div>
                <div>
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/react.png"
                  ></img>
                  REACT.JS
                </div>
                <div>
                  <img
                    className="h-[8dvh] md:h-[10dvh]"
                    src="/assets/next.png"
                  ></img>
                  NEXT.JS
                </div>
              </div>
            </div>

            <div className="w-full h-[10dvh] md:h-[15dvh]  border bg-[#202020] border-gray-700 rounded-b-2xl ">
              <h1 className=" md:text-3xl md:font-bold  text-gray-200 text-2xl font-semibold mt-3 flex justify-center">
                SKILLS
              </h1>
            </div>
          </div>
        </div>
      </>
    );
}
