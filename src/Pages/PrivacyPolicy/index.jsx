import React, { useState } from "react";

import {  HeroSection,  } from "../../components/UI";
import PrivacyPolicySection from "../../components/UI/PrivacyPolicySection";


const PrivacyPolicyPage = () => {

  return (
    <main className="pt-0">
      <HeroSection
        title="Cookies & Tracking Technologies"
        tag="Privacy & Policy"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
     <PrivacyPolicySection/>
    </main>
  );
};

export default PrivacyPolicyPage;
