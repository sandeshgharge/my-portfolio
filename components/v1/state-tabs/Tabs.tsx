import { createContext, useContext, useState } from 'react'

type TabsContextType = {
  active: string
  setActive: (id: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

export function Tabs({
  defaultTab,
  children,
}: {
  defaultTab: string
  children: React.ReactNode
}) {
  const [active, setActive] = useState(defaultTab)

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  )
}

export function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('useTabs must be used inside Tabs')
  return ctx
}
