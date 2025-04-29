
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CurriculumSection = () => {
  const { t } = useLanguage();

  return (
    <section id="curriculum" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">{t('curriculum-title')}</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed">
            {t('curriculum-description')}
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Foundation Stages */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">{t('foundation-stages')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">{t('computer-basics')}</h4>
                <p className="text-gray-600">
                  {t('computer-basics-desc')}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-kojobot-purple/10 text-kojobot-purple rounded-full text-sm">مهارات استخدام الكمبيوتر</span>
                  <span className="px-3 py-1 bg-kojobot-purple/10 text-kojobot-purple rounded-full text-sm">الملفات والمجلدات</span>
                  <span className="px-3 py-1 bg-kojobot-purple/10 text-kojobot-purple rounded-full text-sm">أمان الإنترنت</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">{t('intro-programming')}</h4>
                <p className="text-gray-600">
                  {t('intro-programming-desc')}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-kojobot-purple/10 text-kojobot-purple rounded-full text-sm">البرمجة المرئية</span>
                  <span className="px-3 py-1 bg-kojobot-purple/10 text-kojobot-purple rounded-full text-sm">حل المشكلات</span>
                  <span className="px-3 py-1 bg-kojobot-purple/10 text-kojobot-purple rounded-full text-sm">المنطق البرمجي</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Advanced Stages Journey */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">{t('advanced-journey')}</h3>
            <p className="text-center text-lg mb-10">{t('after-foundation')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-2 border-kojobot-purple/30 p-8 rounded-lg relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                  <h4 className="text-xl font-bold text-kojobot-purple">{t('software-track')}</h4>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  {t('software-track-desc')}
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-purple"></div>
                    <span>حل المشكلات المعقدة باستخدام الخوارزميات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-purple"></div>
                    <span>تعلم لغات البرمجة مثل Python و JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-purple"></div>
                    <span>تصميم وتطوير مواقع الويب والتطبيقات</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-purple"></div>
                    <span>علوم البيانات والذكاء الاصطناعي للمتقدمين</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-2 border-kojobot-blue/30 p-8 rounded-lg relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                  <h4 className="text-xl font-bold text-kojobot-blue">{t('hardware-track')}</h4>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  {t('hardware-track-desc')}
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-blue"></div>
                    <span>مبادئ الإلكترونيات والدوائر الكهربائية</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-blue"></div>
                    <span>برمجة المتحكمات الدقيقة مثل Arduino</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-blue"></div>
                    <span>تصميم وبناء الروبوتات والأجهزة الذكية</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-kojobot-blue"></div>
                    <span>إنترنت الأشياء (IoT) وتطبيقاتها</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
