
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://elitefoundation.online'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

// Core keyword categories based on your suggestions
const coreKeywords = [
  // General Keywords
  'Elite Foundation',
  'Elite Foundation Online',
  'elitefoundation.online',
  'nonprofit organization',
  'charitable foundation',
  'humanitarian organization',
  'nonprofit initiatives',
  'foundation for change',
  'empowering communities',
  
  // Mission-Focused Keywords
  'youth empowerment programs',
  'child welfare foundation',
  'women empowerment nonprofit',
  'education for underprivileged',
  'health and wellness outreach',
  'community development programs',
  'education and skill training',
  'poverty eradication efforts',
  
  // Location-Based Keywords
  'Uganda nonprofit foundation',
  'Kampala charity organization',
  'African humanitarian organization',
  'Uganda child welfare',
  'East Africa foundation',
  'support local communities in Uganda',
  
  // Action-Oriented Keywords
  'donate to a cause',
  'support a foundation',
  'volunteer with us',
  'sponsor a child',
  'join our mission',
  'give back today',
  'charity donation online',
  'help communities thrive',
  
  // Branding Keywords
  'elite charitable trust',
  'elite foundation projects',
  'elite foundation donations',
  'elitefoundation mission',
  'elite ngo initiatives'
];

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  const enhancedKeywords = [...baseKeywords, ...coreKeywords];
  
  if (pathname.includes('education-center') || pathname.includes('programs')) {
    enhancedKeywords.push(
      'education for underprivileged children in Uganda',
      'quality education programs Kampala',
      'child education initiatives',
      'school support programs',
      'educational empowerment',
      'learning opportunities Uganda',
      'academic support foundation',
      'education access programs',
      'skill development training',
      'youth education empowerment'
    );
  }
  
  if (pathname.includes('health-screening') || pathname.includes('health')) {
    enhancedKeywords.push(
      'child health programs Uganda',
      'medical care foundation',
      'health services Kampala',
      'preventive healthcare initiatives',
      'community health programs',
      'child wellness programs',
      'healthcare access Uganda',
      'medical support foundation',
      'health education programs',
      'child health screening'
    );
  }
  
  if (pathname.includes('donate') || pathname.includes('support')) {
    enhancedKeywords.push(
      'donate to Uganda charity',
      'support children in need',
      'charitable giving Uganda',
      'help underprivileged children',
      'donation impact programs',
      'sponsor child education',
      'make a difference Uganda',
      'charity fundraising',
      'philanthropic giving',
      'support local communities'
    );
  }
  
  if (pathname.includes('volunteer')) {
    enhancedKeywords.push(
      'volunteer opportunities Uganda',
      'community service Kampala',
      'volunteer with children',
      'nonprofit volunteer work',
      'humanitarian volunteering',
      'volunteer abroad Uganda',
      'community development volunteer',
      'social impact volunteering',
      'volunteer programs Africa',
      'help children volunteer'
    );
  }
  
  if (pathname.includes('about')) {
    enhancedKeywords.push(
      'Elite Foundation mission',
      'nonprofit organization Uganda',
      'charitable foundation story',
      'humanitarian work Uganda',
      'community empowerment foundation',
      'child welfare organization',
      'nonprofit leadership team',
      'foundation values mission',
      'social impact organization',
      'community development nonprofit'
    );
  }
  
  if (pathname.includes('impact')) {
    enhancedKeywords.push(
      'social impact Uganda',
      'community transformation',
      'child welfare impact',
      'education impact stories',
      'community development results',
      'nonprofit success stories',
      'charitable impact measurement',
      'foundation achievements',
      'positive change Uganda',
      'community empowerment results'
    );
  }
  
  if (pathname.includes('contact')) {
    enhancedKeywords.push(
      'contact Elite Foundation',
      'Uganda nonprofit contact',
      'Kampala charity contact',
      'foundation contact information',
      'nonprofit partnership opportunities',
      'collaborate with foundation',
      'foundation office Uganda',
      'charity contact details'
    );
  }
  
  if (pathname.includes('blog')) {
    enhancedKeywords.push(
      'nonprofit blog Uganda',
      'charity news updates',
      'foundation success stories',
      'community impact stories',
      'charitable work blog',
      'nonprofit insights',
      'foundation newsletter',
      'humanitarian stories'
    );
  }
  
  if (pathname.includes('resources')) {
    enhancedKeywords.push(
      'nonprofit resources Uganda',
      'charity transparency reports',
      'foundation annual reports',
      'educational resources',
      'community development guides',
      'nonprofit accountability',
      'charity financial reports',
      'foundation impact reports'
    );
  }
  
  if (pathname.includes('careers')) {
    enhancedKeywords.push(
      'nonprofit careers Uganda',
      'charity job opportunities',
      'foundation employment',
      'humanitarian work careers',
      'nonprofit job openings',
      'work with children Uganda',
      'foundation team opportunities',
      'social impact careers'
    );
  }
  
  return enhancedKeywords;
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  const allKeywords = category 
    ? [...keywords, category.toLowerCase()] 
    : keywords;
  
  // Remove duplicates and limit to reasonable length for SEO
  const uniqueKeywords = [...new Set(allKeywords)];
  return uniqueKeywords.slice(0, 20).join(', ');
};

// Enhanced meta descriptions for better SEO
export const getEnhancedMetaDescription = (pathname: string, defaultDescription: string): string => {
  const baseDescription = "Elite Foundation - Transforming lives through excellence and care in Uganda.";
  
  if (pathname === '/' || pathname === '') {
    return `${baseDescription} We provide education, healthcare, and community development programs for children in Kampala and across Uganda. Join our mission to empower communities and create lasting change.`;
  }
  
  if (pathname.includes('about')) {
    return `Learn about Elite Foundation's mission to transform children's lives in Uganda. Discover our story, values, and commitment to community empowerment through education, health, and development programs in Kampala.`;
  }
  
  if (pathname.includes('programs')) {
    return `Explore Elite Foundation's comprehensive programs including education for underprivileged children, healthcare services, and community development initiatives across Uganda. Making a difference in Kampala and beyond.`;
  }
  
  if (pathname.includes('donate')) {
    return `Support Elite Foundation's mission by donating to help children in Uganda. Your contribution funds education, healthcare, and community development programs that transform lives in Kampala and beyond.`;
  }
  
  if (pathname.includes('volunteer')) {
    return `Join Elite Foundation as a volunteer in Uganda. Help empower children and communities through our education, health, and development programs. Make a lasting impact in Kampala and across Uganda.`;
  }
  
  if (pathname.includes('contact')) {
    return `Contact Elite Foundation in Kampala, Uganda. Get in touch to learn about our programs, volunteer opportunities, partnerships, or to support our mission of transforming children's lives.`;
  }
  
  return defaultDescription;
};

// Enhanced page titles for better SEO
export const getEnhancedPageTitle = (pathname: string, defaultTitle: string): string => {
  const baseBrand = "Elite Foundation";
  
  if (pathname === '/' || pathname === '') {
    return `${baseBrand} - Transforming Children's Lives in Uganda | Nonprofit Organization Kampala`;
  }
  
  if (pathname.includes('about')) {
    return `About ${baseBrand} - Child Welfare Foundation Uganda | Our Mission & Story`;
  }
  
  if (pathname.includes('programs')) {
    return `Programs - ${baseBrand} | Education, Health & Community Development Uganda`;
  }
  
  if (pathname.includes('donate')) {
    return `Donate to ${baseBrand} - Support Children in Uganda | Charitable Giving`;
  }
  
  if (pathname.includes('volunteer')) {
    return `Volunteer with ${baseBrand} - Join Our Mission in Uganda | Community Service`;
  }
  
  if (pathname.includes('contact')) {
    return `Contact ${baseBrand} - Uganda Nonprofit Organization | Kampala Office`;
  }
  
  if (pathname.includes('impact')) {
    return `Our Impact - ${baseBrand} | Success Stories & Community Transformation Uganda`;
  }
  
  return defaultTitle;
};
