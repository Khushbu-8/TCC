import React from "react";
import { motion } from "framer-motion";
import TeamImage from "../../../public/about/man.png";
import { Button, TitleHeading } from "../UI";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ConnectWithTeam = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#151824] via-[#29232b] to-[#3a2226]" />
      <div className="absolute left-0 top-0 w-[220px] h-full bg-gradient-to-r from-[#151824] to-transparent" />
      <div className="absolute right-0 top-0 w-[220px] h-full bg-gradient-to-l from-[#3a2226] to-transparent" />

      <div className="container">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 px-6 text-white">

          {/* LEFT SIDE TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // animate every scroll
            transition={{ staggerChildren: 0.2 }}
          >
              <TitleHeading
                tag="Contact Us"
                heading="Connect With Our Team"
                text="text-white"
                align="left"
              />

            <motion.p variants={fadeUp} className="text-gray mt-4 max-w-md">
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout. The Point
              Of Using Lorem Ipsum.
            </motion.p>

             <div className="py-5">
               <Button
                text="Get A Quote"
                onClick={() => (window.location.href = "/contact")}
              />
             </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex justify-center"
          >
            <img
              src={TeamImage}
              alt="Team Support"
              className="w-[440px] lg:w-[520px] drop-shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConnectWithTeam;
