import { PhoneMockup } from "./PhoneMockup"

type DeleteStepProps = {
  step: number
  title: string
  instruction: string
  image: string
  imageAlt: string
  caption: string
}

export function DeleteStep({ step, title, instruction, image, imageAlt, caption }: DeleteStepProps) {
  return (
    <article className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_-32px_rgba(8,45,91,0.8)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        <p className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-lg font-semibold text-white">
          <span className="sr-only">Step </span>
          {step}
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-navy">{title}</h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">{instruction}</p>
      </div>
      <PhoneMockup src={image} alt={imageAlt} caption={caption} />
    </article>
  )
}
