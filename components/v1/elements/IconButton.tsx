type IconButtonProps = {
  icon: React.ReactNode
  label?: string
  onClick?: () => void
}

export default function IconButton({
  icon,
  label,
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="p-2 border rounded"
    >
      {icon}
    </button>
  )
}
