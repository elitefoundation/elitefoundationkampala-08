import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { 
  createAbsoluteUrl, 
  enhanceKeywords, 
  createKeywordString,
  getEnhancedMetaDescription,
  getEnhancedPageTitle 
} from '../utils/seoHelpers';
import {
  createOrganizationStructuredData,
  createBlogPostStructuredData,
  createEducationCenterFAQData,
  createHealthScreeningFAQData
} from '../data/structuredData';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  type = 'website',
  name = 'Elite Foundation',
  imageUrl = '/lovable-uploads/efbbe5d8-fd40-4008-bd87-a85de6f1ca90.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = [],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = createAbsoluteUrl(location.pathname);
  const absoluteImageUrl = createAbsoluteUrl(imageUrl);
  
  // Enhanced SEO optimization
  const enhancedTitle = title || getEnhancedPageTitle(location.pathname, 'Elite Foundation - Transforming Lives Through Excellence and Care');
  const enhancedDescription = description || getEnhancedMetaDescription(location.pathname, 'Elite Foundation is a dedicated organization committed to improving the lives of children through education, health, protection, and community development programs in Uganda.');
  
  // Enhanced keywords for specific pages
  const enhancedKeywords = enhanceKeywords(location.pathname, keywords);
  const keywordString = createKeywordString(enhancedKeywords, category);

  // Create structured data
  const organizationStructuredData = createOrganizationStructuredData();
  
  const blogPostStructuredData = isBlogPost && publishDate 
    ? createBlogPostStructuredData(
        currentUrl,
        enhancedTitle,
        absoluteImageUrl,
        publishDate,
        modifiedDate || publishDate,
        author || name,
        enhancedDescription,
        enhancedKeywords,
        category
      ) 
    : null;

  // Page-specific FAQ data
  const educationCenterFAQData = location.pathname.includes('education-center') 
    ? createEducationCenterFAQData() 
    : null;
    
  const healthScreeningFAQData = location.pathname.includes('health-screening') 
    ? createHealthScreeningFAQData() 
    : null;

  return (
    <Helmet>
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced location and region targeting */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala, Uganda" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />
      <meta name="DC.coverage" content="Uganda" />
      <meta name="DC.subject" content="Child Welfare, Education, Healthcare, Community Development" />
      
      {/* Author and organization */}
      <meta name="author" content={author || name} />
      <meta name="copyright" content="Elite Foundation" />
      <meta name="organization" content="Elite Foundation" />
      <meta name="classification" content="Nonprofit Organization" />
      <meta name="category" content="Charity, Humanitarian, Child Welfare" />
      
      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:image:alt" content="Elite Foundation - Nonprofit Organization transforming children's lives in Uganda" />
      <meta property="og:site_name" content="Elite Foundation" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:country-name" content="Uganda" />
      <meta property="og:region" content="Kampala" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://elitefoundationuganda.online" />}
      {isBlogPost && <meta property="article:author" content={author || name} />}
      
      {/* Twitter - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content="Elite Foundation - Nonprofit Organization transforming children's lives in Uganda" />
      <meta name="twitter:site" content="@elitefoundation" />
      <meta name="twitter:creator" content="@elitefoundation" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={enhancedDescription} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* WhatsApp specific optimizations */}
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Elite Foundation" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Performance optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {educationCenterFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(educationCenterFAQData)}
        </script>
      )}
      
      {healthScreeningFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(healthScreeningFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
