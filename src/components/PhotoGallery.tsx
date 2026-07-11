
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    },
    {
      id: '10',
      src: '/lovable-uploads/0acbbb78-0ae2-4f4d-ac91-26f47f4905b7.jpg',
      alt: 'Smiles of children in Uganda community',
      title: 'Bright Smiles and Hope',
      description: 'Joyful smiles from children under our support programs in Kampala, Uganda',
      category: 'community'
    },
    {
      id: '11',
      src: '/lovable-uploads/0b7d34cb-40f1-4c8d-8206-78508cd623c8.jpg',
      alt: 'Interactive learning session outdoors',
      title: 'Outdoor Interactive Learning',
      description: 'Engaging educational activities fostering creativity and learning among young children',
      category: 'education'
    },
    {
      id: '12',
      src: '/lovable-uploads/122b314b-90f9-4079-aa8d-f2fed32f101a.jpg',
      alt: 'Community health assessment and healthcare service',
      title: 'Community Healthcare Support',
      description: 'Providing key health checks and wellness support in needy areas',
      category: 'health'
    },
    {
      id: '13',
      src: '/lovable-uploads/230926d8-4372-483a-8ae9-80a9e7bad1cf.jpg',
      alt: 'Youth skills workshop training session',
      title: 'Skills Development Workshop',
      description: 'Empowering youth with practical skills and career pathway mentoring',
      category: 'empowerment'
    },
    {
      id: '14',
      src: '/lovable-uploads/233daf73-11a5-43e0-9240-e12178695977.jpg',
      alt: 'Creative arts and craft activities',
      title: 'Creative Learning and Crafts',
      description: 'Children exploring creative expression through art and hands-on activities',
      category: 'education'
    },
    {
      id: '15',
      src: '/lovable-uploads/25b6ee1f-3cd6-463f-a80e-e80f2c431807.jpg',
      alt: 'Fun community bonding and games',
      title: 'Joyful Recreational Activities',
      description: 'Children and team bonding over fun recreational games and laughter',
      category: 'community'
    },
    {
      id: '16',
      src: '/lovable-uploads/3fc4bc12-ac9d-4c01-a11a-30bae703d987.jpg',
      alt: 'Primary education and reading activities',
      title: 'Children Reading and Studying',
      description: 'Nurturing future leaders by promoting literacy and building reading habits',
      category: 'education'
    },
    {
      id: '17',
      src: '/lovable-uploads/5f6952c3-3d18-4f74-b595-17e83a8c5fd8.jpg',
      alt: 'Children during a nutrition session',
      title: 'Healthy Meals Initiative',
      description: 'Supporting regular healthy meals and clean nutrition across our care centers',
      category: 'health'
    },
    {
      id: '18',
      src: '/lovable-uploads/5ff42f03-2a5e-4526-9b4b-abb2ad6f6ad3.jpg',
      alt: 'Group picture with youth champions',
      title: 'Youth Leadership Program',
      description: 'Developing peer leaders and community champions for a brighter future',
      category: 'empowerment'
    },
    {
      id: '19',
      src: '/lovable-uploads/624483fd-9108-4ba1-8e4a-24b35f50fd9f.jpg',
      alt: 'Providing safe environments for child welfare',
      title: 'Safe Space and Protection',
      description: 'Creating environments where child rights and safety are protected',
      category: 'protection'
    },
    {
      id: '20',
      src: '/lovable-uploads/65f85bed-ced7-4e6a-aa0b-f1c96e0933ce.jpg',
      alt: 'Outdoor school activities and interaction',
      title: 'Interactive School Outing',
      description: 'Stimulating children through outdoors learning and structured group plays',
      category: 'education'
    },
    {
      id: '21',
      src: '/lovable-uploads/702dffa9-f833-487e-87cd-ca7609b8047a.jpg',
      alt: 'Empowered smiles of community leaders',
      title: 'Community Empowerment Groups',
      description: 'Local leaders and families uniting for sustainable development and progress',
      category: 'empowerment'
    },
    {
      id: '22',
      src: '/lovable-uploads/789efd1f-3ec1-42af-b82a-53acbd1129c8.jpg',
      alt: 'Classroom teaching and direct mentorship',
      title: 'Guided Direct Mentorship',
      description: 'One-on-one attention and guidance to assist children in their studies',
      category: 'education'
    },
    {
      id: '23',
      src: '/lovable-uploads/7a8a7fb8-5013-4d92-8f4b-9473a507b31c.jpg',
      alt: 'Smiles at the community feeding center',
      title: 'Feeding Hope and Fellowship',
      description: 'Encouraging nourishment of both body and spirit within our community',
      category: 'health'
    },
    {
      id: '24',
      src: '/lovable-uploads/859859bd-7672-42f1-ac7e-71f50a7790f2.jpg',
      alt: 'Young boys participating in learning',
      title: 'Inspiring Classroom Goals',
      description: 'Supporting resources and learning equipment to enrich student educational experiences',
      category: 'education'
    },
    {
      id: '25',
      src: '/lovable-uploads/92206e10-6498-43bd-b68c-38274ce42e95.jpg',
      alt: 'Health and safety education for students',
      title: 'Health Education and Hygiene',
      description: 'Spreading critical health habits and sanitization practices among children',
      category: 'health'
    },
    {
      id: '26',
      src: '/lovable-uploads/b9a36c58-fa9f-4c9a-8abf-067ec86f505e.jpg',
      alt: 'Nurturing environment for family protection',
      title: 'Nurturing Care Programs',
      description: 'Empowering guardians to provide healthy, nurturing, and safe family circles',
      category: 'protection'
    },
    {
      id: '27',
      src: '/lovable-uploads/c19d1077-dd2e-4a67-ab05-6ff3f795c0db.jpg',
      alt: 'Happy children holding books',
      title: 'Equipping Young Minds',
      description: 'Providing notebooks, pens, and learning aids to keep kids engaged and learning',
      category: 'education'
    },
    {
      id: '28',
      src: '/lovable-uploads/cbbef666-6086-46f6-95d7-835b1690c55d.jpg',
      alt: 'Health screening and checking operations',
      title: 'Periodic Health Screening',
      description: 'Assisting children with preventive healthcare checkups and medical aid',
      category: 'health'
    },
    {
      id: '29',
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
  const filteredImages = filter === 'all'
    ? images
    : images.filter(img => img.category === filter);

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
          }}
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
