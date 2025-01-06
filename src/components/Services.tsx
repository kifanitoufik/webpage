import { 
  Building2, Gavel, Home, Users, FileText, Globe2, Scale, Check 
} from 'lucide-react';
import { Content, ServiceDetail } from '../types';

const iconComponents = {
  Building2,
  Gavel,
  Home,
  Users,
  FileText,
  Globe2,
  Scale
};

interface ServicesProps {
  t: Content;
}

export const Services = ({ t }: ServicesProps) => (
  <section id="services" className="py-24 bg-white relative">
    {/* Simple Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/5 to-white"></div>

    {/* Content */}
    <div className="container mx-auto px-4 relative z-10">
      {/* Clean Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-brand-coffee mb-4">
          {t.services.title}
        </h2>
        <p className="text-lg text-brand-steel max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {t.services.items.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = iconComponents[service.icon] || Scale;
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-sand/10 hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-sand/5 text-brand-coffee">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-serif text-brand-coffee mb-4">
        {service.title}
      </h3>
      
      <p className="text-brand-steel mb-6">
        {service.description}
      </p>
      
      {/* Service Details */}
      <div className="space-y-3 pt-4 border-t border-brand-sand/10">
        {service.details.map((detail: string, i: number) => (
          <div key={i} className="flex items-start gap-3 text-brand-steel">
            <Check className="w-5 h-5 text-brand-sand mt-0.5" />
            <span className="text-sm">
              {detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};