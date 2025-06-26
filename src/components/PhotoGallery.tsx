
import { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoFilters from './PhotoFilters';
import PhotoGrid, { GalleryImage } from './PhotoGrid';
import PhotoLightbox from './PhotoLightbox';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/lovable-uploads/3fc60ca1-b5bf-43df-b895-319dfcc674e5.png',
      alt: 'Volunteer working with children in community',
      title: 'Community Volunteer Work',
      description: 'A dedicated volunteer engaging with children and families in our community programs',
      category: 'community'
    },
    {
      id: '2',
      src: '/lovable-uploads/3fdb7e3d-6a33-4ad6-8742-10e2a4cef15a.png',
      alt: 'Children and youth outdoors by the lake',
      title: 'Youth Outdoor Activities',
      description: 'Happy children and teenagers enjoying outdoor activities and fellowship time',
      category: 'community'
    },
    {
      id: '3',
      src: '/lovable-uploads/b04afcbd-f46d-441b-875a-be165448e7e9.png',
      alt: 'Feeding program for children',
      title: 'Nutrition Support Program',
      description: 'Providing essential nutrition and meals to children in need through our feeding programs',
      category: 'health'
    },
    {
      id: '4',
      src: '/lovable-uploads/8a2d1c8b-a854-4ab8-b397-6a1c40051b6b.png',
      alt: 'Young people in community setting',
      title: 'Youth Empowerment',
      description: 'Empowering young people through mentorship and community engagement programs',
      category: 'empowerment'
    },
    {
      id: '5',
      src: '/lovable-uploads/e05b7927-319a-4276-ab7a-b48cfa9162cc.png',
      alt: 'Group of happy children together',
      title: 'Children\'s Fellowship',
      description: 'Children coming together in joy and friendship through our community programs',
      category: 'community'
    },
    {
      id: '6',
      src: '/lovable-uploads/b02940e2-afb9-4da8-aad6-e6a376dc6729.png',
      alt: 'Community gathering with families and children',
      title: 'Family Community Event',
      description: 'Families and children gathering together for community events and celebrations',
      category: 'community'
    },
    {
      id: '7',
      src: '/lovable-uploads/ee1e142f-86dc-40d9-aaa9-8f18975f96c9.png',
      alt: 'Older child caring for younger sibling',
      title: 'Sibling Care & Protection',
      description: 'Demonstrating love and care within families - older children protecting and nurturing younger siblings',
      category: 'protection'
    },
    {
      id: '8',
      src: '/lovable-uploads/35b75871-9ef1-4347-98c5-4b12aa9087d3.png',
      alt: 'Children in evening community gathering',
      title: 'Evening Community Programs',
      description: 'Children participating in evening community programs and activities',
      category: 'community'
    },
    {
      id: '9',
      src: '/lovable-uploads/eb2cae01-250d-435a-9d1f-a47aa014e4ac.png',
      alt: 'Children with hands raised in prayer or celebration',
      title: 'Children in Prayer & Worship',
      description: 'Children participating in prayer and worship activities, showing gratitude and hope',
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

  const filteredImages = filter === 'all' 
    ? images.slice(0, 9) // Show only first 9 images for compact display
    : images.filter(img => img.category === filter).slice(0, 9);

  console.log('PhotoGallery: Filtered images count:', filteredImages.length);
  console.log('PhotoGallery: Filtered images:', filteredImages.map(img => ({ id: img.id, title: img.title })));

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
          onFilterChange={setFilter}
        />

        <PhotoGrid 
          images={filteredImages}
          onImageSelect={setSelectedImage}
        />

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
