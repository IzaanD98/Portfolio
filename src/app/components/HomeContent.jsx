import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React from "react";

const HomeContent = () => {
  return (
    <div className="text-center p-10 md:flex md:justify-between md:items-center">
      <div className="text-left md:text-center md:mr-10">
        <h1 className="text-5xl py-2 text-teal-600 font-medium">Izaan Dalvi</h1>
        <h2 className="text-2xl py-2">Software Developer</h2>
        <p className="text-md py-5 leading-8 text-gray-800">
          Full-stack Software Developer with a focus on web development and
          expertise in various technologies, including JavaScript, HTML, CSS,
          and SQL.
        </p>
        <button className="border bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">
          View Projects
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 md:justify-end md:flex-col md:gap-4">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
