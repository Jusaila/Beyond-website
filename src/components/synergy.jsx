"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Synergy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress into different animation values
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Custom transform paths for each word
  const adaptiveTransform = {
    x: useTransform(scrollYProgress, [0, 0.5], [0, -50]),
    y: useTransform(scrollYProgress, [0, 0.5], [100, -100]),
  };

  const empoweringTransform = {
    x: useTransform(scrollYProgress, [0, 0.5], [0, -180]),
    y: useTransform(scrollYProgress, [0, 0.5], [50, -50]),
  };

  const innovationTransform = {
    x: useTransform(scrollYProgress, [0, 0.5], [0, 180]),
    y: useTransform(scrollYProgress, [0, 0.5], [50, -50]),
  };

  const creativeTransform = {
    x: useTransform(scrollYProgress, [0, 0.5], [0, -120]),
    y: useTransform(scrollYProgress, [0, 0.5], [50, 80]),
  };

  const transformativeTransform = {
    x: useTransform(scrollYProgress, [0, 0.5], [0, 120]),
    y: useTransform(scrollYProgress, [0, 0.5], [50, 80]),
  };

  return (
    <div ref={containerRef} className="h-[200vh] bg-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative">
          {/* Main Synergy text */}
          <div className="bg-[#0000FF] text-white px-8 py-3 rounded-full text-xl font-medium z-20 relative">
            Synergy
          </div>

          {/* Subheadings container */}
          <motion.div className="absolute w-full" style={{ opacity }}>
            {/* Adaptive */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-lg font-medium"
              style={{
                x: adaptiveTransform.x,
                y: adaptiveTransform.y,
              }}
            >
              Adaptive
            </motion.div>

            {/* Innovation */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-lg font-medium"
              style={{
                x: innovationTransform.x,
                y: innovationTransform.y,
              }}
            >
              Innovation
            </motion.div>

            {/* Transformative */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-lg font-medium"
              style={{
                x: transformativeTransform.x,
                y: transformativeTransform.y,
              }}
            >
              Transformative
            </motion.div>

            {/* Creative */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-lg font-medium"
              style={{
                x: creativeTransform.x,
                y: creativeTransform.y,
              }}
            >
              Creative
            </motion.div>

            {/* Empowering */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-lg font-medium"
              style={{
                x: empoweringTransform.x,
                y: empoweringTransform.y,
              }}
            >
              Empowering
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
