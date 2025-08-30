import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // common classes for links
  const linkClasses = "transition-colors duration-300 font-medium";
  const activeClasses = "text-[#E11D48]"; // highlighted link
  const inactiveClasses = "text-[#121926] hover:text-[#E11D48]";

  return (
    <header className="p-5 fixed top-0 right-0 z-50 left-0 ">
      {/* Navbar */}
      <nav className="bg-gray-100   rounded-xl shadow-lg md:shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              logo{" "}
              <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
                DoTheySwipe
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              FAQ&apos;s
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full font-semibold transition-all duration-300 relative group overflow-hidden`
              }
            >
              {/* Gradient border */}
              <span className="absolute inset-0 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] rounded-full"></span>

              {/* White background */}
              <span className="absolute inset-0.5 bg-white rounded-full"></span>

              {/* Gradient text */}
              <span className="relative bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
                Search on Tinder
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu + Search */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Search Icon */}
            <button aria-label="Search" className="text-xl">
              <Search size={24} className="text-[#121926]" />
            </button>

            {/* Hamburger */}
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4 pt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses} py-2 ${
                  isActive ? activeClasses : inactiveClasses
                }`
              }
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses} py-2 ${
                  isActive ? activeClasses : inactiveClasses
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `${linkClasses} py-2 ${
                  isActive ? activeClasses : inactiveClasses
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ&apos;s
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `px-5 py-3 rounded-full font-semibold transition-all duration-300 relative group overflow-hidden 
              `
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] rounded-full"></span>
              <span className="absolute inset-0.5 bg-white rounded-full"></span>
              <span className="relative flex justify-center bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
                Search on Tinder
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;