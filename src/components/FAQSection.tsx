
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

const FAQSection = () => {
  const questions = [
    {
      question: "١ - ايه هي كوچوبوت اكاديمي وبتعملوا ايه بالظبط؟",
      answer: "احنا اكاديمية متخصصة في تعليم البرمجة والتكنولوجيا للاطفال من سن ٦ لـ ١٨ سنة. بنوفر كورسات اونلاين واوفلاين هدفها تأسيس الطفل في التفكير المنطقي والبرمجة وتنمية مهاراته التقنية والشخصية."
    },
    {
      question: "٢ - ايه الفئات العمرية اللي بتقبلوها؟",
      answer: "بنستقبل الاطفال من سن ٦ لـ ١٨ سنة ومتقسمين لـ ٣ فئات:\n\n- من ٦ لـ ٩ سنين\n\n- من ١٠ لـ ١٣ سنة\n\n- من ١٤ لـ ١٨ سنة"
    },
    {
      question: "٣ - الكورسات اونلاين ولا اوفلاين؟",
      answer: "الاتنين متاحين. الاوفلاين في مقرنا في المنصورة والاونلاين لأي طفل في أي مكان."
    },
    {
      question: "٤ - هل لازم الطفل يكون عنده خلفية عن البرمجة؟",
      answer: "لا، بنبدأ معاه من الصفر وبنعمل اختبار تحديد مستوى علشان نعرف يبدأ منين."
    },
    {
      question: "٥ - بتعلموا ايه بالظبط؟",
      answer: "عندنا ٣ مراحل تعليمية:\n\n- المرحلة التمهيدية: بنشتغل فيها على حسب سن الطفل، ونعرفه على التكنولوجيا والتفكير المنطقي بطريقة مبسطة\n\n- المرحلة التأسيسية: بنأسسه في البرمجة والـ problem solving ومهارات التفكير\n\n- المرحلة التخصصية: في نص التأسيس الطفل بيختار مساره:\n\nسوفت وير (برمجة – مواقع – تطبيقات – ذكاء صناعي)\n\nهارد وير (روبوتات – الكترونيات – انترنت الاشياء)\n\nوللتفاصيل الكاملة عن كل مرحلة ممكن تتواصل معانا"
    },
    {
      question: "٦ - هل بتعلموا الطفل مهارات تانية غير البرمجة؟",
      answer: "اه بنركز كمان على تطوير مهاراته الشخصية (Soft Skills) زي:\n\n- التفكير النقدي\n\n- حل المشكلات\n\n- العمل الجماعي\n\n- إدارة الوقت\n\n- مهارات التواصل\n\nعلشان نجهزه بشكل متكامل للحياة وسوق العمل"
    },
    {
      question: "٧ - مدة الكورس قد ايه؟",
      answer: "كل مرحلة مدتها تقريباً ٣ شهور وفي تقييم دوري ومستمر في كل مستوى."
    },
    {
      question: "٨ - هل فيه شهادات؟",
      answer: "اه، الطفل بياخد شهادة معتمدة بعد كل مرحلة."
    },
    {
      question: "٩ - الكورسات فردية ولا جماعية؟",
      answer: "عندنا الاتنين وبنرشح الأفضل حسب شخصية الطفل واحتياجاته."
    },
    {
      question: "١٠ - هل فيه متابعة للطفل؟",
      answer: "اه، كل طفل بيكون ليه موجه بيتابعه وبيقدم تقارير دورية للأهل عن مستواه."
    },
    {
      question: "١١ - ازاي اسجل؟",
      answer: "التسجيل سهل. ممكن من خلال الفورم على الموقع او تتواصل معانا على واتساب."
    },
    {
      question: "١٢ - المواعيد عاملة ازاي؟",
      answer: "مرنة، وبنظبط الجدول حسب أنسب وقت للطفل."
    },
    {
      question: "١٣ - هل الطفل بيشتغل على مشاريع؟",
      answer: "اه، في كل مرحلة فيه مشاريع عملية الطفل بينفذها بإيده علشان يطبق اللي اتعلمه."
    },
    {
      question: "١٤ - لو الطفل واجه صعوبة بيتصرف ازاي؟",
      answer: "فيه دعم مستمر من الموجهين، بنساعد الطفل يتخطى أي تحدي بشكل فردي."
    },
  ];

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">الأسئلة الشائعة</span>
          </h2>
          <div className="flex justify-center items-center mt-4">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="text-right">
            {questions.map((q, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="py-6 text-lg font-semibold hover:text-kojobot-purple">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
