import { useState } from 'react'
import { TABS } from '../constants'

type TabName = typeof TABS[number]['name']

export function useActiveTab(initialTab: TabName = 'Experience') {
  const [activeTab, setActiveTab] = useState<TabName>(initialTab)
  
  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab)
  }
  
  return {
    activeTab,
    setActiveTab: handleTabChange
  }
}