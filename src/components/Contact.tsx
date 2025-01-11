import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Content } from '../types';

interface ContactProps {
  t: Content;
}

export const Contact = ({ t }: ContactProps) => (
  <section id="contact" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-brand-coffee mb-4">
          {t.contact.title}
        </h2>
        <p className="text-lg text-brand-steel max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Main Contact Card */}
          <div className="bg-brand-sand/5 rounded-lg p-8">
            <div className="space-y-8">
              <ContactItem
                icon={<MapPin className="w-6 h-6 text-brand-coffee" />}
                title={t.contact.address.city}
                details={[
                  t.contact.address.street,
                  t.contact.address.city,
                  t.contact.address.country,
                  t.contact.address.postal
                ]}
              />
              
              <ContactItem
                icon={<Phone className="w-6 h-6 text-brand-coffee" />}
                title="Phone"
                details={[t.contact.phone]}
                href={`tel:${t.contact.phone}`}
              />
              
              <ContactItem
                icon={<Mail className="w-6 h-6 text-brand-coffee" />}
                title="Email"
                details={[t.contact.email]}
                href={`mailto:${t.contact.email}`}
              />
              
              <ContactItem
                icon={<Clock className="w-6 h-6 text-brand-coffee" />}
                title="Business Hours"
                details={[t.contact.hours]}
              />
              
              <ContactItem
                icon={<MessageCircle className="w-6 h-6 text-brand-coffee" />}
                title="WhatsApp"
                details={[t.contact.whatsapp]}
                href={`https://wa.me/${t.contact.whatsapp}`}
              />
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-brand-coffee text-white rounded-lg p-8">
            <p className="text-lg leading-relaxed">
              {t.contact.cta}
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative">
          {/* Clean Map Container */}
          <div className="bg-white rounded-lg shadow-sm border border-brand-sand/10 overflow-hidden h-[600px]">
            <iframe
              title="Office Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCGXRa_5IdqI4kOTStKoWJIuwpqS_Sw0ys=place_id:${t.contact.map.place_id}&zoom=15`}
              allowFullScreen
            />
          </div>
          
          {/* Subtle Overlay Border */}
          <div className="absolute inset-0 border border-brand-sand/10 rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
);

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  href?: string;
}

const ContactItem = ({ icon, title, details, href }: ContactItemProps) => (
  <div className="flex gap-4">
    {/* Icon Container */}
    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
      {icon}
    </div>
    
    {/* Content */}
    <div>
      <h3 className="font-serif text-lg text-brand-coffee mb-2">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-brand-steel">
            {href ? (
              <a 
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="hover:text-brand-coffee transition-colors"
              >
                {detail}
              </a>
            ) : (
              detail
            )}
          </p>
        ))}
      </div>
    </div>
  </div>
);