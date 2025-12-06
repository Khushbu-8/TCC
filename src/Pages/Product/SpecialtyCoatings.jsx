import React from "react";
import { HeroSection } from "../../components/UI";
import SpecialtyCoatingProducts from "../../components/Products/SpecialtyCoatingProducts";

const SpecialtyCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Innovations in Specialty Coating Technologies"
        tag="Specialty Coatings"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <SpecialtyCoatingProducts/>
    </main>
  );
};

export default SpecialtyCoatings;
