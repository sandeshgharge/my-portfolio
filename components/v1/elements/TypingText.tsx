import { useEffect, useState } from 'react'

type TypingTextProps = {
  lines: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypingText({
  lines,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1200,
}: TypingTextProps) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const currentLine = lines[lineIndex]

    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentLine.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentLine.slice(0, charIndex + 1))
        setCharIndex((i) => i + 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === currentLine.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentLine.slice(0, charIndex - 1))
        setCharIndex((i) => i - 1)
      }, deletingSpeed)
    } else if (isDeleting && charIndex === 0) {
      // Move to next line
      setIsDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
    }

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isDeleting,
    lineIndex,
    lines,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ])

  return (
    <span className="inline-flex items-center">
      =&gt; &nbsp;<span>{text}</span>
      <Cursor />
    </span>
  )
}

function Cursor() {
  return (
    <span className="ml-1 animate-blink">|</span>
  )
}