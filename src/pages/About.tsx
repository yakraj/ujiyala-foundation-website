import {
  Heart,
  Target,
  Users,
  Shield,
  Award,
  Globe,
  Sprout,
  BookOpen,
} from "lucide-react";
import FoundersSection from "../components/FoundersSection";
import slumImg from "../assets/slum.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Bringing <span className="text-primary">Light</span> to the Darkest
            Corners
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            <span className="ujiyala-font">Ujiyala Foundation</span> is a
            faith-driven movement dedicated to serving the homeless, the hungry,
            and the most vulnerable in our society.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded to bring "
                  <span className="ujiyala-font">Ujiyala</span>" (Light) into
                  the lives of those living in darkness, our journey began in
                  the small villages of Nashik (Sinnar). Guided by the Word of
                  God and the call to love our neighbor, we witnessed the deep
                  struggles of rural families—lack of clean water, limited
                  access to healthcare, and children unable to attend school.
                </p>
                <p>
                  What began as a small band of volunteers offering food and
                  care has grown into a structured foundation addressing root
                  causes across health, education, and livelihoods. Rooted in
                  faith, our service is an expression of worship—every act of
                  compassion reflects God's love and restores human dignity.
                </p>
                <p>
                  Today, we pursue long-term, sustainable solutions that enable
                  communities to become self-reliant. Our mission is to feed,
                  shelter, educate, and bring hope to the most vulnerable,
                  driven by compassion for society and the belief that every
                  person deserves the opportunity to thrive.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={slumImg}
                  alt="Slum community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary text-white p-8 rounded-3xl shadow-xl hidden sm:block">
                <div className="text-4xl font-bold mb-1">1+ Years</div>
                <div className="text-sm uppercase tracking-widest font-semibold">
                  Of Dedicated Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where every individual has access to food, shelter,
                education, and healthcare, and where hope thrives in every
                heart. We envision self-sustaining rural communities that lead
                the way in progress.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Globe size={32} />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower communities by providing essential resources,
                fostering education, and supporting health and well-being for
                all. We aim to bridge the gap between urban resources and rural
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mx-auto">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Compassion</h4>
              <p className="text-gray-500 text-sm">
                Empathy for every individual we serve.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Transparency</h4>
              <p className="text-gray-500 text-sm">
                Accountability in every penny spent.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Community</h4>
              <p className="text-gray-500 text-sm">
                Driven by local needs and solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mx-auto">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Inclusivity</h4>
              <p className="text-gray-500 text-sm">
                Respect for all cultures and backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work (Rural Focus) */}
      <div className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our 3-step approach to sustainable rural development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-6xl font-black text-white/10 absolute top-4 right-8">
                01
              </div>
              <Sprout className="text-primary mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-4">Identify & Assess</h4>
              <p className="text-gray-400">
                We work with village heads to identify the most pressing needs,
                from water scarcity to lack of schools.
              </p>
            </div>
            <div className="relative p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-6xl font-black text-white/10 absolute top-4 right-8">
                02
              </div>
              <Users className="text-primary mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-4">Mobilize & Execute</h4>
              <p className="text-gray-400">
                Our volunteers and local community members work together to
                implement solutions on the ground.
              </p>
            </div>
            <div className="relative p-8 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-6xl font-black text-white/10 absolute top-4 right-8">
                03
              </div>
              <BookOpen className="text-primary mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-4">Monitor & Sustain</h4>
              <p className="text-gray-400">
                We don't just leave after a project. We monitor progress and
                ensure the community can maintain the results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <FoundersSection />

      {/* CTA Section */}
      <div className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Whether you want to volunteer your time or support us financially,
            your contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/volunteer"
              className="bg-white text-primary font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-gray-100 transition-all active:scale-95"
            >
              Become a Volunteer
            </a>
            <a
              href="/donate"
              className="bg-secondary text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-gray-800 transition-all active:scale-95"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
