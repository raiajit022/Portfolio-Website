interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

function ProjectCard({ 
  title, 
  description, 
  technologies, 
  achievements 
}: ProjectCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* Rest of your component */}
    </Card>
  );
}

export default ProjectCard; 