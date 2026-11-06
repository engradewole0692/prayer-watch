import { images, site } from "../config/site"
import { features, helpPoints } from "../data/features"
import { Container } from "../components/Container"
import { DownloadButtons } from "../components/DownloadButtons"
import { FeatureCard } from "../components/FeatureCard"
import { PageMeta } from "../components/PageMeta"
import { PhoneMockup } from "../components/PhoneMockup"
import { SectionHeading } from "../components/SectionHeading"

const productShots = [
  {
    src: images.screenshotLogin,
    alt: "Prayer Watch sign-in screen with email and password fields.",
    caption: "Sign in",
  },
  {
    src: images.screenshotMore,
    alt: "Prayer Watch More menu with Bible reading, account settings, notifications, milestones, community, and account actions.",
    caption: "More menu",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.owner,
      email: site.supportEmail,
    },
    {
      "@type": "MobileApplication",
      name: site.name,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android, iOS",
      description: site.description,
      publisher: {
        "@type": "Organization",
        name: site.owner,
      },
    },
  ],
}

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Prayer Watch | Build a Consistent Prayer Life"
        description="Stay connected with God, grow in your prayer journey, and connect with a community of believers around the world."
        path="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 pb-24 pt-14 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:pb-28 lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">A prayer community app</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              Stay connected with God, grow in your prayer journey, and connect with a community of believers around
              the world.
            </p>
            <DownloadButtons tone="light" className="mt-8" />
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-gold/20 blur-2xl" aria-hidden="true" />
            <img
              src={images.hero}
              alt="A man prays with his hands together at sunset, with mountains behind him."
              width={1024}
              height={576}
              fetchPriority="high"
              decoding="async"
              className="relative h-auto w-full rounded-[1.75rem] object-cover shadow-2xl ring-1 ring-white/20"
            />
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-14 text-white" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full fill-current">
            <path d="M0 42c220 38 420-20 720 4 280 22 500 8 720-24v58H0V42z" />
          </svg>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="features-heading">
        <Container>
          <SectionHeading
            id="features-heading"
            eyebrow="The app"
            title="What you can do with Prayer Watch"
            description="Six parts of the app, made for a steady life of prayer, Scripture, and fellowship."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20" aria-labelledby="helps-heading">
        <img
          src={images.lightWave}
          alt=""
          width={1024}
          height={576}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.7fr)]">
            <div>
              <SectionHeading
                id="helps-heading"
                align="left"
                eyebrow="How it helps"
                title="A simple way to keep prayer at the center of the day"
                description="Prayer Watch is built for people who want a practical rhythm: a time to pray, a place to read, and others to pray with."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {helpPoints.map((point) => (
                  <li key={point.title} className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mist text-primary">
                        <point.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy">{point.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">{point.description}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <PhoneMockup
              src={images.screenshotHome}
              alt="Prayer Watch home screen showing a weekly prayer streak, a Bible verse, a target prayer time, and prayer projects."
              caption="The Prayer Watch home screen"
            />
          </div>
          <div className="mt-14">
            <p className="text-sm font-medium text-navy lg:hidden">Swipe to see the app screens.</p>
            <div className="mt-4 flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:overflow-visible lg:justify-items-center">
              {productShots.map((shot) => (
                <div key={shot.caption} className="w-[230px] shrink-0 snap-center lg:w-auto">
                  <PhoneMockup src={shot.src} alt={shot.alt} caption={shot.caption} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="community-heading">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={images.community}
            alt="A congregation worships together, with hands raised and eyes closed."
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
            className="h-full max-h-[460px] w-full rounded-[1.75rem] object-cover shadow-[0_24px_50px_-32px_rgba(8,45,91,0.7)]"
          />
          <div>
            <SectionHeading
              id="community-heading"
              align="left"
              eyebrow="Community"
              title="Grow Together in Prayer"
              description="Prayer is personal, and it is also shared. Prayer Watch gives believers a place to bring requests, pray with others, and stay encouraged."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Faithfulness grows more naturally when you are not left to remember alone. The community is there for
              fellowship, shared prayer, and steady encouragement.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20" aria-labelledby="bible-heading">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-1">
            <SectionHeading
              id="bible-heading"
              align="left"
              eyebrow="Scripture"
              title="Stay rooted in God's Word"
              description="Prayer and Scripture belong together. Prayer Watch keeps Bible reading beside your prayer life, so devotion stays connected to the Word."
            />
          </div>
          <img
            src={images.bible}
            alt="An open Bible rests on a rock, with mountains and sunrise behind it."
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
            className="h-full max-h-[460px] w-full rounded-[1.75rem] object-cover shadow-[0_24px_50px_-32px_rgba(8,45,91,0.55)] lg:order-2"
          />
        </Container>
      </section>

      <section id="download" className="relative isolate scroll-mt-24 overflow-hidden py-20 text-white sm:py-24">
        <img
          src={images.navyGold}
          alt=""
          width={1024}
          height={576}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/55" />
        <Container className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Download</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Start your prayer journey today</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Download Prayer Watch and take the next step toward a steady life of prayer, Scripture, and community.
          </p>
          <DownloadButtons tone="light" showNote className="mt-8" />
        </Container>
      </section>
    </>
  )
}
