import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Talk() {
  const sectionRef = useRef(null);
  const arcRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 60%",
      end: "bottom 90%",
      onEnter: () => {
        // Sync arc and paragraph
        gsap.to(arcRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out'
        });
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out'
        });

        // Heading with smoother and slower animation
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: 'power3.out'
        });

        // "Let's Talk!" subheading with even slower transition
        gsap.to(subheadingRef.current, {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: 'power3.out'
        });

        setIsFullyVisible(true);
      },
      onLeaveBack: () => {
        gsap.to(arcRef.current, {
          opacity: 0,
          y: 200,
          duration: 1.5,
          ease: 'power3.out'
        });
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 200,
          duration: 1.5,
          ease: 'power3.out'
        });

        // Reset heading and subheading positions
        gsap.to(headingRef.current, {
          opacity: 0,
          y: 200,
          duration: 1,
          ease: 'power3.out'
        });

        gsap.to(subheadingRef.current, {
          opacity: 0,
          y: 200,
          duration: 1.5,
          ease: 'power3.out'
        });

        setIsFullyVisible(false);
      },
    });

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Arcs */}
      <div
        ref={arcRef}
        className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-0 transform translate-y-[200px]"
      >
        <div className="relative w-[400px] h-[400px]">
          {/* Larger Arc */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ clipPath: 'inset(0 0 25% 0)' }}
          >
            <defs>
              <linearGradient id="arcGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="rgba(180, 180, 180, 1)" />
                <stop offset="75%" stopColor="rgba(180, 180, 180, 0.3)" />
                <stop offset="100%" stopColor="rgba(180, 180, 180, 0)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48.7"
              stroke="url(#arcGradient)"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
          {/* Smaller Arc */}
          <svg
            className="absolute inset-0 w-[85%] h-[85%]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ clipPath: 'inset(0 0 25% 0)', top: '7.5%', left: '7.5%' }}
          >
            <defs>
              <linearGradient id="smallArcGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="rgba(180, 180, 180, 1)" />
                <stop offset="75%" stopColor="rgba(180, 180, 180, 0.3)" />
                <stop offset="100%" stopColor="rgba(180, 180, 180, 0)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="42.3"
              stroke="url(#smallArcGradient)"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: isFullyVisible ? 1 : 0, y: isFullyVisible ? 0 : 200 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        ref={contentRef}
        className="relative z-10 text-center mx-auto space-y-4 font-mersad mt-24"
      >
        <h2 ref={headingRef} className="text-5xl font-bold text-gray-900">
          Have A Great Idea?
        </h2>
        <h3 ref={subheadingRef} className="text-5xl font-semibold text-[#121EC5]">
          Let's Talk!
        </h3>
        <p className="text-gray-500 text-md px-8 pt-6">
          Lorem Ipsum Dolor Sit Amet Consectetur.<br />Pharetra Condimentum Amet Aliquet Quam<br /> Nam
          Mattis Maecenas Purus.
        </p>
        <button className="bg-[#121EC5] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
}
