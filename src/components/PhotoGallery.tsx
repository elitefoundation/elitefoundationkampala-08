import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PhotoFilters from './PhotoFilters';
import PhotoGrid, { GalleryImage } from './PhotoGrid';
import PhotoLightbox from './PhotoLightbox';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/lovable-uploads/0acbbb78-0ae2-4f4d-ac91-26f47f4905b7.jpg',
      alt: 'Smiles of children in Uganda community',
      title: 'Bright Smiles and Hope',
      description: 'Joyful smiles from children under our support programs in Kampala, Uganda',
      category: 'community'
    },
    {
      id: '2',
      src: '/lovable-uploads/0b7d34cb-40f1-4c8d-8206-78508cd623c8.jpg',
      alt: 'Interactive learning session outdoors',
      title: 'Outdoor Interactive Learning',
      description: 'Engaging educational activities fostering creativity and learning among young children',
      category: 'education'
    },
    {
      id: '3',
      src: '/lovable-uploads/122b314b-90f9-4079-aa8d-f2fed32f101a.jpg',
      alt: 'Community health assessment and healthcare service',
      title: 'Community Healthcare Support',
      description: 'Providing key health checks and wellness support in needy areas',
      category: 'health'
    },
    {
      id: '4',
      src: '/lovable-uploads/230926d8-4372-483a-8ae9-80a9e7bad1cf.jpg',
      alt: 'Youth skills workshop training session',
      title: 'Skills Development Workshop',
      description: 'Empowering youth with practical skills and career pathway mentoring',
      category: 'empowerment'
    },
    {
      id: '5',
      src: '/lovable-uploads/233daf73-11a5-43e0-9240-e12178695977.jpg',
      alt: 'Creative arts and craft activities',
      title: 'Creative Learning and Crafts',
      description: 'Children exploring creative expression through art and hands-on activities',
      category: 'education'
    },
    {
      id: '6',
      src: '/lovable-uploads/25b6ee1f-3cd6-463f-a80e-e80f2c431807.jpg',
      alt: 'Fun community bonding and games',
      title: 'Joyful Recreational Activities',
      description: 'Children and team bonding over fun recreational games and laughter',
      category: 'community'
    },
    {
      id: '7',
      src: '/lovable-uploads/3fc4bc12-ac9d-4c01-a11a-30bae703d987.jpg',
      alt: 'Primary education and reading activities',
      title: 'Children Reading and Studying',
      description: 'Nurturing future leaders by promoting literacy and building reading habits',
      category: 'education'
    },
    {
      id: '8',
      src: '/lovable-uploads/5f6952c3-3d18-4f74-b595-17e83a8c5fd8.jpg',
      alt: 'Children during a nutrition session',
      title: 'Healthy Meals Initiative',
      description: 'Supporting regular healthy meals and clean nutrition across our care centers',
      category: 'health'
    },
    {
      id: '9',
      src: '/lovable-uploads/5ff42f03-2a5e-4526-9b4b-abb2ad6f6ad3.jpg',
      alt: 'Group picture with youth champions',
      title: 'Youth Leadership Program',
      description: 'Developing peer leaders and community champions for a brighter future',
      category: 'empowerment'
    },
    {
      id: '10',
      src: '/lovable-uploads/624483fd-9108-4ba1-8e4a-24b35f50fd9f.jpg',
      alt: 'Providing safe environments for child welfare',
      title: 'Safe Space and Protection',
      description: 'Creating environments where child rights and safety are protected',
      category: 'protection'
    },
    {
      id: '11',
      src: '/lovable-uploads/65f85bed-ced7-4e6a-aa0b-f1c96e0933ce.jpg',
      alt: 'Outdoor school activities and interaction',
      title: 'Interactive School Outing',
      description: 'Stimulating children through outdoors learning and structured group plays',
      category: 'education'
    },
    {
      id: '12',
      src: '/lovable-uploads/702dffa9-f833-487e-87cd-ca7609b8047a.jpg',
      alt: 'Empowered smiles of community leaders',
      title: 'Community Empowerment Groups',
      description: 'Local leaders and families uniting for sustainable development and progress',
      category: 'empowerment'
    },
    {
      id: '13',
      src: '/lovable-uploads/789efd1f-3ec1-42af-b82a-53acbd1129c8.jpg',
      alt: 'Classroom teaching and direct mentorship',
      title: 'Guided Direct Mentorship',
      description: 'One-on-one attention and guidance to assist children in their studies',
      category: 'education'
    },
    {
      id: '14',
      src: '/lovable-uploads/7a8a7fb8-5013-4d92-8f4b-9473a507b31c.jpg',
      alt: 'Smiles at the community feeding center',
      title: 'Feeding Hope and Fellowship',
      description: 'Encouraging nourishment of both body and spirit within our community',
      category: 'health'
    },
    {
      id: '15',
      src: '/lovable-uploads/859859bd-7672-42f1-ac7e-71f50a7790f2.jpg',
      alt: 'Young boys participating in learning',
      title: 'Inspiring Classroom Goals',
      description: 'Supporting resources and learning equipment to enrich student educational experiences',
      category: 'education'
    },
    {
      id: '16',
      src: '/lovable-uploads/92206e10-6498-43bd-b68c-38274ce42e95.jpg',
      alt: 'Health and safety education for students',
      title: 'Health Education and Hygiene',
      description: 'Spreading critical health habits and sanitization practices among children',
      category: 'health'
    },
    {
      id: '17',
      src: '/lovable-uploads/b9a36c58-fa9f-4c9a-8abf-067ec86f505e.jpg',
      alt: 'Nurturing environment for family protection',
      title: 'Nurturing Care Programs',
      description: 'Empowering guardians to provide healthy, nurturing, and safe family circles',
      category: 'protection'
    },
    {
      id: '18',
      src: '/lovable-uploads/c19d1077-dd2e-4a67-ab05-6ff3f795c0db.jpg',
      alt: 'Happy children holding books',
      title: 'Equipping Young Minds',
      description: 'Providing notebooks, pens, and learning aids to keep kids engaged and learning',
      category: 'education'
    },
    {
      id: '19',
      src: '/lovable-uploads/cbbef666-6086-46f6-95d7-835b1690c55d.jpg',
      alt: 'Health screening and checking operations',
      title: 'Periodic Health Screening',
      description: 'Assisting children with preventive healthcare checkups and medical aid',
      category: 'health'
    },
    {
      id: '20',
      src: '/lovable-uploads/fb8c0c8c-42bd-4a5e-bbea-6f29c2d63bc0.jpg',
      alt: 'Smiles of children at a community center',
      title: 'Smiles of Endless Joy',
      description: 'Sharing happy, light-hearted moments in the warmth of community support',
      category: 'community'
    }
  ];

  console.log('PhotoGallery: Total images available:', images.length);
  console.log('PhotoGallery: Current filter:', filter);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'community', label: 'Community' },
    { key: 'health', label: 'Health' },
    { key: 'empowerment', label: 'Empowerment' },
    { key: 'protection', label: 'Protection' },
    { key: 'education', label: 'Education' }
  ];

  // Apply category filtering
  const allFilteredImages = filter === 'all'
    ? images
    : images.filter(img => img.category === filter);

  // Apply pagination / toggle display limit
  const filteredImages = showAll ? allFilteredImages : allFilteredImages.slice(0, 9);

  console.log('PhotoGallery: Filtered images count:', filteredImages.length);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Pictures</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the real faces and stories behind our ministry's work across Uganda
          </p>
        </motion.div>

        <PhotoFilters 
          categories={categories}
          activeFilter={filter}
          onFilterChange={(newFilter) => {
            setFilter(newFilter);
            // Reset page limit toggle when filter changes
            setShowAll(false);
          }}
        />

        <PhotoGrid 
          images={filteredImages}
          onImageSelect={setSelectedImage}
        />

        {allFilteredImages.length > 9 && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="px-8 font-semibold shadow-sm hover:shadow"
            >
              {showAll ? 'Show Less' : `Show More (${allFilteredImages.length - 9} more)`}
            </Button>
          </div>
        )}

        <PhotoLightbox
          selectedImage={selectedImage}
          images={filteredImages}
          onClose={() => setSelectedImage(null)}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
