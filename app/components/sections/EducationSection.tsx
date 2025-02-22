import React from 'react';
import { EducationCard } from '../cards/EducationCard';

export function EducationSection() {
  return (
    <div className="space-y-6">
      <EducationCard
        degree="B-Tech: Electronics & Communication"
        institution="Manav Rachna International Institute of Research & Studies"
        location="Faridabad, Haryana"
        year="2018"
        achievements={[]}
      />
      <EducationCard
        degree="XII (CBSE): Science Stream"
        institution="Kendriya Vidyalaya No.1, Delhi Cantt."
        location="New Delhi"
        year="2014"
        achievements={[]}
      />
    </div>
  );
} 