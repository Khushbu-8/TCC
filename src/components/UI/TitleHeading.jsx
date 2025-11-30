import React from "react";
 import star from "../../../public/about/star.png"
const  TitleHeading = ({ tag, heading, align = "left",text }) => {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} gap-2`}>
      {/* Tagline */}
      {tag && (
        <button className="flex items-center gap-2 text-blue border-2 border-blue text-md font-medium px-4 py-2 rounded-full 
          bg-[#F1F5FF] hover:bg-[#e5ecff] transition">
          <img src={star} alt="star" height={2} />
          {tag}
        </button>
      )}

      {/* Heading */}
      {heading && (
           <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold ${text} leading-snug pt-3`}>
          {heading}
        </h1>
      )}
    </div>
  );
};

export default TitleHeading;
