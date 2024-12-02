import { Card } from '../ui/Card';

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  year: string;
  achievements?: string[];
}

function EducationCard({ degree, institution, location, year, achievements = [] }: EducationCardProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{degree}</h3>
      <p className="text-gray-600 mb-1">{institution}, {location}</p>
      <p className="text-gray-500 mb-4">{year}</p>
      {achievements.length > 0 && (
        <>
          <h4 className="font-semibold mb-2">Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
}

export function EducationSection() {
  return (
    <div className="space-y-6">
      <EducationCard
        degree="B-Tech: Electronics & Communication"
        institution="Manav Rachna International Institute of Research & Studies"
        location="Faridabad, Haryana"
        year="2018"
      />
      <EducationCard
        degree="XII (CBSE): Science Stream"
        institution="Kendriya Vidyalaya No.1, Delhi Cantt."
        location="New Delhi"
        year="2014"
      />
      <EducationCard
        degree="High School Diploma"
        institution="Kendriya Vidyalaya Air Force Stn. Avadi"
        location="Chennai, Tamil Nadu"
        year="2011"
        achievements={[
          "Graduated with 8.4 CGPA",
          "Elected Captain of Cricket Team – Juniors"
        ]}
      />
      <EducationCard
        degree="Training & Certification: Business Analytics 360"
        institution="AnalytixLabs"
        location="Gurugram"
        year="2020"
      />
    </div>
  );
} 