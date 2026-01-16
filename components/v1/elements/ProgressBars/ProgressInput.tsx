type ProgressInputProps = {
  label?: string
  value: number
  onChange: (value: number) => void
}

export default function ProgressInput({
  label,
  value,
  onChange,
}: ProgressInputProps) {
  const safeValue = Math.min(100, Math.max(0, value))

  return (
    <div className="flex flex-col gap-2">
      {label && <span>{label}</span>}

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${safeValue}%` }}
          />
        </div>

        <input
          type="number"
          min={0}
          max={100}
          value={safeValue}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 border px-2 py-1 rounded"
        />
        <span>%</span>
      </div>
    </div>
  )
}
