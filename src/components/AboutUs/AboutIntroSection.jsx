import React from "react";
import GirlImage from "../../../public/about/IntroImage.png";
import { Button, TitleHeading } from "../UI";
import { motion } from "framer-motion";

// ⬇ Soft & Smooth Variant
const smoothFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // buttery smooth
    },
  },
};

// Soft left slide image animation
const smoothImage = {
  hidden: { opacity: 0, x: -50, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const AboutIntroSection = ({ hidden }) => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          variants={smoothImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={GirlImage}
            alt="about-person"
            className="z-20 w-full md:w-[380px] lg:w-[430px] object-contain"
          />
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}  // smoother stagger timing
          className="text-left"
        >

          {/* HEADING */}
          <motion.div variants={smoothFadeUp}>
            <TitleHeading
              tag="About Us"
              heading="The journey of thousand miles begins with one steps."
              align="left"
              text="text-black"
            />
          </motion.div>

          {/* SUBHEADING */}
          <motion.p variants={smoothFadeUp} className="text-lg mt-3 font-semibold text-blue">
            10+ Years Of Experience In This Fields.
          </motion.p>

          {/* PARAGRAPH 1 */}
          <motion.p variants={smoothFadeUp} className="text-gray mt-5 leading-relaxed">
            At [TTC], We Specialize In Delivering Advanced Coating Solutions
            That Protect, Enhance, And Extend The Life Of Surfaces Across
            Industries...
          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p variants={smoothFadeUp} className="text-gray mt-5 leading-relaxed">
            We Are A Leading Provider Of Industrial Coating Systems Designed To
            Withstand Extreme Environments And Deliver Superior Protection...
          </motion.p>

          {/* BUTTON */}
          {!hidden && (
            <motion.div variants={smoothFadeUp} className="pt-5">
              <Button text="Get A Quote" onClick={() => (window.location.href = "/contact")} />
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
