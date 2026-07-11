
import React, { useState } from "react";
import { Heart, Users, Gift, HandHeart, Calendar, Megaphone, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DonationModal from "@/components/DonationModal";
import { redirectToWhatsApp } from "@/utils/whatsappHelper";

const HowToHelp = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>('');

  const handleDonateClick = (amount?: string) => {
    setSelectedAmount(amount || '');
    setIsDonationModalOpen(true);
  };

  const ways = [
    {
      icon: Heart,
      title: "Monthly Sponsorship",
      description: "Sponsor a child's education, health, and basic needs with a monthly commitment starting from $30.",
      action: "Sponsor a Child",
      color: "bg-red-100 text-red-600",
      onClick: () => redirectToWhatsApp("sponsor")
    },
    {
      icon: Gift,
      title: "One-Time Donation",
      description: "Make a single donation to support our programs and help us reach more children in need.",
      action: "Donate Now",
      color: "bg-blue-100 text-blue-600",
      onClick: () => handleDonateClick()
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and directly impact children's lives through your skills and time.",
      action: "Join Our Team",
      color: "bg-green-100 text-green-600",
      onClick: () => redirectToWhatsApp("volunteer")
    },
    {
      icon: HandHeart,
      title: "Partnership",
      description: "Partner with us as an organization, church, or business to amplify our impact in communities.",
      action: "Become a Partner",
      color: "bg-purple-100 text-purple-600",
      onClick: () => redirectToWhatsApp("partner")
    },
    {
      icon: Calendar,
      title: "Fundraising Events",
      description: "Organize or participate in fundraising events to raise awareness and funds for our cause.",
      action: "Plan an Event",
      color: "bg-orange-100 text-orange-600",
      onClick: () => redirectToWhatsApp("event")
    },
    {
      icon: Megaphone,
      title: "Spread the Word",
      description: "Help us reach more people by sharing our mission on social media and in your community.",
      action: "Share Our Story",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <>
      <section className="py-24 bg-[#F4F4ED] text-[#101400] relative overflow-hidden font-space uppercase tracking-wider border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#101400] text-[#D2FF00] font-black uppercase text-xs tracking-widest rounded-none shadow-[0_0_10px_rgba(0,0,0,0.15)]">
              Get Involved
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#101400] tracking-tight">How You Can <span className="text-[#101400]/70 stroke-text-dark italic lowercase font-serif normal-case">Make a Difference</span></h2>
            <p className="text-stone-600 text-xs md:text-sm max-w-2xl mx-auto normal-case font-bold tracking-normal leading-relaxed">
              There are many ways to support our mission and help transform children's lives. 
              Whether through donations, volunteering, or partnerships, every contribution matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
            {ways.map((way, index) => (
              <Card key={index} className="bg-white border border-stone-200 rounded-none shadow-[4px_4px_0px_#101400] hover:shadow-[8px_8px_0px_#D2FF00] transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 md:p-8 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="w-14 h-14 bg-stone-900 border border-[#D2FF00]/20 rounded-none flex items-center justify-center mx-auto mb-6 text-[#D2FF00]">
                      <way.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-black mb-3 tracking-widest text-[#101400]">{way.title}</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed text-xs normal-case font-medium tracking-normal">{way.description}</p>
                  </div>
                  <button 
                    onClick={way.onClick || (() => {})}
                    className="w-full py-3.5 bg-stone-900 text-white hover:bg-[#D2FF00] hover:text-black transition-all duration-300 font-black text-[10px] tracking-widest uppercase rounded-none border border-stone-800"
                  >
                    {way.action}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#101400] border-2 border-[#D2FF00]/20 rounded-none p-12 text-white shadow-2xl relative">
            {/* Glass overlay for the CTA section */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-none pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-widest">Ready to Transform Lives?</h3>
                <p className="text-stone-400 mb-8 normal-case text-sm leading-relaxed font-semibold tracking-normal max-w-xl">
                  Join hundreds of supporters who are already making a difference in children's lives. 
                  Your contribution, no matter the size, creates lasting impact.
                </p>
                <div className="space-y-3 text-stone-300 text-xs font-black">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#D2FF00] rounded-none mr-3 shadow-[0_0_5px_#D2FF00]"></div>
                    <span>100% of donations go directly to programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#D2FF00] rounded-none mr-3 shadow-[0_0_5px_#D2FF00]"></div>
                    <span>Monthly updates on your impact</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#D2FF00] rounded-none mr-3 shadow-[0_0_5px_#D2FF00]"></div>
                    <span>Tax-deductible receipts provided</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1a1c16] border border-stone-800 rounded-none p-8 shadow-lg">
                <h4 className="text-sm font-black mb-6 text-white tracking-widest border-b border-stone-800 pb-2">Start Making a Difference Today</h4>
                <div className="space-y-4 text-[10px] font-black tracking-widest">
                  <button 
                    onClick={() => handleDonateClick("30")}
                    className="w-full py-4 bg-[#D2FF00] text-black rounded-none hover:bg-white transition-all duration-300 font-black flex items-center justify-center"
                  >
                    Donate $30/month - Sponsor a Child
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDonateClick()}
                    className="w-full py-4 bg-orange-600 text-white rounded-none hover:bg-orange-700 transition-all duration-300 font-black flex items-center justify-center border border-orange-500"
                  >
                    Make a One-Time Donation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => redirectToWhatsApp("volunteer")}
                    className="w-full py-4 border border-stone-800 hover:border-[#D2FF00] text-stone-300 hover:text-[#D2FF00] rounded-none bg-stone-900/50 transition-all duration-300 font-black"
                  >
                    Learn About Volunteering
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
        amount={selectedAmount}
      />
    </>
  );
};

export default HowToHelp;
