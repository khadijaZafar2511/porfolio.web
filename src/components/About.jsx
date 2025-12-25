import React from "react";

export default function About() {
  return (
    <>
      <div className="w-full h-screen  ">
        <div className="w-full h-1/5 bg-[rgb(192,149,239)] ">
          <h1 className="text-3xl font-bold text-white flex justify-center">
            <img
              className="w-[6dvh] h-[6dvh] mr-3"
              src="/src/assets/github.png"
            ></img>{" "}
            ABOUT ME
          </h1>
          <h1 className="md:text-sm text-xs text-white">
            As a dedicated Full-Stack Developer, I specialize in building
            scalable, user-centric web applications that bridge the gap between
            complex backend logic and intuitive frontend experiences. With
            expertise in the MERN stack and modern frameworks like Next.js, I
            thrive on turning challenging problems into clean, maintainable
            code. My approach focuses on performance optimization and responsive
            design, ensuring every project is as functional as it is visually
            engaging. Whether collaborating with teams or leading independent
            builds, I am committed to continuous learning and staying at the
            forefront of evolving web technologies.{" "}
          </h1>
        </div>
        <div className="w-1/2  h-1/12 bg-[rgba(129,102,155,1)]  flex flex-col mt-5">
          <h1 className="text-3xl font-bold  text-white flex justify-center">
            <img
              className="w-[6dvh] h-[6dvh] mr-3"
              src="/src/assets/github.png"
            ></img>
            PROJECTS
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4  md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2">
          <h1 className=" md:text-sm text-xs text-white">
            I have developed a real-time WEATHER application that leverages REST
            APIs to deliver accurate, location-specific forecasts through a
            responsive and intuitive user interface.
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4  md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2">
          <h1 className=" text-xs md:text-sm text-white">
            I have developed TODO WEBAPP A privacy-centric productivity tool
            that stores all user data locally on the device and allows for
            instant list clearing to help users refresh their daily workflows.
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4  md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2">
          <h1 className=" text-xs md:text-sm text-white">
            My ROCK-PAPER-SCISSOR is responsive web application that implements
            the classic Rock-Paper-Scissors game using HTML, CSS, and
            JavaScript, featuring real-time score tracking and interactive UI
            elements."
          </h1>
        </div>
        <div className="w-1/2 h-1/12 bg-[rgba(129,102,155,1)] mt-5">
          <h1 className="text-3xl font-bold text-white flex justify-center">
            <img
              className="w-[6dvh] h-[6dvh] mr-3"
              src="/src/assets/github.png"
            ></img>{" "}
            EDUCATION
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4 md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2 flex justify-center items-center">
          <h1 className=" text-xs md:text-sm text-white  ">
            BS in COMPUTER SCIENCE, University of Sahiwal, 2025-2029(still).
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4 md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2 flex justify-center items-center">
          <h1 className="text-xs md:text-sm text-white r">
            Associate of Science in ICS, Punjab College Sahiwal, 2023-2025.
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4 md:ml-30 ml-10 h-1/8 bg-[rgb(192,149,239)] mt-2 flex justify-center items-center">
          <h1 className="text-xs md:text-sm text-white ">
            High School Diploma,Al-Farooq School, Kamir, 2023.
          </h1>
        </div>
      </div>
    </>
  );
}
