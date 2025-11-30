import React from "react";
import faqImage from "../../assets/Whatwedoimages/Bussiness-women.jpg"; // Replace with your image path
import { TitleHeading } from "../UI";

const ContactForm = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Title */}
      {/* <div className="text-center mb-10">
        <p className="text-[#00A3AF] text-sm font-semibold tracking-wide">
          // OUR FAQS //
        </p>
        <h2 className="text-[#231F20] text-3xl md:text-4xl font-bold mt-2">
          Frequently Ask Questions
        </h2>
      </div> */}
     
      {/* Content Wrapper */}
     <div className="container">
         <TitleHeading heading="Frequently Ask Questions" tagline="Our FAQS" />

         <div className="w-full  shadow-xl rounded-xl p-6 lg:p-10 flex flex-col lg:flex-row gap-8">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%] h-full lg:h-[420px] flex justify-center items-center">
          <img
            src={faqImage}
            alt="FAQ"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-[#231F20] text-sm font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="border bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3AF] placeholder-gray-400"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-[#231F20] text-sm font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3AF] placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-[#231F20] text-sm font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="border bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3AF] placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#231F20] text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="border bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3AF] placeholder-gray-400"
              />
            </div>

            {/* Description - Full Width */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-[#231F20] text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter Description"
                rows={4}
                className="border bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A3AF] placeholder-gray-400 resize-none"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-center mt-6">
            <button
              type="submit"
              className=" text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            style={{
                background: "var(--background-color-gradient)",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default ContactForm;
