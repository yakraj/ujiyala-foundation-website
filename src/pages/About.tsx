const About = () => (
  <div className="min-h-screen bg-white py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-primary mb-6">About Ujiyala Foundation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Ujiyala Foundation is a non-profit organization committed to bringing hope and support to the most vulnerable communities. Our mission is to spread light (Ujiyala) by addressing hunger, homelessness, education, health, and more.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-2">Our Vision</h2>
          <p className="text-gray-600">A world where every individual has access to food, shelter, education, and healthcare, and where hope thrives in every heart.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-2">Our Mission</h2>
          <p className="text-gray-600">To empower communities by providing essential resources, fostering education, and supporting health and well-being for all.</p>
        </div>
      </div>
      <div className="bg-primary/10 p-6 rounded-xl shadow-inner">
        <h3 className="text-xl font-bold text-primary mb-2">Our Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Compassion and empathy for all</li>
          <li>Transparency and accountability</li>
          <li>Community-driven solutions</li>
          <li>Inclusivity and respect</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
