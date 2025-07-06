import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  const handleHover = () => {
    setIsLoading(false);
    localStorage.setItem("hasHovered", "true");
  };

  const headingAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.2 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 },
    },
  };

  const loaderAnimation = {
    initial: { scale: 1, opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      opacity: 0,
      y: -100,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="h-screen w-screen flex items-center justify-center bg-white fixed top-0 left-0 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/3.png"
              alt="Loading logo"
              width={1000}
              height={1000}
              className="cursor-pointer"
              variants={loaderAnimation}
              initial="initial"
              whileHover="hover"
              onMouseEnter={handleHover}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar Placeholder */}
      <nav className="h-[88px] fixed top-0 left-0 w-full z-40"></nav>

      {/* Hero Section */}
      <motion.main
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container mx-auto px-4 py-12 md:py-20 overflow-hidden mt-[88px]"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Content (Laptop & Desktop: Left-aligned) */}
          <div className="w-full lg:w-[70%] space-y-6 lg:pl-16 text-center lg:text-left">
            <motion.h1
              variants={headingAnimation}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] font-mersad leading-[1.2] tracking-tight font-semibold"
            >
              Worldwide Design Experts{" "}
              <span className="block">Crafting Balanced Solutions</span>{" "}
              <span className="block">for Visionary Brands</span>
            </motion.h1>
            <motion.p
              variants={paragraphAnimation}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              className="text-sm sm:text-base md:text-lg lg:text-base text-[#636363] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-mersad"
            >
              SOCIAL MEDIA MASTERY / DIGITAL MARKETING EXCELLENCE / TALENT
              MANAGEMENT / BRANDING BRILLIANCE / CONTENT CREATION / INFLUENCER
              MARKETING / WEBSITE DEVELOPMENT / WEB & MOBILE APP DEVELOPMENT / MVP
              DEVELOPMENT EXPERTISE
            </motion.p>
          </div>

          {/* Right Image (Laptop: Stays on Right) */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
            className="w-full lg:w-[30%] flex justify-center lg:justify-center lg:pt-20  "
          >
            <img
              src="/group.png"
              alt="Design emblem"
              width={160}
              height={160}
              className="object-contain max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px]"
            />
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default Hero;
