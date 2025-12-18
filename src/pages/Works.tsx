import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const works = [
  {
    id: "project-jal-shakti",
    projectName: "Project Jal-Shakti",
    title: "Rural Water Conservation",
    date: "2025-12-05",
    location: "Sinnar Region",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    description: "Built check dams and rainwater harvesting systems in drought-prone villages to ensure year-round water availability for farming and drinking.",
    category: "Rural Development"
  },
  {
    id: "project-annapurna",
    projectName: "Project Annapurna",
    title: "Food Distribution Drive",
    date: "2025-11-20",
    location: "Nashik Slums",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    description: "Provided nutritious cooked meals and dry ration kits to over 500 families struggling with food insecurity in urban slum areas.",
    category: "Food Security"
  },
  {
    id: "project-swasthya",
    projectName: "Project Swasthya",
    title: "Village Medical Camp",
    date: "2025-10-15",
    location: "Lonarwadi Village",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Organized a comprehensive health camp providing free checkups, eye tests, and essential medicines to 300+ villagers with limited healthcare access.",
    category: "Healthcare"
  },
  {
    id: "project-vidya",
    projectName: "Project Vidya",
    title: "Education Kit Distribution",
    date: "2025-09-10",
    location: "Z.P. Schools, Sinnar",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    description: "Distributed complete school kits including bags, notebooks, and stationery to 200+ children to encourage school enrollment and attendance.",
    category: "Education"
  },
];

const Works = () => (
  <div className="min-h-screen bg-gray-50 py-12 sm:py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Our Recent Works</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transparency in action. Explore our recent projects and see how your contributions are making a tangible difference on the ground.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {works.map((work, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500 border border-gray-100">
            {/* Image Section */}
            <div className="md:w-2/5 relative overflow-hidden">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  {work.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:w-3/5 flex flex-col">
              <div className="mb-4">
                <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-1">
                  {work.projectName}
                </span>
                <h2 className="text-2xl font-extrabold text-secondary group-hover:text-primary transition-colors duration-300">
                  {work.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-primary" />
                  {new Date(work.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-primary" />
                  {work.location}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {work.description}
              </p>

              <div className="pt-6 border-t border-gray-100 mt-auto">
                <Link 
                  to={`/project/${work.id}`}
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group/btn"
                >
                  View Project Details 
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-secondary rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative z-10">Want to be part of our next project?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
          We are always looking for volunteers and partners to expand our reach. Join us in bringing light to more lives.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a href="/volunteer" className="bg-primary hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg active:scale-95">
            Join as Volunteer
          </a>
          <a href="/donate" className="bg-white hover:bg-gray-100 text-secondary font-bold py-3 px-8 rounded-xl transition-all shadow-lg active:scale-95">
            Support a Project
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Works;
