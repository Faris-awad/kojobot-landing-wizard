
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24 aaaaaa">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">من نحن</span>
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            <span className="font-bold gradient-text">كوجوبوت</span> هي أكاديمية رائدة في تعليم البرمجة للأطفال والشباب، بدأت رحلتها بهدف بناء جيل قادر على التعامل مع التكنولوجيا بثقة وإبداع.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            نجمع بين التعلم الحضوري والتعلم عن بعد، مع منهجية تفاعلية تحول تعلم البرمجة إلى مغامرة ممتعة ومثيرة. طورنا مناهجنا بعناية لتناسب الفئات العمرية المختلفة من سن ٦ إلى ١٨ سنة، مع التركيز على تنمية مهارات التفكير المنطقي وحل المشكلات والإبداع.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">تعليم متخصص</h3>
            <p className="text-gray-600 text-center">
              مناهج مصممة خصيصًا لكل فئة عمرية مع مسارات تعلم تتناسب مع اهتمامات وقدرات الطلاب المختلفة
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">مرونة في التعلم</h3>
            <p className="text-gray-600 text-center">
              خيارات متعددة للتعلم الحضوري أو عن بعد، مع مجموعات صغيرة أو جلسات فردية حسب احتياجات الطالب
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">مدربون محترفون</h3>
            <p className="text-gray-600 text-center">
              فريق من المدربين ذوي الخبرة في مجال البرمجة والتعليم، قادرين على تبسيط المفاهيم المعقدة وإلهام الطلاب
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
