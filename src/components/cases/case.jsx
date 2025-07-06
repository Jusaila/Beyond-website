import React from "react";

export default function CaseStudy() {
  const sections = [
    {
      tag: "FITVANTAGE",
      title: "Fitvantage's user acquisition soared 150% after our brand and UX overhaul",
      features: ["Branding", "UI/UX Design", "Web Development", "Art Direction"],
      imageUrl: "/about/case1.png",
      imagePosition: "left",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-12 h-[300px] flex flex-col justify-center items-center pt-4">
        <h1 className="text-6xl font-bold mb-2 font-mersad">
          Where <span className="text-[#121EC5]">Passion</span> <br />
          Meets <span className="text-[#121EC5]">Performance</span>
        </h1>
        <p className="text-[#636363] text-lg font-manrope">
          Explore the impactful projects that turn creativity into business growth
        </p>
      </header>

      {/* Case Study Sections */}
      <div className="space-y-4 w-full">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Parent div with adjusted height and rounded corners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden items-stretch h-[500px] rounded-2xl">
              {/* Image Section */}
              <div
                className={`flex rounded-2xl overflow-hidden ${
                  section.imagePosition === "right" ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={section.imageUrl}
                  alt="Case Study Illustration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div
                className={`p-6 flex flex-col justify-center bg-[#F8F9FA] rounded-2xl ${
                  section.imagePosition === "right" ? "md:order-1" : "md:order-2"
                }`}
              >
                <span className="text-indigo-600 font-semibold text-xs tracking-wider mb-2">
                  {section.tag}
                </span>

                <h2 className="text-2xl font-bold leading-tight mb-2 text-gray-900">
                  {section.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Fitvantage underwent a complete brand and UX overhaul that resulted in a remarkable
                  150% increase in user acquisition. Our strategic approach focused on enhancing the
                  visual identity, streamlining user interactions, and optimizing the website experience
                  to align with user needs.
                </p>

                <h3 className="text-base font-semibold text-gray-900 mb-2">Services</h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1 mb-3 text-sm">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="font-semibold">{feature}</li>
                  ))}
                </ul>

                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-medium w-fit hover:bg-indigo-700 transition-colors"
                  aria-label="View case study details"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
