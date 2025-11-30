import React from "react";
import aboutGroupImg from "../../assets/AboutUsimages/About-group.png";
import { HeroSection } from "../../components/UI";
import { ContactForm, ContactInfoSection } from "../../components/ContactUs";

const Contact = () => {
  return (
    <main className="pt-0">
      <HeroSection
        title="Contact Us"
        tagline="Contact Us"
        rightImage={aboutGroupImg}
      />

      <div className="py-20">
       
        <ContactForm />
         <ContactInfoSection />
      </div>
    </main>
  );
};

export default Contact;
