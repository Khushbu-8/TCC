import React from "react";
import backgroundImg from "../../assets/images/background-hero.png";
import RectangleFram from "../../assets/images/Rectangle-fram.png";
import vectorGImg from "../../assets/AboutUsimages/Vector-G.png";

const ProductHero = ({ title, tagline, rightImage }) => {
  return (
    <section className="relative w-full pt-28 pb-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

      {/* Rectangle Frame - Top */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Top"
        className="absolute top-16 h-[150px] left-1/2 -translate-x-1/2 w-full opacity-90 z-[1] pointer-events-none"
      />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left max-w-lg py-5">
          <div className="text-sm md:text-base xl:text-xl font-semibold text-blue inline-block px-3 py-1 rounded-md mb-2">
            // {tagline} //
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-snug text-blacks">
            {title}
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-center items-center mb-8 md:mb-0">
          {/* Vector-G Image (Behind about-group) */}
          <img
            src={vectorGImg}
            alt="Vector G"
            className="absolute right-0 lg:right-8 top-0 w-full h-full object-contain opacity-16 z-[2]"
          />

          {/* Background Gradient Box */}
          <div className="absolute -top-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-40 z-[1]"></div>

          {/* Right Side Dynamic Image */}
          <img
            src={rightImage}
            alt={title}
            className="relative z-[3]  w-full  lg:w-[500px] drop-shadow-xl rounded-xl"
          />
        </div>
      </div>

      {/* Rectangle Frame - Bottom */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Bottom"
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full h-[150px] opacity-90 z-[1] pointer-events-none"
      />
    </section>
  );
};

export default ProductHero;
