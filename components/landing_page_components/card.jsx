import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-[320px] h-36 bg-[#0a0f2c] rounded-xl overflow-hidden flex relative shadow-lg hover:scale-105 transition-all duration-300 mt-10">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-1/2 h-full object-cover"
      />

      {/* Content */}
      <div className="w-1/2 p-3 text-white flex flex-col justify-center">
        <h2 className="text-sm font-semibold">{data.title}</h2>
        <p className="text-gray-400 text-xs mt-1">{data.data}</p>
      </div>

      <a href="#" className="absolute inset-0"></a>
    </div>
  );
};

export default Card;
