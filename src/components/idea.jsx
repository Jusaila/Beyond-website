import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Idea() {
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const [fadeClass, setFadeClass] = useState('fade-in'); // State to control fade

  useEffect(() => {
    // Check for mobile screen
    const isMobile = window.innerWidth <= 768; // You can adjust the width for mobile screens

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "+=100%",
        pin: true,
        scrub: 1,
        markers: false,
        onEnter: () => resetPositions(),
        onEnterBack: () => resetPositions(),
        onLeave: () => changeImages(),
        onLeaveBack: () => changeImagesBack(),
        onUpdate: ({ progress }) => {
          if (progress >= 0.8) { // You can adjust the threshold here
            changeImages();
          } else {
            changeImagesBack();
          }
        }
      }
    });

    // Apply movement based on whether it's mobile or not
    if (isMobile) {
      timeline
        .to(leftImageRef.current, { x: 103, ease: 'none' })
        .to(rightImageRef.current, { x: -85, ease: 'none' }, "<");
    } else {
      timeline
        .to(leftImageRef.current, { x: 142, ease: 'none' })
        .to(rightImageRef.current, { x: -136, ease: 'none' }, "<");
    }

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const resetPositions = () => {
    gsap.set([leftImageRef.current, rightImageRef.current], { x: 0 });
    setFadeClass('fade-in'); // Reset fade-in class when resetting positions
  };

  const changeImages = () => {
    if (leftImageRef.current && rightImageRef.current) {
      // Change the source of the images
      leftImageRef.current.setAttribute('src', "/12.png");
      rightImageRef.current.setAttribute('src', "/11.png");

      // Add fade-in effect to the right image
      setFadeClass('fade-in');
    }
  };

  const changeImagesBack = () => {
    if (leftImageRef.current && rightImageRef.current) {
      // Change the source of the images
      leftImageRef.current.setAttribute('src', "/10.png");
      rightImageRef.current.setAttribute('src', "/9.png");

      // Add fade-in effect to the right image
      setFadeClass('fade-in');
    }
  };

  return (
    <div className='w-[200vw]'>
      <div ref={containerRef} className="h-[80vh] bg-white flex items-center justify-center w-[100vw]">
        <div className="flex items-center space-x-24">
          <div className="relative image-left">
          <img
  ref={leftImageRef}
  src="/10.png"
  alt="Image 10"
  className="relative top-20 mr-10 mb-36 md:mb-6"
/>
          </div>
          <div className="relative image-right">
            <img
              ref={rightImageRef}
              src="/9.png"
              alt="Image 9"
              className={`relative -top-20 ml-10 mt-12 transition-opacity duration-1000 ${fadeClass}`}
            />
          </div>
        </div>
      </div>
      <div className='h-full bg-black w-[100vw]' />
    </div>
  );
}

export default Idea;
