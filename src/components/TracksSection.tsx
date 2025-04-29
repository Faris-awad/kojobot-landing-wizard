
import React from 'react';

const TracksSection = () => {
  return (
    <section id="tracks" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">مساراتنا التعليمية</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed">
            نقدم مسارات تعليمية متنوعة تناسب مختلف الفئات العمرية والاهتمامات، كل مسار مصمم بعناية لتطوير مهارات محددة.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Software Track */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-16 bg-kojobot-purple flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">مسار البرمجيات</h3>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-2 text-kojobot-purple">المرحلة التمهيدية</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>التفكير المنطقي وأساسيات حل المشكلات</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>البرمجة المرئية (Scratch) للمبتدئين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>أساسيات البرمجة وبناء الخوارزميات</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-2 text-kojobot-purple">المرحلة المتوسطة</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>مقدمة في Python وتطبيقاتها</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>تطوير تطبيقات الويب البسيطة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>مشاريع برمجية تفاعلية</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 text-kojobot-purple">المرحلة المتقدمة</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>برمجة تطبيقات الويب الكاملة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>مقدمة في الذكاء الاصطناعي وعلوم البيانات</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>تصميم وتطوير الألعاب</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Hardware Track */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-16 bg-kojobot-blue flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">مسار الإلكترونيات</h3>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-2 text-kojobot-blue">المرحلة التمهيدية</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>مقدمة في الإلكترونيات والدوائر الكهربائية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>أساسيات المكونات الإلكترونية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>مشاريع إلكترونية بسيطة</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-2 text-kojobot-blue">المرحلة المتوسطة</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>برمجة الأردوينو (Arduino) للمبتدئين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>بناء روبوتات تفاعلية بسيطة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>استخدام الحساسات والمشغلات</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2 text-kojobot-blue">المرحلة المتقدمة</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>تصميم وبناء روبوتات متقدمة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>مشاريع إنترنت الأشياء (IoT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>تطبيقات المتحكمات الدقيقة المتقدمة</span>
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

export default TracksSection;
