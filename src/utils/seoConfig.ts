export const SEO_CONFIG = {
  // Base configuration
  baseUrl: 'https://elitefoundation.org',
  organizationName: 'Elite Foundation',
  organizationAlternateName: 'Elite Foundation Kampala',
  defaultLanguage: 'en',
  defaultLocale: 'en_US',
  
  // Contact information
  contact: {
    email: 'info@elitefoundation.org',
    phone: '+256-XXX-XXX-XXX', // Update with actual phone number
    address: {
      country: 'UG',
      region: 'Kampala',
      locality: 'Kampala',
      coordinates: {
        latitude: 0.3476,
        longitude: 32.5825
      }
    }
  },
  
  // Social media
  socialMedia: {
    facebook: 'https://www.facebook.com/elitefoundation',
    twitter: 'https://twitter.com/elitefoundation',
    linkedin: 'https://www.linkedin.com/company/elite-foundation',
    instagram: 'https://www.instagram.com/elitefoundation',
    youtube: 'https://www.youtube.com/@elitefoundation'
  },
  
  // Default meta tags
  defaultMeta: {
    title: 'Elite Foundation - Transforming Lives Through Excellence and Care',
    description: 'Elite Foundation is a dedicated organization committed to improving the lives of children through education, health, protection, and community development programs in Kampala, Uganda and East Africa.',
    keywords: [
      'elite foundation',
      'children charity',
      'child welfare',
      'education programs',
      'community development',
      'child protection',
      'charitable organization',
      'nonprofit',
      'children rights',
      'social impact',
      'kampala',
      'uganda',
      'east africa'
    ],
    image: '/lovable-uploads/ac672088-448c-4363-8ec8-e1b7189c9217.png',
    logo: '/lovable-uploads/ac672088-448c-4363-8ec8-e1b7189c9217.png'
  },
  
  // Page-specific configurations
  pages: {
    home: {
      title: 'Elite Foundation - Transforming Lives Through Excellence and Care',
      description: 'Elite Foundation is a dedicated organization committed to improving the lives of children through education, health, protection, and community development programs in Kampala, Uganda and East Africa.',
      keywords: ['elite foundation', 'children charity', 'kampala', 'uganda', 'child welfare', 'education programs']
    },
    about: {
      title: 'About Elite Foundation - Our Mission and Story',
      description: 'Learn about Elite Foundation\'s mission to transform children\'s lives through excellence, care, education, and community development in Kampala, Uganda.',
      keywords: ['about elite foundation', 'our mission', 'our story', 'leadership team', 'values']
    },
    programs: {
      title: 'Our Programs - Education, Health, and Community Development',
      description: 'Discover Elite Foundation\'s comprehensive programs including education, healthcare, child protection, and community development initiatives in Kampala, Uganda.',
      keywords: ['education programs', 'health programs', 'child protection', 'community development', 'elite foundation programs']
    },
    donate: {
      title: 'Donate to Elite Foundation - Support Children in Need',
      description: 'Make a difference in children\'s lives by donating to Elite Foundation. Your support helps provide education, healthcare, and community development programs in Kampala, Uganda.',
      keywords: ['donate to charity', 'support children', 'charitable giving', 'make a difference', 'elite foundation donation']
    },
    volunteer: {
      title: 'Volunteer with Elite Foundation - Make a Difference',
      description: 'Join Elite Foundation as a volunteer and help transform children\'s lives through education, healthcare, and community development programs in Kampala, Uganda.',
      keywords: ['volunteer opportunities', 'volunteer work', 'community service', 'help children', 'elite foundation volunteer']
    },
    contact: {
      title: 'Contact Elite Foundation - Get in Touch',
      description: 'Contact Elite Foundation in Kampala, Uganda. Reach out for information about our programs, volunteering opportunities, or to make a donation.',
      keywords: ['contact elite foundation', 'get in touch', 'office location', 'contact information', 'kampala office']
    },
    blog: {
      title: 'Elite Foundation Blog - Stories of Impact and Updates',
      description: 'Read the latest news, success stories, and updates from Elite Foundation. Discover how we\'re transforming children\'s lives in Kampala, Uganda and East Africa.',
      keywords: ['elite foundation blog', 'news and updates', 'stories of impact', 'community news', 'success stories']
    },
    resources: {
      title: 'Resources - Educational Materials and Information',
      description: 'Access educational resources, guides, and materials from Elite Foundation. Find helpful information for families and communities in Kampala, Uganda.',
      keywords: ['resources', 'educational resources', 'community resources', 'helpful information', 'guides and materials']
    },
    careers: {
      title: 'Careers at Elite Foundation - Join Our Team',
      description: 'Explore career opportunities at Elite Foundation. Join our team and help transform children\'s lives through education, healthcare, and community development in Kampala, Uganda.',
      keywords: ['career opportunities', 'job openings', 'work with us', 'join our team', 'nonprofit careers']
    }
  },
  
  // Google Analytics and tracking
  analytics: {
    googleTagManager: 'GTM-TZ8DHWCH',
    googleAnalytics: 'GA_MEASUREMENT_ID', // Update with actual GA ID
    facebookPixel: 'FB_PIXEL_ID' // Update with actual Facebook Pixel ID
  },
  
  // Performance optimization
  performance: {
    preconnectDomains: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ],
    dnsPrefetch: [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ]
  }
};

export const getPageSEO = (pathname: string) => {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  const pageKey = cleanPath === '' ? 'home' : cleanPath.split('/')[0];
  
  return SEO_CONFIG.pages[pageKey as keyof typeof SEO_CONFIG.pages] || SEO_CONFIG.defaultMeta;
};

export const getFullUrl = (path: string) => {
  return `${SEO_CONFIG.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
