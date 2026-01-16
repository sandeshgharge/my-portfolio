type ThemeIconProps = {
  variant?: 'light' | 'dark' | 'system'
  size?: number
}

export default function ThemeIcon({
  variant = 'system',
  size = 20,
}: ThemeIconProps) {
  if (variant === 'light') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
      </svg>
    )
  }

  if (variant === 'dark') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
      </svg>
    )
  }

  // system / auto
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="18" x2="12" y2="20" />
    </svg>
  )
}
