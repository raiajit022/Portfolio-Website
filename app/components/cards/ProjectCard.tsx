import { Card } from '../ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  achievements 
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-600">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}; 