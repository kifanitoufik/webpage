import { useState } from 'react';
import { content } from './content';
import { lng, Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { WhatsAppChat } from './components/WhatsAppChat';

const App = () => {
  const [lang, setLang] = useState<lng>('fr' as lng);
  const currentContent = content[lang];
  // Pre-formatted messages for WhatsApp
  const whatsappMessages = {
    en: "Hello, I'd like to inquire about your legal services.",
    fr: "Bonjour, je voudrais me renseigner sur vos services juridiques.",
    ar: "مرحباً، أود الاستفسار عن خدماتكم القانونية."
  };

  // Format phone number for WhatsApp
  const phoneNumber = "212614354447";

  return (
    <div className={`min-h-screen bg-white ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navigation t={content[lang]} lang={lang} setLang={setLang} />
      
      {/* Main Content */}
      <main>
        <Hero t={currentContent} lng={lang}/>
        <Stats t={currentContent} />
        <Services t={currentContent} />
        <Contact t={currentContent} />
      </main>
      
      {/* WhatsApp Chat Button - Simplified */}
      <WhatsAppChat 
        phoneNumber={phoneNumber}
        message={whatsappMessages[lang]}
      />
      
     {/* Footer */}
      <footer className="bg-white border-t border-brand-sand/10 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Logo & Copyright */}
              <div className="text-brand-steel">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-serif text-xl text-brand-coffee">
                    El Kifani Law
                  </span>
                </div>
                <p className="text-sm">
                  © 2025 El Kifani Law. {
                    lang === 'fr' ? 'Tous droits réservés.' :
                    lang === 'ar' ? 'جميع الحقوق محفوظة.' :
                    'All rights reserved.'
                  }
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="flex justify-end gap-8">
                <a href="#about" className="text-sm text-brand-steel hover:text-brand-coffee transition-colors">
                  {currentContent.nav.about.title}
                </a>
                <a href="#services" className="text-sm text-brand-steel hover:text-brand-coffee transition-colors">
                  {currentContent.nav.services.title}
                </a>
                <a href="#contact" className="text-sm text-brand-steel hover:text-brand-coffee transition-colors">
                  {currentContent.nav.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;