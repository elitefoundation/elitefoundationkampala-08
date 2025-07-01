
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://elitefoundation.online'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  const enhancedKeywords = [...baseKeywords];
  
  // Add location-based keywords
  enhancedKeywords.push('kampala', 'uganda', 'east africa');
  
  if (pathname.includes('education-center') || pathname.includes('programs')) {
    enhancedKeywords.push(
      'education programs',
      'quality education',
      'children education',
      'learning facilities',
      'educational support',
      'school programs',
      'academic excellence',
      'educational infrastructure',
      'student support',
      'child development',
      'learning opportunities'
    );
  }
  
  if (pathname.includes('health-screening') || pathname.includes('health')) {
    enhancedKeywords.push(
      'health programs',
      'children health',
      'medical care',
      'health services',
      'health education',
      'preventive healthcare',
      'child health programs',
      'medical support',
      'healthcare access',
      'community health',
      'child wellness',
      'medical screening'
    );
  }
  
  if (pathname.includes('donate') || pathname.includes('support')) {
    enhancedKeywords.push(
      'donate to charity',
      'charitable giving',
      'support children',
      'make a difference',
      'charity donation',
      'help children',
      'philanthropy',
      'social impact',
      'community support'
    );
  }
  
  if (pathname.includes('volunteer')) {
    enhancedKeywords.push(
      'volunteer opportunities',
      'volunteer work',
      'community service',
      'help children',
      'volunteer programs',
      'social work',
      'community involvement',
      'make a difference'
    );
  }
  
  if (pathname.includes('about')) {
    enhancedKeywords.push(
      'about elite foundation',
      'our mission',
      'our story',
      'organization history',
      'leadership team',
      'values and approach',
      'transparency',
      'accountability'
    );
  }
  
  if (pathname.includes('impact')) {
    enhancedKeywords.push(
      'social impact',
      'community impact',
      'children impact',
      'success stories',
      'transformation stories',
      'measurable results',
      'positive change',
      'community development'
    );
  }
  
  if (pathname.includes('contact')) {
    enhancedKeywords.push(
      'contact elite foundation',
      'get in touch',
      'office location',
      'contact information',
      'reach out',
      'support team'
    );
  }
  
  if (pathname.includes('blog')) {
    enhancedKeywords.push(
      'elite foundation blog',
      'news and updates',
      'stories of impact',
      'community news',
      'program updates',
      'success stories'
    );
  }
  
  if (pathname.includes('resources')) {
    enhancedKeywords.push(
      'resources',
      'educational resources',
      'community resources',
      'helpful information',
      'guides and materials',
      'support resources'
    );
  }
  
  if (pathname.includes('careers')) {
    enhancedKeywords.push(
      'career opportunities',
      'job openings',
      'work with us',
      'join our team',
      'employment opportunities',
      'nonprofit careers'
    );
  }
  
  return enhancedKeywords;
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  const allKeywords = category 
    ? [...keywords, category.toLowerCase()] 
    : keywords;
  
  // Remove duplicates and limit to reasonable length
  const uniqueKeywords = [...new Set(allKeywords)];
  return uniqueKeywords.slice(0, 15).join(', ');
};
