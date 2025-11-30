import React from "react";
// import { ArrowRight } from "lucide-react"; // Arrow matches screenshot
import ArrowRight from "../../../public/header/arrow-right.png"

const Button = ({
  text = "Contact Us",
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 bg-red text-white font-medium 
      px-3 py-3.5 rounded-full hover:bg-[#a51213] transition-all duration-300 
      ${className}`}
    >
      {text}

      {/* Circle behind arrow */}
      <span className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
       <img src={ArrowRight} alt="ArrowRight" height={20} />
      </span>
    </button>
  );
};

export default Button;
