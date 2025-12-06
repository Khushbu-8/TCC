import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/Non-Stick-pen.png";
import img2 from "../../../public/products/ceramic.png";
import { TitleHeading } from "../UI";

const ElectricalCoatingProducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "NON-STICK COATINGS",
      description:
        "Non-stick coatings are specialized surface treatments designed to prevent materials from adhering to a substrate, ensuring easy release, smooth functionality, and long-lasting durability. They are widely used in cookware, industrial machinery, and consumer products where friction reduction and cleanability are essential.",
      tableData: [
        { name: "Premium & TopCoat", brand: "Protecttix", coat: "2 Coat" },
        {
          name: "Premium & Top Coat",
          brand: "Protecttix Plus",
          coat: "2 Coat",
        },
      ],
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "INTERIOR CERAMIC COATINGS",
      description:
        "Interior ceramic coatings are advanced protective finishes applied to indoor surfaces to enhance durability, aesthetics, and resistance against wear, stains, and environmental stress. They combine the toughness of ceramics with decorative appeal, making them ideal for modern interiors.",
      tableData: [
        {
          name: "Hybrid Ceramic",
          brand: "Ceragreen",
          coat: "1 Coat",
        },
        {
          name: "PRIMER & TOPCOAT",
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
          heading="Types of Coatings for Electrical Appliances"
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

export default ElectricalCoatingProducts;
