
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
    // Hero section
    'hero-title': 'تعلم البرمجة بطريقة ممتعة ومبتكرة',
    'hero-description': 'نقدم دورات متخصصة للأطفال والشباب من عمر ٦ إلى ١٨ سنة لبناء مهارات المستقبل الرقمي',
    'start-now': 'ابدأ الآن',
    'explore-curriculum': 'تعرف على المنهج',
    // About section
    'about-title': 'من نحن',
    'about-description-1': 'كوجوبوت هي أكاديمية رائدة في تعليم البرمجة للأطفال والشباب، بدأت رحلتها بهدف بناء جيل قادر على التعامل مع التكنولوجيا بثقة وإبداع.',
    'about-description-2': 'نجمع بين التعلم الحضوري والتعلم عن بعد، مع منهجية تفاعلية تحول تعلم البرمجة إلى مغامرة ممتعة ومثيرة. طورنا مناهجنا بعناية لتناسب الفئات العمرية المختلفة من سن ٦ إلى ١٨ سنة، مع التركيز على تنمية مهارات التفكير المنطقي وحل المشكلات والإبداع.',
    'specialized-education': 'تعليم متخصص',
    'specialized-education-desc': 'مناهج مصممة خصيصًا لكل فئة عمرية مع مسارات تعلم تتناسب مع اهتمامات وقدرات الطلاب المختلفة',
    'flexible-learning': 'مرونة في التعلم',
    'flexible-learning-desc': 'خيارات متعددة للتعلم الحضوري أو عن بعد، مع مجموعات صغيرة أو جلسات فردية حسب احتياجات الطالب',
    'professional-trainers': 'مدربون محترفون',
    'professional-trainers-desc': 'فريق من المدربين ذوي الخبرة في مجال البرمجة والتعليم، قادرين على تبسيط المفاهيم المعقدة وإلهام الطلاب',
    // Curriculum section
    'curriculum-title': 'المنهج التعليمي',
    'curriculum-description': 'صممنا منهجنا التعليمي ليكون شاملًا ومتدرجًا، يبدأ بالمفاهيم الأساسية ثم ينتقل إلى المستويات المتقدمة حسب قدرات الطالب واهتماماته.',
    'foundation-stages': 'المراحل التأسيسية',
    'computer-basics': 'أساسيات الكمبيوتر',
    'computer-basics-desc': 'تعرف على مكونات الكمبيوتر وكيفية عمله، تعلم مهارات استخدام لوحة المفاتيح والماوس، واكتشف أساسيات التعامل مع نظم التشغيل والملفات.',
    'intro-programming': 'مقدمة في البرمجة',
    'intro-programming-desc': 'اكتشف مفاهيم البرمجة الأساسية من خلال البرمجة المرئية، تعلم التفكير المنطقي وحل المشكلات، وطور مهارات التفكير الحسابي.',
    'advanced-journey': 'رحلة التعلم المتقدمة',
    'after-foundation': 'بعد إتمام المراحل التأسيسية، يمكن للطالب اختيار أحد المسارين:',
    'software-track': 'مسار البرمجيات',
    'software-track-desc': 'مسار متقدم يركز على تطوير مهارات البرمجة وإنشاء التطبيقات والمواقع الإلكترونية',
    'hardware-track': 'مسار الإلكترونيات',
    'hardware-track-desc': 'مسار متقدم يركز على تطوير مهارات الإلكترونيات والروبوتات والتحكم في الأجهزة',
    // Tracks section
    'tracks-title': 'مساراتنا التعليمية',
    'tracks-description': 'نقدم مسارات تعليمية متنوعة تناسب مختلف الفئات العمرية والاهتمامات، كل مسار مصمم بعناية لتطوير مهارات محددة.',
    'beginner-stage': 'المرحلة التمهيدية',
    'intermediate-stage': 'المرحلة المتوسطة',
    'advanced-stage': 'المرحلة المتقدمة',
    // Contact section
    'contact-title': 'تواصل معنا',
    'contact-description': 'نحن هنا للإجابة على جميع استفساراتك وتقديم المزيد من المعلومات حول برامجنا. يمكنك التواصل معنا عبر أي من القنوات التالية:',
    'whatsapp': 'واتساب',
    'whatsapp-desc': 'تواصل معنا عبر الواتساب للرد السريع',
    'message-now': 'راسلنا الآن',
    'phone': 'الهاتف',
    'phone-desc': 'اتصل بنا مباشرة للاستفسار أو الحجز',
    'call-us': 'اتصل بنا',
    'facebook': 'فيسبوك',
    'facebook-desc': 'تابعنا على فيسبوك للأخبار والتحديثات',
    'visit-page': 'زيارة الصفحة',
    'instagram': 'انستجرام',
    'instagram-desc': 'تابعنا على انستجرام لمشاهدة نشاطاتنا',
    // Footer
    'quick-links': 'روابط سريعة',
    'contact-us': 'تواصل معنا',
    'whatsapp-contact': 'واتساب: +20 123 456 7890',
    'phone-contact': 'هاتف: +20 123 456 7890',
    'email-contact': 'البريد الإلكتروني: info@kojobot.com',
    'address-contact': 'العنوان: القاهرة، مصر',
    'all-rights-reserved': 'جميع الحقوق محفوظة',
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
    // Hero section
    'hero-title': 'Learn programming in a fun and innovative way',
    'hero-description': 'We offer specialized courses for children and youth aged 6 to 18 years to build digital future skills',
    'start-now': 'Start Now',
    'explore-curriculum': 'Explore Curriculum',
    // About section
    'about-title': 'About Us',
    'about-description-1': 'Kojobot is a leading academy in teaching programming to children and youth, started with the goal of building a generation capable of dealing with technology confidently and creatively.',
    'about-description-2': 'We combine in-person and remote learning, with an interactive methodology that transforms learning programming into an exciting adventure. We have carefully developed our curricula to suit different age groups from 6 to 18 years, focusing on developing logical thinking, problem-solving, and creativity skills.',
    'specialized-education': 'Specialized Education',
    'specialized-education-desc': 'Curricula designed specifically for each age group with learning paths that match the interests and abilities of different students',
    'flexible-learning': 'Flexible Learning',
    'flexible-learning-desc': 'Multiple options for in-person or remote learning, with small groups or individual sessions according to student needs',
    'professional-trainers': 'Professional Trainers',
    'professional-trainers-desc': 'A team of experienced trainers in programming and education, able to simplify complex concepts and inspire students',
    // Curriculum section
    'curriculum-title': 'Educational Curriculum',
    'curriculum-description': 'We designed our educational curriculum to be comprehensive and progressive, starting with the basic concepts and then moving to advanced levels according to the student\'s abilities and interests.',
    'foundation-stages': 'Foundation Stages',
    'computer-basics': 'Computer Basics',
    'computer-basics-desc': 'Learn about computer components and how they work, learn keyboard and mouse skills, and discover the basics of operating systems and files.',
    'intro-programming': 'Introduction to Programming',
    'intro-programming-desc': 'Discover basic programming concepts through visual programming, learn logical thinking and problem-solving, and develop computational thinking skills.',
    'advanced-journey': 'Advanced Learning Journey',
    'after-foundation': 'After completing the foundation stages, the student can choose one of two tracks:',
    'software-track': 'Software Track',
    'software-track-desc': 'An advanced track focusing on developing programming skills and creating applications and websites',
    'hardware-track': 'Hardware Track',
    'hardware-track-desc': 'An advanced track focusing on developing electronics, robotics and device control skills',
    // Tracks section
    'tracks-title': 'Our Educational Tracks',
    'tracks-description': 'We offer diverse educational tracks suitable for different age groups and interests, each track carefully designed to develop specific skills.',
    'beginner-stage': 'Beginner Stage',
    'intermediate-stage': 'Intermediate Stage',
    'advanced-stage': 'Advanced Stage',
    // Contact section
    'contact-title': 'Contact Us',
    'contact-description': 'We are here to answer all your inquiries and provide more information about our programs. You can contact us through any of the following channels:',
    'whatsapp': 'WhatsApp',
    'whatsapp-desc': 'Contact us via WhatsApp for a quick response',
    'message-now': 'Message Now',
    'phone': 'Phone',
    'phone-desc': 'Call us directly for inquiries or bookings',
    'call-us': 'Call Us',
    'facebook': 'Facebook',
    'facebook-desc': 'Follow us on Facebook for news and updates',
    'visit-page': 'Visit Page',
    'instagram': 'Instagram',
    'instagram-desc': 'Follow us on Instagram to see our activities',
    // Footer
    'quick-links': 'Quick Links',
    'contact-us': 'Contact Us',
    'whatsapp-contact': 'WhatsApp: +20 123 456 7890',
    'phone-contact': 'Phone: +20 123 456 7890',
    'email-contact': 'Email: info@kojobot.com',
    'address-contact': 'Address: Cairo, Egypt',
    'all-rights-reserved': 'All rights reserved',
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
