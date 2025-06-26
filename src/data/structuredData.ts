
export const createOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elite Foundation',
  url: 'https://elitefoundation.org',
  logo: 'https://elitefoundation.org/lovable-uploads/d4aa9dda-f549-4c67-92aa-5a86592a3467.png',
  description: 'Transforming children\'s lives through excellence, care, education, and community development',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@elitefoundation.org'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Worldwide',
    addressRegion: 'Global Operations'
  },
  foundingDate: '2020',
  mission: 'To transform the lives of children through excellence, care, education, health, protection, and community development programs'
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
    height: 630
  },
  datePublished: publishDate,
  dateModified: modifiedDate || publishDate,
  author: {
    '@type': 'Organization',
    name: author || 'Elite Foundation',
    url: 'https://elitefoundation.org'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Elite Foundation',
    logo: {
      '@type': 'ImageObject',
      url: 'https://elitefoundation.org/lovable-uploads/d4aa9dda-f549-4c67-92aa-5a86592a3467.png',
      width: 512,
      height: 512
    },
    url: 'https://elitefoundation.org'
  },
  description: description,
  keywords: keywords.join(', '),
  articleSection: category,
  inLanguage: 'en-US',
  isAccessibleForFree: true
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
        text: 'Elite Foundation provides quality education programs, healthcare services, child protection initiatives, and community development programs serving children and families worldwide.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can children enroll in Elite Foundation programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Families can contact Elite Foundation directly through our website or local offices. We work with families to ensure children have access to quality programs regardless of their financial situation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Elite Foundation different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation focuses on excellence in all programs, combining quality services with innovative approaches, community partnership, and sustainable solutions for lasting impact.'
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
        text: 'Our health programs include comprehensive medical care, preventive health services, health education, nutritional support, and referrals for specialized care when needed.'
      }
    },
    {
      '@type': 'Question',
      name: 'How often does Elite Foundation conduct health programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elite Foundation conducts regular health programs throughout the year, reaching different communities to ensure consistent healthcare access for children and families in need.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Elite Foundation health programs free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our health programs are provided free of charge to families and children in need. This is part of our mission to ensure every child has access to quality healthcare regardless of their family\'s financial situation.'
      }
    }
  ]
});
