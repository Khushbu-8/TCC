import React from "react";
import { HeroSection } from "../../components/UI";
import ElectricalCoatingProducts from "../../components/Products/ElectricalCoatingProducts";

const ElectricalAppliance = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Types of Coatings for Electrical Appliances"
        tag="Electrical Appliance"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <ElectricalCoatingProducts/>
    </main>
  );
};

export default ElectricalAppliance;
