import { Utensils, Home, HeartPulse, GraduationCap, Sun, Users, HandHeart } from 'lucide-react';

const causes = [
  {
    title: "Feeding the Hungry",
    description: "Providing nutritious meals to those who struggle to find their next meal.",
    icon: <Utensils className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Roadside Assistance",
    description: "Helping those living on the streets with basic necessities and care.",
    icon: <Users className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1504159551531-f40dd639a9d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Slum Support",
    description: "Improving living conditions and providing resources for slum dwellers.",
    icon: <Home className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1635154393676-24634e045746?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Medical Service",
    description: "Offering free medical checkups and medicines to the underprivileged.",
    icon: <HeartPulse className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Educational Support",
    description: "Sponsoring education for children who cannot afford school fees.",
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Support Homeless",
    description: "Providing shelter and rehabilitation for the homeless population.",
    icon: <HandHeart className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Spreading Hope",
    description: "Community engagement programs to lift spirits and build resilience.",
    icon: <Sun className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const CausesSection = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Our Causes</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We are dedicated to these 7 pillars of social service, working tirelessly to bring change where it's needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={cause.image} 
                  alt={cause.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-20 text-primary">
                  {cause.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{cause.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{cause.description}</p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <button className="w-full bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center group-hover:shadow-md">
                    Support This Cause
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CausesSection;
