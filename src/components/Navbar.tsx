
import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

// Multi-level nav structure
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Causes', to: '/causes',
    subItems: [
      { label: 'Education', to: '/causes#education' },
      { label: 'Health', to: '/causes#health' },
      { label: 'Women Empowerment', to: '/causes#women' },
      { label: 'Child Welfare', to: '/causes#child' },
    ]
  },
  { label: 'Transitions', to: '/transitions' },
  {
    label: 'Our Works',
    to: '/works',
    subItems: [
      { label: 'Gallery', to: '/gallery' },
      { label: 'Projects', to: '/works#projects' },
      { label: 'Fields', to: '/works#fields' },
      { label: 'Volunteer', to: '/works#volunteer' },
      { label: 'Media Center', to: '/media' },
      { label: 'Careers', to: '/careers' },
    ]
  },
  { label: 'Contact', to: '/contact' },
];


// Helper: check if current path matches item or subitem
type NavSubItem = { label: string; to: string };
type NavItem = { label: string; to: string; subItems?: NavSubItem[] };

function isActive(item: NavItem, pathname: string): boolean {
  if (item.to && item.to !== '#' && pathname === item.to) return true;
  if (item.subItems) {
    return item.subItems.some((sub: NavSubItem) => sub.to && pathname.startsWith(sub.to.replace(/#.+$/, '')));
  }
  return false;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // which menu is open (for desktop)
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null); // for mobile
  const location = useLocation();
  const submenuTimeout = useRef<number | undefined>(undefined);

  const handleNavClick = () => setIsOpen(false);

  // Desktop submenu open/close handlers
  const handleMenuEnter = (label: string) => {
    if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
    setOpenMenu(label);
  };
  const handleMenuLeave = () => {
    submenuTimeout.current = window.setTimeout(() => setOpenMenu(null), 180);
  };

  // Mobile submenu toggle
  const handleMobileMenuToggle = (label: string) => {
    setMobileOpenMenu(mobileOpenMenu === label ? null : label);
  };

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
              <Mail className="w-4 h-4 mr-2" /> info@ujiyalafoundation.org
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
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <img width={65} src={logo} alt="ujiyala Logo" />
                <span style={{ color: "#00812e" }} className="text-2xl font-extrabold text-gray-900 tracking-tight">UJIYALA <span className="text-primary">FOUNDATION</span></span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.subItems && handleMenuEnter(item.label)}
                  onMouseLeave={() => item.subItems && handleMenuLeave()}
                >
                  {item.subItems ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 rounded-md font-semibold text-base uppercase tracking-wide transition-colors focus:outline-none ${isActive(item, location.pathname) ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={openMenu === item.label}
                      >
                        {item.label} <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {/* Submenu */}
                      <div
                        className={`absolute left-0 mt-2 min-w-[180px] bg-white rounded-md shadow-lg py-2 z-50 transition-all ${openMenu === item.label ? 'block' : 'hidden'}`}
                        onMouseEnter={() => handleMenuEnter(item.label)}
                        onMouseLeave={handleMenuLeave}
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className={`block px-4 py-2 text-base font-semibold rounded-md transition-colors ${location.pathname === sub.to ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                            onClick={() => setOpenMenu(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className={`px-3 py-2 rounded-md font-semibold text-base uppercase tracking-wide transition-colors ${isActive(item, location.pathname) ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/donate" className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-md flex items-center ml-2">
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
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        className={`flex items-center w-full px-3 py-3 rounded-md font-bold text-base uppercase transition-colors ${isActive(item, location.pathname) ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                        onClick={() => handleMobileMenuToggle(item.label)}
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={mobileOpenMenu === item.label}
                      >
                        {item.label} <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                      {mobileOpenMenu === item.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className={`block px-4 py-2 text-base font-semibold rounded-md transition-colors ${location.pathname === sub.to ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                              onClick={() => { setIsOpen(false); setMobileOpenMenu(null); }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className={`block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase ${isActive(item, location.pathname) ? 'text-primary' : ''}`}
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/donate" className="block w-full text-center bg-primary text-white px-4 py-3 rounded-full text-base font-bold hover:bg-red-700 mt-4 shadow-lg" onClick={handleNavClick}>
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
