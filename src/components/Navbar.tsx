
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Toggle } from '@/components/ui/toggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
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
            {t('about')}
          </a>
          <a href="#curriculum" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            {t('curriculum')}
          </a>
          <a href="#tracks" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            {t('tracks')}
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            {t('pricing')}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-kojobot-purple transition-colors">
            {t('contact')}
          </a>
        </nav>

        {/* Language Selector Button */}
        <div className="flex items-center">
          <Toggle 
            variant="outline" 
            size="sm"
            pressed={language === 'en'}
            onPressedChange={toggleLanguage}
            className="flex items-center gap-1 border-gray-300 mr-2"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{t('language')}</span>
          </Toggle>
        </div>

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
          <div className="flex justify-between">
            {/* Language Toggle in Mobile Menu */}
            <Toggle 
              variant="outline" 
              size="sm"
              pressed={language === 'en'}
              onPressedChange={toggleLanguage}
              className="flex items-center gap-1 border-gray-300"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{t('language')}</span>
            </Toggle>
            
            <button onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 mt-8">
            <a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              {t('about')}
            </a>
            <a href="#curriculum" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              {t('curriculum')}
            </a>
            <a href="#tracks" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              {t('tracks')}
            </a>
            <a href="#pricing" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              {t('pricing')}
            </a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-kojobot-purple transition-colors">
              {t('contact')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
