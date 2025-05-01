import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="md:order-2">
          <div className="h-16">
            <img 
              src="/lovable-uploads/34e55d29-7798-46c5-ae4e-87cc79cebff6.png"
              alt="Kojobot Logo"
              className="h-full w-auto"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <a href="#about" className="text-gray-900 font-medium text-xl hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-105 px-4 py-1 rounded-md">
            من نحن
          </a>
          <a href="#curriculum" className="text-gray-900 font-medium text-xl hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-105 px-4 py-1 rounded-md">
            المنهج
          </a>
          <a href="#tracks" className="text-gray-900 font-medium text-xl hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-105 px-4 py-1 rounded-md">
            المسارات
          </a>
          <a href="#pricing" className="text-gray-900 font-medium text-xl hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-105 px-4 py-1 rounded-md">
            الأسعار
          </a>
          <a href="#contact" className="text-gray-900 font-medium text-xl hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-105 px-4 py-1 rounded-md">
            تواصل معنا
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-900 hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-110">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 z-50 bg-gradient-to-b from-[#6455F0] to-[#61C9E0] p-6 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white hover:text-[#6455F0] transition-all duration-300 ease-in-out transform hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-8 text-right" style={{ direction: 'rtl' }}>
            <a href="#about" onClick={toggleMenu} className="text-white font-medium text-2xl hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3 rounded-md border-b border-white border-opacity-25">
              من نحن
            </a>
            <a href="#curriculum" onClick={toggleMenu} className="text-white font-medium text-2xl hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3 rounded-md border-b border-white border-opacity-25">
              المنهج
            </a>
            <a href="#tracks" onClick={toggleMenu} className="text-white font-medium text-2xl hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3 rounded-md border-b border-white border-opacity-25">
              المسارات
            </a>
            <a href="#pricing" onClick={toggleMenu} className="text-white font-medium text-2xl hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3 rounded-md border-b border-white border-opacity-25">
              الأسعار
            </a>
            <a href="#contact" onClick={toggleMenu} className="text-white font-medium text-2xl hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3 rounded-md border-b border-white border-opacity-25">
              تواصل معنا
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
