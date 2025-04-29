
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'ar', // Default language is Arabic
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translations object
const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navbar
    'about': 'من نحن',
    'curriculum': 'المنهج',
    'tracks': 'المسارات',
    'pricing': 'الأسعار',
    'contact': 'تواصل معنا',
    // Language selector
    'language': 'English',
  },
  en: {
    // Navbar
    'about': 'About Us',
    'curriculum': 'Curriculum',
    'tracks': 'Tracks',
    'pricing': 'Pricing',
    'contact': 'Contact Us',
    // Language selector
    'language': 'العربية',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
