import React from 'react';
import { 
  Hero, 
  AboutUs, 
  Services, 
  Expertise, 
  OurClients, 
  OurReviews, 
  GallerySlider,
  // ImageSlider
} from '../../components/Home';
import { ScrollToTop } from '../../components/UI';

const Home = () => {
  return (
    <main>
      <Hero />
     <div className='container '>
      <AboutUs />
      <Services />
      <Expertise />
     </div>
      <GallerySlider />
      <OurClients />
       <div className='container '>
      <OurReviews />
       </div>
     
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
};

export default Home;