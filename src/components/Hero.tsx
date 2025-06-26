
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-stone-100 to-orange-200 bg-clip-text text-transparent">
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
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-glow text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/donate">
                Make a Difference <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="glass" 
              size="lg"
              className="bg-stone-100/10 backdrop-blur-md border border-stone-300/30 text-white hover:bg-stone-100/20 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-stone-100/5 backdrop-blur-md border border-stone-300/20 rounded-lg p-6 hover:bg-stone-100/10 transition-all duration-300">
              <Users className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-orange-400 mb-2">10,000+</div>
              <div className="text-stone-300">Children Helped</div>
            </div>
            
            <div className="bg-stone-100/5 backdrop-blur-md border border-stone-300/20 rounded-lg p-6 hover:bg-stone-100/10 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-stone-300">Programs Running</div>
            </div>
            
            <div className="bg-stone-100/5 backdrop-blur-md border border-stone-300/20 rounded-lg p-6 hover:bg-stone-100/10 transition-all duration-300">
              <Heart className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-orange-400 mb-2">25</div>
              <div className="text-stone-300">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
