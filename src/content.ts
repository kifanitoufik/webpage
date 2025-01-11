// content.ts
export const content = {
  en: {
    nav: {
      home: "Home",
      about: {
        title: "About",
        team: "Our Team",
        expertise: "Areas of Expertise",
        testimonials: "Client Stories"
      },
      services: {
        title: "Services",
        business: "Business Law",
        litigation: "Litigation",
        personal: "Personal Legal Services"
      },
      resources: {
        title: "Resources",
        blog: "Insights",
        faq: "FAQ",
        downloads: "Legal Guides"
      },
      contact: "Contact"
    },
    hero: {
      title: "El Kifani Law Firm",
      subtitle: "Trusted Legal Excellence in Morocco",
      cta: "Schedule Consultation",
      meta: {
        description: "Premier law firm in Rabat offering comprehensive legal services. Over 30 years of excellence in legal representation.",
        keywords: "Morocco law firm, Rabat legal services, business law Morocco, international law"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Legal Solutions",
      items: [
        {
          title: "Corporate Law",
          description: "Expert guidance for businesses on formation, governance, and commercial transactions.",
          icon: "Building2",
          details: [
            "Business Formation & Registration",
            "Corporate Governance",
            "Commercial Contracts",
            "Mergers & Acquisitions"
          ]
        },
        {
          title: "Litigation",
          description: "Strategic representation in civil and commercial disputes.",
          icon: "Gavel",
          details: [
            "Civil Litigation",
            "Commercial Disputes",
            "Alternative Dispute Resolution",
            "Administrative Law"
          ]
        },
        {
          title: "Real Estate",
          description: "Comprehensive property law services for transactions and development.",
          icon: "Home",
          details: [
            "Property Transactions",
            "Development Projects",
            "Lease Agreements",
            "Property Disputes"
          ]
        },
        {
          title: "Family Law",
          description: "Sensitive handling of personal and family legal matters.",
          icon: "Users",
          details: [
            "Marriage & Divorce",
            "Child Custody",
            "Inheritance",
            "Family Disputes"
          ]
        },
        {
          title: "Contract Law",
          description: "Expert drafting and negotiation of legal agreements.",
          icon: "FileText",
          details: [
            "Contract Drafting",
            "Contract Review",
            "Negotiations",
            "Compliance Review"
          ]
        },
        {
          title: "International Law",
          description: "Cross-border legal services for global business operations.",
          icon: "Globe2",
          details: [
            "International Contracts",
            "Foreign Investment",
            "Cross-border Transactions",
            "International Compliance"
          ]
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Schedule a Consultation",
      address: {
        street: "123 Avenue Mohammed V",
        city: "Rabat",
        country: "Morocco",
        postal: "10000"
      },
      email: "contact@elkifanilaw.com",
      phone: "+212-537-000000",
      whatsapp: "+212-669-577029",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      map: {
        lat: 34.0209,
        lng: -6.8416,
        place_id: "ChIJK_JaoVbBpw0RXMqwXZuK1Lw"
      },
      cta: "Contact us today to discuss your legal needs with our experienced team."
    },
    stats: {
      years: "Years of Excellence",
      cases: "Successful Cases",
      lawyers: "Expert Lawyers",
      rate: "Success Rate",
      trusted: "Trusted by Leading Organizations"
    },
    seo: {
      schema: {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "El Kifani Law Firm",
        "image": ["https://elkifanilaw.com/logo.png"],
        "description": "Premier law firm in Rabat offering comprehensive legal services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4 rue al marj",
          "addressLocality": "Rabat",
          "postalCode": "10000",
          "addressCountry": "MA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 34.0199,
          "longitude":  -6.8305
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: {
        title: "À propos",
        team: "Notre équipe",
        expertise: "Domaines d'expertise",
        testimonials: "Histoires de clients"
      },
      services: {
        title: "Services",
        business: "Droit des affaires",
        litigation: "Contentieux",
        personal: "Services juridiques personnels"
      },
      resources: {
        title: "Ressources",
        blog: "Perspectives juridiques",
        faq: "FAQ",
        downloads: "Guides juridiques"
      },
      contact: "Contact"
    },
    hero: {
      title: "Cabinet d'avocat El Kifani",
      subtitle: "Excellence juridique de confiance au Maroc",
      cta: "Planifier une consultation",
      meta: {
        description: "Cabinet d'avocat de premier plan à Rabat offrant des services juridiques complets. Plus de 30 ans d'excellence dans la représentation légale.",
        keywords: "Cabinet d'avocat Maroc, services juridiques Rabat, droit des affaires Maroc, droit international"
      }
    },
    services: {
      title: "Nos services",
      subtitle: "Solutions juridiques complètes",
      items: [
        {
          title: "Droit des sociétés",
          description: "Conseils d'experts pour les entreprises en matière de création, de gouvernance et de transactions commerciales.",
          icon: "Building2",
          details: [
            "Contrats commerciaux",
            "Recouvrement de créances",
          ]
        },
        {
          title: "Contentieux",
          description: "Représentation stratégique dans les différends civils et commerciaux.",
          icon: "Gavel",
          details: [
            "Contentieux civil",
            "Contentieux fiscaux",
            "Différends commerciaux",
            "Modes alternatifs de résolution des conflits",
            "Droit administratif"
          ]
        },
        {
          title: "Droit immobilier",
          description: "Services juridiques complets pour les transactions et projets de développement immobilier.",
          icon: "Home",
          details: [
            "Transactions immobilières",
            "Litiges immobiliers"
          ]
        },
        {
          title: "Droit de la famille",
          description: "Prise en charge sensible des questions juridiques personnelles et familiales.",
          icon: "Users",
          details: [
            "Mariage et divorce",
            "Garde d'enfants",
            "Héritage",
            "Conflits familiaux"
          ]
        },
        {
          title: "Droit des contrats",
          description: "Rédaction et négociation d'accords juridiques.",
          icon: "FileText",
          details: [
            "Rédaction de contrats",
            "Révision de contrats",
            "Négociations",
            "Vérification de conformité"
          ]
        },
      ]
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Planifiez une consultation",
      address: {
        street: "4 bis rue al marj",
        city: "Rabat",
        country: "Maroc",
        postal: "10000"
      },
      email: "kifanitoufik@gmail.com",
      phone: "+212-614-354-447",
      whatsapp: "+212-614-354-447",
      hours: "Du lundi au vendredi : 9h00 - 18h00",
      map: {
        lat: 34.0209,
        lng: -6.8416,
        place_id: "ChIJK_JaoVbBpw0RXMqwXZuK1Lw"
      },
      cta: "Contactez-nous dès aujourd'hui pour discuter de vos besoins juridiques avec notre équipe expérimentée."
    },
    stats: {
      years: "Années d'excellence",
      cases: "Cas réussis",
      lawyers: "avocat experts",
      rate: "Taux de réussite",
      trusted: "Confié par des organisations de premier plan"
    },
    seo: {
      schema: {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Cabinet d'avocat El Kifani",
        "image": ["https://elkifanilaw.com/logo.png"],
        "description": "Cabinet d'avocat de premier plan à Rabat offrant des services juridiques complets.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Avenue Mohammed V",
          "addressLocality": "Rabat",
          "postalCode": "10000",
          "addressCountry": "MA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 34.0209,
          "longitude": -6.8416
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: {
        title: "عن المكتب",
        team: "فريقنا",
        expertise: "مجالات الخبرة",
        testimonials: "قصص العملاء"
      },
      services: {
        title: "الخدمات",
        business: "قانون الأعمال",
        litigation: "التقاضي",
        personal: "الخدمات القانونية الشخصية"
      },
      resources: {
        title: "الموارد",
        blog: "الرؤى القانونية",
        faq: "الأسئلة الشائعة",
        downloads: "أدلة قانونية"
      },
      contact: "اتصل بنا"
    },
    hero: {
      title: "مكتب المحاماة الكيفاني",
      subtitle: "التميز القانوني الموثوق في المغرب",
      cta: "حدد موعد استشارة",
      meta: {
        description: "مكتب محاماة رائد في الرباط يقدم خدمات قانونية شاملة. أكثر من 30 عامًا من التميز في التمثيل القانوني.",
        keywords: "مكتب محاماة المغرب، الخدمات القانونية الرباط، قانون الأعمال المغرب، القانون الدولي"
      }
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول قانونية شاملة",
      items: [
        {
          title: "قانون الشركات",
          description: "إرشادات خبراء للشركات في التأسيس، الحوكمة، والمعاملات التجارية.",
          icon: "Building2",
          details: [
            "تأسيس وتسجيل الشركات",
            "حوكمة الشركات",
            "العقود التجارية",
            "الاندماجات والاستحواذات"
          ]
        },
        {
          title: "التقاضي",
          description: "تمثيل استراتيجي في النزاعات المدنية والتجارية.",
          icon: "Gavel",
          details: [
            "التقاضي المدني",
            "النزاعات التجارية",
            "حل النزاعات البديلة",
            "القانون الإداري"
          ]
        },
        {
          title: "قانون العقارات",
          description: "خدمات قانونية شاملة في المعاملات العقارية ومشاريع التطوير.",
          icon: "Home",
          details: [
            "المعاملات العقارية",
            "مشاريع التطوير",
            "اتفاقيات الإيجار",
            "النزاعات العقارية"
          ]
        },
        {
          title: "قانون الأسرة",
          description: "التعامل الحساس مع المسائل القانونية الشخصية والعائلية.",
          icon: "Users",
          details: [
            "الزواج والطلاق",
            "حضانة الأطفال",
            "الميراث",
            "النزاعات الأسرية"
          ]
        },
        {
          title: "قانون العقود",
          description: "إعداد وصياغة العقود القانونية والتفاوض بشأنها.",
          icon: "FileText",
          details: [
            "صياغة العقود",
            "مراجعة العقود",
            "التفاوضات",
            "مراجعة الامتثال"
          ]
        },
        {
          title: "القانون الدولي",
          description: "خدمات قانونية عبر الحدود لعمليات الأعمال العالمية.",
          icon: "Globe2",
          details: [
            "العقود الدولية",
            "الاستثمار الأجنبي",
            "المعاملات عبر الحدود",
            "الامتثال الدولي"
          ]
        }
      ]
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "حدد موعد استشارة",
      address: {
        street: "123 شارع محمد الخامس",
        city: "الرباط",
        country: "المغرب",
        postal: "10000"
      },
      email: "contact@elkifanilaw.com",
      phone: "+212-537-000000",
      whatsapp: "+212-669-577029",
      hours: "من الإثنين إلى الجمعة: 9:00 صباحًا - 6:00 مساءً",
      map: {
        lat: 34.0209,
        lng: -6.8416,
        place_id: "ChIJK_JaoVbBpw0RXMqwXZuK1Lw"
      },
      cta: "اتصل بنا اليوم لمناقشة احتياجاتك القانونية مع فريقنا ذي الخبرة."
    },
    stats: {
      years: "سنوات من التميز",
      cases: "القضايا الناجحة",
      lawyers: "محامون خبراء",
      rate: "معدل النجاح",
      trusted: "موثوق به من قبل المنظمات الرائدة"
    },
    seo: {
      schema: {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "مكتب المحاماة الكيفاني",
        "image": ["https://elkifanilaw.com/logo.png"],
        "description": "مكتب محاماة رائد في الرباط يقدم خدمات قانونية شاملة.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 شارع محمد الخامس",
          "addressLocality": "الرباط",
          "postalCode": "10000",
          "addressCountry": "MA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 34.0209,
          "longitude": -6.8416
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    }
  }
  
} as const;

// Type inference from the content structure
export type Content = typeof content[keyof typeof content];