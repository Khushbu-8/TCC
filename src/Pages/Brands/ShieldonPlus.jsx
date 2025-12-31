import React from "react";
import { HeroSection } from "../../components/UI";
import BrandDetailSection from "../../components/Brand/BrandDetailSection";
import productImg from "../../../public/brands/shieldonPlus.png";
import protectixLogo from "../../../public/brands/protectixLogo.png";

const ShieldonPlus = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="The Ultimate 3-Layer Non-Stick Coating Experience"
        tag="SHIELDON™+"
        description="SHIELDON™+ Represents the highest standard in non-stick coating technology—a premium 3-layer coating system engineered for exceptional non-stick performance and long-lasting durability. Designed for excellence, this advanced solution sets a new benchmark in cookware performance."
      />
      <BrandDetailSection
      heading="SHIELDON™+"
      BrandHeading="The Ultimate 3-Layer Non-Stick Coating Experience"
      description="SHIELDON™+ Represents the highest standard in non-stick coating technology—a premium 3-layer coating system engineered for exceptional non-stick performance and long-lasting durability. Designed for excellence, this advanced solution sets a new benchmark in cookware performance."
     description2="Formulated with revolutionary high-performance fluoropolymers, SHIELDON™+ delivers outstanding release properties and exceptional thermal shock resistance, even under extreme cooking temperatures. This ensures consistent performance, safety, and coating integrity over prolonged and intensive use."
     description3="Enhanced with robust nano-metal particle reinforcement, SHIELDON™+ creates a tough, resilient surface that offers superior resistance to scratching, abrasion, and wear. The advanced reinforcement technology significantly extends the lifespan of the coating, making it ideal for premium cookware applications."
      benefits={[
        "Exceptional Non-Stick Properties Ultra-smooth food release for superior cooking and effortless cleaning.",
        "Advanced 3-Layer Coating Technology Multi-layer protection engineered for maximum durability and longevity.",
        "High-Performance Fluoropolymer System Provides excellent heat resistance and thermal shock stability.",
        "Nano-Metal Reinforcement Ensures superior scratch resistance and long-term surface strength.",
        "Premium, Long-Lasting Durability Designed for intensive, long-term use without compromise."
      ]}
      image={productImg}
      logo={protectixLogo}
    />
    </main>
  );
};

export default ShieldonPlus;
