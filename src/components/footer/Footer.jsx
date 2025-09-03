import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import SocialIcon from "./SocialIcon";
import logo from '../../assets/images/logo.png'

  const socialLinks = [
    { href: "https://facebook.com/", label: "Facebook", Icon: Facebook, color: "text-blue-600" },
    { href: "https://twitter.com/", label: "Twitter", Icon: Twitter, color: "text-sky-500" },
    { href: "https://linkedin.com/", label: "LinkedIn", Icon: Linkedin, color: "text-blue-700" },
    { href: "https://instagram.com/", label: "Instagram", Icon: Instagram, color: "text-[#E11D48]" },
  ];

const Footer = () => {
  return (
    <footer className="text-black sm:pb-10 sm:px-4">
      <div className="max-w-6xl rounded-xl px-4 bg-gray-100 pt-6 md:pt-16 pb-6 mx-auto">
        {/* Logo and Navigation */}
        <div className="flex flex-col justify-center items-center md:mb-4">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2 mb-6">
          <img src={logo} className="w-8 lg:w-9"  alt="" />
            <NavLink to="/" className="text-2xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#E11D48] to-[#A51CA9] bg-clip-text text-transparent">
                DoTheySwipe
              </span>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center text-sm md:text-lg gap-6 md:gap-8 mb-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#E11D48] transition-colors ${
                  isActive ? "text-[#E11D48]" : "text-black"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#E11D48] transition-colors ${
                  isActive ? "text-[#E11D48]" : "text-slate-950"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `hover:text-[#E11D48] transition-colors ${
                  isActive ? "text-[#E11D48]" : "text-slate-950"
                }`
              }
            >
              FAQ's
            </NavLink>
<NavLink
              to="/privacy-policy"
              className={({ isActive }) =>
                `hover:text-[#E11D48] transition-colors ${
                  isActive ? "text-[#E11D48]" : "text-slate-950"
                }`
              }
            >
              Privacy Policy
            </NavLink>

           <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#E11D48] transition-colors ${
                  isActive ? "text-[#E11D48]" : "text-slate-950"
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* Copyright + Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-300">
          <p className="text-[#142546] mb-4 md:mb-0">
            © 2024 All Rights Reserved dotheyswipe.com
          </p>

          {/* Social Icons */}
           <div className="flex justify-center space-x-3">
        {socialLinks.map((item, index) => (
          <SocialIcon key={index} {...item} />
        ))}
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
