import React from 'react';
import { Briefcase, Users, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Meaningful Work",
      description: "Every day, you'll be contributing to projects that directly impact lives in rural Maharashtra."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborative Culture",
      description: "Work with a passionate team of experts, volunteers, and community leaders."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Growth Opportunities",
      description: "We invest in our people through training, mentorship, and diverse project exposure."
    }
  ];

  const openings = [
    {
      title: "Field Coordinator",
      location: "Nashik, Maharashtra",
      type: "Full-time",
      category: "Operations"
    },
    {
      title: "Social Media Manager",
      location: "Remote / Mumbai",
      type: "Part-time",
      category: "Communications"
    },
    {
      title: "Fundraising Associate",
      location: "Pune, Maharashtra",
      type: "Full-time",
      category: "Development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Join the <span className="ujiyala-font text-primary">Ujiyala</span> Team
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Be part of a movement that is bringing light and hope to rural communities. 
            We're looking for passionate individuals to help us scale our impact.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Work With Us?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-xl shadow-secondary/5 border border-gray-100 hover:scale-105 transition-transform duration-300">
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Current Openings</h2>
              <p className="text-gray-600 text-lg">Find your place in our mission.</p>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-2xl text-primary font-bold">
              {openings.length} Open Roles
            </div>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="group border border-gray-100 rounded-[2rem] p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-500 font-medium">
                      <span className="flex items-center gap-1">{job.location}</span>
                      <span className="flex items-center gap-1">•</span>
                      <span className="flex items-center gap-1">{job.type}</span>
                      <span className="flex items-center gap-1">•</span>
                      <span className="text-primary">{job.category}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-secondary text-white font-bold py-4 px-8 rounded-2xl hover:bg-primary transition-all duration-300 flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20">
                  Apply Now
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-12 bg-secondary rounded-[3rem] text-white">
            <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people who share our vision. 
              Send your resume to <span className="text-primary font-bold">careers@ujiyalafoundation.org</span> and we'll keep you in mind for future roles.
            </p>
            <Link to="/volunteer" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Consider volunteering with us instead
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
