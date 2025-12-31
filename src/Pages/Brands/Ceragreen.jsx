import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/ceragreen.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const Ceragreen = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="UV Coatings: Advanced Surface Protection"
        tag="CERAGREEN"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
      <BrandDetailSection
      heading="CERAGREEN"
      BrandHeading="Reliable 2-Layers Non-Stick Coating Solutions"
      description="PROTECTIX™ is a 2-layers non-stick coating system designed to deliver excellent performance at an affordable cost, without compromising on quality or reliability. Engineered for value-driven applications, PROTECTIX™ offers an ideal balance between performance, durability, and cost efficiency.."
       benefits={[
        "Outstanding Non-Stick Performance Provides smooth release and consistent cooking results with very good non-stick properties.",
        "Cost-Effective Solution Designed to deliver high-quality finishes at an affordable price point, making it perfect for value-conscious markets.",
        "Two-Layer Coating Technology Ensures enhanced adhesion, improved surface durability, and reliable performance over extended use.",
        "Ideal for Entry-Level Cookware A smart choice for manufacturers seeking dependable coating performance for entry-level and mass-market cookware products",
        "Consistent Quality Finish Delivers uniform coating appearance and reliable surface protection.",
      ]}
      applications={[
        "Rolled",
        "Forged",
        "Cast Aluminum",
      ]}
      image={productImg}
      logo={protectixLogo}
    />
    </main>
  );
};

export default Ceragreen;
