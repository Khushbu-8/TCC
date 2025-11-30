import React from "react";
import logo from "../../../public/header/logo-footer.png";

// SOCIAL ICONS
import LinkedinIcon from "../../../public/social/linkedin.png";
import WhatsappIcon from "../../../public/social/whatsapp.png";
import GmailIcon from "../../../public/social/gmail.png";
import TwitterIcon from "../../../public/social/x.png";

// GALLERY IMAGES
import G1 from "../../../public/gallery/galleryImage1.jpg";
import G2 from "../../../public/gallery/galleryImage2.png";
import G3 from "../../../public/gallery/galleryImage3.jpg";
import G4 from "../../../public/gallery/galleryImage4.png";
import G5 from "../../../public/gallery/galleryImage5.png";
import G6 from "../../../public/gallery/galleryImage6.jpg";

const galleryImages = [G1, G2, G3, G4, G5, G6];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">

      {/* TOP BAR */}
      <div className="bg-[#182683] text-center text-white py-3 text-sm font-medium tracking-wide">
        We Provide Best Quality Services
      </div>

      {/* MAIN GRID */}
      <div
        className="max-w-[1450px] mx-auto px-6 lg:px-16 py-16 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-14 gap-x-10"
      >

        {/* LEFT SECTION = wider (as in reference) */}
        <div className="lg:col-span-2">
          <img src={logo} alt="logo" className="h-14" />

          <p className="text-gray text-[15px] leading-relaxed mt-4 max-w-sm">
            In The Fast-Paced World Of Modern Technology, Many Leadership 
            Executives And Organizations Understand That Building.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">
            {[LinkedinIcon, WhatsappIcon, GmailIcon, TwitterIcon].map((icon, i) => (
              <span
                key={i}
                className="w-10 h-10 border border-white/60 rounded-full 
                flex justify-center items-center cursor-pointer 
                hover:bg-white hover:opacity-100 transition-all duration-300"
              >
                <img src={icon} className="w-[19px]" />
              </span>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="lg:col-span-1">
          <h4 className="text-[20px] font-medium mb-5">Company</h4>
          <ul className="space-y-3 text-gray">
            <li className="hover:text-white cursor-pointer">→ About Us</li>
            <li className="hover:text-white cursor-pointer">→ Products</li>
            <li className="hover:text-white cursor-pointer">→ Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">→ Blogs</li>
            <li className="hover:text-white cursor-pointer">→ Contact Us</li>
          </ul>
        </div>

        {/* Get Help */}
        <div className="lg:col-span-1">
          <h4 className="text-[20px] font-medium mb-5">Get Help</h4>
          <ul className="space-y-3 text-gray">
            <li className="hover:text-white cursor-pointer text-gray">→ FAQs</li>
            <li className="hover:text-white cursor-pointer">→ Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">→ Privacy Policy</li>
          </ul>
        </div>

        {/* GALLERY (perfect balanced grid as screenshot) */}
        <div className="lg:col-span-2 flex flex-col items-start lg:items-start">
          <h4 className="text-[20px] font-medium mb-5">Gallery</h4>

          <div
            className="grid grid-cols-3 gap-x-5 gap-y-6 md:gap-x-6 md:gap-y-7">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="
                  w-[92px] h-[92px] md:w-[95px] md:h-[95px]
                  rounded-lg object-cover 
                  hover:opacity-90 transition-all duration-300
                "
                alt="gallery"
              />
            ))}
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/25 px-6"></div>
      <p className="text-center py-4 text-sm text-gray">
        © 2025 TTC. All rights reserved
      </p>

    </footer>
  );
};

export default Footer;
