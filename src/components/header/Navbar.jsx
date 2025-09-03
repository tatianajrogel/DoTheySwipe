import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react"; // icons
import logo from "./../../assets/images/logo.png"
import backgroundImage from "../../assets/images/background-image.png"

const Navbar = () => {

 
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen((prev) => {
    if (!prev) {
      document.body.style.overflow = "hidden"; // menu open → disable scroll
    } else {
      document.body.style.overflow = "auto";   // menu close → enable scroll
    }
    return !prev; // state update
  });
};



  // common classes for links
  const linkClasses = "transition-colors duration-300 font-medium";
  const activeClasses = "text-[#E11D48]"; // highlighted link
  const inactiveClasses = "text-[#121926] hover:text-[#E11D48]";

  return (
    
  


    <header className=" md:p-5 md:px-5 fixed top-0 right-0 z-50 left-0 bg-cover shadow-md md:shadow-none bg-slate-100  md:bg-transparent">
  {/* Navbar */}
  <nav className=" rounded-xl md:shadow-md p-4 relative  z-50">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold flex items-center gap-2">
          <img src={logo} className="w-8 lg:w-9" alt="" />
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

    {/* Mobile Navigation */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? "max-h-96 opacity-100 mt-4 pt-4" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col space-y-4 relative z-50">
        {/* ...Mobile NavLinks*/}
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
    </div>
  </nav>

  {/* Overlay (only mobile) */}
  {isMenuOpen && (
    <div
      className="fixed inset-0 bg-slate-900/60  backdrop-blur-sm z-40"
      onClick={() => setIsMenuOpen(false)} 
    ></div>
  )}
</header>




  );
};

export default Navbar;