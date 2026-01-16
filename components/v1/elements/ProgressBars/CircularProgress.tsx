import { useEffect, useState } from 'react'

type CircularProgressProps = {
  value: number
  size?: number
  strokeWidth?: number
  label?: string
}

export default function CircularProgress({
  value,
  size = 120,
  strokeWidth = 10,
  label,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(Math.min(100, Math.max(0, value)))
  }, [value])

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="opacity-20"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (progress / 100) * circumference
          }
          strokeLinecap="round"
          className="transition-all duration-1000"
          stroke="var(--primary)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {progress}%
        </text>
      </svg>

      {label && <span>{label}</span>}
    </div>
  )
}
