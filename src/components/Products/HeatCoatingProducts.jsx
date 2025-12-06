import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/nonstick-heat.png";
import { TitleHeading } from "../UI";

const HeatCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Interior Non - Stick Coatings",
      description:
        "Interior non-stick coatings are advanced protective finishes applied to indoor surfaces to prevent dirt, stains, and residues from adhering, ensuring easy cleaning, durability, and long-lasting aesthetics. They combine functional performance with design appeal, making interiors more hygienic and low-maintenance.",
      tableData: [
        { name: "Premium & TopCoat", brand: "Protecttix Plus", coat: "2 Coat" },
        {
          name: "Premium & TopCoat",
          brand: "Protecttix Plus",
          coat: "3 Coat",
        },
      ],
      reverse: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="pb-20">
        <TitleHeading
          tag="Our Products"
          heading="Heat Resistance and Performance of Modern Coatings"
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

export default HeatCoatingProducts;
