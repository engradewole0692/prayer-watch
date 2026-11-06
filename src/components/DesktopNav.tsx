import { NavLink } from "react-router-dom"
import { primaryNav } from "../config/site"

function linkClass(isActive: boolean) {
  return isActive
    ? "rounded-lg bg-mist px-3 py-2 text-sm font-semibold text-navy"
    : "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-mist hover:text-navy"
}

export function DesktopNav() {
  return (
    <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} end={item.end} className={({ isActive }) => linkClass(isActive)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
