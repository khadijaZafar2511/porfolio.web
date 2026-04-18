import React from 'react';
import {Link} from "react-router-dom"

const projects = [
  {
    id: 1,
    title: "Weather App",
    category: "REACT project",
    image: "assets/weather.jpeg",
    link: "https://weather-app-ruby-one-45.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Rebrand",
    category: "MERN project",
    image: "assets/ecomerence.png",
    link: "https://ecomerence-website-six.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Web",
    category: "UI/UX Project",
    image: "assets/portfolio.png",
    link: "https://porfolio-web-ashen.vercel.app",
  },

];

const Project = () => {
  return (
    <>
      <div className="min-h-screen w-full mt-15 bg-black/95">
        <div className="md:p-8  p-4 max-w-7xl mx-auto   ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  bg-[#202020] ">
            {projects.map((pr) => (
              <div
                key={pr.id}
                className="flex flex-col text-white space-y-2 p-4 md:p-8  "
              >
                <img
                  className="border rounded-2xl border-none transition-transform duration-500 hover:scale-105"
                  src={pr.image}
                />
                <div className="font-semibold text-sm flex flex-col mt-2">
                  <h1>{pr.title}</h1>
                  <h1 className="text-gray-400">{pr.category}</h1>
                  <Link className="text-purple-800" to={pr.link}>
                    {pr.link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;



     