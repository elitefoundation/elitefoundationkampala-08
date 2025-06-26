
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://elitefoundation.org'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  if (pathname.includes('education-center')) {
    return [
      ...baseKeywords,
      'education programs',
      'quality education',
      'children education',
      'learning facilities',
      'educational support',
      'school programs',
      'academic excellence',
      'educational infrastructure',
      'student support'
    ];
  }
  
  if (pathname.includes('health-screening')) {
    return [
      ...baseKeywords,
      'health programs',
      'children health',
      'medical care',
      'health services',
      'health education',
      'preventive healthcare',
      'child health programs',
      'medical support',
      'healthcare access',
      'community health'
    ];
  }
  
  return baseKeywords;
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  return category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');
};
