import { site } from "../config/site"

type LogoProps = {
  tone?: "dark" | "light"
  className?: string
}

export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const word = tone === "light" ? "text-white" : "text-navy"
  const markClass = tone === "light" ? "ring-1 ring-white/15" : ""

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className={`h-10 w-10 shrink-0 rounded-xl ${markClass}`}
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="12" fill="#082D5B" />
        <circle cx="20" cy="20" r="11.5" fill="none" stroke="#F4B400" strokeWidth="1.7" />
        <path
          fill="#F4B400"
          d="M20 8.2c.3 1.4.8 2.3 2.1 2.9-1.3.5-1.8 1.4-2.1 2.8-.3-1.4-.8-2.3-2.1-2.8 1.3-.6 1.8-1.5 2.1-2.9z"
        />
        <path
          fill="#ffffff"
          d="M13.6 22.4c.55-2.7 2.25-4.15 6.4-4.15s5.85 1.45 6.4 4.15l.7 3.35c.25 1.25-.7 2.4-1.95 2.4h-10.3c-1.25 0-2.2-1.15-1.95-2.4l.7-3.35z"
        />
      </svg>
      <span className={`font-display text-[1.05rem] font-semibold tracking-tight ${word}`}>
        {site.name}
      </span>
    </span>
  )
}
