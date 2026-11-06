type PhoneMockupProps = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export function PhoneMockup({ src, alt, caption, width = 472, height = 1024 }: PhoneMockupProps) {
  return (
    <figure className="mx-auto w-full max-w-[250px]">
      <div className="rounded-[2rem] bg-navy p-2 shadow-[0_24px_50px_-28px_rgba(8,45,91,0.85)] ring-1 ring-navy">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-[1.45rem]"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm font-medium text-navy">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
