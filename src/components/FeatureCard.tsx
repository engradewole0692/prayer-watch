import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(8,45,91,0.65)] transition-shadow duration-300 hover:shadow-[0_22px_50px_-24px_rgba(8,45,91,0.55)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  )
}
