import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

import heart from "../../assets/images/heart.png";

// Import client profile images properly
import clientProfile1 from "../../assets/images/clientProfile1.jpg";
import clientProfile2 from "../../assets/images/clientProfile2.jpg";
import clientProfile3 from "../../assets/images/clientProfile1.jpg";
import clientProfile4 from "../../assets/images/clientProfile2.jpg";
import TitleHeading from "../UI/TitleHeading";

const clients = [
  {
    id: 1,
    name: "Satish Kulkarni",
    designation: "General Manager",
    company: "K K Nag Pvt Ltd",
    profile: clientProfile1,
    feedback:
      "It Was Nice To Have Venture With Greenage Since Last Couple Of Years. We Are Very Much Satisfied With The Service.",
    rating: 3,
  },
  {
    id: 2,
    name: "Swetang Dave",
    designation: "Managing Director",
    company: "Consta Cool Pvt Ltd",
    profile: clientProfile2,
    feedback:
      "GreenAge Is Very Active And Innovative For New Grades & Colour Development In the Rotomoulding Powder.",
    rating: 3,
  },
  {
    id: 3,
    name: "Umesh Joshi",
    designation: "Propreitor",
    company: "Vortex Technoplast Industries",
    profile: clientProfile3,
    feedback:
      "Extra Ordinary Whiteness, Finishing Of Material Is Very Good, Advise To Use MDPE For Strength Of Tank, Reduce Price.",
    rating: 3,
  },
  {
    id: 4,
    name: "Dipen Thapa",
    designation: "Managing Director",
    company: "Sabartax",
    profile: clientProfile4,
    feedback:
      "Quality And Price Is Obviously Loyalty Of GreenAge Is Impressive. Always Ready To Solve All Kind Of Problems.",
    rating: 3,
  },
  {
    id: 5,
    name: "Umesh Joshi",
    designation: "Propreitor",
    company: "Vortex Technoplast Industries ",
    profile: clientProfile3,
    feedback:
      "Extra Ordinary Whiteness, Finishing Of Material Is Very Good, Advise To Use MDPE For Strength Of Tank, Reduce Price.",
    rating: 3,
  },
  {
    id: 6,
    name: "Dipen Thapa",
    designation: "Managing Director",
    company: "Sabartax",
    profile: clientProfile4,
    feedback:
      "Quality And Price Is Obviously Loyalty Of GreenAge Is Impressive. Always Ready To Solve All Kind Of Problems.",
    rating: 3,
  },
];

const OurReviews = () => {
  return (
    <section className="w-full py-16 bg-white">
      {/* Section Heading */}
      <TitleHeading
        tagline="Our Reviews"
        heading="Feedbacks From Our Clients"
      />

      {/* Swiper Slider */}
      <div className="w-full max-w-7xl mx-auto pb-20 lg:pb-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="p-30"
        >
          {clients.map((client) => (
            <SwiperSlide
              key={client.id}
              className="group relative bg-white rounded-2xl  p-6 pt-10 mt-8 flex flex-col  justify-between 
                         transition-all duration-500 border border-gray-400 
                         hover:border-transparent card-glow !h-[300px] md:!h-[350px]" 
            >
              {/* Profile + Heart */}
              <div className="absolute left-1/2 -top-[30px] transform -translate-x-1/2 z-50 flex flex-col items-center">
                <div
                  className="relative w-[110px] h-[60px] border overflow-visible rounded-full bg-white flex items-center justify-center gap-2 z-50
                             profile-glow"
                >
                  <img
                    src={client.profile}
                    alt={client.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {/* Heart Icon */}
                  <div className="bg-white rounded-full p-1.5 shadow-md">
                    <img
                      src={heart}
                      alt="heart"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex  gap-1 mt-8 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className={`${
                      index < client.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-star fill-gray-star"
                    }`}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-grays text-sm md:text-base xl:text-lg leading-relaxed mb-10 line-clamp-3">
                {client.feedback}
              </p>

              {/* Client Info */}
              <h4 className="font-semibold text-blacks text-lg md:text-xl xl:text-2xl line-clamp-1">
                {client.name}
              </h4>
              <p className="text-sm md:text-base xl:text-lg text-blue  mb-2">
                {client.designation}, {client.company}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots + Gradient Hover Border */}
      <style>{`
        .swiper-pagination {
          position: absolute;
          bottom: 0px !important;
          margin-bottom: 0;
        }
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 24px;
          height: 4px;
          border-radius: 10px;
          margin: 0 5px !important;
        }
        .swiper-pagination-bullet-active {
          // background: #00a3af;
           background: var(--background-color-gradient);
          width: 24px;
          border-radius: 10px;
          transition: all 0.3s ease-in-out;
        }
          .swiper-wrapper{
          padding: 0 0 50px 0!important
          }
        /* Gradient Glow Effect for Card */
        .card-glow {
          position: relative;
          transition: all 0.4s ease;
        }
        .card-glow::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          // background: linear-gradient(180deg, #83bf2d -53.23%, #00a3af 191.13%);
          background: linear-gradient(108.57deg, #65B94A 3.36%, #00A3AF 66.8%, #00A3AF 96.89%);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .card-glow:hover::before {
          opacity: 1;
        }

        /* Gradient Glow for Profile + Heart on Card Hover */
        .profile-glow {
          position: relative;
          border-radius: 9999px;
        }
        .group:hover .profile-glow {
          background: linear-gradient(#fff, #fff) padding-box,
                       linear-gradient(108.57deg, #65B94A 3.36%, #00A3AF 66.8%, #00A3AF 96.89%);border-box;
          border: 2px solid transparent;
        }
      `}</style>
    </section>
  );
};

export default OurReviews;
