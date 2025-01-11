import { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Content } from '../types';

export enum lng {
  en = 'en',
  fr = 'fr',
  ar = 'ar'
}

export interface NavigationProps {
  t: Content;
  lang: lng;
  setLang: (lang: lng) => void;
}

export const Navigation = ({ t, lang, setLang }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-sand/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-serif flex items-center gap-3">
            <Scale className="w-6 h-6 md:w-8 md:h-8 text-brand-coffee" />
            <span className="hidden sm:inline text-brand-coffee">{t.hero.title}</span>
            <span className="sm:hidden text-brand-coffee">El Kifani</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <NavLink href="#about">{t.nav.about.title}</NavLink>
            <NavLink href="#services">{t.nav.services.title}</NavLink>
            <NavLink href="#contact">{t.nav.contact}</NavLink>

            {/* Language Selector */}
            <div className="flex gap-2 border-l border-brand-sand/20 pl-8">
              {(['fr', 'ar', 'en'] as const).map((l) => (
                <button 
                  key={l}
                  onClick={() => setLang(l as lng)} 
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    lang === l 
                      ? 'bg-brand-coffee text-white' 
                      : 'text-brand-steel hover:bg-brand-sand/10'
                  }`}
                >
                  {l === 'ar' ? 'عربي' : l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-brand-sand/10 text-brand-coffee transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden
          absolute left-0 right-0
          bg-white border-b border-brand-sand/10
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}
        `}>
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
              {t.nav.about.title}
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>
              {t.nav.services.title}
            </MobileNavLink>
            <MobileNavLink href="#resources" onClick={() => setIsOpen(false)}>
              {t.nav.resources.title}
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              {t.nav.contact}
            </MobileNavLink>

            {/* Mobile Language Selector */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-brand-sand/20">
              {(['fr', 'ar', 'en'] as const).map((l) => (
                <button 
                  key={l}
                  onClick={() => {
                    setLang(l as lng);
                    setIsOpen(false);
                  }} 
                  className={`py-2 px-4 rounded-lg transition-colors ${
                    lang === l 
                      ? 'bg-brand-coffee text-white' 
                      : 'text-brand-steel hover:bg-brand-sand/10'
                  }`}
                >
                  {l === 'ar' ? 'عربي' : l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-brand-steel hover:text-brand-coffee transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="py-2 text-brand-steel hover:text-brand-coffee transition-colors"
  >
    {children}
  </a>
);