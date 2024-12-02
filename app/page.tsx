'use client'

import { useState } from 'react'
import { Tabs } from '@/components/Tabs'
import { Profile } from '@/components/Profile'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { BlogsSection } from '@/components/sections/BlogsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import ProjectCard from './components/ProjectCard'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Experience')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <Profile />
        
        <main className="flex-1">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {activeTab === 'Experience' && <ExperienceSection />}
          {activeTab === 'Projects' && <ProjectsSection />}
          {activeTab === 'Education' && <EducationSection />}
          {activeTab === 'Blogs' && <BlogsSection />}
          {activeTab === 'Awards 🏆' && <AwardsSection />}
          {activeTab === 'Projects' && <ProjectCard
            title="Project Title"
            description="Project Description"
            technologies={["React", "TypeScript", "Next.js"]}
            achievements={["Achievement 1", "Achievement 2"]}
          />}
        </main>
      </div>
    </div>
  )
}