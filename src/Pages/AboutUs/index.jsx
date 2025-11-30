import React from 'react';
import { AboutUs } from '../../components/Home';
import { HeroSection } from '../../components/UI';
import AboutIntroSection from '../../components/AboutUs/AboutIntroSection';
import ConnectWithTeam from '../../components/AboutUs/ConnectWithTeam';
import WhyChooseUs from '../../components/AboutUs/WhyChooseUs';

const AboutUsPage = () => {
  return (
    <main className="pt-0">
      <HeroSection
       title="The Journey Of Thousand Miles Begins With One Steps." 
       tag = "About Us"
       description= "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look." 
      />
    <div className='container'>
      <AboutIntroSection/>
     
        {/* <OurStory />
        <WhyGreenage />
        <People /> */}
     
    </div>
     <ConnectWithTeam/>
     <div className='container'>
      <WhyChooseUs/>
     </div>
    </main>
  );
};

export default AboutUsPage;