import React from "react";
import { ArrowUpRight } from "lucide-react";

import AwardIcon from "../../assets/images/award.png";
import HelpIcon from "../../assets/images/HelpIcon.png";
import StructureIcon from "../../assets/images/Infrastructure.png";
import  TitleHeading  from "../UI/TitleHeading";

const services = [
  {
    id: "01",
    title: "Quality",
    description:
      "We believe quality is not an USP but a necessity. Each & every batch at Greenage is fully tested on...",
    icon: AwardIcon,
    gradient: "bg-white",
  },
  {
    id: "02",
    title: "Why Greenage?",
    description:
      "It cuts down heavily on investment required for hi-tech machines used for Granulation...",
    icon: HelpIcon,
    gradient: "bg-white",
  },
  {
    id: "03",
    title: "Infrastructure",
    description:
      "GreenAge Boasts Of State-Of-The-Art Infrastructure Equipped With Latest Technology And World Class...",
    icon: StructureIcon,
    gradient: "bg-white",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto   text-center">
        {/* Section Title */}
      <TitleHeading tagline="SERVICES" heading="What We Provide?"  />

        {/* Service Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-xl p-6 sm:p-8 border  shadow-lg transition-all duration-300 relative ${service.gradient}`}
              style={{
                background: "white",
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(180deg, #83BF2D -53.23%, #00A3AF 191.13%)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "white")
              }
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-gray-100 border rounded-full p-3 shadow-md flex items-center justify-center shrink-0">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <h3
                  className={`text-lg sm:text-xl xl:text-3xl font-semibold text-blacks group-hover:!text-white`}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`mb-6 text-start text-sm sm:text-base xl:text-lg leading-relaxed text-grays group-hover:!text-white`}
              >
                {service.description}
              </p>

              {/* Learn More + ID */}
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm md:text-base xl:text-lg font-semibold text-gradient group-hover:text-white"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 text-green-500 group-hover:text-white" />
                </a>
                <span className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-40 text-gray-400 group-hover:text-white">
                  {service.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
