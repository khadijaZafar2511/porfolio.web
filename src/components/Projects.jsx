import React from 'react'

export default function Projects() {
  return (
      <>
                 
        <div className="w-1/2  h-1/12 bg-[rgba(129,102,155,1)]  flex flex-col mt-5">
          <h1 className="text-3xl font-bold text-gray-200  flex justify-center">
            <img
              className="w-[6dvh] h-[6dvh] mr-3"
              src="/assets/projects.png"
            ></img>
            PROJECTS
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4  md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2">
          <h1 className=" md:text-sm text-xs text-gray-200 ">
            I have developed a real-time WEATHER application that leverages REST
            APIs to deliver accurate, location-specific forecasts through a
            responsive and intuitive user interface.
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4  md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2">
          <h1 className=" text-xs md:text-sm text-gray-200 ">
            I have developed TODO WEBAPP A privacy-centric productivity tool
            that stores all user data locally on the device and allows for
            instant list clearing to help users refresh their daily workflows.
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4  md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2">
          <h1 className=" text-xs md:text-sm text-gray-200 ">
            My ROCK-PAPER-SCISSOR is responsive web application that implements
            the classic Rock-Paper-Scissors game using HTML, CSS, and
            JavaScript, featuring real-time score tracking and interactive UI
            elements."
          </h1>
        </div>
     
        
      </>
  )
}
