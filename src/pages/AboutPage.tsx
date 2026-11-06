import { BookOpen, Heart, Layers, Sparkles, Target, Users } from "lucide-react"
import { images, site } from "../config/site"
import { Container } from "../components/Container"
import { DownloadButtons } from "../components/DownloadButtons"
import { PageMeta } from "../components/PageMeta"
import { SectionHeading } from "../components/SectionHeading"

const pillars = [
  {
    title: "Our Purpose",
    text: "Prayer Watch is a prayer-focused mobile platform designed to help individuals develop a consistent prayer lifestyle, remain accountable, participate in prayer projects, and connect with a community of believers.",
  },
  {
    title: "Our Vision",
    text: "To see a global community of believers committed to a consistent and meaningful prayer life.",
  },
  {
    title: "Our Mission",
    text: "To provide a simple, reliable platform that makes prayer, accountability, Scripture, and community easier to practice.",
  },
]

const values = [
  {
    title: "Consistency",
    text: "A steady rhythm of prayer, kept one day at a time.",
    icon: Target,
  },
  {
    title: "Accountability",
    text: "Targets, streaks, and milestones that help you notice your walk.",
    icon: Layers,
  },
  {
    title: "Fellowship",
    text: "A community where believers can pray and encourage one another.",
    icon: Users,
  },
  {
    title: "Scripture",
    text: "Bible reading kept close to the life of prayer.",
    icon: BookOpen,
  },
  {
    title: "Encouragement",
    text: "A place to be strengthened, not measured against one another.",
    icon: Heart,
  },
  {
    title: "Simplicity",
    text: "A calm, focused app for devotion rather than noise.",
    icon: Sparkles,
  },
]

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us | Prayer Watch"
        description="Prayer Watch is a prayer-focused mobile platform from Luvanex Foundation, made to help believers pray consistently, read Scripture, and grow together."
        path="/about"
      />

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={images.mountain}
          alt="Sunrise over layered mountain ridges, with fog resting in the valleys."
          width={1024}
          height={576}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/40" />
        <Container className="relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">About Us</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">About Prayer Watch</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            Prayer Watch is a Christian prayer and devotional community app from {site.owner}. It is made for people
            who want to pray with more consistency, stay rooted in Scripture, and walk with other believers.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The platform"
              title="A home for a consistent prayer life"
              description="Prayer Watch helps individuals and communities stay faithful in prayer, take part in focused prayer projects, and encourage one another along the way."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              The app brings reminders, prayer targets, projects, Bible reading, milestones, and community into one
              place. This website introduces the app. It does not replace it, and it does not create accounts of its
              own.
            </p>
          </div>
          <img
            src={images.prayerHands}
            alt="A man prays with clasped hands beside an open Bible."
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
            className="h-full max-h-[440px] w-full rounded-[1.75rem] object-cover shadow-[0_24px_50px_-32px_rgba(8,45,91,0.65)]"
          />
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20" aria-labelledby="purpose-heading">
        <Container>
          <h2 id="purpose-heading" className="sr-only">
            Purpose, vision, and mission
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="values-heading">
        <Container>
          <SectionHeading
            id="values-heading"
            eyebrow="Our values"
            title="What the platform is built to encourage"
            description="These are the qualities Prayer Watch is designed around. They describe the product, not a separate organizational history."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-primary">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={images.bible}
            alt="An open Bible on a rock at sunrise, overlooking wooded mountains."
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
            className="h-full max-h-[420px] w-full rounded-[1.75rem] object-cover"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Scripture"
              title="Remain rooted in God's Word"
              description="Prayer Watch treats Bible reading as part of the prayer life, not a separate task to remember later."
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Read, reflect, and let Scripture shape the way you pray. The app keeps a place for the Word beside your
              reminders, projects, and community.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight">Bring Prayer Watch with you</h2>
            <p className="mt-3 text-mist">
              Download the app and begin a more consistent rhythm of prayer.
            </p>
          </div>
          <DownloadButtons tone="light" showNote />
        </Container>
      </section>
    </>
  )
}
