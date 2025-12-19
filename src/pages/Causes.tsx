import CausesSection from "../components/CausesSection";

const Causes = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="bg-secondary text-white py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Our <span className="text-primary">Causes</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          We focus on sustainable development and immediate relief for rural and
          underprivileged communities.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4">
      <CausesSection />

      {/* Bottom Content */}
      <div className="pb-24 text-center">
        <div className="bg-gray-50 rounded-[3rem] p-12 sm:p-20 border border-gray-100">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Every Contribution Counts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Each of our causes is driven by a passion to make a real difference.
            Whether it’s feeding the hungry, supporting slum dwellers, or
            providing medical and educational aid, your support helps us spread
            hope and change lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="bg-primary text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-secondary transition-all active:scale-95"
            >
              Support a Cause
            </a>
            <a
              href="/volunteer"
              className="bg-white text-secondary border-2 border-secondary/10 font-bold py-4 px-10 rounded-xl hover:bg-gray-50 transition-all active:scale-95"
            >
              Join as Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Causes;
