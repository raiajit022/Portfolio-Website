import { EducationCard } from '@/components/cards/EducationCard'

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
  )
}