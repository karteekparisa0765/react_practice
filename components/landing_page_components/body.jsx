import React from "react";
import "./body.css";
import Card from "./card.jsx";

const Body = ({ Content }) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden dark-animated-bg">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.25),transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 pt-24 pb-20">
        {/* 🔥 Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-animate">
          Smarter sites start here
        </h1>

        {/* 🔥 Description */}
        <p className="max-w-2xl text-lg text-gray-300 mb-12 text-animate2">
          With Webflow’s AI-native platform, you can create, manage, and
          optimize personalized web experiences that drive real results — faster
          than ever.
        </p>
       
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 mt-8">
            {/* Left text */}
            <h2 className="text-lg text-gray-300">How do you want to build?</h2>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-semibold">
                Thrive with Webflow
              </span>

              <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 py-2 rounded-lg shadow-lg hover:shadow-blue-500/30">
                Start for free
              </button>
            </div>
          </div>
          {/* 🔥 Cards Section (THIS is what you needed) */}
          <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
            {Content.map((item, index) => (
              <div
                key={index}
                className="transform transition-all duration-500 hover:scale-105"
              >
                <Card data={item} />
              </div>
            ))}
          </div>
      

        {/* 🔥 Bottom section */}
      </div>
    </div>
  );
};

export default Body;
