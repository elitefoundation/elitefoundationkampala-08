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
      url: "/lovable-uploads/478c2f7f-c3b9-48ff-a214-9cdcec5fa919.png",
      alt: "Child proudly showing new shoes - education and supply support",
      title: "Empowering Through Education"
    },
    {
      url: "/lovable-uploads/20649706-fb81-49b3-9fab-6900d6260427.png", 
      alt: "Joyful child with big smile - happiness through care",
      title: "Bringing Joy & Hope"
    },
    {
      url: "/lovable-uploads/a67fc668-534c-430f-b2a3-e0062a6a4cb0.png",
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-center min-h-screen pt-24 pb-16">
        <div className="max-w-5xl mx-auto animate-fade-in text-center">
          {/* Floating neon accent bar */}
          <div className="inline-block mb-6 px-4 py-1.5 bg-[#D2FF00] text-black font-black uppercase text-xs tracking-widest rounded-none shadow-[0_0_15px_rgba(210,255,0,0.4)]">
            Kampala, Uganda
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase font-space text-center my-[20px]">
            Transforming Lives Through
            <span className="block text-[#D2FF00] stroke-text mt-2 font-black">
              Excellence & Care
            </span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl mb-10 text-stone-200 max-w-3xl mx-auto leading-relaxed font-bold tracking-normal uppercase text-center">
            Elite Foundation is dedicated to improving the lives of children through 
            education, health, protection, and community development programs that create lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 uppercase tracking-wider text-xs font-black">
            <Button asChild size="lg" className="bg-[#D2FF00] text-black hover:bg-white hover:text-black hover:shadow-neon-glow-lg rounded-none px-10 py-7 text-xs font-black transition-all duration-300 transform hover:-translate-y-1">
              <Link to="/donate">
                Make a Difference <Heart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] rounded-none px-10 py-7 text-xs font-black transition-all duration-300 transform hover:-translate-y-1">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Image Navigation Indicators */}
          <div className="flex justify-center space-x-3 mb-16">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-none ${
                  index === currentImageIndex 
                    ? 'w-10 bg-[#D2FF00] shadow-[0_0_10px_#D2FF00]'
                    : 'w-4 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`View image ${index + 1}: ${heroImages[index].title}`}
              />
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto uppercase tracking-wider">
            <div className="bg-[#101400]/80 backdrop-blur-md border border-[#D2FF00]/20 rounded-none p-8 hover:border-[#D2FF00]/50 transition-all duration-300 text-center">
              <Users className="h-7 w-7 text-[#D2FF00] mb-4 mx-auto" />
              <div className="text-4xl font-black text-white mb-2">24+</div>
              <div className="text-stone-400 text-xs font-bold tracking-widest">Children Supported</div>
            </div>
            
            <div className="bg-[#101400]/80 backdrop-blur-md border border-[#D2FF00]/20 rounded-none p-8 hover:border-[#D2FF00]/50 transition-all duration-300 text-center">
              <BookOpen className="h-7 w-7 text-[#D2FF00] mb-4 mx-auto" />
              <div className="text-4xl font-black text-white mb-2">95%</div>
              <div className="text-stone-400 text-xs font-bold tracking-widest">School Enrollment</div>
            </div>
            
            <div className="bg-[#101400]/80 backdrop-blur-md border border-[#D2FF00]/20 rounded-none p-8 hover:border-[#D2FF00]/50 transition-all duration-300 text-center">
              <Heart className="h-7 w-7 text-[#D2FF00] mb-4 mx-auto" />
              <div className="text-4xl font-black text-white mb-2">1</div>
              <div className="text-stone-400 text-xs font-bold tracking-widest">Communities Served</div>
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
