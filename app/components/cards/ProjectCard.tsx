import React from 'react'
import Card from '@/components/ui/card'

interface ProjectCardProps {
  title: string
  description: string
  achievements: string[]
  githubLink?: string
}

export function ProjectCard(props: ProjectCardProps) {
  const { title, description, achievements, githubLink } = props
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div>
        <h4 className="font-medium mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-600">{achievement}</li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
