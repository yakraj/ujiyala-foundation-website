import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-gray-300 cursor-pointer">
              <Phone className="w-4 h-4 mr-2" /> +1 234 567 8900
            </span>
            <span className="flex items-center hover:text-gray-300 cursor-pointer">
              <Mail className="w-4 h-4 mr-2" /> info@ujiyala.org
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/media" className="hover:text-gray-300">Media Center</Link>
            <Link to="/careers" className="hover:text-gray-300">Careers</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                {/* Placeholder for Logo */}
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">U</div>
                <span className="text-2xl font-extrabold text-gray-900 tracking-tight">UJIYALA <span className="text-primary">FOUNDATION</span></span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors uppercase tracking-wide">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors uppercase tracking-wide">About Us</Link>
              <Link to="/causes" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors uppercase tracking-wide">Our Causes</Link>
              <Link to="/transitions" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors uppercase tracking-wide">Transitions</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-semibold text-base transition-colors uppercase tracking-wide">Contact</Link>
              <Link to="/donate" className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-md flex items-center">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                DONATE
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase">Home</Link>
              <Link to="/about" className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase">About Us</Link>
              <Link to="/causes" className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase">Our Causes</Link>
              <Link to="/transitions" className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase">Transitions</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase">Contact</Link>
              <Link to="/donate" className="block w-full text-center bg-primary text-white px-4 py-3 rounded-full text-base font-bold hover:bg-red-700 mt-4 shadow-lg">
                DONATE NOW
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
