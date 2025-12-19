import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";

// Multi-level nav structure
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Causes", to: "/causes" },
  { label: "Works", to: "/works" },
  { label: "Gallery", to: "/gallery" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Donate", to: "/donate" },
  { label: "Transparency", to: "/transparency" },
  { label: "Contact", to: "/contact" },
];

// Helper: check if current path matches item or subitem
type NavSubItem = { label: string; to: string };
type NavItem = { label: string; to: string; subItems?: NavSubItem[] };

function isActive(item: NavItem, pathname: string): boolean {
  if (item.to && item.to !== "#" && pathname === item.to) return true;
  if (item.subItems) {
    return item.subItems.some(
      (sub: NavSubItem) =>
        sub.to && pathname.startsWith(sub.to.replace(/#.+$/, ""))
    );
  }
  return false;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-gray-300 cursor-pointer">
              <Phone className="w-4 h-4 mr-2" /> +91 9284069880
            </span>
            <span className="flex items-center hover:text-gray-300 cursor-pointer">
              <Mail className="w-4 h-4 mr-2" /> info@ujiyalafoundation.org
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/media" className="hover:text-gray-300">
              Media Center
            </Link>
            <Link to="/careers" className="hover:text-gray-300">
              Careers
            </Link>
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
                <span
                  className="text-2xl font-extrabold tracking-tight ujiyala-font"
                  style={{ color: "#00812e" }}
                >
                  UJIYALA{" "}
                  <span className="text-primary ujiyala-font">FOUNDATION</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`px-3 py-2 rounded-md font-semibold text-base uppercase tracking-wide transition-colors ${
                    isActive(item, location.pathname)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  } ${
                    item.label === "Donate"
                      ? "bg-primary text-white ml-2 px-6 py-3 rounded-full font-bold hover:bg-red-700 shadow-md flex items-center"
                      : ""
                  } ${
                    item.label === "Volunteer"
                      ? "border border-primary text-primary hover:bg-primary hover:text-white font-bold"
                      : ""
                  }`}
                >
                  {item.label === "Donate" ? (
                    <>
                      <Heart className="w-5 h-5 mr-2 fill-current" />
                      DONATE
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-md text-base font-bold uppercase ${
                    isActive(item, location.pathname) ? "text-primary" : ""
                  } ${
                    item.label === "Donate"
                      ? "bg-primary text-white text-center mt-4 rounded-full shadow-lg"
                      : ""
                  } ${
                    item.label === "Volunteer"
                      ? "border border-primary text-primary hover:bg-primary hover:text-white font-bold"
                      : ""
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label === "Donate" ? "DONATE NOW" : item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
