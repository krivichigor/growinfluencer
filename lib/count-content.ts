import { influencerTypes } from "./data/influencer-types"
import { guides } from "./data/guides"
import { newsArticles } from "./data/news"
import { tools } from "./data/tools"
import { calculatorsMeta } from "./data/calculators"

/**
 * Counts content items by reading from data files at build time.
 * This runs during the build process and has no runtime overhead.
 * All data is sourced from lib/data/* files which are the single source of truth.
 */
export function countContent() {
  return {
    tools: tools.length,
    guides: guides.length,
    calculators: calculatorsMeta.length,
    influencers: influencerTypes.length,
    news: newsArticles.length,
  }
}

/**
 * Formats count for display (e.g., "5 tools", "Latest" for news)
 */
export function formatCount(type: keyof ReturnType<typeof countContent>, count: number): string {
  if (type === "news") return "Latest"
  if (count === 0) return "Coming soon"
  if (count === 1) return `1 ${type.slice(0, -1)}` // singular
  return `${count} ${type}` // plural
}

/**
 * Gets all content stats at once
 */
export function getContentStats() {
  const counts = countContent()

  return {
    creatorTypes: counts.influencers,
    toolsReviewed: counts.tools,
    guides: counts.guides,
    calculators: counts.calculators,
  }
}
