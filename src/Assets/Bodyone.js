import React from "react";

export default function Bodyone() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row ml-8 mr-8 mt-7">
      <div className="ml-4 mt-16 mr-6 sm:ml-4 sm:mr-6">
        <h1 className="text-4xl font-bold">
          Best way to revise for your <br />
          next coding interview
        </h1>
        <p className="mt-6 font-medium text-gray-500 text-2xl">
          Get everything in a single guide: Data structures, algorithms,
          <br />
          patterns, visualizers, questions, examples, solutions, explanations,
          <br />
          and much more!
        </p>
        <button className="mt-7 mb-6 py-2 px-6 bg-gray-200 font-semibold rounded-xl shadow-md hover:bg-pink-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[5px_5px_1px_rgba(0,0,0,0.40)]">
          Buy FREE Through Gumroad
        </button>
        <p>
          "Awesome! Love how the concepts are explained + all the wonderful
          <br />
          resources mentioned. Having everything in one guide is super helpful."
        </p>
      </div>

      <div className="flex justify-center mt-10 sm:mt-0 md:mt-10 lg:mt-0">
        <img
          className="h-auto w-full sm:h-[600px] sm:w-[450px] md:h-[500px] md:w-[400px] lg:h-[600px] lg:w-[450px] object-contain"
          src="./images/dsa-main.png"
          alt="DSA Guide"
        />
      </div>
    </div>
  );
}
