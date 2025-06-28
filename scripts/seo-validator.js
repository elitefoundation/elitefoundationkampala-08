#!/usr/bin/env node

/**
 * SEO Validator for Elite Foundation Website
 * 
 * This script validates key SEO elements on the website.
 * Run with: node scripts/seo-validator.js
 */

const fs = require('fs');
const path = require('path');

// SEO validation rules
const seoRules = {
  requiredMetaTags: [
    'title',
    'description',
    'viewport',
    'robots',
    'canonical'
  ],
  
  requiredOpenGraph: [
    'og:title',
    'og:description',
    'og:image',
    'og:url',
    'og:type',
    'og:site_name'
  ],
  
  requiredTwitter: [
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image'
  ],
  
  requiredStructuredData: [
    'Organization',
    'NGO'
  ]
};

// Check if files exist and have required content
function validateFile(filePath, requiredContent = []) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (requiredContent.length > 0) {
      const missingContent = requiredContent.filter(item => 
        !content.includes(item)
      );
      
      if (missingContent.length > 0) {
        console.error(`❌ Missing required content in ${filePath}:`, missingContent);
        return false;
      }
    }
    
    console.log(`✅ ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error.message);
    return false;
  }
}

// Validate domain usage
function validateDomainUsage() {
  const filesToCheck = [
    'public/sitemap.xml',
    'public/robots.txt',
    'index.html',
    'src/utils/seoHelpers.ts',
    'src/data/structuredData.ts'
  ];
  
  const correctDomain = 'elitefoundation.org';
  const oldDomain = 'kaweesachildrensministries.org';
  
  let allValid = true;
  
  filesToCheck.forEach(file => {
    try {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes(oldDomain)) {
          console.error(`❌ Found old domain in ${file}: ${oldDomain}`);
          allValid = false;
        }
        
        if (!content.includes(correctDomain)) {
          console.error(`❌ Missing correct domain in ${file}: ${correctDomain}`);
          allValid = false;
        } else {
          console.log(`✅ Domain correct in ${file}`);
        }
      }
    } catch (error) {
      console.error(`❌ Error checking domain in ${file}:`, error.message);
      allValid = false;
    }
  });
  
  return allValid;
}

// Main validation function
function validateSEO() {
  console.log('🔍 Elite Foundation SEO Validation\n');
  
  let allValid = true;
  
  // Check required files
  console.log('📁 Checking required files...');
  const requiredFiles = [
    'public/sitemap.xml',
    'public/robots.txt',
    'index.html',
    'src/components/SEO.tsx',
    'src/utils/seoHelpers.ts',
    'src/utils/seoConfig.ts',
    'src/data/structuredData.ts'
  ];
  
  requiredFiles.forEach(file => {
    if (!validateFile(file)) {
      allValid = false;
    }
  });
  
  // Check domain usage
  console.log('\n🌐 Checking domain configuration...');
  if (!validateDomainUsage()) {
    allValid = false;
  }
  
  // Check sitemap structure
  console.log('\n🗺️ Checking sitemap structure...');
  try {
    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    if (sitemapContent.includes('<urlset')) {
      console.log('✅ Sitemap has correct XML structure');
    } else {
      console.error('❌ Sitemap missing proper XML structure');
      allValid = false;
    }
  } catch (error) {
    console.error('❌ Error checking sitemap:', error.message);
    allValid = false;
  }
  
  // Check robots.txt
  console.log('\n🤖 Checking robots.txt...');
  try {
    const robotsContent = fs.readFileSync('public/robots.txt', 'utf8');
    if (robotsContent.includes('Sitemap:')) {
      console.log('✅ Robots.txt includes sitemap reference');
    } else {
      console.error('❌ Robots.txt missing sitemap reference');
      allValid = false;
    }
  } catch (error) {
    console.error('❌ Error checking robots.txt:', error.message);
    allValid = false;
  }
  
  // Summary
  console.log('\n📊 Validation Summary');
  console.log('='.repeat(50));
  
  if (allValid) {
    console.log('🎉 All SEO validations passed!');
    console.log('\n✅ Website is properly configured for elitefoundation.org');
    console.log('✅ All required SEO files are present');
    console.log('✅ Domain references are correct');
    console.log('✅ Basic SEO structure is in place');
  } else {
    console.log('⚠️ Some SEO validations failed');
    console.log('\nPlease review the errors above and fix them.');
  }
  
  console.log('\n📝 Next Steps:');
  console.log('1. Submit sitemap to Google Search Console');
  console.log('2. Verify domain ownership in Google Search Console');
  console.log('3. Set up Google Analytics 4');
  console.log('4. Monitor Core Web Vitals');
  console.log('5. Track keyword rankings');
  
  return allValid;
}

// Run validation if script is executed directly
if (require.main === module) {
  validateSEO();
}

module.exports = { validateSEO, validateFile, validateDomainUsage }; 