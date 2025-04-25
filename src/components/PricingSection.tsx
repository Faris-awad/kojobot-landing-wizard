import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingSection = () => {
  const [pricingType, setPricingType] = useState("offline");
  
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">الباقات والأسعار</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg leading-relaxed">
            نقدم باقات متنوعة تناسب احتياجات الطلاب المختلفة، سواء كانت حضورية أو عن بعد، بأسعار تنافسية وخيارات مرنة.
          </p>
        </div>
        
        <Tabs defaultValue="offline" className="w-full max-w-4xl mx-auto" onValueChange={setPricingType}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-64">
              <TabsTrigger value="offline">حضوري</TabsTrigger>
              <TabsTrigger value="online">عن بعد</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="offline" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Kojo Squad */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:bg-gradient-to-br hover:from-kojobot-blue hover:to-kojobot-purple hover:text-white group">
                <div className="p-6 bg-gray-50 border-b border-gray-200 transition-colors group-hover:bg-transparent group-hover:border-white/20">
                  <h3 className="font-bold text-2xl text-center mb-2">Kojo Squad</h3>
                  <p className="text-gray-500 group-hover:text-white/90 text-center">٦ إلى ٨ طلاب</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">شهر واحد</span>
                      <span className="font-bold text-lg">1700 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">٣ شهور</span>
                      <span className="font-bold text-lg">3750 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">٦ شهور</span>
                      <span className="font-bold text-lg">6600 ج.م</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kojo Core */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform scale-105 transition-all duration-300 hover:bg-gradient-to-br hover:from-kojobot-blue hover:to-kojobot-purple hover:text-white group">
                <div className="p-6 bg-gray-50 border-b border-gray-200 transition-colors group-hover:bg-transparent group-hover:border-white/20">
                  <h3 className="font-bold text-2xl text-center mb-2">Kojo Core</h3>
                  <p className="text-gray-500 group-hover:text-white/90 text-center">٢ إلى ٣ طلاب</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">شهر واحد</span>
                      <span className="font-bold text-lg">3400 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">٣ شهور</span>
                      <span className="font-bold text-lg">7500 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">٦ شهور</span>
                      <span className="font-bold text-lg">14600 ج.م</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kojo X */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:bg-gradient-to-br hover:from-kojobot-blue hover:to-kojobot-purple hover:text-white group">
                <div className="p-6 bg-gray-50 border-b border-gray-200 transition-colors group-hover:bg-transparent group-hover:border-white/20">
                  <h3 className="font-bold text-2xl text-center mb-2">Kojo X</h3>
                  <p className="text-gray-500 group-hover:text-white/90 text-center">جلسات خاصة (١ على ١)</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">شهر واحد</span>
                      <span className="font-bold text-lg">4800 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">٣ شهور</span>
                      <span className="font-bold text-lg">9000 ج.م</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="online" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Online Kojo Core */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:bg-gradient-to-br hover:from-kojobot-blue hover:to-kojobot-purple hover:text-white group">
                <div className="p-6 bg-gray-50 border-b border-gray-200 transition-colors group-hover:bg-transparent group-hover:border-white/20">
                  <h3 className="font-bold text-2xl text-center mb-2">Kojo Core</h3>
                  <p className="text-gray-500 group-hover:text-white/90 text-center">١ إلى ٥ طلاب</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">شهر واحد</span>
                      <span className="font-bold text-lg">950 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">٣ شهور</span>
                      <span className="font-bold text-lg">2850 ج.م</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Online Kojo X */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform md:scale-105 transition-all duration-300 hover:bg-gradient-to-br hover:from-kojobot-blue hover:to-kojobot-purple hover:text-white group">
                <div className="p-6 bg-gray-50 border-b border-gray-200 transition-colors group-hover:bg-transparent group-hover:border-white/20">
                  <h3 className="font-bold text-2xl text-center mb-2">Kojo X</h3>
                  <p className="text-gray-500 group-hover:text-white/90 text-center">جلسات خاصة (١ على ١)</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 group-hover:border-white/20">
                      <span className="font-medium">شهر واحد</span>
                      <span className="font-bold text-lg">1633 ج.م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">٣ شهور</span>
                      <span className="font-bold text-lg">4900 ج.م</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-4">هل تريد معرفة المزيد عن الباقات والخصومات؟</p>
          <Button className="px-8 py-6 text-lg gradient-button rounded-full">
            تواصل معنا الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
