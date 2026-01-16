import ThemeIcon from '@/components/v1/icons/ThemeIcon'
import IconButton from '@/components/v1/elements/IconButton'

type Theme = 'light' | 'dark' | 'system'

type ThemeToggleButtonProps = {
  theme: Theme
  onToggle: (next: Theme) => void
}

const order: Theme[] = ['light', 'dark', 'system']

export default function ThemeToggleButton({
  theme,
  onToggle,
}: ThemeToggleButtonProps) {
  const nextTheme =
    order[(order.indexOf(theme) + 1) % order.length]

  return (
    <IconButton
      icon={<ThemeIcon variant={theme} />}
      label="Toggle theme"
      onClick={() => onToggle(nextTheme)}
    />
  )
}
