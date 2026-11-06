import type { ReactNode } from "react"

type ImageBannerProps = {
  src: string
  alt: string
  width: number
  height: number
  children?: ReactNode
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function ImageBanner({
  src,
  alt,
  width,
  height,
  children,
  className = "",
  imageClassName = "h-full w-full object-cover",
  priority = false,
}: ImageBannerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={imageClassName}
      />
      {children ? <div className="absolute inset-0">{children}</div> : null}
    </div>
  )
}
