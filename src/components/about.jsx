import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const centerSectionRef = useRef(null);
  const sliderRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      if (!isMobile) {
        const centerWidth = centerSectionRef.current.offsetWidth;
        const gap = 15;
        const screenWidth = window.innerWidth;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "300%",
            scrub: true,
            pin: true,
          },
        });

        timeline.to(
          centerSectionRef.current,
          {
            x: `-${screenWidth}px`,
            ease: "none",
          },
          0
        );

        timeline.to(
          leftSectionRef.current,
          {
            opacity: 0,
            ease: "none",
            duration: 0.4,
          },
          0
        );

        timeline.to(
          sliderRef.current,
          {
            x: `-${screenWidth * 0.8}px`,
            ease: "none",
          },
          0
        );

        timeline.to(
          ".slider-1",
          {
            x: `-${screenWidth + gap}px`,
            ease: "none",
            duration: 1,
          },
          ">"
        );

        timeline.fromTo(
          ".slider-2",
          { x: `${screenWidth + gap}px` },
          { x: "0", ease: "none", duration: 1 },
          "<"
        );

        timeline.to(
          ".slider-2",
          {
            x: `-${screenWidth + gap}px`,
            ease: "none",
            duration: 0.5,
          },
          ">"
        );

        timeline.fromTo(
          ".slider-3",
          { x: `${screenWidth + gap}px` },
          { x: "0", ease: "none", duration: 0.5 },
          "<"
        );

        const animateSliderImage = (slider, image, index) => {
          if (index === 2) return;

          const sliderWidth = slider.offsetWidth;
          const imageWidth = image.offsetWidth;
          const maxMove = sliderWidth - imageWidth;

          return gsap.to(image, {
            x: maxMove,
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: slider,
              containerAnimation: timeline,
              start: "left center",
              end: "right center",
              scrub: true,
              onEnter: () => gsap.set(image, { x: 0 }),
              onLeave: () => gsap.set(image, { x: maxMove }),
            },
          });
        };

        const images = [
          slider1Ref.current?.querySelector(".image-slide"),
          slider2Ref.current?.querySelector(".image-slide"),
          slider3Ref.current?.querySelector(".image-slide"),
        ];

        const imageTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "300%",
            scrub: true,
          },
        });

        images.forEach((image, i) => {
          if (image) {
            imageTimeline.add(
              animateSliderImage(
                [slider1Ref, slider2Ref, slider3Ref][i].current,
                image,
                i
              ),
              i
            );
          }
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const slides = [
    {
      ref: slider1Ref,
      class: "slider-1",
      bg: "bg-[#F7F5F6]",
      img: "/5.png",
      title: "Launch Your MVP Fast & Smart",
      desc: "We help you build scalable MVPs that turn your ideas into reality. From wireframes to working prototypes, we help validate your product in the market with speed and precision.",
    },
    {
      ref: slider2Ref,
      class: "slider-2",
      bg: "bg-[#EFFBF9]",
      img: "/19.png",
      title: "Craft a Brand That Speaks Volumes",
      desc: "Our branding experts work closely with you to create a compelling identity—from logo to voice—that connects emotionally with your audience and sets you apart.",
    },
    {
      ref: slider3Ref,
      class: "slider-3",
      bg: "bg-[#F2EDF4]",
      img: "/20.png",
      title: "Master the Art of Social Media",
      desc: "We design and execute high-impact social media strategies that grow your community, increase engagement, and drive measurable business results.",
    },
  ];

  if (isMobile) {
    return (
      <div className="min-h-screen bg-white px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-mersad">
            What About
            <br />
            .beyond?
          </h1>
        </div>

        <div className="space-y-6">
          {slides.map((slider, index) => (
            <div
              key={index}
              className={`${slider.bg} rounded-lg p-6 shadow-lg`}
            >
              <div className="w-48 h-48 mx-auto">
                <img
                  src={slider.img}
                  alt="Abstract Shape"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold mt-4 mb-3 font-mersad text-center">
                {slider.title}
              </h2>
              <p className="text-sm opacity-80 font-mersad text-center">
                {slider.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden relative bg-white"
    >
      <div className="absolute flex w-full h-full z-10">
        <div
          ref={leftSectionRef}
          className="w-1/5 flex flex-col justify-between"
        >
          <img
            src="/4.png"
            alt="Top Left Image"
            className="w-full h-2/6 object-cover"
          />
          <img
            src="/4.png"
            alt="Bottom Left Image"
            className="w-full h-2/6 object-cover"
          />
        </div>

        <div
          ref={centerSectionRef}
          className="w-3/5 flex justify-start items-center"
        >
          <h1 className="text-6xl font-bold pl-8 font-mersad">
            What About
            <br />
            .beyond?
          </h1>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-[80%]">
        <div
          ref={sliderRef}
          className="relative h-full w-full overflow-hidden"
        >
          {slides.map((slider, index) => (
            <div
              key={index}
              ref={slider.ref}
              className={`${slider.class} absolute w-screen h-screen flex items-center ml-10`}
            >
              <div
                className={`w-full ${slider.bg} h-[80%] mt-14 rounded-lg overflow-hidden`}
              >
                <div className="w-96 h-70">
                  <img
                    src={slider.img}
                    alt="Abstract Shape"
                    className="image-slide w-full h-full object-contain rounded-full pt-6 mb-12 pl-12"
                  />
                </div>
                <h2 className="text-6xl font-bold mb-6 text-black pl-12 font-mersad">
                  {slider.title}
                </h2>
                <p className="text-lg font-bold opacity-80 text-black pl-12 font-Manrope max-w-[90%] leading-relaxed">
                  {slider.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
