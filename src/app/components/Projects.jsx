import React from "react";
import Link from "next/link";
import Image from "next/image";
import InsightCorner from "../../../public/InsightCorner.png";
import BE from "../../../public/BE.png";
import PlaidPal from "../../../public/PlaidPal.png";
import portfolio from "../../../public/portfolio.png";
import fitnessapp from "../../../public/fitnessapp.png";
import Studyfy from "../../../public/Studyfy.jpg";

const Projects = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="text-left">
        <h1 className="text-5xl py-2 text-teal-600 font-medium">
          Main Projects
        </h1>
        <p className="text-md py-5 leading-8 text-gray-800">
          I typically allocate more time to complex, full-stack applications to
          ensure their successful development and implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-left py-5 text-teal-600">
            InsightCorner Frontend{" "}
            <span className="font-normal text-sm text-gray-600">Completed</span>
          </h2>
          <Image
            src={InsightCorner}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <ul className="text-left">
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Javascript
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Supertest
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Node.js
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              PSQL
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Jest
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Express
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Axios
            </li>
          </ul>
          <p className="text-sm text-left py-5 text-gray-800">
            InsightCorner is a full-stack news and discussion forum application
            built with React, Bootstrap, Node.js, Express, and PostgreSQL. Users
            can browse articles, sort articles by votes, comments, and dates,
            post new comments, and vote on articles and comments. You can also
            create new articles and topics.
          </p>
          <div className="flex justify-start">
            <Link
              href="https://insightcorner.netlify.app/"
              className="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md mr-2"
            >
              Live
            </Link>
            <Link
              href="https://github.com/IzaanD98/fe-nc-news"
              className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-6 py-2 rounded-md"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-left py-5 text-teal-600">
            InsightCorner Backend{" "}
            <span className="font-normal text-sm text-gray-600 ml-2">
              Completed
            </span>
          </h2>

          <Image src={BE} width={400} height={400} className="rounded-lg" />
          <ul className="text-left">
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Javascript
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Supertest
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Node.js
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              PSQL
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Jest
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Express
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Axios
            </li>
          </ul>
          <p className="text-sm text-left py-5 text-gray-800">
            InsightCorner BE is a web application built with Node.js and
            PostgreSQL. Users can read articles, post comments, and vote on
            content. The server uses Express and is tested with Supertest and
            Jest. The application ensures data integrity and reliability while
            providing a seamless user experience.
          </p>
          <div className="flex justify-start">
            <Link
              href="https://project-nc-news-db.onrender.com/api"
              className="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md mr-2"
            >
              Live
            </Link>
            <Link
              href="https://github.com/IzaanD98/be-nc-news"
              className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-6 py-2 rounded-md"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-left py-5 text-teal-600">
            PlaidPal{" "}
            <span className="font-normal text-sm text-gray-600 ml-2">
              Completed
            </span>
          </h2>

          <Image
            src={PlaidPal}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <ul className="text-left">
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Javascript
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              React
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Node.js
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              MongoDB
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Bootstrap
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Express
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Plaid Api
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Google oAuth
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Axios
            </li>
          </ul>
          <p className="text-sm text-left py-5 text-gray-800">
            The ultimate financial management tool designed to help you manage
            your finances and reach your financial goals. With PlaidPal, you can
            easily connect all of your bank accounts and credit cards in one
            place, and get a comprehensive view of your financial transactions
            and balances. PlaidPal uses the MERN stack which consists of four
            main technologies: MongoDB, Express, React, and Node.js. Each of
            these technologies plays an important role in PlaidPal and works
            together to create a seamless and powerful user experience.
          </p>
          <div className="flex justify-start">
            <Link
              href="https://plaidpal.nidhoggr.co.uk/"
              className="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md mr-2"
            >
              Live
            </Link>
            <Link
              href="https://github.com/IzaanD98/fe-nc-news"
              className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-6 py-2 rounded-md"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-left py-5 text-teal-600">
            FitnessJunkie{" "}
            <span className="font-normal text-sm text-gray-600 ml-2">
              Completed
            </span>
          </h2>

          <Image
            src={fitnessapp}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <ul className="text-left">
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Python
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Flask
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Jinja
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              HTML/CSS
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Bootstrap
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              SQLite
            </li>
          </ul>
          <p className="text-sm text-left py-5 text-gray-800">
            The purpose of this web application is to give users the ability to
            create an account, log in, and access information about various
            exercises. Users can also track and record their heaviest lift for
            each exercise to monitor their progress. The app aims to be a
            resource for people looking to improve their physical fitness by
            providing exercise guides and information. The app also includes a
            records page where users can log their weights and repetitions for
            each exercise, along with a date stamp, to see their progress in
            each muscle group.
          </p>
          <div className="flex">
            <Link
              href="https://github.com/IzaanD98/Fitness-App"
              className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-6 py-2 rounded-md"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-left py-5 text-teal-600">
            Portfolio Website{" "}
            <span className="font-normal text-sm text-gray-600 ml-2">
              In Progress
            </span>
          </h2>

          <Image
            src={portfolio}
            width={400}
            height={300}
            className="rounded-lg border border-teal-400"
          />
          <ul className="text-left">
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Javascript
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              React
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Node.js
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Tailwind
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Next.js
            </li>
          </ul>
          <p className="text-sm text-left py-5 text-gray-800">
            The technologies used for the portfolio website include front-end
            technologies such as HTML, CSS, JavaScript, and React.js (or other
            front-end frameworks). Next.js may be used for server-side rendering
            and other features. Styling is done using Tailwind CSS or other CSS
            frameworks/libraries.
          </p>
          <div className="flex">
            <Link
              href="/"
              className="border bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-md mr-2"
            >
              Live
            </Link>
            <Link
              href="https://github.com/IzaanD98/Portfolio"
              className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-6 py-2 rounded-md"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-left py-5 text-teal-600">
            Studyfy{" "}
            <span className="font-normal text-sm text-gray-600 ml-2">
              In Progress
            </span>
          </h2>

          <Image
            src={Studyfy}
            width={400}
            height={400}
            className="rounded-lg border"
          />
          <ul className="text-left">
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Javascript
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              React
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Node.js
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Bootstrap
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              Express
            </li>
            <li className="inline-block bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs mr-2">
              MongoDB
            </li>
          </ul>
          <p className="text-sm text-left py-5 text-gray-800">
            This recruitment website will allow users to register their interest
            by submitting a form and optionally uploading documents. It features
            a landing page with a header, banner, courses, testimonials, student
            loan info, and a footer. Users can navigate to various pages,
            including home, about us, courses, financial support, contact us,
            and apply now. A WhatsApp contact option is available. The website
            supports translation into Romanian, Bengali, Hindi, and Tamil. Users
            receive a unique reference number upon submission and an email with
            the reference number. They can track their status using this number.
            SuperAdmins have access to all applicants, can delete users, and
            create new admins. Admins can view assigned applicants, update their
            status, and trigger auto-emails for status changes. The technology
            stack includes MongoDB, Express, React, Node.js, and Bootstrap.
          </p>
          <div className="flex">
            <Link
              href="https://github.com/IzaanD98/studyfy-BE"
              className="border bg-gradient-to-r from-cyan-500 to-gray-500 text-white px-6 py-2 rounded-md"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
