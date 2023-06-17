import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-700 md:text-4xl lg:text-5xl">
          The Post Hub
        </h1>
        <p className="mb-8 max-w-5xl mx-auto font-normal text-gray-400 lg:text-base sm:px-16 lg:px-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          ligula in ipsum porta, ac fringilla mauris luctus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Get started
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-slate-50 inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
