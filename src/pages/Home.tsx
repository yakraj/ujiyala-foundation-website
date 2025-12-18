import HeroCarousel from '../components/HeroCarousel';
import StatsSection from '../components/StatsSection';
import CausesSection from '../components/CausesSection';
import MapTargetSection from '../components/MapTargetSection';
import FoundersSection from '../components/FoundersSection';

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <StatsSection />
      <CausesSection />
      <MapTargetSection />
      <FoundersSection />

      {/* About & Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Ujiyala Foundation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ujiyala Foundation is a non-profit organization dedicated to uplifting the underprivileged through food, education, health, and hope. Our mission is to bring light (Ujiyala) to the lives of those in darkness by addressing hunger, homelessness, education, and health.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Our Vision</h3>
              <p className="text-gray-600">A world where every individual has access to food, shelter, education, and healthcare, and where hope thrives in every heart.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-2">Our Mission</h3>
              <p className="text-gray-600">To empower communities by providing essential resources, fostering education, and supporting health and well-being for all.</p>
            </div>
          </div>
          <div className="bg-primary/10 p-6 rounded-xl shadow-inner max-w-2xl mx-auto mb-8">
            <h4 className="text-xl font-bold text-primary mb-2">Our Core Values</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-left mx-auto max-w-md">
              <li>Compassion and empathy for all</li>
              <li>Transparency and accountability</li>
              <li>Community-driven solutions</li>
              <li>Inclusivity and respect</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-4xl font-extrabold text-primary mb-2">10,000+</div>
              <div className="text-gray-700">Lives Impacted</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-4xl font-extrabold text-primary mb-2">5,000+</div>
              <div className="text-gray-700">Meals Served</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-4xl font-extrabold text-primary mb-2">1,200+</div>
              <div className="text-gray-700">Children Educated</div>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">With your support, we continue to expand our reach and bring hope to more communities every year.</p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Patio-Aug-2014.JPG" alt="Partner 1" className="h-12 rounded shadow" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Unicef_logo.png" alt="Partner 2" className="h-12 rounded shadow" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/World_Food_Programme_logo.svg" alt="Partner 3" className="h-12 rounded shadow" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Save_the_Children_logo.svg" alt="Partner 4" className="h-12 rounded shadow" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-700 mb-4">“Ujiyala Foundation changed my life. My children now go to school and we have food on our table.”</p>
              <div className="font-bold text-primary">- Rekha Devi, Beneficiary</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-700 mb-4">“I am proud to support Ujiyala. Their transparency and dedication are unmatched.”</p>
              <div className="font-bold text-primary">- Amit S., Donor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-200 mb-8">Join us as a volunteer or make a donation to help us spread more light!</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="/volunteer" className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow hover:bg-primary hover:text-white border-2 border-primary transition-all text-lg">Become a Volunteer</a>
            <a href="/donate" className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow hover:bg-red-700 border-2 border-primary transition-all text-lg">Donate Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
