import React from "react";
import { HeroSection } from "../../components/UI";
import IndustrialCoatingProducts from "../../components/Products/IndustrialCoatingProducts";

const IndustrialCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Industrial Coatings: Protection for Harsh Environments"
        tag="Industrial Coatings"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <IndustrialCoatingProducts/>
    </main>
  );
};

export default IndustrialCoatings;
