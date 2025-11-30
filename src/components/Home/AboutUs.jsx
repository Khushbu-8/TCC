import React from "react";
import machineImg from "../../assets/images/machine.png"; // Replace with your image path
import bgImage from "../../assets/images/bg-pattern.png"; // Replace with your background image path
import VidioIcon from "../../assets/images/About-Video.png"; // Replace with your background image path
import TitleHeading from "../UI/TitleHeading";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-white">
      <TitleHeading tagline="ABOUT US" heading="Why Choose Us?" />
      {/* Gradient overlay (optional) */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Content Wrapper */}
      <div
        className="relative max-w-6xl mx-auto rounded-xl p-[8px] sm:p-[10px] shadow-lg"
        style={{
          background: "var(--background-color-gradient)",
        }}
      >
        <div
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 rounded-xl p-4 sm:p-6 md:p-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Image */}
          {/* Left Image with Video Icon */}
          <div className="w-full md:w-1/2 h-full relative">
            <img
              src={machineImg}
              alt="Machine"
              className="w-full h-80 rounded-xl shadow-lg object-cover"
            />

            {/* Video Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={VidioIcon}
                alt="Play Video"
                className="w-14 h-14 sm:w-16 sm:h-16 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <h3 className="text-2xl  lg:text-4xl font-bold leading-snug">
              Great Initiatives Are Built On Strong Foundation
            </h3>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              GreenAge Industries have etched their name in the field of
              development and manufacturing of rotomoulding powder/compounds in
              blazing fonts. Foundation of the company was laid back in the year
              2012.
            </p>

            {/* Learn More Button */}
            <div className="flex justify-center md:justify-start">
              <button className="mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-green-500 text-green-500 rounded-full font-medium flex items-center justify-center md:justify-start gap-2 hover:bg-green-500 hover:text-white transition duration-300">
                Learn More
                <ArrowUpRight className=" w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
