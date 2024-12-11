import React from 'react'
import { Card } from '../ui/Card'

interface ExperienceCardProps {
  title: string;
  company?: string;
  location: string;
  period: string;
  achievements: string[];
}

export function ExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  achievements 
}: ExperienceCardProps) {
  return (
    <div className="border-b last:border-b-0 pb-6 last:pb-0 mb-6 last:mb-0">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="text-gray-600 mb-4">
        {company && <p>{company}, {location}</p>}
        {!company && <p>{location}</p>}
        <p className="text-sm">{period}</p>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">• {achievement}</li>
        ))}
      </ul>
    </div>
  )
} 