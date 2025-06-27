
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface JobOpportunityProps {
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  icon: React.ReactNode;
  color: string;
  onApply: (title: string) => void;
}

const JobOpportunity = ({ 
  title, 
  type, 
  location, 
  description, 
  requirements, 
  icon, 
  color, 
  onApply 
}: JobOpportunityProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mr-4`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-4">{type}</span>
                <span>{location}</span>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => onApply(title)}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Apply Now
          </Button>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="font-semibold mb-2">Requirements:</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {requirements.map((req, i) => (
              <li key={i}>• {req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobOpportunity;
