import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Ujiyala Foundation</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Dedicated to spreading hope and providing support to those in need. 
              From feeding the hungry to educational support, we are here to make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-primary transition-colors flex items-center">About Us</a></li>
              <li><a href="/causes" className="hover:text-primary transition-colors flex items-center">Our Causes</a></li>
              <li><a href="/transitions" className="hover:text-primary transition-colors flex items-center">Financial Reports</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors flex items-center">Contact Us</a></li>
              <li><a href="/donate" className="hover:text-primary transition-colors flex items-center">Donate Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0" /> <span>123 Hope Street, City, Country</span></li>
              <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0" /> <span>+1 234 567 8900</span></li>
              <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0" /> <span>info@ujiyala.org</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get updates on our latest projects.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 w-full rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold uppercase tracking-wide text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2025 Ujiyala Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
