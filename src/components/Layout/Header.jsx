import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../../../public/header/logo.png";

// SOCIAL IMAGES
import Gmail from "../../../public/social/gmail.png";
import Phone from "../../../public/social/phone.png";
import Linkedin from "../../../public/social/linkedin.png";
import Whatsapp from "../../../public/social/whatsapp.png";
import Mail from "../../../public/social/gmail.png";
import X from "../../../public/social/x.png";
// ↓ import arrow icon
import { IoIosArrowDown } from "react-icons/io";

import Button from "../UI/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/" },
    { label: "Products", to: "/" },
    { label: "Gallery", to: "/" },
    { label: "Blog", to: "/" },
    { label: "FAQs", to: "/" },
    { label: "Contact Us", to: "/" },
  ];
  // const menu = [
  //   { label: "Home", to: "/" },
  //   { label: "About Us", to: "/about" },
  //   { label: "Products", to: "/products" },
  //   { label: "Gallery", to: "/gallery" },
  //   { label: "Blog", to: "/blog" },
  //   { label: "FAQs", to: "/faqs" },
  //   { label: "Contact Us", to: "/contact" },
  // ];

  return (
    <>
      {/* ============================= TOP BLACK BAR ============================= */}
      <div className="w-full bg-black text-white py-3 px-4 hidden md:px-10 md:flex flex-wrap justify-between items-center rounded-b-3xl gap-y-3">
        {/* Left Email + Phone */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="border border-white bg-gray w-8 h-8 rounded-full flex justify-center items-center">
              <img src={Gmail} className="w-4" />
            </span>
            <p>garry@empathy-technologies.com</p>
          </div>

          <span className="hidden md:block h-6 w-[1px] bg-gray"></span>

          <div className="flex items-center gap-2">
            <span className="border border-white bg-gray w-8 h-8 rounded-full flex justify-center items-center">
              <img src={Phone} className="w-4" />
            </span>
            <p>+91 63967 95374</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[Linkedin, Whatsapp, Mail, X].map((icon, i) => (
            <span
              key={i}
              className="border border-white bg-gray w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition"
            >
              <img src={icon} className="w-4" />
            </span>
          ))}
        </div>
      </div>

      {/* ============================= MAIN NAVBAR ============================= */}
      <header className="bg-white w-full py-4 flex flex-wrap items-center md:justify-between px-4 lg:px-12">
        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={() => setMenuOpen(true)}>
          <BiMenuAltLeft size={30} />
        </button>

        {/* Logo + Navigation */}
        <div className="flex items-center justify-center gap-6">
          <Link to="/">
            <img src={logo} className="h-14 object-contain" />
          </Link>

          <span className="hidden xl:block h-6 border-l-2"></span>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex gap-10 text-[17px] font-semibold relative">
            {menu.map((item) =>
              item.label === "Products" ? (
                <div key={item.to} className="group relative cursor-pointer">
                  {/* Main Menu Item With Arrow */}
                  <div className="flex items-center gap-1 text-black hover:!text-[#D80505]">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `${isActive ? "text-black" : "text-black"}`
                      }
                    >
                      {item.label}
                    </NavLink>

                    {/* Arrow */}
                    <IoIosArrowDown
                      size={14}
                      className="mt-[2px] group-hover:rotate-180 transition duration-300"
                    />
                  </div>

                  {/* ================= DROPDOWN ON HOVER ================= */}
                  <div className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-lg rounded-lg w-48 py-3 z-[1000]">
                    {/* Dropdown items → Replace with your Real Product pages */}
                    {[
                      "Product One",
                      "Product Two",
                      "Product Three",
                      "Product Four",
                    ].map((p, i) => (
                      <NavLink
                        key={i}
                        to={`/products/${p.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-6 py-2 hover:bg-[#D80505] hover:text-white transition"
                      >
                        {p}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                // Normal Menu Items Except Products
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-black" : "text-black"
                    } hover:text-[#D80505]`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* CTA BUTTON RIGHT */}
        <div className="hidden md:flex">
          <Button
            text="Get A Quote"
            onClick={() => (window.location.href = "/contact")}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
