import React from "react";
import { HeroSection } from "../../components/UI";
import CoatingSection from "../../components/Products/CoatingSection";

const Cookware = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Types of Cookware Coatings Explained"
        tag="Cookware"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <CoatingSection/>
    </main>
  );
};

export default Cookware;
