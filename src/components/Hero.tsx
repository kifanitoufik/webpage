import { useEffect, useState } from 'react';
import { Scale, ArrowRight, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Content } from '../types';
import lawImage from '../assets/law15.jpg';
import headshot from '../assets/headshot.jpg';
import { lng } from './Navigation';

interface HeroProps {
  t: Content;
  lng: lng;
}

const isRTL = (lng: lng) => lng === 'ar';

export const Hero = ({ t, lng }: HeroProps) => {
  return (
    <div
      className={`relative min-h-screen flex items-center overflow-hidden pt-[150px] sm:pt-[70px] ${
        isRTL(lng) ? "rtl" : ""
      }`}
      dir={isRTL(lng) ? "rtl" : "ltr"}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${lawImage})`,
          transform: "scale(1.15)",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-dark/20" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <div className="rounded-sm border border-brand-sand/20 w-4/5 md:w-full">
            <img
              src={headshot}
              alt="Lawyer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`space-y-8 ${isRTL(lng) ? "text-right" : "text-left"}`}>
          {/* Icon */}
          <div className="inline-block">
            <Scale className="w-12 h-12 text-brand-sand" />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl text-slate-200 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 pt-4`}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-brand-sand hover:bg-brand-sand-dark transition-colors rounded-lg"
            >
              <span>{t.hero.cta}</span>
              {isRTL(lng) ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </a>

            <div className="flex gap-4">
              <a
                href={`tel:${t.contact.phone}`}
                className="inline-flex items-center justify-center w-12 h-12 bg-brand-slate hover:bg-brand-slate-dark border border-brand-sand/20 hover:border-brand-sand/30 rounded-lg text-brand-sand transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center justify-center w-12 h-12 bg-brand-slate hover:bg-brand-slate-dark border border-brand-sand/20 hover:border-brand-sand/30 rounded-lg text-brand-sand transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};