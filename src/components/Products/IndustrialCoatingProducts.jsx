import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/heat-resistan.png";
import img2 from "../../../public/products/screws.png";
import { TitleHeading } from "../UI";

const IndustrialCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Heat Resistance Coatings",
      description:
        "Heat-resistant coatings are specialized protective paints designed to withstand high temperatures without degrading, cracking, or peeling. They safeguard surfaces from heat, corrosion, and environmental damage, making them essential in industrial and high-performance applications.",
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "PTFE Fastners Coatings",
      description:
        "PTFE fastener coatings are specialized protective layers applied to bolts, nuts, and screws to enhance durability, reduce friction, and resist corrosion, chemicals, and extreme temperatures. They ensure reliable performance in demanding industrial environments where conventional fasteners fail.",
      reverse: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Industrial Coatings: Protection for Harsh Environments"
          align="center"
          text="text-black"
        />
      </div>

      {data.map((item, index) => (
        <CoatingCard key={index} {...item} />
      ))}
    </section>
  );
};

export default IndustrialCoatingProducts;
