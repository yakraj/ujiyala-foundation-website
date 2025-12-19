import HeroCarousel from "../components/HeroCarousel";
import StatsSection from "../components/StatsSection";
import FeaturedProjects from "../components/FeaturedProjects";
import MapTargetSection from "../components/MapTargetSection";
import FoundersSection from "../components/FoundersSection";
import {
  ArrowRight,
  Quote,
  Heart,
  Zap,
  HandHeart,
  Users,
  Gift,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroCarousel />
      <StatsSection />

      {/* Introduction Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Rural Impact"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl hidden lg:block max-w-xs">
                <p className="text-4xl font-black mb-2">10k+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                  Lives transformed across rural Maharashtra
                </p>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full -z-0"></div>
            </div>

            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-secondary mt-4 mb-8 leading-tight">
                Bringing <span className="text-primary">Light</span> to the
                Darkest Corners
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Ujiyala Foundation is more than just an NGO. We are a movement
                dedicated to bridging the gap between urban resources and rural
                needs. From sustainable agriculture to digital literacy, we are
                building self-reliant communities.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary">
                      Compassion First
                    </h4>
                    <p className="text-gray-600">
                      Every initiative is driven by deep empathy for the
                      communities we serve.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary">
                      Sustainable Impact
                    </h4>
                    <p className="text-gray-600">
                      We don't just provide relief; we build systems for
                      long-term self-sufficiency.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-4 px-10 rounded-2xl hover:bg-primary transition-all duration-300 shadow-xl shadow-secondary/20 group"
              >
                Learn More About Us
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* How You Can Help Section (The "Special" Section) */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f25b2a_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Get Involved
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">
              How You Can <span className="text-primary">Help</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 group">
              <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <HandHeart size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Donate Funds
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Your financial support provides food, medicine, and education
                kits to those in need.
              </p>
              <Link
                to="/donate"
                className="text-primary font-bold flex items-center gap-2 group/link"
              >
                Donate Now
                <ArrowRight
                  size={18}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Option 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 group">
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-secondary mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Volunteer Time
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Join our ground team in Nashik and help us execute our rural
                development projects.
              </p>
              <Link
                to="/volunteer"
                className="text-white font-bold flex items-center gap-2 group/link"
              >
                Join Us
                <ArrowRight
                  size={18}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Option 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 group">
              <div className="w-20 h-20 bg-primary/20 rounded-[2rem] flex items-center justify-center text-primary mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Gift size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Spread the Word
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Follow us on social media and share our stories to help us reach
                more supporters.
              </p>
              <div className="flex gap-4">
                <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">
                  Follow @ujiyala
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapTargetSection />

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Voices of Change
            </span>
            <h2 className="text-4xl font-black text-secondary mt-4">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-secondary/5 border border-gray-100 relative">
              <Quote
                className="text-primary/10 absolute top-10 right-10"
                size={80}
              />
              <div className="relative z-10">
                <p className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                  "Ujiyala Foundation changed my life. My children now go to
                  school and we have food on our table. The sustainable farming
                  techniques they taught us have doubled our yield."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Rekha Devi"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-lg">
                      Rekha Devi
                    </h5>
                    <p className="text-primary font-semibold text-sm">
                      Beneficiary, Sinnar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-secondary/5 border border-gray-100 relative">
              <Quote
                className="text-primary/10 absolute top-10 right-10"
                size={80}
              />
              <div className="relative z-10">
                <p className="text-xl text-gray-600 italic mb-8 leading-relaxed">
                  "I am proud to support Ujiyala. Their transparency and
                  dedication to rural development are unmatched. Seeing the
                  impact on the ground is truly inspiring."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      alt="Amit S."
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-lg">
                      Amit Sharma
                    </h5>
                    <p className="text-primary font-semibold text-sm">
                      Donor & Supporter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            Trusted by Organizations Worldwide
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Unicef_logo.png"
              alt="Unicef"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/World_Food_Programme_logo.svg"
              alt="WFP"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Save_the_Children_logo.svg"
              alt="Save the Children"
              className="h-10"
            />
          </div>
        </div>
      </section>

      <FoundersSection />

      {/* Final CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight">
            Ready to be a part of the{" "}
            <span className="text-primary">Ujiyala</span> Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you want to volunteer your time or support us financially,
            your contribution makes a direct impact on rural lives.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/volunteer"
              className="bg-white text-secondary font-bold px-10 py-5 rounded-2xl shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 text-lg transform hover:-translate-y-1 active:scale-95"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/donate"
              className="bg-primary text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:bg-white hover:text-primary transition-all duration-300 text-lg transform hover:-translate-y-1 active:scale-95"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
