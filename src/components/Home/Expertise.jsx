import React, { useState } from "react";
import shapeImg from "../../assets/images/shape.png"; // existing image
import bioplasticImg from "../../assets/images/bioplastic.jpg"; // new image (your "European Bioplastic.png")
import TitleHeading from "../UI/TitleHeading";

const Expertise = () => {
  const [activeTab, setActiveTab] = useState("growth");

  return (
    <section className="lg:w-[900px] xl:w-[1100px] mx-auto py-12">
      {/* Top Heading */}
      <TitleHeading tagline="Our Expertise" heading="Expertise That Delivers" />

       {/* Card */}
      <div className="relative mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border">
        {/* Top Numbers */}
        <div
          onClick={() => setActiveTab("growth")}
          className={`absolute top-3 sm:top-5 left-4 sm:left-6 cursor-pointer text-sm sm:text-lg md:text-xl xl:text-3xl font-bold ${
            activeTab === "growth" ? "text-blue" : "text-gray-300 hover:text-blue"
          }`}
        >
          01
        </div>
        <div
          onClick={() => setActiveTab("bioplastic")}
          className={`absolute top-3 sm:top-5 right-4 sm:right-6 cursor-pointer text-sm sm:text-lg md:text-xl xl:text-3xl font-bold ${
            activeTab === "bioplastic" ? "text-blue" : "text-gray-300 hover:text-blue"
          }`}
        >
          02
        </div>


        {/* Vertical Text Left */}
        <div
          onClick={() => setActiveTab("growth")}
          className={`hidden md:block absolute left-4 md:left-8 bottom-0 -translate-y-1/2 -rotate-90 origin-left cursor-pointer text-sm md:text-lg xl:text-xl whitespace-nowrap ${
            activeTab === "growth"
              ? "text-blue font-bold"
              : "text-gray-400 hover:text-blue"
          }`}
        >
          Growth Requires Expert Nurturing
        </div>

        {/* Vertical Text Right */}
        <div
          onClick={() => setActiveTab("bioplastic")}
          className={`hidden md:block absolute right-4 md:right-8 bottom-52 -translate-y-1/2 -rotate-90 origin-right cursor-pointer text-sm md:text-lg xl:text-xl whitespace-nowrap ${
            activeTab === "bioplastic"
              ? "text-blue font-bold"
              : "text-gray-400 hover:text-blue"
          }`}
        >
          European Bioplastic
        </div>

        {/* Inner Content */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-8 sm:py-10">
          {activeTab === "growth" ? (
            <>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blacks">
                Growth Requires Expert Nurturing
              </h3>
              <p className="text-grays text-sm sm:text-base mt-3 leading-relaxed">
                GreenAge, the company tended by expertise, technology and world
                class machineries is headed towards consistent growth. A progress
                nurtured by competencies is our USP.
              </p>
              <div className="mt-6 sm:mt-8">
                <img
                  src={shapeImg}
                  alt="Growth"
                  className="rounded-xl shadow-md w-full h-[300px] object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blacks">
                European Bioplastic
              </h3>
              <p className="text-grays text-sm sm:text-base mt-3 leading-relaxed">
                We participated in European Bioplastic-2015, held in Berlin, an
                international forum representing the interest of bioplastic
                industry and discussing latest innovations.
              </p>
              <div className="mt-6 sm:mt-8">
                <img
                  src={bioplasticImg}
                  alt="European Bioplastic"
                  className="rounded-xl shadow-md w-full h-[300px] object-cover"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
