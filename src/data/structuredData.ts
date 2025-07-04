
export const createOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Elite Foundation',
  alternateName: 'Elite Foundation Uganda',
  url: 'https://elitefoundationuganda.online',
  logo: {
    '@type': 'ImageObject',
    url: 'https://elitefoundationuganda.online/lovable-uploads/353ee26c-994b-45f6-b50a-7201d0297389.png',
    width: 1200,
    height: 1200
  },
  image: 'https://elitefoundationuganda.online/lovable-uploads/353ee26c-994b-45f6-b50a-7201d0297389.png',
  description: 'Transforming children\'s lives through excellence, care, education, and community development',
  mission: 'To transform the lives of children through excellence, care, education, health, protection, and community development programs',
  foundingDate: '2020',
  taxID: 'N/A',
  nonprofitStatus: 'NonProfit',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@elitefoundationuganda.online',
      availableLanguage: 'English'
    },
    {
      '@type': 'ContactPoint',
      contactType: 'general',
      email: 'contact@elitefoundationuganda.online',
      availableLanguage: 'English'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UG',
    addressRegion: 'Kampala',
    addressLocality: 'Kampala'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.3476,
    longitude: 32.5825
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Uganda'
    },
    {
      '@type': 'Country',
      name: 'East Africa'
    }
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 0.3476,
      longitude: 32.5825
    },
    geoRadius: '50000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Elite Foundation Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Education Programs',
          description: 'Quality education and learning support for children'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Healthcare Services',
          description: 'Medical care and health screening for children'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Child Protection',
          description: 'Child welfare and protection services'
        }
      }
    ]
  },
  sameAs: [
    'https://www.facebook.com/elitefoundation',
    'https://twitter.com/elitefoundation',
    'https://www.linkedin.com/company/elite-foundation',
    'https://www.instagram.com/elitefoundation'
  ],
  knowsAbout: [
    'Child Education',
    'Child Healthcare',
    'Community Development',
    'Child Protection',
    'Nonprofit Management',
    'Social Impact'
  ],
  funder: {
    '@type': 'Organization',
    name: 'Elite Foundation Donors',
    description: 'Generous donors and supporters'
  }
});

export const createBlogPostStructuredData = (
  currentUrl: string,
  title: string,
  absoluteImageUrl: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  description: string,
  keywords: string[],
  category?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': currentUrl
  },
  headline: title,
  image: {
    '@type': 'ImageObject',
    url: absoluteImageUrl,
    width: 1200,
    height: 1200
  },
  datePublished: publishDate,
  dateModified: modifiedDate || publishDate,
  author: {
    '@type': 'Organization',
    name: author || 'Elite Foundation',
    url: 'https://elitefoundationuganda.online'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Elite Foundation',
    logo: {
      '@type': 'ImageObject',
      url: 'https://elitefoundationuganda.online/lovable-uploads/353ee26c-994b-45f6-b50a-7201d0297389.png',
      width: 1200,
      height: 1200
    },
    url: 'https://elitefoundationuganda.online'
  },
  description: description,
  keywords: keywords.join(', '),
  articleSection: category,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  wordCount: description.split(' ').length + 100, // Estimate
  timeRequired: 'PT5M', // 5 minutes reading time
  educationalLevel: 'Beginner',
  audience: {
    '@type': 'Audience',
    audienceType: 'General Public'
  }
});

export const createEducationCenterFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Elite Foundation provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation provides quality education programs, healthcare services, child protection initiatives, and community development programs serving children and families in Uganda and East Africa.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can children enroll in Elite Foundation programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Families can contact Elite Foundation directly through our website, email at info@elitefoundation.org, or visit our office in Kampala. We work with families to ensure children have access to quality programs regardless of their financial situation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Elite Foundation different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation focuses on excellence in all programs, combining quality services with innovative approaches, community partnership, and sustainable solutions for lasting impact. We serve the Kampala region and surrounding areas with comprehensive child development programs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is Elite Foundation located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation is based in Kampala, Uganda, serving children and families throughout the region. Our programs reach communities across East Africa with a focus on sustainable development and lasting impact.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I support Elite Foundation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can support Elite Foundation through donations, volunteering, spreading awareness about our programs, or partnering with us on specific initiatives. Every contribution helps us continue our mission of transforming children\'s lives.'
      }
    }
  ]
});

export const createHealthScreeningFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Elite Foundation health program include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our health programs include comprehensive medical care, preventive health services, health education, nutritional support, regular health screenings, and referrals for specialized care when needed. We focus on both physical and mental health of children.'
      }
    },
    {
      '@type': 'Question',
      name: 'How often does Elite Foundation conduct health programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation conducts regular health programs throughout the year, reaching different communities in Kampala and surrounding areas to ensure consistent healthcare access for children and families in need.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Elite Foundation health programs free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our health programs are provided free of charge to families and children in need. This is part of our mission to ensure every child has access to quality healthcare regardless of their family\'s financial situation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What age groups do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation serves children from infancy through adolescence, typically ages 0-18 years. Our programs are tailored to meet the specific developmental and health needs of different age groups.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide emergency medical care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While we focus on preventive care and regular health screenings, we do provide basic emergency care and coordinate with local hospitals and medical facilities for more serious cases that require specialized treatment.'
      }
    }
  ]
});
