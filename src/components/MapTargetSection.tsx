import React from 'react';

const MapTargetSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Reach & Target</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 min-w-[300px]">
            {/* Simple embedded map (replace src with your actual target area) */}
            <iframe
              title="Ujiyala Foundation Target Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.2090%2C28.6139%2C77.3090%2C28.7139&amp;layer=mapnik"
              className="w-full h-64 md:h-80 rounded-lg border shadow"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex-1 min-w-[250px] text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">Our Target</h3>
            <p className="text-lg text-gray-700 mb-4">
              We aim to impact 10,000+ lives in the next year by focusing on education, health, and basic needs in the Delhi NCR region and beyond.
            </p>
            <ul className="list-disc list-inside text-left text-gray-600">
              <li>Slum area children education</li>
              <li>Food and nutrition drives</li>
              <li>Medical camps and awareness</li>
              <li>Women empowerment initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapTargetSection;
