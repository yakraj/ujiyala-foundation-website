import React from 'react';

const volunteers = [
  {
    name: 'Suman Patel',
    role: 'Field Volunteer',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
    bio: 'Active in community outreach and education drives.'
  },
  {
    name: 'Ravi Kumar',
    role: 'Medical Volunteer',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    bio: 'Supports health camps and awareness programs.'
  },
  {
    name: 'Anjali Mehra',
    role: 'Nutrition Volunteer',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    bio: 'Leads food and nutrition distribution events.'
  },
  {
    name: 'Deepak Singh',
    role: 'Education Volunteer',
    img: 'https://randomuser.me/api/portraits/men/56.jpg',
    bio: 'Teaches children in slum areas.'
  }
];


import { useState } from 'react';

const Volunteer = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Our Volunteers</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {volunteers.map((volunteer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-64"
            >
              <img src={volunteer.img} alt={volunteer.name} className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-primary" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{volunteer.name}</h3>
              <p className="text-primary font-bold mb-1 text-sm">{volunteer.role}</p>
              <p className="text-gray-600 text-center text-xs">{volunteer.bio}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">Request to Volunteer</h3>
          <p className="text-gray-600 text-center mb-6">Join us in making a difference! Fill out the form below and our team will get in touch with you soon.</p>
          {submitted ? (
            <div className="text-green-600 text-center font-bold py-8 text-lg">Thank you for your interest in volunteering! We will contact you soon.</div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Why do you want to volunteer?</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" rows={3} placeholder="Tell us about your motivation" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Request to Volunteer</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
