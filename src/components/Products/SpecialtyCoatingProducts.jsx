import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/handle.png";
import img2 from "../../../public/products/bottle.png";
import { TitleHeading } from "../UI";

const SpecialtyCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Handle Coatings",
      description:
        "Handle coatings are protective and functional finishes applied to handles of tools, equipment, furniture, and appliances to improve durability, comfort, and aesthetics. They serve as a barrier against wear, corrosion, and environmental damage while enhancing grip and usability.",
      tableData: [
        { name: "Primer", brand: " - ", coat: "1 Coat" },
        {
          name: "Primer & Soft Touch Topcoat",
          brand: " - ",
          coat: "2 Coat",
        },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "SS BOTTLE COATINGS",
      description:
        "SS (Stainless Steel) bottle coatings are specialized protective and decorative layers applied to stainless steel bottles to enhance durability, safety, and aesthetics. They improve resistance against scratches, corrosion, and environmental wear while offering stylish finishes for consumer appeal.",
      tableData: [
        {
          name: "Primer",
          brand: " - ",
          coat: "1 Coat",
        },
        {
          name: "Primer & TopCoat",
          brand: " - ",
          coat: "2 Coat",
        },
      ],
      reverse: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Innovations in Specialty Coating Technologies"
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

export default SpecialtyCoatingProducts;
