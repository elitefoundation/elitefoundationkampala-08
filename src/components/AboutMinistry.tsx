
import { Heart, Users, Target, Globe } from "lucide-react";

const AboutMinistry = () => {
  return (
    <section className="py-24 bg-[#101400] text-white relative overflow-hidden border-y border-[#D2FF00]/10 font-space uppercase tracking-wider">
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 30 Q 50 60 100 30" stroke="#D2FF00" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q 50 40 100 70" stroke="#D2FF00" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D2FF00] text-black font-black uppercase text-xs tracking-widest rounded-none shadow-[0_0_15px_rgba(210,255,0,0.3)]">
            About Our Ministry
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight uppercase">
            Our Mission & <span className="text-[#D2FF00] italic font-serif lowercase normal-case">Vision</span>
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-3xl mx-auto normal-case font-medium tracking-normal leading-relaxed">
            Elite Foundation is a dedicated organization committed to transforming the lives of children through comprehensive care, education, and community development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-[#1a1c16] p-8 rounded-none border border-[#D2FF00]/10 hover:border-[#D2FF00]/40 transition-all duration-300 text-left relative group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D2FF00]/5 flex items-center justify-center font-black text-2xl text-[#D2FF00]/30 group-hover:bg-[#D2FF00] group-hover:text-black transition-all duration-300">
                M
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D2FF00]/10 border border-[#D2FF00]/30 rounded-none flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#D2FF00]" />
                </div>
                <h3 className="text-lg font-black ml-4 text-white tracking-widest">Our Mission</h3>
              </div>
              <p className="text-stone-400 leading-relaxed text-sm normal-case font-medium tracking-normal">
                To provide holistic care, quality education, and protection for children worldwide, 
                empowering them to reach their full potential and become productive members of society.
              </p>
            </div>

            <div className="bg-[#1a1c16] p-8 rounded-none border border-[#D2FF00]/10 hover:border-[#D2FF00]/40 transition-all duration-300 text-left relative group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D2FF00]/5 flex items-center justify-center font-black text-2xl text-[#D2FF00]/30 group-hover:bg-[#D2FF00] group-hover:text-black transition-all duration-300">
                V
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D2FF00]/10 border border-[#D2FF00]/30 rounded-none flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#D2FF00]" />
                </div>
                <h3 className="text-lg font-black ml-4 text-white tracking-widest">Our Vision</h3>
              </div>
              <p className="text-stone-400 leading-relaxed text-sm normal-case font-medium tracking-normal">
                A world where every child has access to quality education, healthcare, protection, 
                and opportunities to thrive in a nurturing and supportive environment.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1c16] p-10 rounded-none border-2 border-[#D2FF00]/20 hover:border-[#D2FF00]/60 transition-all duration-300 text-left flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-8 text-white tracking-widest pb-4 border-b border-stone-800">Our Core Values</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-red-950/40 border border-red-500/30 rounded-none flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm tracking-widest mb-1">Love & Compassion</h4>
                  <p className="text-stone-400 text-xs normal-case font-medium tracking-normal">Treating every child with unconditional love and understanding</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-950/40 border border-green-500/30 rounded-none flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Users className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm tracking-widest mb-1">Community Partnership</h4>
                  <p className="text-stone-400 text-xs normal-case font-medium tracking-normal">Working together with families and communities for sustainable impact</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#D2FF00]/5 border border-[#D2FF00]/20 rounded-none flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Target className="w-5 h-5 text-[#D2FF00]" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm tracking-widest mb-1">Excellence</h4>
                  <p className="text-stone-400 text-xs normal-case font-medium tracking-normal">Committed to providing the highest quality programs and services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMinistry;
