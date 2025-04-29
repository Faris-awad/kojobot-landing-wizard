
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <div className="h-12 w-40 flex items-center justify-start font-bold text-2xl">
                <span className="gradient-text">Kojobot</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              أكاديمية متخصصة في تعليم البرمجة والإلكترونيات للأطفال والشباب من سن ٦ إلى ١٨ سنة.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2">{t('quick-links')}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-kojobot-blue transition-colors">{t('about')}</a></li>
              <li><a href="#curriculum" className="hover:text-kojobot-blue transition-colors">{t('curriculum')}</a></li>
              <li><a href="#tracks" className="hover:text-kojobot-blue transition-colors">{t('tracks')}</a></li>
              <li><a href="#pricing" className="hover:text-kojobot-blue transition-colors">{t('pricing')}</a></li>
              <li><a href="#contact" className="hover:text-kojobot-blue transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2">{t('contact-us')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('whatsapp-contact')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('phone-contact')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('email-contact')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>{t('address-contact')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kojobot. {t('all-rights-reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
