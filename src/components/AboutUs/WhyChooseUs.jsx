import React from "react";
import LeaderImage from "../../../public/about/LeaderImage.png"; // Person image
import { Button, TitleHeading } from "../UI";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BG GRADIENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 px-6 text-white">
        {/* LEFT SIDE TEXT */}
        <div>
          <TitleHeading
            tag="Why Choose Us"
            heading="Leaders in Advanced Coating Solutions"
            text="text-black"
            align="left"
          />

          <p className="text-gray mt-4 max-w-md">
           We are a leading provider of industrial coating systems designed to withstand extreme environments and deliver superior protection. From corrosion-resistant finishes to high-performance decorative coatings, our products are engineered with precision and backed by rigorous testing. Partnering with manufacturers, builders
          </p>
        </div>

        {/* RIGHT SIDE IMAGE (NO ICON IMAGES NEEDED) */}
        <div className="relative flex justify-center">
          <img
            src={LeaderImage}
            alt="Team Support"
            className="w-[440px] lg:w-[520px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
