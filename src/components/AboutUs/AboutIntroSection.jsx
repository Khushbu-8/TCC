import React from "react";
import GirlImage from "../../../public/about/IntroImage.png"; // your PNG cutout
import { TitleHeading } from "../UI";

const AboutIntroSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div className=" flex justify-center md:justify-start">
          <img
            src={GirlImage}
            alt="about-person"
            className="z-20 w-full md:w-[380px] lg:w-[430px] object-contain"
          />
        </div>


        {/* ================= RIGHT CONTENT ================= */}
        <div className="text-left">
        
    <TitleHeading tag="About Us"
     heading="The journey of thousand miles begins with one steps."
      align="left" 
      text="text-black" />
          {/* BLUE SUB HEADING */}
          <p className="text-lg mt-3 font-semibold text-blue">
            10+ Years Of Experience In This Fields.
          </p>

          {/* MAIN PARAGRAPH 1 */}
          <p className="text-gray mt-5 leading-relaxed">
            At [TTC], We Specialize In Delivering Advanced Coating Solutions That Protect,
            Enhance, And Extend The Life Of Surfaces Across Industries. With Years Of
            Expertise, Cutting-Edge Technology, And A Commitment To Quality, We Provide
            Coatings That Meet The Highest Standards Of Durability, Performance, And
            Sustainability. Our Mission Is Simple: To Safeguard Your Assets While Adding
            Value Through Innovation And Reliability.
          </p>

          {/* MAIN PARAGRAPH 2 */}
          <p className="text-gray mt-5 leading-relaxed">
            We Are A Leading Provider Of Industrial Coating Systems Designed To
            Withstand Extreme Environments And Deliver Superior Protection. From
            Corrosion-Resistant Finishes To High-Performance Decorative Coatings, Our
            Products Are Engineered With Precision And Backed By Rigorous Testing.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutIntroSection;
