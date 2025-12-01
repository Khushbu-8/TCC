import React from 'react';
import FadeInUp from '../../components/animations/FadeInUp'; // 🔥 import animation wrapper

import { ScrollToTop } from '../../components/UI';
import AboutIntroSection from '../../components/AboutUs/AboutIntroSection';
import WhyChooseUs from '../../components/AboutUs/WhyChooseUs';
import BrandLogoSection from '../../components/AboutUs/BrandLogoSection';
import ConnectWithTeam from '../../components/AboutUs/ConnectWithTeam';
import LatestBlogsSection from '../../components/Home/LatestBlogsSection';
import ProductsSection from '../../components/Home/ProductsSection';
import FAQSection from '../../components/Faq/FAQSection';

const Home = () => {
  const faqData = [
    { question: "What Is The Coating Industry?", answer:"The Coating Industry involves..." },
    { question: "What Are The Main Types Of Coatings?", answer:"There are various types..." },
    { question: "What Are Coatings Used For?", answer:"Coatings are primarily used for..." },
    { question: "How Big Is The Global Coating Industry?", answer:"The global coating industry..." },
    { question: "What Are The Latest Trends In Coatings?", answer:"Sustainable eco-friendly..." },
  ];

  return (
    <main>

      <FadeInUp>
        <div className="container">
          <AboutIntroSection hidden={false} />
        </div>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <ProductsSection />
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="container">
          <WhyChooseUs />
        </div>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <BrandLogoSection />
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <FAQSection faqData={faqData} buttonText="View More" />
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <ConnectWithTeam />
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="container">
          <LatestBlogsSection />
        </div>
      </FadeInUp>

      <ScrollToTop />
    </main>
  );
};

export default Home;
