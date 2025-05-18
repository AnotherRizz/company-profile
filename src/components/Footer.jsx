import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-sky-500 text-white py-10 px-6 font-poppins">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">TechNova</h1>
          <p className="text-sm">
            Empowering businesses with digital solutions. We specialize in modern, scalable, and user-friendly technology to help you grow.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm space-y-1">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">Email: contact@technova.com</p>
          <p className="text-sm">Phone: +62 812-3456-7890</p>
          <p className="text-sm">Location: Jakarta, Indonesia</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t border-white pt-4">
        &copy; {new Date().getFullYear()} TechNova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
