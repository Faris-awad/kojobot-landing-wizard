import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ direction: 'rtl' }}>
          {/* العمود الذي كان الثالث الآن في المكان الأول */}
          <div>
            <div className="mb-4">
              <div className="h-12 w-40 flex items-center justify-start font-bold text-3xl">
                <span className="gradient-text">Kojobot</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4" style={{ textAlign: 'right' }}>
              أكاديمية متخصصة في تعليم البرمجة والإلكترونيات للأطفال والشباب من سن ٦ إلى ١٨ سنة.
            </p>
          </div>
          
          {/* العمود الذي كان في المنتصف يبقى في المنتصف */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2" style={{ textAlign: 'right' }}>روابط سريعة</h3>
            <ul className="space-y-2" style={{ textAlign: 'right' }}>
              <li><a href="#about" className="hover:text-kojobot-blue transition-colors">من نحن</a></li>
              <li><a href="#curriculum" className="hover:text-kojobot-blue transition-colors">المنهج التعليمي</a></li>
              <li><a href="#tracks" className="hover:text-kojobot-blue transition-colors">المسارات التعليمية</a></li>
              <li><a href="#pricing" className="hover:text-kojobot-blue transition-colors">الباقات والأسعار</a></li>
              <li><a href="#contact" className="hover:text-kojobot-blue transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* العمود الذي كان الأول الآن في المكان الثالث */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2" style={{ textAlign: 'right' }}>تواصل معنا</h3>
            <ul className="space-y-2" style={{ textAlign: 'right' }}>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>واتساب: <a 
                style={{
                  textDecoration: "underline"
                }}
                href="https://wa.me/201551257522" target='_blank'>01551257522</a>  </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>البريد الإلكتروني: info@kojobot.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>العنوان: المنصورة ميدان المحافظه اعلى فودافون مدخل خلفي </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400" style={{ direction: 'rtl', textAlign: 'right' }}>
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة Kojobot. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
