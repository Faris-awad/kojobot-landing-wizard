
import React, { useEffect } from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">{t('contact-title')}</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed">
            {t('contact-description')}
          </p>
        </div>
        
        {/* Typeform Embed */}
        <div className="mb-16">
          <div data-tf-live="01JT1PGX3KGBKARHHKV2HK7T53"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">{t('whatsapp')}</h3>
            <p className="text-gray-600 mb-4">{t('whatsapp-desc')}</p>
            <Button variant="outline" className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors">
              {t('message-now')}
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">{t('phone')}</h3>
            <p className="text-gray-600 mb-4">{t('phone-desc')}</p>
            <Button variant="outline" className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors">
              {t('call-us')}
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <Facebook className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">{t('facebook')}</h3>
            <p className="text-gray-600 mb-4">{t('facebook-desc')}</p>
            <Button variant="outline" className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors">
              {t('visit-page')}
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">{t('instagram')}</h3>
            <p className="text-gray-600 mb-4">{t('instagram-desc')}</p>
            <Button variant="outline" className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors">
              {t('visit-page')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
