// SEO utilities and JSON-LD generators

import type { Metadata } from "next"

export const siteConfig = {
  name: "GrowInfluencer",
  url: "https://growinfluencer.com",
  description:
    "Your complete resource for becoming a successful content creator. Tools, guides, calculators, and expert advice for influencers.",
  author: "GrowInfluencer Team",
  twitterHandle: "@growinfluencer",
  ogImage: "/og-image.jpg",
}

export interface SEOProps {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`
  const url = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: ogType,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified: string
  author?: string
  keywords?: string[]
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = siteConfig.author,
  keywords = [],
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || siteConfig.ogImage,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${url}`,
    },
    keywords: keywords.join(", "),
  }
}

export interface SoftwareSchemaProps {
  name: string
  description: string
  url: string
  image?: string
  applicationCategory: string
  operatingSystem?: string
  offers?: {
    price: string
    priceCurrency: string
  }
  aggregateRating?: {
    ratingValue: number
    ratingCount: number
  }
}

export function generateSoftwareSchema({
  name,
  description,
  url,
  category,
  rating,
  ratingCount,
}: {
  name: string
  description: string
  url: string
  category: string
  rating?: number
  ratingCount?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: url.startsWith("http") ? url : `${siteConfig.url}${url}`,
    applicationCategory: category,
    operatingSystem: "Web",
    ...(rating &&
      ratingCount && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: rating,
          ratingCount: ratingCount,
        },
      }),
  }
}

export interface FAQSchemaProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function generateFAQSchema({ questions }: FAQSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }
}

export interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function generateBreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      "https://twitter.com/growinfluencer",
      "https://instagram.com/growinfluencer",
      "https://youtube.com/growinfluencer",
    ],
  }
}
