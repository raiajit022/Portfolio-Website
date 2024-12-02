import { Card } from '../../components/ui/card';

interface ExperienceCardProps {
  title: string;
  company?: string;
  location: string;
  period: string;
  achievements: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  location, 
  period, 
  achievements 
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="text-gray-600 mb-4">
        {company && <p>{company}, {location}</p>}
        {!company && <p>{location}</p>}
        <p className="text-sm">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </Card>
  );
}; 