import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  achievements: string[]
}

export function ProjectCard({ title, description, technologies, achievements }: ProjectCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <h4 className="font-semibold mb-2">Key Achievements:</h4>
      <ul className="list-disc list-inside space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </Card>
  )
}

