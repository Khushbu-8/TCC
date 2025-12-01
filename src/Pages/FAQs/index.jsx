import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HeroSection, TitleHeading } from "../../components/UI";
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
import FAQSection from "../../components/Faq/FAQSection";


const FAQs = () => {
  const faqData = [
    {
      question: "What Is The Coating Industry?",
      answer:
        "The Coating Industry Involves The Production And Application Of Paints, Varnishes, And Protective Finishes Used To Protect, Decorate, Or Add Functionality To Surfaces Such As Metals, Plastics, Wood, And Concrete",
    },
    {
      question: "What Are The Main Types Of Coatings?",
      answer:
        "There are various types including acrylic, epoxy, polyurethane, and more depending on application needs.",
    },
    {
      question: "What Are Coatings Used For?",
      answer:
        "Coatings are primarily used for corrosion protection, aesthetics, and durability enhancement of surfaces.",
    },
    {
      question: "How Big Is The Global Coating Industry?",
      answer:
        "The global coating industry is vast and continuously growing with widespread industrial usage.",
    },
    {
      question: "What Are The Latest Trends In Coatings?",
      answer:
        "Sustainable eco-friendly coating technologies are one of the leading modern trends.",
    },
  ];
  return (
    <main className="pt-0">
      <HeroSection title="FAQs" tagline="FAQs" rightImage={aboutGroupImg} />

       <FAQSection 
      faqData={faqData} 
      buttonText ="Load More"
    />
    </main>
  );
};

export default FAQs;
