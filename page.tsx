'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import ProjectCard from './app/components/ProjectCard'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Experience')

  const tabs = [
    { name: 'Experience', active: true },
    { name: 'Projects', active: false },
    { name: 'Education', active: false },
    { name: 'Blogs', active: false },
    { name: 'Awards 🏆', active: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <aside className="md:w-80 flex flex-col items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <div className="mb-4 relative w-32 h-32 mx-auto md:mx-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled1213131.jpg-q93cYvjW8uR45bGY5YAUy8XR7dRO9o.jpeg"
                alt="Ajit Rai"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1">Ajit Kumar Rai</h1>
            <p className="text-gray-600 mb-4">Data Analyst | Business Intelligence Expert</p>
            
            <div className="text-sm text-gray-600 space-y-1">
              <p>📧 raiajit022@gmail.com</p>
              <p>📱 +91 9868965161</p>
              <p>📍 Bengaluru</p>
              <a href="https://www.linkedin.com/in/raiajit011/" className="text-blue-600 hover:underline">
                🔗 LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="w-full space-y-4">
            <SkillSection 
              title="Technical Skills" 
              skills="MS Excel, Python, Power BI, SQL"
            />
            <SkillSection 
              title="Soft Skills" 
              skills="Problem Solving, Critical Thinking, Information Gathering"
            />
            <SkillSection 
              title="Domain Knowledge" 
              skills="Financial Statement Understanding, Business Analytics"
            />
            <SkillSection 
              title="Languages" 
              skills="Hindi, English"
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <Button
                key={tab.name}
                variant={activeTab === tab.name ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.name)}
                className="rounded-full"
              >
                {tab.name}
              </Button>
            ))}
          </div>

          {/* Experience Cards */}
          {activeTab === 'Experience' && <ExperienceSection />}
          {activeTab === 'Projects' && <ProjectsSection />}
          {activeTab === 'Education' && <EducationSection />}
          {activeTab === 'Blogs' && <BlogsSection />}
          {activeTab === 'Awards 🏆' && <AwardsSection />}
        </main>
      </div>
    </div>
  )
}

function SkillSection({ title, skills }: { title: string; skills: string }) {
  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">{title}:</h3>
      <p className="text-gray-600 text-sm">{skills}</p>
    </div>
  )
}

function ExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  achievements 
}: { 
  title: string
  company?: string
  location: string
  period: string
  achievements: string[]
}) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="text-gray-600 mb-4">
        {company && <p>{company}, {location}</p>}
        {!company && <p>{location}</p>}
        <p className="text-sm">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </Card>
  )
}

function ExperienceSection() {
  return (
    <div className="space-y-6">
      <ExperienceCard
        title="UPSC Preparation"
        location="Bengaluru, India"
        period="Feb 2022 - Oct 2024"
        achievements={[
          "Dedicated period of intensive study and preparation for Civil Services Examination",
          "Developed comprehensive understanding of Indian polity, economy, and current affairs",
          "Enhanced analytical and critical thinking abilities through rigorous preparation",
          "Maintained disciplined approach to learning and self-development"
        ]}
      />
      
      <ExperienceCard
        title="Analyst"
        company="GlobalLogic Technologies Pvt Ltd"
        location="Gurugram, India"
        period="Oct 2020 - Feb 2022"
        achievements={[
          "Provided support and maintenance to existing management information systems (MIS)",
          "Performed data analysis of resource database and identified gaps",
          "Updated/Validated/Maintained data resources for database on periodic basis",
          "Generated both periodic and ad hoc reports as needed"
        ]}
      />

      <ExperienceCard
        title="Associate Analyst"
        company="GlobalLogic Technologies Pvt Ltd"
        location="Gurugram, India"
        period="May 2019 - Oct 2020"
        achievements={[
          "Analyzed Google E-commerce content to prevent piracy on shopping platform",
          "Employed methodology for detecting outliers to trace fraudulent entities",
          "Achieved quality metrics of 95% and above in analytical output",
          "Prepared reports and dashboards with actionable insights for fraud management"
        ]}
      />

      <ExperienceCard
        title="Customer Support"
        company="Amazon Development Center India Pvt Ltd"
        location="Noida, India"
        period="Jun 2018 - Feb 2019"
        achievements={[
          "Worked on all major modes of live communication to support customers and business",
          "Delivered exceptional level of service to each customer",
          "Analyzed sellers data and contributed to detection of Fraudulent/Fake sellers",
          "Managed documentation and addressed discrepancies in timely manner"
        ]}
      />
    </div>
  )
}

function ProjectsSection() {
  return (
    <div className="space-y-6">
      <ProjectCard
        title="Sales Forecasting Model"
        description="Developed a machine learning model to predict future sales based on historical data and market trends."
        technologies={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
        achievements={[
          "Improved sales prediction accuracy by 15%",
          "Implemented feature engineering to capture seasonal trends",
          "Created interactive visualizations for stakeholder presentations"
        ]}
      />
      <ProjectCard
        title="Customer Segmentation Analysis"
        description="Conducted a comprehensive analysis to segment customers based on their purchasing behavior and demographics."
        technologies={["R", "ggplot2", "cluster", "dplyr"]}
        achievements={[
          "Identified 5 distinct customer segments",
          "Developed targeted marketing strategies for each segment",
          "Increased customer retention rate by 10%"
        ]}
      />
      <ProjectCard
        title="Financial Dashboard"
        description="Created an interactive dashboard to visualize key financial metrics and KPIs for executive decision-making."
        technologies={["Tableau", "SQL", "Excel"]}
        achievements={[
          "Reduced report generation time by 70%",
          "Implemented drill-down functionality for detailed analysis",
          "Integrated real-time data updates from multiple sources"
        ]}
      />
    </div>
  )
}

function EducationSection() {
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

function EducationCard({ degree, institution, location, year, achievements }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{degree}</h3>
      <p className="text-gray-600 mb-1">{institution}, {location}</p>
      <p className="text-gray-500 mb-4">{year}</p>
      {achievements && achievements.length > 0 && (
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
  )
}

function BlogsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">My Blog</h3>
        <p className="text-gray-600 mb-4">
          I write about data analysis, business intelligence, and my journey in the tech industry. 
          Check out my latest articles on Medium:
        </p>
        <a 
          href="https://medium.com/@raiajit022" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline font-semibold"
        >
          Visit My Medium Blog
        </a>
      </Card>
    </div>
  )
}

function AwardsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Awards and Achievements</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">Elected Vice-Captain of Cricket Team</li>
          <li className="text-gray-700">Elected Captain of Tagore House</li>
        </ul>
      </Card>
    </div>
  )
}

