'use client'

import React, { useState } from 'react'
import { Tabs } from './components/Tabs'
import { Profile } from './components/Profile'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { BlogsSection } from '@/components/sections/BlogsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { ProjectCard } from './components/cards/ProjectCard'
import { Footer } from './components/Footer'

export default function Portfolio(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('Experience')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Profile />
          
          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {activeTab === 'Experience' && <ExperienceSection />}
              {activeTab === 'Projects' && <ProjectsSection />}
              {activeTab === 'Education' && <EducationSection />}
              {activeTab === 'Blogs' && <BlogsSection />}
              {activeTab === 'Awards 🏆' && <AwardsSection />}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}