import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import galleryImage1 from "../../assets/images/galleryImage1.jpg";
import galleryImage2 from "../../assets/images/galleryImage2.jpg";
import galleryImage3 from "../../assets/images/galleryImage3.jpg";
import galleryImage4 from "../../assets/images/galleryImage4.png";
import galleryImage5 from "../../assets/images/galleryImage5.jpg";
import galleryImage6 from "../../assets/images/galleryImage6.jpg";
import SearchIcon from "../../assets/images/search.png";
import PrevIcon from "../../assets/images/prev-icon.png"; // your prev icon
import NextIcon from "../../assets/images/next-icon.png"; // your next icon
import TitleHeading from "../UI/TitleHeading";
import { Button } from "../UI";

const galleryImages = [
  { id: 1, img: galleryImage1, alt: "Gallery Image 1" },
  { id: 2, img: galleryImage2, alt: "Gallery Image 2" },
  { id: 3, img: galleryImage3, alt: "Gallery Image 3" },
  { id: 4, img: galleryImage4, alt: "Gallery Image 4" },
  { id: 5, img: galleryImage5, alt: "Gallery Image 5" },
  { id: 6, img: galleryImage6, alt: "Gallery Image 6" },
  { id: 7, img: galleryImage1, alt: "Gallery Image 1" },
  { id: 8, img: galleryImage2, alt: "Gallery Image 2" },
  { id: 9, img: galleryImage3, alt: "Gallery Image 3" },
  { id: 10, img: galleryImage4, alt: "Gallery Image 4" },
  { id: 11, img: galleryImage5, alt: "Gallery Image 5" },
  { id: 12, img: galleryImage6, alt: "Gallery Image 6" },
];

const GallerySlider = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Animate progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 100 / 30)); // 3s progress
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Reset progress on slide change
  const handleSlideChange = () => {
    setProgress(0);
  };

  return (
    <section className="bg-white pt-16">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Title */}
        <TitleHeading tagline="Our Gallery" heading="Gallery Of Excellence" />

        {/* Gallery Slider */}
        <div className="relative mx-auto py-12 px-4 flex justify-center items-center">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            centeredSlides={true}
            loop={true}
            spaceBetween={280}
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.4 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="flex items-center justify-center"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-300 ease-in-out flex justify-center items-center ${
                      isActive
                        ? "scale-[1.2] shadow-xl relative"
                        : "scale-[0.95] z-10"
                    }`}
                  >
                    <div
                      className={`rounded-xl p-2 shadow-lg ${
                        isActive ? "border-gradient" : ""
                      }`}
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg group relative w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] lg:w-[260px] lg:h-[260px]">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(131, 191, 45, 0.5) -53.23%, rgba(0, 163, 175, 0.5) 191.13%)",
                          }}
                        >
                          <div className="rounded-full p-2 sm:p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <img
                              src={SearchIcon}
                              alt="Search"
                              className="w-4 h-4 sm:w-6 sm:h-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        

        {/* Progress Bar + Prev/Next Icons */}
        <div className="relative w-full flex items-center justify-center">
          {/* Prev */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className=" z-20 bg-transparent"
          >
            <img src={PrevIcon} alt="Previous" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Progress Line */}
          <div className="relative w-[120px] md:w-[320px] lg:w-[620px] h-1 bg-gray-300 rounded-full ">
            <div
              className="absolute left-0 -top-0 rounded-full  mx-5 h-1  bg-gradient-to-r from-lime-500 to-cyan-500 transition-all duration-[3000ms]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Next */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=" z-20 bg-transparent"
          >
            <img src={NextIcon} alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* View More Button */}
        <div className="my-8 sm:mt-10 flex justify-center text-center">
          <Button text="View More" className="text-center" />
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
