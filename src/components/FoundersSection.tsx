import { Linkedin, Mail, Twitter } from "lucide-react";

const founders = [
  {
    name: "Amit Kumar",
    role: "Founder & President",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Visionary leader with a passion for social change and community upliftment in rural Nashik.",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & Secretary",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Dedicated to empowering women and children through education and health initiatives.",
  },
  {
    name: "Rahul Verma",
    role: "Co-Founder & Treasurer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Handles finances and ensures transparency in all our operations and rural projects.",
  },
  {
    name: "Sunita Joshi",
    role: "Co-Founder",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    bio: "Focused on health and nutrition drives for children in remote village areas.",
  },
  {
    name: "Vikas Singh",
    role: "Co-Founder",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    bio: "Leads logistics and outreach programs across the Nashik district.",
  },
  {
    name: "Meena Gupta",
    role: "Co-Founder",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Drives women empowerment and self-help group initiatives in villages.",
  },
  {
    name: "Rohit Saini",
    role: "Co-Founder",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    bio: "Coordinates education and skill development projects for rural youth.",
  },
];

const FoundersSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Our Leadership
          </span>
          <h2 className="text-4xl font-black text-secondary mt-4 mb-6">
            The Visionaries Behind <span className="ujiyala-font">Ujiyala</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:bg-white hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-20"></div>
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                />
              </div>

              <h3 className="text-xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                {founder.name}
              </h3>
              <p className="text-primary font-bold mb-4 text-sm uppercase tracking-wider">
                {founder.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {founder.bio}
              </p>

              <div className="flex gap-4 mt-auto">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
