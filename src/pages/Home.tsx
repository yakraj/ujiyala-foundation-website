import HeroCarousel from '../components/HeroCarousel';
import StatsSection from '../components/StatsSection';
import CausesSection from '../components/CausesSection';

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <StatsSection />
      <CausesSection />
      
      {/* Mission Statement / About Snippet */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Ujiyala Foundation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a non-profit organization dedicated to uplifting the underprivileged through various social acts. 
            Our mission is to bring light (Ujiyala) to the lives of those in darkness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
