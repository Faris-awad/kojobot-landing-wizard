
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-right md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              تعلم البرمجة بطريقة{' '}
              <span className="gradient-text">ممتعة ومبتكرة</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              نقدم دورات متخصصة للأطفال والشباب من عمر ٦ إلى ١٨ سنة لبناء مهارات المستقبل الرقمي
            </p>
            <div className="flex justify-center md:justify-end space-x-4 rtl:space-x-reverse">
              <Button className="gradient-button rounded-full text-lg px-8 py-6">
                ابدأ الآن
              </Button>
              <a href="#curriculum">
                <Button variant="outline" className="rounded-full text-lg px-8 py-6 border-2 border-kojobot-purple text-kojobot-purple hover:bg-kojobot-purple/10">
                  تعرف على المنهج
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-kojobot-gradient opacity-20 rounded-full blur-3xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <img 
                  src="/placeholder.svg" 
                  alt="Kojobot Hero"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
