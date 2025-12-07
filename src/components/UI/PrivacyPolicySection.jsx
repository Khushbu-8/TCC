import React from "react";
import TitleHeading from "./TitleHeading";

const PrivacyPolicySection = () => {
  return (
    <section className="w-full bg-white text-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <TitleHeading
          tag="Privacy & Policy"
          heading="Privacy Of TTC"
          align="center"
          text="text-black"
        />
        {/* Content */}
        <div className="leading-relaxed space-y-5 text-gray pt-10">
          {/* Section 1 */}
          <p>
            Every Person And Organization That Works With Us Is Treated With
            Respect For Their Privacy. We Have Developed A Policy In This
            Regard, Which We Strongly Advise Everyone Doing Business With Us To
            Read In Order To Understand Our Position On The Use Of Personal
            Data. We Will Assume That If You Give Us Personal Information, You
            Have Given Your Consent To The Disclosures Outlined In This Policy
            Where Necessary And Appropriate.
          </p>

          {/* Purpose Heading */}
          <h2 className="text-xl font-semibold text-black">The Purpose</h2>
          <p>
            The Purpose Of Our Website Is To Introduce You To Who We Are And
            What We Do. We Collect And Use Personal Information (Such As Name,
            Address, Phone Number, And Email) To More Effectively Provide The
            Services Or Information You Want. As A Result, We Would Employ Your
            Personal Data To Satisfy Any Requests Or Questions You've Made.
            <br />
            <br />
            Process Any Orders Or Requests You Have Put In.
            <br />
            <br />
            We May Also Manage Or Otherwise Carry Out Our Obligations Under Any
            Agreement You May Have With Us, Anticipate And Address Problems With
            Any Goods Or Services We Supply To You, And Create Goods Or Services
            That May Be Able To Meet Your Requirements.
            <br />
            <br />
            In Order To Better Our Services, We May Use Your Personal
            Information For Direct Marketing. We Will Only Use Your Personal
            Information For This Purpose If You Are Aware Of It Because We
            Respect Your Right To Privacy. We Will Also Request Your Consent
            Before Utilizing Your Information For Direct Marketing, If
            Necessary.
            <br />
            <br />
            Please Get In Touch With Us Using The Information Provided Below If
            You Ever Want Us To Stop Using Your Information For Any Or All Of
            The Aforementioned Reasons. When It Becomes Technically Possible, We
            Will Stop Utilizing Your Information For These Purposes.
            <br />
            <br />
            Unless Otherwise Stated In This Privacy Statement, We Will Not
            Disclose Any Personally Identifiable Information Without Your
            Consent Unless We Are Required To By Law (Such As If Required To By
            A Court Order Or For The Purpose Of Preventing Fraud Or Another
            Crime), Or If We Believe That Such Action Is Necessary To Protect
            And/Or Defend Our Rights, Property, Or Personal Safety, As Well As
            The Rights, Property, Or Personal Safety Of Our Users/Customers Or
            Other Third Parties.
            <br />
            <br />
            Rest Assured That If You Have Indicated That You Do Not Want Us To
            Use Your Information In This Manner While Providing The Information
            Or Later, We Will Not Use It For Any Of The Aforementioned Purposes.
          </p>

          {/* Non-Personal Info */}
          <h2 className="text-xl font-semibold text-black">
            Collection Of Non-Personal Information
          </h2>
          <p>
            We May Automatically Collect Anonymous Information About You, Such
            As The Type Of Web Browsers You Employ Or The URL Of The Website
            From Which You Linked To Ours. Additionally, We Might Combine Data
            You’ve Given To The Website, Such As Your Age And Residence. Your
            Identity Is Kept Anonymous, And We Only Utilize The Information We
            Collect To Run Our Website’s Service Efficiently.
          </p>

          {/* Security */}
          <h2 className="text-xl font-semibold text-black">Security</h2>
          <p>
            We Have Put Technologies And Regulations In Place To Safeguard Your
            Privacy Against Unauthorized Access And Improper Usage. We Will
            Revise These Precautions As Needed As New Technology Becomes
            Available.
          </p>

          {/* Use Of Personal Information */}
          <h2 className="text-xl font-semibold text-black">
            Use Of Personal Information
          </h2>
          <p>
            Our Websites Could Connect To Other Websites Or A Different Website
            Could Link To Ours. We Have No Influence On The Privacy Practices Or
            Policies Of Other Websites, As You Might Anticipate. Such Content Is
            Subject To These Terms Of Use And Any Additional Privacy Policies Or
            Information That May Be Made Available In Connection Therewith On
            Their Website. We Suggest You Read The Policy Of Each Website You
            Visit In Order To Better Understand Your Rights And Obligations,
            Particularly If You’re Submitting Any Form Of Content To A
            Third-Party Website. Please Contact The Website’s Manager Or Owner
            If You Have Any Questions Or Concerns.
          </p>

          {/* Cookie Policy */}
          <h2 className="text-xl font-semibold text-black">Cookie Policy</h2>
          <p>
            Cookies Help Us Understand How Visitors Engage With The Material On
            Our Website And Help You Have A Better Experience. Cookies Keep
            Track Of The Browser Version You’re Using And Any Browser Extensions
            You’ve Installed. They Also Keep Track Of Your Preferences So That
            When You Return To The Page, The Default Options—Like Language And
            Region—Are Still In Effect. You Can Rate Websites And Complete
            Comment Forms Using Cookies. Persistent Cookies Are Saved On Your
            Computer For A Longer Period Of Time Than Session Cookies, Which Are
            Temporary Cookies That Vanish When Your Browser Is Closed.
          </p>

          {/* Confidentiality */}
          <h2 className="text-xl font-semibold text-black">Confidentiality</h2>
          <p>
            Couriekaro Respects All Parties Involved As Well As Any Confidential
            Or Proprietary Information, Including Our Partners, Clients, Agents,
            And Users. We Demand The Same Decency From You And Won’t Utilize Any
            Of These Details Without Your Consent.
          </p>

          {/* Changes To Policy */}
          <h2 className="text-xl font-semibold text-black">
            Changes To This Policy
          </h2>
          <p>
            We Retain The Right To Rewrite This Privacy Statement From Time To
            Time. We Will Make Every Effort To Let You Know If There Are Any
            Substantial Changes To This Privacy Statement Or How We Utilize Your
            Personal Information. On This Page, The Updates Will Be Published.
            Please Frequently Review Our Privacy Statement.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-black">Contact Us</h2>
          <p>
            If You Have Any Questions About Our Privacy Practices, Kindly Get In
            Touch With Couriekaro Head Office.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
