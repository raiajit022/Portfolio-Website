import { Button } from './ui/button'

interface TabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { name: 'Experience', active: true },
    { name: 'Projects', active: false },
    { name: 'Education', active: false },
    { name: 'Blogs', active: false },
    { name: 'Awards 🏆', active: false },
  ]

  return (
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
  )
}