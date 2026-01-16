import { useTabs } from './Tabs'

export function TabPanel({
  when,
  children,
}: {
  when: string
  children: React.ReactNode
}) {
  const { active } = useTabs()
  if (active !== when) return null
  return <div className="pt-6">{children}</div>
}
