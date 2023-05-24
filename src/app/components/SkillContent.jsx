import React from "react";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPython,
  SiNodedotjs,
  SiJest,
  SiBootstrap,
  SiTailwindcss,
  SiSqlite,
  SiPostgresql,
  SiAxios,
  SiFlask,
  SiAdobephotoshop,
  SiCanva,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const SkillContent = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="text-left">
        <h1 className="text-5xl py-4 text-teal-600 font-medium">
          Skills & Stacks
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center py-3 text-gray-600 md:justify-end md:flex-col md:gap-4">
          {/* Frontend */}
          <div className="flex items-center">
            <SiJavascript size={32} />
            <p className="ml-2">JavaScript</p>
          </div>
          <div className="flex items-center">
            <SiCss3 size={32} />
            <p className="ml-2">CSS</p>
          </div>
          <div className="flex items-center">
            <SiHtml5 size={32} />
            <p className="ml-2">HTML</p>
          </div>
          <div className="flex items-center">
            <FaReact size={32} />
            <p className="ml-2">React</p>
          </div>
          <div className="flex items-center">
            <SiBootstrap size={32} />
            <p className="ml-2">Bootstrap</p>
          </div>
          <div className="flex items-center">
            <SiTailwindcss size={32} />
            <p className="ml-2">Tailwind CSS</p>
          </div>
          {/* Backend */}
          <div className="flex items-center">
            <SiMongodb size={32} />
            <p className="ml-2">MongoDB</p>
          </div>
          <div className="flex items-center">
            <SiMysql size={32} />
            <p className="ml-2">SQL</p>
          </div>
          <div className="flex items-center">
            <SiExpress size={32} />
            <p className="ml-2">Express</p>
          </div>
          <div className="flex items-center">
            <SiPython size={32} />
            <p className="ml-2">Python</p>
          </div>
          <div className="flex items-center">
            <SiNodedotjs size={32} />
            <p className="ml-2">Node.js</p>
          </div>
          <div className="flex items-center">
            <SiFlask size={32} />
            <p className="ml-2">Flask</p>
          </div>
          {/* Languages */}
          <div className="flex items-center">
            <SiSqlite size={32} />
            <p className="ml-2">SQLite</p>
          </div>
          <div className="flex items-center">
            <SiPostgresql size={32} />
            <p className="ml-2">PostgreSQL</p>
          </div>
          <div className="flex items-center">
            <SiAxios size={32} />
            <p className="ml-2">Axios</p>
          </div>
          <div className="flex items-center">
            <SiJest size={32} />
            <p className="ml-2">Jest</p>
          </div>
          <div className="flex items-center">
            <SiNextdotjs size={32} />
            <p className="ml-2">Next.js</p>
          </div>
          <div className="flex items-center">
            <SiAdobephotoshop size={32} />
            <p className="ml-2">Photoshop</p>
          </div>
          <div className="flex items-center">
            <SiCanva size={32} />
            <p className="ml-2">Canva</p>
          </div>
          <div className="flex items-center">
            <SiFigma size={32} />
            <p className="ml-2">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillContent;
