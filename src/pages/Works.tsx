const works = [
  {
    title: 'Food Distribution Drive',
    date: '2025-11-20',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Provided meals to over 500 people in slum areas of Nashik.'
  },
  {
    title: 'Medical Camp',
    date: '2025-10-15',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    description: 'Free health checkups and medicines for 300+ villagers.'
  },
  {
    title: 'Education Kit Distribution',
    date: '2025-09-10',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=600&q=80',
    description: 'Distributed school kits to 200+ children in rural areas.'
  },
  {
    title: 'Blanket Drive',
    date: '2025-08-05',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Helped homeless people stay warm during winter.'
  },
];

const Works = () => (
  <div className="min-h-screen bg-white py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-primary mb-10 text-center">Our Recent Works</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {works.map((work, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-shadow">
            <img src={work.image} alt={work.title} className="w-full md:w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-secondary mb-2">{work.title}</h2>
              <div className="text-sm text-gray-500 mb-2">{new Date(work.date).toLocaleDateString()}</div>
              <p className="text-gray-700 mb-4 flex-grow">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Works;
