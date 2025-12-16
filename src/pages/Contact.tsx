const Contact = () => (
  <div className="min-h-screen bg-white py-16">
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-primary mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8">We would love to hear from you! Reach out for support, partnership, or to join our mission.</p>
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary" rows={5} placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all">Send Message</button>
        </form>
      </div>
      <div className="text-center text-gray-600">
        <div className="font-bold text-lg mb-1">Address</div>
        <div>lonarwadi, sinnar, nashik</div>
        <div className="mt-2">Email: <a href="mailto:info@ujiyala.org" className="text-primary">info@ujiyala.org</a></div>
        <div>Phone: <a href="tel:+12345678900" className="text-primary">+1 234 567 8900</a></div>
      </div>
    </div>
  </div>
);

export default Contact;
