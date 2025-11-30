import React from "react";
import TeamImage from "../../../public/about/man.png"; // Person image
import { Button, TitleHeading } from "../UI";
const ConnectWithTeam = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#151824] via-[#29232b] to-[#3a2226]" />

      {/* EDGE BLUR LEFT + RIGHT */}
      <div className="absolute left-0 top-0 w-[220px] h-full bg-gradient-to-r from-[#151824] to-transparent" />
      <div className="absolute right-0 top-0 w-[220px] h-full bg-gradient-to-l from-[#3a2226] to-transparent" />

    <div className="container">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 px-6 text-white">
        {/* LEFT SIDE TEXT */}
        <div>
          <TitleHeading
            tag=" Contact Us"
            heading="Connect With Our Team"
            text="text-white"
            align="left"
          />

          <p className="text-gray mt-4 max-w-md">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum.
          </p>
          <div className="pt-3">
             <Button
            text="Get A Quote" onClick={() => (window.location.href = "/contact")} />
      
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (NO ICON IMAGES NEEDED) */}
        <div className="relative flex justify-center">
          <img
            src={TeamImage}
            alt="Team Support"
            className="w-[440px] lg:w-[520px] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default ConnectWithTeam;
