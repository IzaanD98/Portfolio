import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-10 mb-12 flex justify-start">
      <ul className="flex space-x-4 text-xl cursor-pointer">
        <li className="ml-4">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1kKnsvPWBS-__28QH2zkpVY0GvQdNKrGb/view?usp=sharing"
            download
            class="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
