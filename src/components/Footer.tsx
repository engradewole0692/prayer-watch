import { Link } from "react-router-dom"
import { legalNav, primaryNav, site } from "../config/site"
import { Container } from "./Container"
import { Logo } from "./Logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-gold bg-navy text-mist">
      <Container className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Link to="/" aria-label="Prayer Watch, home" className="inline-flex rounded-lg">
            <Logo tone="light" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            Prayer Watch is a Christian prayer and devotional community app from {site.owner}. It helps believers
            build a consistent prayer life, stay rooted in Scripture, and pray together.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Explore</h2>
          <ul className="mt-4 space-y-2">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Policies">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Policies</h2>
          <ul className="mt-4 space-y-2">
            {legalNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-sm text-mist">
            © {year} {site.owner}. Prayer Watch.
          </p>
        </Container>
      </div>
    </footer>
  )
}
