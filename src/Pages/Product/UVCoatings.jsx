import React from "react";
import { HeroSection } from "../../components/UI";
import UVCoatingproducts from "../../components/Products/UVCoatingproducts";

const UVCoatings = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="UV Coatings: Advanced Surface Protection"
        tag="UV Coatings"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <UVCoatingproducts/>
    </main>
  );
};

export default UVCoatings;
