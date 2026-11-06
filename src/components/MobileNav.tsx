import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { primaryNav } from "../config/site"

type MobileNavProps = {
  open: boolean
  onNavigate: () => void
}

function linkClass(isActive: boolean) {
  return isActive
    ? "block rounded-xl bg-mist px-4 py-3 text-base font-semibold text-navy"
    : "block rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-mist"
}

export function MobileNav({ open, onNavigate }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onNavigate()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onNavigate])

  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile"
      hidden={!open}
      className="border-t border-slate-200 bg-white lg:hidden"
    >
      <ul className="space-y-1 px-4 py-4">
        {primaryNav.map((item, index) => (
          <li key={item.to}>
            <NavLink
              ref={index === 0 ? firstLinkRef : undefined}
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) => linkClass(isActive)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <a
            href="/#download"
            onClick={onNavigate}
            className="mt-2 block rounded-xl bg-gold px-4 py-3 text-center text-base font-semibold text-navy"
          >
            Download App
          </a>
        </li>
      </ul>
    </nav>
  )
}
