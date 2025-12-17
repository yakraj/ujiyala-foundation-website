import React from 'react';

const founders = [
  {
    name: 'Amit Kumar',
    role: 'Founder & President',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Visionary leader with a passion for social change and community upliftment.'
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & Secretary',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Dedicated to empowering women and children through education and health.'
  },
  {
    name: 'Rahul Verma',
    role: 'Co-Founder & Treasurer',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    bio: 'Handles finances and ensures transparency in all our operations.'
  },
  {
    name: 'Sunita Joshi',
    role: 'Co-Founder',
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
    bio: 'Focused on health and nutrition drives for children.'
  },
  {
    name: 'Vikas Singh',
    role: 'Co-Founder',
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
    bio: 'Leads logistics and outreach programs.'
  },
  {
    name: 'Meena Gupta',
    role: 'Co-Founder',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Drives women empowerment initiatives.'
  },
  {
    name: 'Rohit Saini',
    role: 'Co-Founder',
    img: 'https://randomuser.me/api/portraits/men/81.jpg',
    bio: 'Coordinates education and skill development projects.'
  }
];

const FoundersSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Initial Founders</h2>
        <div className="relative w-full max-w-md mx-auto" style={{height: '100vh'}}>
          <div className="overflow-y-auto h-full">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center mb-6"
                style={{height: 'calc(100vh / 7)', minHeight: '1vh', maxHeight: 'calc(100vh / 7)'}}
              >
                <img src={founder.img} alt={founder.name} className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-primary" />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-primary font-bold mb-1 text-sm">{founder.role}</p>
                <p className="text-gray-600 text-center text-xs">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
