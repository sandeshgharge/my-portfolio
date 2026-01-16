import { useTabs } from './Tabs'
import ThemeToggleButton from '@/components/v1/elements/ThemeToggelButton'
import { useTheme } from '@/components/v1/theme/ThemeProvider'

type Tab = {
  id: string
  label: string
}

export function TabList({ tabs }: { tabs: Tab[] }) {
  const { active, setActive } = useTabs()
  const { theme, setTheme } = useTheme()

  return (
    <div className="tabs-container">
      <div/>
      <div className="tabs-group">
        {tabs.map((tab) => {
          const isActive = active === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`tab-button ${isActive ? 'tab-active' : ''}`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Theme Toggle */}
      <div className="tabs-theme">
        <ThemeToggleButton theme={theme} onToggle={setTheme} />
      </div>
    </div>
  )
}
