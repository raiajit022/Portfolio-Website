export const CONTACT_INFO = {
  email: 'raiajit02211@gmail.com',
  phone: '+91 9868965161',
  location: 'Pune',
  github: 'https://github.com/raiajit022',
  medium: 'https://medium.com/@raiajit022'
} as const

export const PROFILE_IMAGE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled1213131.jpg-q93cYvjW8uR45bGY5YAUy8XR7dRO9o.jpeg' as const

export const SKILLS = {
  technical: 'MS Excel, Power BI',
  soft: 'Problem Solving, Critical Thinking, Information Gathering, Communication, Collaboration, Risk Assessment, Stakeholder Management',
  domain: 'Financial Statement Understanding, Business Analytics',
  languages: 'Hindi, English'
} as const

export const TABS = [
  'Experience',
  'Projects',
  'Education',
  'Blogs',
  'Awards 🏆'
] as const

export type TabName = typeof TABS[number] 