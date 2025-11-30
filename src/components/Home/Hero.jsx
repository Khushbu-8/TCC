import React from "react";
import productImg1 from "../../assets/images/product-hero1.png";
import productImg2 from "../../assets/images/product-hero2.png";
import productImg3 from "../../assets/images/product-hero3.png";
import backgroundImg from "../../assets/images/background-hero.png";
import powder1 from "../../assets/images/Red-Powder.png";
import powder2 from "../../assets/images/Blue-Powder.png";
import powder3 from "../../assets/images/Black-Powder.png";
import powder4 from "../../assets/images/Green-Powder.png";
import RectangleFram from "../../assets/images/Rectangle-fram.png";
import { Button } from "../UI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const powders = [
    { id: 1, img: powder1, label: "Red" },
    { id: 2, img: powder2, label: "Blue" },
    { id: 3, img: powder3, label: "Black" },
    { id: 4, img: powder4, label: "Green" },
  ];
  const slides = [
    {
      id: 1,
      img: productImg1,
    },
    {
      id: 2,
      img: productImg2,
    },
    {
      id: 3,
      img: productImg3,
    },
  ];
  return (
    <section className="relative w-full pt-20 pb-5 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

      {/* Rectangle Frame - Top */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Top"
        className="absolute h-[200px] top-16 left-1/2 -translate-x-1/2 w-full  opacity-90 z-[1] pointer-events-none"
      />
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }} // 👈 smooth fade in/out
        speed={1200} // 👈 controls fade duration (ms)
        loop
        pagination={{ clickable: true }}
        navigation
        className="relative z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 relative z-10">
              {/* Left Content */}
              <div className="flex-1 text-center md:text-left max-w-lg">
                <div className="text-sm md:text-base xl:text-xl font-semibold text-blue inline-block px-3 py-1 rounded-md mb-2">
                  {/* WELCOME TO GREENAGE */}
                  // WELCOME TO GREENAGE //
                </div>
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-snug text-blacks">
                  Rotomoulding LLDPE{" "}
                  <span className="font-normal lowercase">Powder</span>
                </h1>
                <p className="mt-4 text-grays text-base md:text-lg leading-relaxed">
                  Discover high-quality rotomoulding LLDPE powder designed to
                  deliver exceptional durability and performance. Perfect for
                  creating strong, lightweight, and versatile products.
                </p>
                <div className="my-6 flex justify-center md:justify-start">
                  <Button text="Get In Touch" />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 relative flex justify-center items-center mb-8 md:mb-0">
                {/* Background Gradient Box */}
                <div className="absolute -top-10 w-96 h-96 lg:w-96 lg:h-96 bg-gradient-to-b from-[#00A3AF] to-[#83BF2D] rounded-full blur-3xl opacity-40"></div>

                {/* Product Image Wrapper with Fixed Size */}
                <div className="relative z-10 w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[450px] flex items-center justify-center">
                  <img
                    src={slide.img}
                    alt="Product"
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Powder Colors Section */}
      
      <div className="container mx-auto mt-14 px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {powders.map((powder) => (
            <div
              key={powder.id}
              className="bg-white rounded-lg border-1  overflow-hidden group w-40 h-40 lg:w-60 lg:h-52 xl:w-72 xl:h-64 "
            >
              {/* Inner flip card */}
              <div className="relative w-full h-full rounded-2xl  transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
                  <img
                    src={powder.img}
                    alt={powder.label}
                    // className="w-full h-full object-cover"
                    className="w-full h-full  object-contain md:object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] text-green">
                  <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-center px-3">
                    {powder.label}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rectangle Frame - Bottom */}
      <img
        src={RectangleFram}
        alt="Rectangle Frame Bottom"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-90 z-[1] pointer-events-none"
      />
    </section>
  );
};

export default Hero;
