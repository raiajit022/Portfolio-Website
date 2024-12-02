import React from 'react';
import { Card } from '@/components/ui/card';

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  year: string;
  achievements?: string[];
}

export const EducationCard: React.FC<EducationCardProps> = ({ 
  degree, 
  institution, 
  location, 
  year, 
  achievements = [] 
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{degree}</h3>
      <p className="text-gray-600 mb-1">{institution}, {location}</p>
      <p className="text-gray-500 mb-4">{year}</p>
      {achievements.length > 0 && (
        <>
          <h4 className="font-semibold mb-2">Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((achievement: string, index: number) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
}; 