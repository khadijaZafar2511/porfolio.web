import React from "react";

export default function About() {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden ">
        <div className="w-full h-1/4  bg-[rgb(192,149,239)] ">
          <h1 className="md:text-3xl text-2xl font-bold text-gray-200  flex justify-center">
            <img
              className="w-[5dvh] h-[5dvh]  mr-3 "
              src="/assets/about.png"
            ></img>
            ABOUT ME
          </h1>
          <h1 className="md:text-sm text-gray-200  text-xs ">
            As a dedicated Full-Stack Developer, I specialize in building
            scalable, user-centric web applications that bridge the gap between
            complex backend logic and intuitive frontend experiences. With
            expertise in the MERN stack and modern frameworks like Next.js, I
            thrive on turning challenging problems into clean, maintainable
            code. My approach focuses on performance optimization and responsive
            design, ensuring every project is as functional as it is visually
            engaging.
          </h1>
        </div>
        <div className="w-1/2 h-1/8 bg-[rgba(129,102,155,1)] mt-5  flex justify-center items-center">
          <img
            className="w-[5dvh] h-[5dvh] mr-3"
            src="/assets/education.png"
          ></img>
          <h1 className="md:text-3xl font-bold text-xl  text-gray-200  ">
            EDUCATION
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4 md:ml-30 ml-10 h-1/6 bg-[rgb(192,149,239)] mt-2 flex justify-center items-center">
          <h1 className=" text-xs md:text-sm text-gray-200  ">
            BS in COMPUTER SCIENCE, University of Sahiwal, 2025-2029(still).
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4 md:ml-30 ml-10 h-1/6 bg-[rgb(192,149,239)] mt-2 flex justify-center items-center">
          <h1 className="text-xs md:text-sm text-gray-200 ">
            Associate of Science in ICS, Punjab College Sahiwal, 2023-2025.
          </h1>
        </div>
        <div className="md:w-1/2 w-3/4 md:ml-30 ml-10 h-1/6 bg-[rgb(192,149,239)] mt-2 flex justify-center items-center">
          <h1 className="text-xs md:text-sm text-gray-200 ">
            High School Diploma,Al-Farooq School, Kamir, 2023.
          </h1>
        </div>
      </div>
    </>
  );
}
