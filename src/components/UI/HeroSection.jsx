import React from "react";
import { FaPlay } from "react-icons/fa";
import bgImg from "../../../public/about/about-hero.png"; // replace as needed
import ButtonTag from "./ButtonTag";
import TitleHeading from "./TitleHeading";
import BrandLogoSection from "../AboutUs/BrandLogoSection";

const HeroSection = ({
  tag ,
  title ,
  description,
  showPlayButton = false,
}) => {
  return (
  <>
    <section className="relative w-full pt-20 pb-0">

      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <ButtonTag tag={tag}/>
        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
          
          {/* Left Title Section */}
          <TitleHeading tag="" heading={title} align="left"  />
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold text-[#0F1B31] leading-snug">
            {title}
          </h1> */}

          {/* Right para */}
          <p className="text-gray text-[16px] leading-7 border-0 lg:border-l-[2px] border-[#b10f0f]  lg:pl-6">
            {description}
          </p>

        </div>
      </div>

      {/* Background Section with Play Button */}
      <div className="relative mt-20 w-full">
        <img
          src={bgImg}
          alt="hero background"
          className="w-full h-[350px] sm:h-[400px] md:h-[520px] object-cover"
        />

        {showPlayButton && (
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-20 h-20 rounded-full bg-white flex items-center justify-center text-black 
          shadow-lg hover:scale-110 transition">
            <FaPlay size={22} />
          </button>
        )}
      </div>

    </section>
    <BrandLogoSection/>
  </>
  );
};

export default HeroSection;
