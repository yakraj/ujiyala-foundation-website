import {
  Utensils,
  Home,
  HeartPulse,
  GraduationCap,
  Sun,
  HandHeart,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const causes = [
  {
    id: "rural-development",
    title: "Rural Development",
    description:
      "Empowering villages through sustainable agriculture, water conservation, and infrastructure development to ensure long-term self-reliance.",
    icon: <Sprout className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-green-500",
  },
  {
    id: "feeding-hungry",
    title: "Feeding the Hungry",
    description:
      "Providing nutritious meals and food security to underprivileged families and individuals who struggle to find their next meal.",
    icon: <Utensils className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-orange-500",
  },
  {
    id: "slum-village-support",
    title: "Slum & Village Support",
    description:
      "Improving living conditions, sanitation, and providing essential resources for slum dwellers and remote rural families.",
    icon: <Home className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1635154393676-24634e045746?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-500",
  },
  {
    id: "rural-healthcare",
    title: "Rural Healthcare",
    description:
      "Offering free medical checkups, medicines, and health awareness programs to remote villages with limited access to clinics.",
    icon: <HeartPulse className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-red-500",
  },
  {
    id: "educational-support",
    title: "Educational Support",
    description:
      "Sponsoring education, providing school supplies, and vocational training for children and youth from marginalized backgrounds.",
    icon: <GraduationCap className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-purple-500",
  },
  {
    id: "support-homeless",
    title: "Support Homeless",
    description:
      "Providing temporary shelter, blankets, and rehabilitation support for the homeless population during extreme weather conditions.",
    icon: <HandHeart className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-yellow-600",
  },
  {
    id: "spreading-hope",
    title: "Spreading Hope",
    description:
      "Community engagement programs, mental health awareness, and resilience building to lift spirits in challenging times.",
    icon: <Sun className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-sky-500",
  },
];

const CausesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">What We Do</span>
          <h2 className="text-4xl font-extrabold text-secondary sm:text-5xl mt-3 mb-6">
            Our Core Causes
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to these 7 pillars of social service, working
            tirelessly to bring sustainable change to rural and underprivileged communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-6 left-6 ${cause.color} text-white p-3 rounded-2xl shadow-lg z-20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                  {cause.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {cause.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {cause.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <Link 
                    to="/donate" 
                    className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-secondary transition-colors duration-300 shadow-lg shadow-primary/20"
                  >
                    Donate
                  </Link>
                  <Link 
                    to="/causes" 
                    className="text-secondary font-bold flex items-center gap-2 hover:text-primary transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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

