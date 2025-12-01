import React from "react";
import { motion } from "framer-motion";

// Smoother Fade + Up Animation
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],   // smooth cubic-bezier motion
    },
  },
};

const MissionVisionSection = () => {
  return (
    <section className="w-full py-24 flex justify-center bg-gradient-to-br from-[#36142E] via-[#3A2541] to-[#1B1B36]">

      <motion.div
        className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.35, once: false }}
        transition={{ staggerChildren: 0.25 }}   // smoother stagger reveal
      >

        {/* LEFT - MISSION */}
        <motion.div
          variants={fadeUp}
          className="pr-0 md:pr-10 border-r-0 md:border-r border-white/10"
        >
          <motion.h2 variants={fadeUp} className="text-xl font-semibold tracking-wide">
            OUR MISSION
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-white/75"
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            Cum Pretium, Ultrices Sed Faucibus Nulla. Egestas Scque Nat
            Cursus Arcu, Diam. Lorem Ipsum Dolor Sit Amet, Consectetur
            Adipiscing Elit. Cum Pretium, Ultrices Sed Faucibus.
          </motion.p>
        </motion.div>

        {/* RIGHT - VISION */}
        <motion.div variants={fadeUp} className="pl-0 md:pl-10">
          <motion.h2 variants={fadeUp} className="text-xl font-semibold tracking-wide">
            OUR VISION
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-white/75"
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            Cum Pretium, Ultrices Sed Faucibus Nulla. Egestas Scque Nat
            Cursus Arcu, Diam. Lorem Ipsum Dolor Sit Amet, Consectetur
            Adipiscing Elit. Cum Pretium, Ultrices Sed Faucibus.
          </motion.p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default MissionVisionSection;
