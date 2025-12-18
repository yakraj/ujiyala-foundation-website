import { MapPin, Target, CheckCircle2 } from 'lucide-react';

const MapTargetSection = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <Target size={18} />
              <span>Our Reach & Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-secondary mb-8 leading-tight">
              Focusing on the <span className="text-primary">Heart of Rural</span> Maharashtra
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We aim to impact 10,000+ lives in the next year by focusing on
              sustainable development, health, and education in the Nashik district and surrounding rural areas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Rural Education Hubs',
                'Sustainable Agriculture',
                'Clean Water Initiatives',
                'Mobile Health Clinics',
                'Women Skill Centers',
                'Village Infrastructure'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-secondary/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-secondary rounded-[2rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2">Current Focus: Nashik</h4>
                <p className="text-gray-300">We are currently concentrating our efforts in 50+ villages across the Sinnar and Niphad blocks.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Map Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform translate-x-1/2"></div>
            <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100">
              <div className="overflow-hidden rounded-[2.5rem] h-[500px] relative">
                <iframe
                  title="Ujiyala Foundation Target Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120000!2d73.9!3d19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd956789012345%3A0x1234567890abcdef!2sSinnar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                {/* Map Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-secondary">Headquarters</h5>
                      <p className="text-sm text-gray-600">Lonarwadi, Sinnar, Nashik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapTargetSection;

