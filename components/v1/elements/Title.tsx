type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
}

export default function Title({
  as: Component = 'h2',
  children,
}: TitleProps) {
  return (
    <Component
      className="
        text-2xl md:text-3xl
        font-semibold
        text-text
        tracking-tight
        mb-4
      "
    >
      {children}
    </Component>
  )
}
