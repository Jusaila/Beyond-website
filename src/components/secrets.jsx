import React from 'react';

export default function ServicesSection() {
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
          {/* Services */}
          {[
            "MVP Development Expertise",
            "Web & Mobile App Development",
            "Website Development",
            "Talent Management",
            "Digital Marketing Excellence",
            "Content Creation",
            "Social Media Mastery",
            "Branding Brilliance",
            "Influencer Marketing",
          ].map((service, index) => (
            <div key={index} className="max-w-xs sm:max-w-sm md:max-w-[300px] mx-auto">
              <h2 className="text-lg font-bold mb-2 text-black text-center sm:text-left">
                {service}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 text-center sm:text-left">
                Lorem ipsum Dolor Sit Amet Consectetur Pellentibus Phasellus
                Condimentum Amet Aliquet Quam Sem Mattis Maecenas Purus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
