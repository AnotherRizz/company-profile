import React from "react";
import { useState } from "react";
import { LaptopMinimalCheck, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-slate-200 fixed top-0 bg-white z-50 font-poppins">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-sky-900">
        TechNova <LaptopMinimalCheck />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
       
      </div>

      <div className="flex items-center gap-4">
        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col w-44 p-4 bg-white border rounded-md shadow-md absolute top-16 right-6 gap-3 text-sm text-gray-700">
            <a href="#home" onClick={toggleMenu} className="hover:text-sky-600">
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:text-sky-600">
              About
            </a>
            <a
              href="#services"
              onClick={toggleMenu}
              className="hover:text-sky-600">
              Services
            </a>
            <a
              href="#portfolio"
              onClick={toggleMenu}
              className="hover:text-sky-600">
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-sky-600">
              Contact
            </a>
          </div>
        )}
        <a
          href="#contact"
          className="hidden md:inline-block bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-full transition">
          Let's Connect
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
