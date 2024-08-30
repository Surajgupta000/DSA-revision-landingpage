import React from "react";

export default function Bodytwo() {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl">What's Included</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="mb-8 md:mb-0 md:mr-8">
          <img
            className="h-auto w-full md:h-[500px] md:w-[400px]"
            src="./images/dsa-2.png"
            alt="page"
          />
        </div>

        <div className="md:w-1/2">
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              15+ algo patterns discussed
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              Detailed Solutions and explanations
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              Awesome resources, Articles and Blogs
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              Visualizers and animations included
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              100 pages of quality content
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              Concepts explained for beginners
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-4">
                ✔
              </span>
              All in one revision guide
            </li>
          </ul>

          <button className="border-black rounded-full text-white font-semibold text-xl bg-orange-500 px-6 py-3 mt-14 hover:cursor-pointer md:ml-0">
            Download for Free
          </button>
        </div>
      </div>
    </div>
  );
}
