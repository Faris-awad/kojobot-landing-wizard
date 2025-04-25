
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <div className="h-12">
            <img 
              src="/lovable-uploads/34e55d29-7798-46c5-ae4e-87cc79cebff6.png"
              alt="Kojobot Logo"
              className="h-full w-auto"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            من نحن
          </a>
          <a href="#curriculum" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            المنهج
          </a>
          <a href="#tracks" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            المسارات
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            الأسعار
          </a>
          <a href="#contact" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            تواصل معنا
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 z-50 bg-white p-4 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-8">
            <a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              من نحن
            </a>
            <a href="#curriculum" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              المنهج
            </a>
            <a href="#tracks" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              المسارات
            </a>
            <a href="#pricing" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              الأسعار
            </a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              تواصل معنا
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
