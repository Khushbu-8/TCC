import React from 'react';
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
import { HeroSection } from '../../components/UI';
import { Gallery } from '../../components/Gallery';


const GalleryPage = () => {
  return (
    <main className="pt-0">
      <HeroSection title="Gallery" tagline="Gallery" rightImage={aboutGroupImg} />
      <div className="container">
         <Gallery/>
      </div>
     
    </main>
  );
};

export default GalleryPage;