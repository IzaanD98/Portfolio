import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React from "react";
import Link from "next/link";

const ContactContent = () => {
  return (
    <div className="text-center p-10 md:flex md:justify-between md:items-center">
      <div className="text-left md:text-left md:mr-10 md:flex-1">
        <h1 className="text-5xl py-2 text-teal-600 font-medium">Contact</h1>
        <p className="text-2xl py-5 leading-8 text-gray-800 md:w-1/2 ">
          Thank you for checking out my work! If you like what you see, please
          do get in touch. I am open to web developer positions, collaboration,
          projects, or just having a good chat. You can E-mail me directly on{" "}
          <a
            href="mailto:izaandalvi@gmail.com"
            className="underline text-teal-600 hover:text-teal-700"
          >
            izaandalvi@gmail.com
          </a>
          . I look forward to hearing from you!
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Link
            href="/projects"
            className="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mb-4 md:mb-0 max-w-[150px]"
          >
            View Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1wUXTpJZw86r92EZmxYoVR5ywv0aHioHg/view?usp=sharing"
            download
            className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-4 py-2 rounded-md max-w-[150px]"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="text-5xl flex justify-center gap-16 py-20 text-gray-600 md:justify-end md:flex-col md:gap-4">
          <a
            href="https://github.com/IzaanD98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 flex items-center gap-2"
          >
            <AiFillGithub size={32} className="md:hidden" />
            <AiFillGithub size={48} className="hidden md:block" />
            <p className="text-sm">Check out my Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/izaand/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 flex items-center gap-2"
          >
            <AiFillLinkedin size={32} className="md:hidden" />
            <AiFillLinkedin size={48} className="hidden md:block" />
            <p className="text-sm">Connect via LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
