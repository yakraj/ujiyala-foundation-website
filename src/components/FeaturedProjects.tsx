import { ArrowRight, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: "project-jal-shakti",
    projectName: "Project Jal-Shakti",
    title: "Rural Water Conservation",
    location: "Sinnar Region",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    impact: "5,000+ Villagers",
    status: "Active"
  },
  {
    id: "project-annapurna",
    projectName: "Project Annapurna",
    title: "Food Distribution Drive",
    location: "Nashik Slums",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    impact: "500+ Families",
    status: "Ongoing"
  },
  {
    id: "project-swasthya",
    projectName: "Project Swasthya",
    title: "Village Medical Camp",
    location: "Lonarwadi Village",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    impact: "300+ Patients",
    status: "Completed"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Work in Action</span>
            <h2 className="text-4xl sm:text-5xl font-black text-secondary mt-4 mb-6">
              Featured <span className="text-primary">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our most recent projects and see how we are making a tangible difference in rural and underprivileged communities.
            </p>
          </div>
          <Link 
            to="/works" 
            className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors group text-lg"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/30">
                  {project.status}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                    {project.projectName}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-primary" />
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Action */}
              <div className="p-8 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 absolute inset-0 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-8">
                  Join us in this mission to bring sustainable change and empower the lives of thousands.
                </p>
                <Link 
                  to={`/project/${project.id}`}
                  className="bg-primary text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
