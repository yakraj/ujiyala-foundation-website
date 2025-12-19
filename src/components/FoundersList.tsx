import { Linkedin, Mail, Twitter } from "lucide-react";
import type { Founder } from "../data/founders";

interface FoundersListProps {
  founders: Founder[];
  columns?: string; // tailwind grid classes like "lg:grid-cols-4"
}

const FoundersList = ({
  founders,
  columns = "lg:grid-cols-4",
}: FoundersListProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-8`}>
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

          {/* <div className="flex gap-4 mt-auto">
            <a
              href={founder.linkedin || "#"}
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={founder.twitter || "#"}
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <Twitter size={18} />
            </a>
            <a
              href={founder.email ? `mailto:${founder.email}` : "#"}
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <Mail size={18} />
            </a>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default FoundersList;
