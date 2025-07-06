import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: "MVP Development Expertise",
      description:
        "We help turn ideas into fully functional MVPs, enabling you to validate your concept quickly and cost-effectively.",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Our team crafts seamless, responsive, and feature-rich web and mobile applications tailored to your business needs.",
    },
    {
      title: "Website Development",
      description:
        "From landing pages to complex platforms, we build fast, secure, and scalable websites that reflect your brand identity.",
    },
    {
      title: "Talent Management",
      description:
        "We source, manage, and nurture top talent, ensuring the right people are in place to help your business grow.",
    },
    {
      title: "Digital Marketing Excellence",
      description:
        "Boost your online presence with strategic campaigns designed to increase visibility, engagement, and conversion.",
    },
    {
      title: "Content Creation",
      description:
        "We create compelling content—from blogs to videos—that engages your audience and aligns with your brand voice.",
    },
    {
      title: "Social Media Mastery",
      description:
        "Our experts manage your social media platforms with precision, increasing reach and driving meaningful interaction.",
    },
    {
      title: "Branding Brilliance",
      description:
        "We develop powerful brand identities, including logos, tone, and messaging that resonate with your target audience.",
    },
    {
      title: "Influencer Marketing",
      description:
        "We connect you with the right influencers to amplify your brand, build trust, and expand your market reach.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white font-mersad">
      {/* Decorative images */}
      <img
        src="/4.png"
        alt=""
        className="absolute top-0 right-0 w-48 md:w-56 object-contain -mt-8 -mr-4"
        aria-hidden="true"
      />
      <img
        src="/4.png"
        alt=""
        className="absolute bottom-0 left-0 w-48 md:w-56 object-contain -mb-24 -ml-4"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 sm:pt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-black text-center sm:text-left">
          The Secrets We Deliver
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-xs sm:max-w-sm md:max-w-[300px] mx-auto">
              <h2 className="text-lg font-bold mb-2 text-black text-center sm:text-left">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 text-center sm:text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
