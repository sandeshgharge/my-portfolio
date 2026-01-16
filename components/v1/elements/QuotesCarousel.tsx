import { useEffect, useState } from 'react'

type Quote = {
  text: string
  author: string
}

export default function QuotesCarousel({
  quotes,
  interval = 4000,
}: {
  quotes: Quote[]
  interval?: number
}) {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, interval)

    return () => clearInterval(timer)
  }, [quotes.length, interval, isHovered])

  const quote = quotes[index]

  return (
    <div
      className="quotes-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
    </div>
  )
}
