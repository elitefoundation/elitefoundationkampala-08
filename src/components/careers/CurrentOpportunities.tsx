
import { motion } from "framer-motion";
import { Users, BookOpen, Heart } from 'lucide-react';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';
import JobOpportunity from './JobOpportunity';

const CurrentOpportunities = () => {
  const handleApplyForJob = (jobTitle: string) => {
    redirectToWhatsApp("volunteer", `Hello, I would like to apply for the ${jobTitle} position at Kaweesa Children's Ministry. Can you please provide me with more information about the application process and requirements?`);
  };

  const opportunities = [
    {
      title: "Program Coordinator",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Lead our education and community outreach programs, working directly with children and families.",
      requirements: ["Degree in Social Work, Education, or related field", "Experience working with children", "Fluent in English and Luganda"],
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Education Specialist",
      type: "Full-time",
      location: "Kampala, Uganda",
      description: "Develop and implement educational curricula for children of different ages and learning needs.",
      requirements: ["Teaching qualification", "Curriculum development experience", "Passion for child development"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Child Protection Officer",
      type: "Full-time",
      location: "Multiple locations",
      description: "Ensure the safety and wellbeing of children in our programs, conducting assessments and follow-ups.",
      requirements: ["Background in child protection", "Strong assessment skills", "Trauma-informed care training"],
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8">Current Opportunities</h2>
      <div className="space-y-6">
        {opportunities.map((job, index) => (
          <JobOpportunity
            key={index}
            title={job.title}
            type={job.type}
            location={job.location}
            description={job.description}
            requirements={job.requirements}
            icon={job.icon}
            color={job.color}
            onApply={handleApplyForJob}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CurrentOpportunities;
