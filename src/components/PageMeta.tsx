import { useEffect } from "react"
import { absoluteUrl, site } from "../config/site"

type PageMetaProps = {
  title: string
  description: string
  path: string
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute("content", content)
}

export function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    document.title = title
    const url = absoluteUrl(path)
    const image = absoluteUrl("/images/prayer-watch-hero.jpg")

    upsertMeta("name", "description", description)
    upsertMeta("property", "og:title", title)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:site_name", site.name)
    upsertMeta("property", "og:image", image)
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", title)
    upsertMeta("name", "twitter:description", description)
    upsertMeta("name", "twitter:image", image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", url)
  }, [title, description, path])

  return null
}
