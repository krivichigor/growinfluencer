import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

const influencerTypes = [
  "tiktok-creator",
  "youtuber",
  "instagram-creator",
  "twitch-streamer",
  "gamer-creator",
  "all-in-one-creator",
  "micro-influencer",
  "podcaster",
]

const tools = [
  "hootsuite",
  "tubebuddy",
  "capcut",
  "canva",
  "streamlabs",
  "socialblade",
  "streamscharts",
  "notion-for-creators",
  "fiverr-collabs",
  "epidemic-sound",
  "linktree",
]

const guides = [
  "how-to-become-an-influencer",
  "how-to-grow-on-tiktok",
  "how-to-negotiate-brand-deals",
  "how-to-create-content-calendar",
  "best-equipment-for-beginners",
]

const news = [
  "tiktok-algorithm-update-2024",
  "youtube-monetization-changes",
  "instagram-reels-trends",
  "twitch-policy-update",
  "creator-economy-market-growth",
]

const calculators = ["engagement-rate", "collaboration-fee", "hashtag-reach", "sponsored-post-roi", "content-calendar"]

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

  const influencerPages = influencerTypes.map((slug) => ({
    url: `${baseUrl}/influencers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const toolPages = tools.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const guidePages = guides.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const newsPages = news.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const calculatorPages = calculators.map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...influencerPages, ...toolPages, ...guidePages, ...newsPages, ...calculatorPages]
}
