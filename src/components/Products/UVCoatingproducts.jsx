import React from "react";
import CoatingCard from "./CoatingCard";

// Import local images
import img1 from "../../../public/products/plastic.png";
import img2 from "../../../public/products/wood.png";
import img3 from "../../../public/products/metal.png";
import { TitleHeading } from "../UI";

const UVCoatingproducts = () => {
  const data = [
    {
      number: 1,
      image: img1,
      title: "Plastic",
      description:"Plastic coatings are protective layers of polymer applied to surfaces to improve durability, resist corrosion, reduce friction, and enhance aesthetics. They act as a barrier against environmental wear, scratches, and chemical exposure, extending the life of the underlying material.",
      reverse: false,
    },
    {
      number: 2,
      image: img2,
      title: "Wood",
      description:
        "Wood coatings are protective and decorative finishes applied to wooden surfaces to enhance durability, resist damage, and improve aesthetics. They shield wood from moisture, UV radiation, abrasion, and microbial attack while highlighting its natural beauty.",
      reverse: true,
    },
    {
      number: 3,
      image: img3,
      title: "Metal",
      description:
        "Metal coatings are protective and functional layers applied to metallic surfaces to enhance durability, resist corrosion, improve wear resistance, and sometimes add decorative appeal. They act as a shield between the metal and its environment, extending service life and performance.",
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
          heading="UV Coatings: Advanced Surface Protection"
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

export default UVCoatingproducts;
