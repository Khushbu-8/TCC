import React, { useState } from "react";

import {  HeroSection,  } from "../../components/UI";
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
    {
      question: "What factors should be considered when choosing a coating?",
      answer:
        "Sustainable eco-friendly coating technologies are one of the leading modern trends.",
    },
    {
      question: "What challenges does the industry face?",
      answer:
        "Sustainable eco-friendly coating technologies are one of the leading modern trends.",
    },
    {
      question: "What is the difference between industrial and decorative coatings?",
      answer:
        "Sustainable eco-friendly coating technologies are one of the leading modern trends.",
    },
    
  ];
  return (
    <main className="pt-0">
      <HeroSection
        title="Frequently Ask Questions"
        tag="FAQs"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look."
      />
       <FAQSection 
      faqData={faqData} 
      buttonText ="Load More"
    />
    </main>
  );
};

export default FAQs;
