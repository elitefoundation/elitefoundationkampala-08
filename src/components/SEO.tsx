
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { createAbsoluteUrl, enhanceKeywords, createKeywordString } from '../utils/seoHelpers';
import {
  createOrganizationStructuredData,
  createBlogPostStructuredData,
  createEducationCenterFAQData,
  createHealthScreeningFAQData
} from '../data/structuredData';

const SEO: React.FC<SEOProps> = ({
  title = 'Elite Foundation - Transforming Lives Through Excellence and Care',
  description = 'Elite Foundation is a dedicated organization committed to improving the lives of children through education, health, protection, and community development programs.',
  type = 'website',
  name = 'Elite Foundation',
  imageUrl = '/lovable-uploads/353ee26c-994b-45f6-b50a-7201d0297389.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['elite foundation', 'children charity', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization', 'nonprofit', 'children rights', 'social impact'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = createAbsoluteUrl(location.pathname);
  const absoluteImageUrl = createAbsoluteUrl(imageUrl);
  
  // Enhanced keywords for specific posts
  const enhancedKeywords = enhanceKeywords(location.pathname, keywords);
  const keywordString = createKeywordString(enhancedKeywords, category);

  // Create structured data
  const organizationStructuredData = createOrganizationStructuredData();
  
  const blogPostStructuredData = isBlogPost && publishDate 
    ? createBlogPostStructuredData(
        currentUrl,
        title,
        absoluteImageUrl,
        publishDate,
        modifiedDate || publishDate,
        author || name,
        description,
        enhancedKeywords,
        category
      ) 
    : null;

  // Page-specific FAQ data
  const educationCenterFAQData = location.pathname.includes('education-center-kampala') 
    ? createEducationCenterFAQData() 
    : null;
    
  const healthScreeningFAQData = location.pathname.includes('health-screening-children') 
    ? createHealthScreeningFAQData() 
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Language and region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala, Uganda" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />
      
      {/* Author and organization */}
      <meta name="author" content={author || name} />
      <meta name="copyright" content="Elite Foundation" />
      <meta name="organization" content="Elite Foundation" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:image:alt" content="Elite Foundation - Non-Profit Organization Logo" />
      <meta property="og:site_name" content="Elite Foundation" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://elitefoundation.online" />}
      {isBlogPost && <meta property="article:author" content={author || name} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content="Elite Foundation - Non-Profit Organization Logo" />
      <meta name="twitter:site" content="@elitefoundation" />
      <meta name="twitter:creator" content="@elitefoundation" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
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
