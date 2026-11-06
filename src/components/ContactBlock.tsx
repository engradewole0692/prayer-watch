import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

type ContactBlockProps = {
  icon: LucideIcon
  title: string
  children: ReactNode
}

export function ContactBlock({ icon: Icon, title, children }: ContactBlockProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-30px_rgba(8,45,91,0.7)]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-lg font-semibold text-navy">{title}</h2>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
    </article>
  )
}
