type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "dark" | "light"
  as?: "h1" | "h2"
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  as = "h2",
}: SectionHeadingProps) {
  const TitleTag = as
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left"
  const titleColor = tone === "light" ? "text-white" : "text-navy"
  const bodyColor = tone === "light" ? "text-mist" : "text-slate-600"
  const eyebrowColor = tone === "light" ? "text-gold" : "text-primary"

  return (
    <div className={alignClass}>
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}>{eyebrow}</p>
      ) : null}
      <TitleTag id={id} className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </TitleTag>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${bodyColor}`}>{description}</p>
      ) : null}
    </div>
  )
}
