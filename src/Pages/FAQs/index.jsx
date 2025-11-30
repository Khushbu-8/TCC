import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HeroSection, TitleHeading } from "../../components/UI";

import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";

const faqData = [
  {
    question: "What Is a Polymer?",
    answer:
      "The word Polymer comes from the Greek 'Poly' meaning many, and 'Meros', parts or units. A polymer is a substance made of many repeating molecular units called monomers. While plastics are a type of polymer, not all polymers are plastics. Polymers can be natural (like rubber or cellulose) or synthetic (like polyethylene and polypropylene). They are widely used because of their versatility, durability, and moldability.",
  },
  {
    question: "What Plastics Or Other Materials Can Be Rotomoulded?",
    answer:
      "Rotational moulding is best suited for thermoplastic polymers such as polyethylene (PE), polypropylene (PP), polyvinyl chloride (PVC), and nylon. Among these, polyethylene is the most commonly used because of its excellent flow properties, durability, and cost-effectiveness. Some special engineering plastics can also be rotomoulded depending on the application.",
  },
  {
    question: "What Polymers Do GreenAge Industries Do Compounding For?",
    answer:
      "GreenAge Industries specializes in compounding a wide range of polymers, primarily polyethylene (LLDPE, HDPE, and MDPE) for rotational moulding applications. They also compound polymers with UV stabilizers, anti-oxidants, flame retardants, and custom colorants to meet specific customer requirements.",
  },
  {
    question: "What Is The Mesh Size Of The Powder For Rotomoulding Process?",
    answer:
      "For rotational moulding, polymer powders are typically ground to a mesh size of 35 to 500 microns, with 35 mesh (500 microns) and 100 mesh (150 microns) being the most common. The finer the powder, the better it flows and fuses during the moulding process, resulting in smoother surfaces and consistent wall thickness.",
  },
  {
    question: "What Colours Can Rotomoulded Products Be Made In?",
    answer:
      "Rotomoulded products can be manufactured in virtually any color. Using masterbatches or pre-compounded powders, products can be customized in solid colors, transparent shades, marble effects, or even multi-colored finishes depending on the design and branding needs.",
  },
  {
    question: "How Does A Rotomolded Part Compare To A Blow Molded Part?",
    answer:
      "Rotomoulded parts are generally stronger, more durable, and have uniform wall thickness compared to blow-moulded parts. While blow moulding is faster and better suited for high-volume thin-walled products, rotational moulding is ideal for producing large, hollow, and complex-shaped products with excellent impact resistance.",
  },
  {
    question: "How Can I Find Out If A Product Can Be Contained In A Rotomoulded Part?",
    answer:
      "You should first analyze the chemical compatibility of the product with the selected polymer. GreenAge Industries provides material compatibility charts and can assist in testing whether your product (liquid, powder, or solid) is safe for storage in a rotomoulded container.",
  },
  {
    question: "What Kind Of Tooling Is Required?",
    answer:
      "Rotational moulding uses relatively low-cost aluminum or steel moulds compared to other plastic moulding techniques. The tooling is simple, lightweight, and cost-effective, making it ideal for producing both small batches and large-sized products without heavy initial investments.",
  },
  {
    question: "What Kind Of Tolerances Can Rotomolding Hold?",
    answer:
      "Typical tolerances in rotational moulding are ±3% of the nominal dimension, with a minimum of ±1.6 mm. However, tolerances can vary depending on factors like material shrinkage, mould design, wall thickness, and part complexity.",
  },
  {
    question: "What Radiuses Can Be Used On Rotomoulded Products?",
    answer:
      "Rotomoulding works best with generous radiuses, both internal and external. Sharp corners should be avoided to ensure smooth material flow and even wall thickness. A minimum radius of 3 mm is recommended for smaller parts, while larger parts may require radiuses of 10 mm or more.",
  },
  {
    question: "My Parts Are All Metal Now. Why Should I Consider Rotomolded Plastic Parts?",
    answer:
      "Rotomoulded plastic parts are lighter, corrosion-resistant, cost-effective, and easier to design compared to metal parts. They also allow for more complex shapes, integrated features, and color customization without additional finishing processes.",
  },
  {
    question: "Can I Have Flat Surfaces On My Products?",
    answer:
      "Yes, flat surfaces are possible in rotomoulding, but completely flat areas may warp slightly due to cooling shrinkage. To minimize warping, ribs or slight curves are often added to maintain structural integrity and aesthetic appearance.",
  },
  {
    question: "What Are The Density Range & General Purpose MFI Range Of Different Polymers?",
    answer:
      "For rotational moulding, polyethylene (PE) is the most commonly used polymer. Its density ranges from 0.915 g/cm³ to 0.945 g/cm³ depending on the grade (LLDPE, MDPE, HDPE). The typical MFI (Melt Flow Index) range for general-purpose rotomoulding grades is between 3 to 8 g/10min at 190°C, providing an optimal balance between flowability and mechanical strength.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-0">
      {/* Hero Section */}
      <HeroSection title="FAQs" tagline="FAQs" rightImage={aboutGroupImg} />
<div className="container mx-auto">
      {/* FAQ Section */}
      <section className="w-full flex flex-col items-center bg-white py-16">
       
        {/* Heading */}
        <TitleHeading
          tagline="Our FAQs"
          heading="Frequently Ask Questions"
        />

        {/* FAQ List */}
       
         <div className="w-full max-w-5xl flex flex-col gap-5 pb-20 lg:pb-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`relative rounded-xl p-[1px] transition-all duration-200 cursor-pointer ${
                openIndex === index
                  ? "border-gradients"
                  : "bg-transparent border border-gray-200"
              }`}
            >
              {/* Inner White Background */}
              <div className="flex flex-col rounded-xl bg-white p-4 sm:p-5">
                {/* Question */}
                <div className="flex justify-between items-center gap-3">
                  <h3 className="text-sm sm:text-base md:text-lg xl:text-2xl font-semibold text-[#011B33] flex-1">
                    {faq.question}
                  </h3>

                  {/* ChevronDown Icon */}
                  <div
                    className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === index
                        ? "bg-gradients text-white rotate-180"
                        : "bg-gray-100 text-green border  rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-[600px] mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-grays text-sm md:text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </section>
      </div>
    </main>
  );
};

export default FAQs;
