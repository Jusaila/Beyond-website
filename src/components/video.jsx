'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Video() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const image = imageRef.current;
    const container = containerRef.current;

    if (!image || !container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 30%', // Start when the top of the container is 40% from the top of the viewport
        end: '+=100vh', // End when the scroll reaches 100vh from the start of the trigger
        scrub: 7, // Reduced scrub value to make it faster
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      image,
      {
        width: '75%',
        height: '75vh',
        borderRadius: '20px',
      },
      {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px',
        ease: 'power3.inOut', // Slightly faster easing
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-[90vh]"> {/* Ensure enough scroll space */}
      <div className="sticky top-0 flex justify-center items-center h-screen overflow-hidden">
        <img
          ref={imageRef}
          className="object-cover"
          src="/video.jpg"
          alt="Video"
        />
      </div>
    </div>
  );
}

export default Video;
