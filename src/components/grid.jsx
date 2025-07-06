import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductShowcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    // Animate images coming from the top
    gsap.to(container.querySelectorAll('.from-top img'), {
      y: '0%', // Slide down into view
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'top 5%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    // Animate images coming from the bottom
    gsap.to(container.querySelectorAll('.from-bottom img'), {
      y: '0%', // Slide up into view
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'top 5%',
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="w-screen h-auto md:h-[600px] flex justify-center items-center pt-8" ref={containerRef}>
      <div className="flex flex-col md:flex-row w-full mx-auto h-full justify-center items-center">
        {/* First div - 100% width on smaller screens, 30% on larger screens */}
        <div className="w-full md:w-[30%] h-full relative image-container overflow-hidden from-top">
          <motion.img
            src="/18.png"
            alt="Product showcase 1"
            className="object-cover w-full h-full"
            initial={{ y: '-100%' }} // Start from top
          />
        </div>

        {/* Second div - 100% width on smaller screens, 20% on larger screens */}
        <div className="w-full md:w-[20%] h-full flex flex-col">
          {/* First image - from top */}
          <div className="h-[50%] image-container overflow-hidden from-top">
            <motion.img
              src="/17.png"
              alt="Product showcase 2"
              className="object-cover w-full h-full"
              initial={{ y: '-100%' }} // Start from top
            />
          </div>
          {/* Second image - from bottom */}
          <div className="h-[50%] image-container overflow-hidden from-bottom">
            <motion.img
              src="/14.png"
              alt="Product showcase 3"
              className="object-cover w-full h-full"
              initial={{ y: '100%' }} // Start from bottom
            />
          </div>
        </div>

        {/* Third div - 100% width on smaller screens, 50% on larger screens */}
        <div className="w-full md:w-[50%] h-full flex flex-col">
          {/* First image - from top */}
          <div className="h-[50%] image-container overflow-hidden from-top">
            <motion.img
              src="/15.png"
              alt="Product showcase 4"
              className="object-cover w-full h-full"
              initial={{ y: '-100%' }} // Start from top
            />
          </div>
          {/* Second image - from bottom */}
          <div className="h-[50%] image-container overflow-hidden from-bottom">
            <motion.img
              src="/16.png"
              alt="Product showcase 5"
              className="object-cover w-full h-full"
              initial={{ y: '100%' }} // Start from bottom
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
