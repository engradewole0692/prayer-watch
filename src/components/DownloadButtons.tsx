import { site } from "../config/site"

type DownloadButtonsProps = {
  tone?: "dark" | "light"
  showNote?: boolean
  className?: string
}

const placeholderTitle = "Placeholder link. Replace with the official Prayer Watch store URL before publication."

export function DownloadButtons({ tone = "dark", showNote = false, className = "" }: DownloadButtonsProps) {
  const noteClass = tone === "light" ? "text-mist" : "text-muted"

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={site.googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={placeholderTitle}
          className="inline-flex min-h-14 items-center gap-3 rounded-xl bg-black px-4 py-2 text-white shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <PlayGlyph />
          <span className="text-left leading-tight">
            <span className="block text-[10px] font-medium uppercase tracking-wider text-white/80">Get it on</span>
            <span className="block font-display text-base font-semibold">Google Play</span>
          </span>
        </a>
        <a
          href={site.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={placeholderTitle}
          className="inline-flex min-h-14 items-center gap-3 rounded-xl bg-black px-4 py-2 text-white shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <AppleGlyph />
          <span className="text-left leading-tight">
            <span className="block text-[10px] font-medium uppercase tracking-wider text-white/80">Download on the</span>
            <span className="block font-display text-base font-semibold">App Store</span>
          </span>
        </a>
      </div>
      {showNote ? (
        <p className={`mt-3 max-w-md text-xs leading-relaxed ${noteClass}`}>
          These buttons use placeholder store links until the official Prayer Watch listings are published.
        </p>
      ) : null}
    </div>
  )
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
      <path fill="#34A853" d="M3.8 20.6 13.2 12 3.8 3.4c-.3.3-.5.8-.5 1.4v14.4c0 .6.2 1.1.5 1.4z" />
      <path fill="#FBBC04" d="m13.2 12 2.9-2.6-8.9-5.1c-.5-.3-1.1-.3-1.6.1L13.2 12z" />
      <path fill="#EA4335" d="M16.1 14.6 13.2 12l-7.6 7.6c.5.4 1.1.4 1.6.1l8.9-5.1z" />
      <path fill="#4285F4" d="M20.4 10.7c.5.3.8.8.8 1.3s-.3 1-.8 1.3l-2.4 1.4-2.9-2.7 2.9-2.7 2.4 1.4z" />
    </svg>
  )
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.55c.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.63-1.71-3.2-1.73-1.36-.14-2.66.8-3.35.8-.69 0-1.76-.78-2.89-.76-1.49.02-2.86.87-3.63 2.2-1.55 2.69-.4 6.66 1.11 8.84.74 1.07 1.62 2.27 2.77 2.23 1.11-.05 1.53-.72 2.88-.72 1.34 0 1.72.72 2.89.7 1.2-.02 1.95-1.08 2.68-2.16.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.35-3.61zM14.7 6.7c.61-.74 1.02-1.77.91-2.8-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.69-.93 2.69.98.08 1.98-.5 2.59-1.21z"
      />
    </svg>
  )
}
