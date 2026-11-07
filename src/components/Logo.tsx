type LogoProps = {
  tone?: "dark" | "light"
  className?: string
}

const sources = {
  dark: "/brand/wordmark.png",
  light: "/brand/wordmark-white.png",
} as const

export function Logo({ tone = "dark", className = "" }: LogoProps) {
  return (
    <img
      src={sources[tone]}
      alt="Prayer Watch"
      width={914}
      height={372}
      className={className || "h-10 w-auto sm:h-12"}
    />
  )
}
