type SubTitleProps = {
  as?: 'p' | 'span'
  children: React.ReactNode
}

export default function SubTitle({
  as: Component = 'p',
  children,
}: SubTitleProps) {
  return (
    <Component
      className="
        mt-1
        text-lg md:text-xl
        font-medium
        text-muted
        leading-relaxed
      "
    >
      {children}
    </Component>
  )
}
