import { useCallback, useEffect, useState, type MouseEvent } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Container } from "./Container"
import { DesktopNav } from "./DesktopNav"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav"

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const onDownloadClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu()
    if (location.pathname === "/") {
      const target = document.getElementById("download")
      if (target) {
        event.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container>
        <div className="relative flex h-16 items-center justify-between gap-3">
          <Link to="/" className="rounded-lg" aria-label="Prayer Watch, home" onClick={closeMenu}>
            <Logo />
          </Link>
          <DesktopNav />
          <div className="flex items-center gap-2">
            <a
              href="/#download"
              onClick={onDownloadClick}
              className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-4 text-sm font-semibold text-navy hover:brightness-105"
            >
              <span className="sm:hidden">Download</span>
              <span className="hidden sm:inline">Download App</span>
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>
      <MobileNav open={open} onNavigate={closeMenu} />
    </header>
  )
}
