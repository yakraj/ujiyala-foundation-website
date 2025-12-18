import React from "react";
import {
  Newspaper,
  Video,
  Download,
  ExternalLink,
  Calendar,
  ArrowRight,
} from "lucide-react";

const MediaCenter = () => {
  const news = [
    {
      title:
        "Ujiyala Foundation Launches New Digital Literacy Program in Rural Nashik",
      date: "October 15, 2025",
      source: "Maharashtra Times",
      category: "Press Release",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title:
        "Impact Report: 5,000+ Families Provided with Clean Drinking Water",
      date: "September 22, 2025",
      source: "The Hindu",
      category: "News",
      image:
        "https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title:
        "Founder Interview: The Vision Behind Ujiyala's Sustainable Farming Initiative",
      date: "August 10, 2025",
      source: "Rural Connect Magazine",
      category: "Interview",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const resources = [
    {
      title: "Annual Report 2024-25",
      type: "PDF",
      size: "4.2 MB",
      icon: <Download className="w-6 h-6" />,
    },
    {
      title: "Brand Identity Guidelines",
      type: "PDF",
      size: "2.1 MB",
      icon: <Download className="w-6 h-6" />,
    },
    {
      title: "Media Kit (Images & Logos)",
      type: "ZIP",
      size: "15.8 MB",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f25b2a_1px,transparent_1px)] [background-size:40px_40px] opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Media <span className="text-primary">Center</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stay updated with the latest news, stories, and press releases
              from
              <span className="ujiyala-font text-primary ml-2">
                Ujiyala Foundation
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Latest Updates
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
              View All News <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {news.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-secondary/5 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} /> {item.date}
                    </span>
                    <span>•</span>
                    <span>{item.source}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <button className="flex items-center gap-2 text-secondary font-bold group/btn">
                    Read Article{" "}
                    <ExternalLink
                      size={18}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Media Resources
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Are you a journalist or media professional? Download our
                official resources, including high-resolution logos, brand
                guidelines, and our latest annual reports.
              </p>
              <div className="space-y-4">
                {resources.map((res, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl flex items-center justify-between border border-gray-100 hover:border-primary transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {res.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary">
                          {res.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {res.type} • {res.size}
                        </p>
                      </div>
                    </div>
                    <Download
                      size={20}
                      className="text-gray-300 group-hover:text-primary"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-secondary rounded-[3rem] p-12 text-white relative z-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <Newspaper size={64} className="text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-6">Media Inquiries</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  For interview requests, press information, or media
                  collaborations, please contact our communications team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Video size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">
                      press@ujiyalafoundation.org
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">+91 98765 43210</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-[3rem] -z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCenter;
