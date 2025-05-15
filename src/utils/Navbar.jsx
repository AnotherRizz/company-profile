import React from "react";
import { LaptopMinimalCheck, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-slate-200 fixed top-0 bg-white z-50 font-poppins">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-sky-900">
        TechNova <LaptopMinimalCheck />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
        <a href="#home" className="hover:text-sky-600 transition">
          Home
        </a>
        <a href="#about" className="hover:text-sky-600 transition">
          About
        </a>
        <a href="#services" className="hover:text-sky-600 transition">
          Services
        </a>
        <a href="#portfolio" className="hover:text-sky-600 transition">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-sky-600 transition">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className=" md:hidden" onClick={() => {}}>
          <Menu />
        </button>
        <a
          href="#contact"
          className="hidden md:inline-block bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-full transition">
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
