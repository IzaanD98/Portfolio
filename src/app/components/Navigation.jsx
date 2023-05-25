import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-10 mb-12 flex justify-start">
      <ul className="flex space-x-4 text-xl cursor-pointer">
        <li className="ml-4">
          <Link
            href="/"
            className=" hover:text-teal-600 hover:underline text-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className=" hover:text-teal-600 hover:underline"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="/skills" className=" hover:text-teal-600 hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className=" hover:text-teal-600 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
