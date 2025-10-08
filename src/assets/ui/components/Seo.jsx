import React from 'react'
import { Helmet } from 'react-helmet-async'

const absoluteUrl = (path) => {
  if (!path) return undefined
  if (/^https?:\/\//i.test(path)) return path
  const base = typeof window !== 'undefined' ? window.location.origin : ''
  try {
    return new URL(path, base).toString()
  } catch {
    return path
  }
}

const Seo = ({
  title,
  description,
  path,
  image,
  type = 'website',
  siteName = 'ODS Dispatch',
  twitterCard = 'summary_large_image',
  robots = 'index,follow',
  jsonLd,
}) => {
  const canonical = absoluteUrl(path)
  const ogImage = absoluteUrl(image)

  return (
    <Helmet prioritizeSeoTags>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {robots ? <meta name="robots" content={robots} /> : null}

      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:site_name" content={siteName} />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content={type} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      <meta name="twitter:card" content={twitterCard} />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

      {Array.isArray(jsonLd)
        ? jsonLd.map((schema, idx) => (
            <script key={idx} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        : jsonLd ? (
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          ) : null}
    </Helmet>
  )
}

export default Seo

