
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const heroImages = [
    {
      url: "/lovable-uploads/273495a9-cc19-4b45-9aa7-c60ff9f7432e.png",
      alt: "Child proudly showing new shoes - education and supply support",
      title: "Empowering Through Education"
    },
    {
      url: "/lovable-uploads/380e8295-b0a7-49e0-bb08-3cd214481dd6.png", 
      alt: "Joyful child with big smile - happiness through care",
      title: "Bringing Joy & Hope"
    },
    {
      url: "/lovable-uploads/1aef3f11-afc1-4188-84e6-1b175af029f8.png",
      alt: "Caring embrace between children - protection and community",
      title: "Building Strong Communities"
    }
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = image.url;
        });
      });
      
      await Promise.all(imagePromises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  // Auto-rotate images
  useEffect(() => {
    if (!isLoaded || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded, isPaused, heroImages.length]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70"></div>
          </div>
        ))}
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-stone-100 to-orange-200 bg-clip-text text-transparent text-center my-[70px]">
            Transforming Lives Through
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Excellence & Care
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto leading-relaxed">
            Elite Foundation is dedicated to improving the lives of children through 
            education, health, protection, and community development programs that create lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-glow text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Link to="/donate">
                Make a Difference <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="glass" size="lg" className="bg-stone-100/10 backdrop-blur-md border border-stone-300/30 text-white hover:bg-stone-100/20 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Image Navigation Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-orange-400 shadow-lg shadow-orange-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View image ${index + 1}: ${heroImages[index].title}`}
              />
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 mt-16">
            <div className="bg-stone-100/5 backdrop-blur-md border border-stone-300/20 rounded-lg p-6 hover:bg-stone-100/10 transition-all duration-300">
              <Users className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-orange-400 mb-2">24+</div>
              <div className="text-stone-300">Children Supported</div>
            </div>
            
            <div className="bg-stone-100/5 backdrop-blur-md border border-stone-300/20 rounded-lg p-6 hover:bg-stone-100/10 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-stone-300">School Enrollment</div>
            </div>
            
            <div className="bg-stone-100/5 backdrop-blur-md border border-stone-300/20 rounded-lg p-6 hover:bg-stone-100/10 transition-all duration-300">
              <Heart className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-orange-400 mb-2">1</div>
              <div className="text-stone-300">Communities Served</div>
            </div>
          </div>

          {/* Current Image Title */}
          <div className="mt-8 opacity-70">
            <p className="text-sm md:text-base text-stone-300">
              {heroImages[currentImageIndex].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
