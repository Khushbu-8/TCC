import React from "react";
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
import { HeroSection } from "../../components/UI";
import { Gallery } from "../../components/Gallery";

const GalleryPage = () => {
  return (
    <main className="pt-0">
      {/* <HeroSection title="Gallery" tagline="Gallery" rightImage={aboutGroupImg} /> */}
      <HeroSection
        title="Surface Finishes Gallery"
        tag="Gallery"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look."
      />
      <div className="container">
        <Gallery />
        
      </div>
    </main>
  );
};

export default GalleryPage;
