/**
 * Site-wide settings.
 *
 * Before publication, confirm:
 * - siteUrl, then update public/sitemap.xml and public/robots.txt to the same origin
 * - supportEmail
 * - googlePlayUrl and appStoreUrl
 */
export const site = {
  name: "Prayer Watch",
  owner: "Luvanex Foundation",
  siteUrl: "https://prayerwatch.app",
  supportEmail: "support@prayerwatch.app",
  tagline: "Build a Consistent Prayer Life",
  description:
    "Prayer Watch helps you build a consistent prayer life, read the Bible, and pray with a community of believers.",
  googlePlayUrl: "https://play.google.com/store/search?q=Prayer%20Watch&c=apps",
  appStoreUrl: "https://apps.apple.com/search?term=Prayer%20Watch",
} as const

export const images = {
  hero: "/images/prayer-watch-hero.jpg",
  bible: "/images/bible-devotional.jpg",
  community: "/images/prayer-community.jpg",
  mountain: "/images/mountain-sunrise.jpg",
  prayerHands: "/images/prayer-hands-closeup.jpg",
  deleteBanner: "/images/delete-account-illustration.jpg",
  contact: "/images/contact-support.jpg",
  navyGold: "/images/navy-gold-background.jpg",
  lightWave: "/images/light-blue-wave-background.jpg",
  screenshotLogin: "/images/screenshot-login.jpg",
  screenshotHome: "/images/screenshot-home.jpg",
  screenshotMore: "/images/screenshot-more.jpg",
  screenshotDelete: "/images/screenshot-delete-confirm.jpg",
} as const

export const primaryNav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us", end: false },
  { to: "/contact", label: "Contact Us", end: false },
] as const

export const legalNav = [
  { to: "/delete-account", label: "Delete Account" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-of-service", label: "Terms of Service" },
] as const

export function absoluteUrl(path: string) {
  const origin = site.siteUrl.endsWith("/") ? site.siteUrl : `${site.siteUrl}/`
  return new URL(path.replace(/^\//, ""), origin).toString()
}

export function mailtoSupport(subject: string, body?: string) {
  const query = [`subject=${encodeURIComponent(subject)}`]
  if (body) query.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${site.supportEmail}?${query.join("&")}`
}

export const deletionMailto = mailtoSupport(
  "Prayer Watch Account Deletion Request",
  "I would like to request deletion of my Prayer Watch account.\n\nAccount email:\n\n",
)
