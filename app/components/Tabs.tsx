interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { name: 'Experience', active: true },
    { name: 'Projects', active: false },
    { name: 'Education', active: false },
    { name: 'Blogs', active: false },
    { name: 'Awards 🏆', active: false },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`px-4 py-2 rounded-full ${
            activeTab === tab.name
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
} 