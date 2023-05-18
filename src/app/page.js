import Image from "next/image";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Izaan Dalvi Portfolio</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-start">
            <ul className="flex space-x-4 text-xl cursor-pointer ">
              <li className="ml-4">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-10">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h1 className="text-5xl py-2 text-teal-600 font-medium">
              Izaan Dalvi
            </h1>
            <h2 className="text-2xl py-2">Software Developer</h2>
            <p className="text-md py-5 leading-8 text-gray-800">
              Full-stack Software Developer with a focus on web development and
              expertise in various technologies, including JavaScript, HTML,
              CSS, and SQL.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </section>
      </main>
    </div>
  );
}
