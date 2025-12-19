import React, { useState } from "react";
import { Users, Heart, Star, Send, CheckCircle } from "lucide-react";

const volunteers = [
  {
    name: "Suman Patel",
    role: "Field Volunteer",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Active in community outreach and education drives in rural Nashik.",
  },
  {
    name: "Ravi Kumar",
    role: "Medical Volunteer",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "Supports health camps and awareness programs in remote villages.",
  },
  {
    name: "Anjali Mehra",
    role: "Nutrition Volunteer",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Leads food and nutrition distribution events for underprivileged families.",
  },
  {
    name: "Deepak Singh",
    role: "Education Volunteer",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    bio: "Teaches children in slum areas and helps them enroll in schools.",
  },
];

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Be the <span className="text-primary">Change</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our community of dedicated volunteers and help us bring light
            to the lives of those who need it most.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info & Volunteers */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Why Volunteer With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Volunteering with Ujiyala Foundation is more than just giving your
              time. It's about being part of a movement that transforms lives at
              the grassroots level.
            </p>

            <div className="space-y-6 mb-16">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary">
                    Make a Real Impact
                  </h4>
                  <p className="text-gray-600">
                    See the direct results of your efforts in the smiles of the
                    people we serve.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary">
                    Join a Community
                  </h4>
                  <p className="text-gray-600">
                    Connect with like-minded individuals who share your passion
                    for social change.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary">
                    Gain Experience
                  </h4>
                  <p className="text-gray-600">
                    Develop new skills and gain a deeper understanding of rural
                    development challenges.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-secondary mb-8">
              Meet Our Volunteers
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {volunteers.map((v, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-16 h-16 rounded-full mb-4 border-2 border-primary/20"
                  />
                  <h4 className="font-bold text-secondary">{v.name}</h4>
                  <p className="text-primary text-sm font-semibold mb-2">
                    {v.role}
                  </p>
                  <p className="text-gray-600 text-sm">{v.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-secondary/10 border border-gray-100 p-8 sm:p-12 sticky top-24">
            <h2 className="text-3xl font-bold text-secondary mb-2">
              Apply Now
            </h2>
            <p className="text-gray-500 mb-8">
              Fill out the form below and we'll get back to you soon.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Application Sent!
                </h3>
                <p className="text-green-700">
                  Thank you for your interest. Our team will contact you within
                  48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">
                    Why do you want to join?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your motivation..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  Submit Application
                  <Send size={20} />
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you agree to our privacy policy and terms of
                  service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
