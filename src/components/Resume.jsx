import { FiBookOpen } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const educationData = [
  {
    id: 1,
    institute: "University Of Sahiwal",
    year: "2025 — 2029",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    id: 2,
    institute: "Punjab College Sahiwal",
    year: "2023 — 2025",
    degree: "Intermediate in Computer Science",
  },
  {
    id: 3,
    institute: "Misali Zikaria Science School",
    year: "2021 — 2023",
    degree: "Matriculation in Biology",
  },
];

const Education = () => {
  return (
    <div className=" w-full flex flex-col items-center ">
      <div className="bg-[#202020] text-gray-200 p-8 rounded-2xl max-w-2xl md:max-w-3xl md:w-3xl mt-5 font-sans">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="text-purple-800 bg-[#202020] border-t border-l border-gray-600 p-2 rounded-lg">
            <FiBookOpen size={22} />
          </div>
          <h2 className="text-2xl font-semibold text-white">Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-5">
          {/* Vertical line */}
          <div className="absolute left-1.25 top-2 bottom-2 w-0.5 bg-white/10"></div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative ${index !== educationData.length - 1 ? "mb-8" : "mb-0"}`}
            >
              {/* Dot */}
              <div className="absolute -left-5 top-2 w-3 h-3 bg-purple-800 rounded-full ring-4 ring-[#1a1d29]"></div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.institute}
                </h3>
                <span className="block text-sm text-purple-800 font-medium mb-1.5">
                  {item.year}
                </span>
                <p className="text-[15px] text-gray-400 m-0">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className=" w-full  flex flex-col items-center px-2 ">
      <div className="bg-[#202020] text-gray-200 p-8 rounded-2xl max-w-2xl md:max-w-3xl md:w-3xl  font-sans">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="text-purple-800 bg-[#202020] border-t border-l border-gray-600 p-2 rounded-lg">
            <MdWork size={24} />
            <FaStar size={20} />
          </div>
          <h2 className="text-2xl font-semibold text-white">Experince</h2>
        </div>

        <div>
          MERN-Stack Developer with 2+ years of experience building and
          deploying end-to-end web applications. Proficient in React and Node.js
          with a strong focus on writing clean, maintainable code and solving
          complex architectural challenges
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className=" min-h-screen w-full bg-black/95 mt-10 flex flex-col gap-5 py-2 ">
      <Education />
      <Experience />
    </div>
  );
};
export default Resume;
