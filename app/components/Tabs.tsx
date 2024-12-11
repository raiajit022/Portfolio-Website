interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    'Experience',
    'Projects', 
    'Education',
    'Blogs',
    'Awards 🏆'
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${activeTab === tab 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
} 