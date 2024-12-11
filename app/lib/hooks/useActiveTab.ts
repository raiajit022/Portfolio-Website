import { useState } from 'react'
import { TabName, TABS } from '../constants'

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