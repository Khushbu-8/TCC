import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/nonstick.png";
import img2 from "../../../public/products/interior-ceramic.png";
import img3 from "../../../public/products/exterior.png";
import { TitleHeading } from "../UI";

const CoatingSection = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Interior Non - Stick Coatings",
      description:
        "Interior Non-Stick Coatings Are Advanced Protective Finishes Designed To Keep Indoor Surfaces Clean, Durable, And Visually Appealing By Preventing Dirt, Stains, And Residues From Adhering.",
      tableData: [
        { name: "Premium & Top Coat", brand: "Protecttix", coat: "2 Coat" },
        {
          name: "Premium & Top Coat",
          brand: "Protecttix Plus",
          coat: "2 Coat",
        },
        { name: "Premium & Top Coat", brand: "Shildon", coat: "3 Coat" },
        { name: "Premium & Top Coat", brand: "Shildon Plus", coat: "3 Coat" },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Interior Ceramic Coatings",
      description:
        "Interior Ceramic Coatings Are Advanced Protective Finishes Applied To Indoor Surfaces To Provide Long-Lasting Resistance Against Stains, UV Rays, Scratches, And Wear While Maintaining A Sleek, Polished Look.",
      tableData: [
        {
          name: "Premium & Top Coat",
          brand: "Ceragreen",
          coat: "2 Coat",
        },
      ],
      reverse: true,
    },
    {
      number: 3,
      image: img3,
      title: "Exterior Coatings",
      description:
        "Exterior Coatings Are Protective And Decorative Finishes Applied To Outdoor Surfaces To Guard Against Weathering, Corrosion, UV Radiation, And Environmental Stress While Enhancing Aesthetics.",
      tableData: [
        { name: "Premium & Top Coat", brand: "-", coat: "1 Coat" },
        { name: "Premium & Top Coat", brand: "-", coat: "2 Coat" },
      ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Types Of Cookware Coatings Explained"
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

export default CoatingSection;
