import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us for partnerships, volunteering, or any other inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">Our team is here to help.</p>
              <a href="mailto:info@ujiyalafoundation.org" className="text-primary font-bold hover:underline">
                info@ujiyalafoundation.org
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+919876543210" className="text-primary font-bold hover:underline">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Visit Us</h3>
              <p className="text-gray-500 mb-4">Our main office location.</p>
              <p className="text-secondary font-bold">
                Lonarwadi, Sinnar, Nashik,<br />
                Maharashtra, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl shadow-secondary/5 border border-gray-100 p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Send us a Message</h2>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder for actual map) */}
      <div className="h-[400px] bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-primary mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-secondary">Find us in Nashik</h3>
            <p className="text-gray-500">Lonarwadi, Sinnar, Nashik, Maharashtra</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map iframe here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123456789!2d73.9!3d19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ4JzAwLjAiTiA3M8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
          className="w-full h-full border-0 grayscale opacity-50"
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
