import type { ReactNode } from "react"
import { Container } from "./Container"
import { PageMeta } from "./PageMeta"

export type LegalSection = {
  id: string
  heading: string
}

type LegalLayoutProps = {
  title: string
  description: string
  path: string
  kicker: string
  sections: LegalSection[]
  children: ReactNode
}

export function LegalLayout({ title, description, path, kicker, sections, children }: LegalLayoutProps) {
  return (
    <>
      <PageMeta title={`${title} | Prayer Watch`} description={description} path={path} />
      <section className="bg-navy text-white">
        <Container className="py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{kicker}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{description}</p>
        </Container>
      </section>
      <Container className="grid gap-10 py-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-16">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">On this page</p>
          <ol className="mt-3 space-y-2 border-l border-slate-200">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block border-l-2 border-transparent py-1 pl-3 text-sm text-slate-600 hover:border-gold hover:text-navy"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="legal-prose min-w-0">{children}</article>
      </Container>
    </>
  )
}

export function DraftNotice() {
  return (
    <aside className="rounded-2xl border border-gold/70 bg-[#fff8e6] p-5 text-sm leading-relaxed text-navy" role="note">
      <p className="font-display text-base font-semibold">Review draft for Luvanex Foundation</p>
      <p className="mt-2 text-slate-700">
        This page was prepared from the product description and the materials supplied for the website. It is not a
        finished legal document. Sections marked “Confirmation required” must be completed and approved by Luvanex
        Foundation before this page is treated as official.
      </p>
    </aside>
  )
}

export function ConfirmNote({ children }: { children: ReactNode }) {
  return (
    <aside className="my-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-navy">
      <p className="font-semibold">Confirmation required</p>
      <div className="mt-1 text-slate-700">{children}</div>
    </aside>
  )
}
