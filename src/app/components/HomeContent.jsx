import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React from "react";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="text-center p-10 md:flex md:justify-between md:items-center">
      <div className="text-left md:text-left md:mr-10 md:flex-1">
        <h1 className="text-5xl py-2 text-teal-600 font-medium">Izaan Dalvi</h1>
        <p className="text-2xl py-5 leading-8 text-gray-800 md:w-1/2 ">
          I am a Software Developer based in London. Check out my work to see
          what I can do for you.
        </p>
        <Link
          href="/projects"
          className="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
        >
          View Projects
        </Link>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="text-5xl flex justify-center gap-16 py-20 text-gray-600 md:justify-end md:flex-col md:gap-4">
          <a
            href="https://github.com/IzaanD98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/izaand/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
