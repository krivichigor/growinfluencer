import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"
import { influencerTypes } from "@/lib/data/influencer-types"
import { tools } from "@/lib/data/tools"
import { guides } from "@/lib/data/guides"
import { newsArticles } from "@/lib/data/news"
import { calculatorsMeta } from "@/lib/data/calculators"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${baseUrl}/influencers`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/calculators`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
  ]

  const influencerPages = influencerTypes.map((type) => ({
    url: `${baseUrl}/influencers/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const guidePages = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const calculatorPages = calculatorsMeta.map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...influencerPages, ...toolPages, ...guidePages, ...newsPages, ...calculatorPages]
}
