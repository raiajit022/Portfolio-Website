import React from 'react'
import Card from '../ui/card'

interface ExperienceCardProps {
  title: string
  company?: string
  location: string
  period: string
  achievements: string[]
}

export function ExperienceCard(props: ExperienceCardProps) {
  const { title, company, location, period, achievements } = props
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {company ? (
        <p className="text-gray-600 mb-1">{company}, {location}</p>
      ) : (
        <p className="text-gray-600 mb-1">{location}</p>
      )}
      <p className="text-gray-500 mb-4">{period}</p>
      <ul className="list-disc list-inside space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </Card>
  )
} 