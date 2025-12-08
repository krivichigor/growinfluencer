// Calculator logic for all influencer calculators

export interface EngagementResult {
  rate: number
  classification: "excellent" | "good" | "average" | "low"
  description: string
}

export function calculateEngagementRate(
  followers: number,
  likes: number,
  comments: number,
  shares: number,
): EngagementResult {
  if (followers <= 0) {
    return { rate: 0, classification: "low", description: "Invalid follower count" }
  }

  const totalEngagement = likes + comments + shares
  const rate = (totalEngagement / followers) * 100

  let classification: EngagementResult["classification"]
  let description: string

  if (rate > 6) {
    classification = "excellent"
    description =
      "Your engagement rate is exceptional! You have a highly engaged audience that actively interacts with your content. This makes you very attractive for brand collaborations."
  } else if (rate >= 3) {
    classification = "good"
    description =
      "Your engagement rate is above average. Your audience is responsive and engaged. Continue creating quality content to maintain and grow this engagement."
  } else if (rate >= 1) {
    classification = "average"
    description =
      "Your engagement rate is typical for your follower count. There is room for improvement through more interactive content, better posting times, and audience engagement strategies."
  } else {
    classification = "low"
    description =
      "Your engagement rate is below average. Focus on creating more engaging content, using calls-to-action, responding to comments, and posting at optimal times for your audience."
  }

  return { rate: Math.round(rate * 100) / 100, classification, description }
}

export function classifyEngagement(rate: number): string {
  if (rate > 6) return "Excellent"
  if (rate >= 3) return "Good"
  if (rate >= 1) return "Average"
  return "Low"
}

export function calculateCollaborationFee(
  followers: number,
  engagementRate: number,
  multiplier: number,
): { min: number; max: number } {
  const baseFee = followers * (engagementRate / 100) * multiplier
  return {
    min: Math.round(baseFee * 0.8),
    max: Math.round(baseFee * 1.2),
  }
}

export interface HashtagReachResult {
  estimatedReach: number
  suggestedHashtagCount: number
  recommendation: string
}

export function calculateHashtagReachV2(averageViews: number, hashtagCount: number, niche: string): HashtagReachResult {
  const baseReachMultiplier = 0.03
  let additionalReach = averageViews * baseReachMultiplier * hashtagCount

  // Cap at 30% of average views
  const maxAdditionalReach = averageViews * 0.3
  additionalReach = Math.min(additionalReach, maxAdditionalReach)

  // Optimal hashtag count varies by platform and niche
  let optimalHashtags: number
  let recommendation: string

  if (hashtagCount < 5) {
    optimalHashtags = 10
    recommendation =
      "You are using too few hashtags. Consider increasing to 10-15 relevant hashtags to maximize discoverability."
  } else if (hashtagCount > 25) {
    optimalHashtags = 15
    recommendation =
      "You may be using too many hashtags, which can appear spammy. Focus on 10-15 highly relevant hashtags for better results."
  } else if (hashtagCount >= 10 && hashtagCount <= 15) {
    optimalHashtags = hashtagCount
    recommendation =
      "Your hashtag count is optimal! Focus on using a mix of popular and niche-specific hashtags for best results."
  } else {
    optimalHashtags = 12
    recommendation =
      "Your hashtag strategy is decent. Experiment with 10-15 hashtags mixing trending and niche-specific tags."
  }

  return {
    estimatedReach: Math.round(additionalReach),
    suggestedHashtagCount: optimalHashtags,
    recommendation,
  }
}

export function calculateHashtagReach(
  avgViews: number,
  hashtagCount: number,
): { estimatedReach: number; suggestedHashtags: number } {
  const baseReachMultiplier = 0.03
  let additionalReach = avgViews * baseReachMultiplier * hashtagCount

  // Cap at 30% of average views
  const maxAdditionalReach = avgViews * 0.3
  additionalReach = Math.min(additionalReach, maxAdditionalReach)

  // Optimal hashtag count
  let suggestedHashtags: number
  if (hashtagCount < 5) {
    suggestedHashtags = 10
  } else if (hashtagCount > 25) {
    suggestedHashtags = 15
  } else if (hashtagCount >= 10 && hashtagCount <= 15) {
    suggestedHashtags = hashtagCount
  } else {
    suggestedHashtags = 12
  }

  return {
    estimatedReach: Math.round(additionalReach),
    suggestedHashtags,
  }
}

export interface SponsoredPostROIResult {
  conversions: number
  revenue: number
  roi: number
  profit: number
  isPositiveROI: boolean
  analysis: string
}

export function calculateSponsoredPostROI(
  postCost: number,
  expectedReach: number,
  conversionRate: number,
  avgSaleValue: number,
): SponsoredPostROIResult {
  const conversions = expectedReach * (conversionRate / 100)
  const revenue = conversions * avgSaleValue
  const profit = revenue - postCost
  const roi = postCost > 0 ? ((revenue - postCost) / postCost) * 100 : 0

  let analysis: string
  if (roi > 200) {
    analysis =
      "Excellent ROI! This influencer campaign is highly profitable. Consider scaling up the collaboration or negotiating long-term partnerships."
  } else if (roi > 100) {
    analysis = "Strong ROI! Your investment is more than doubling. This is a successful campaign worth continuing."
  } else if (roi > 50) {
    analysis =
      "Good ROI! You are seeing solid returns on your investment. Consider optimizing the content or targeting for even better results."
  } else if (roi > 0) {
    analysis =
      "Positive ROI but there is room for improvement. Review the content, call-to-action, and targeting to optimize performance."
  } else {
    analysis =
      "Negative ROI. This campaign is not profitable at current metrics. Consider negotiating a lower fee, improving conversion rates, or finding better-matched influencers."
  }

  return {
    conversions: Math.round(conversions * 100) / 100,
    revenue: Math.round(revenue * 100) / 100,
    roi: Math.round(roi * 100) / 100,
    profit: Math.round(profit * 100) / 100,
    isPositiveROI: roi > 0,
    analysis,
  }
}

export interface ContentDay {
  day: string
  contentType: string
  description: string
}

export function generateContentCalendar(niche: string, frequency: number): ContentDay[] {
  const contentTypes: Record<string, string[]> = {
    tech: ["Tutorial", "Product Review", "News Update", "Tips & Tricks", "Comparison", "Q&A", "Behind the Scenes"],
    beauty: [
      "Makeup Tutorial",
      "Product Review",
      "Skincare Routine",
      "Haul",
      "Get Ready With Me",
      "Q&A",
      "Transformation",
    ],
    fitness: ["Workout", "Nutrition Tips", "Progress Update", "Exercise Demo", "Motivation", "Q&A", "Challenge"],
    gaming: ["Gameplay", "Review", "Tips Guide", "Highlights", "Reaction", "News", "Challenge"],
    lifestyle: ["Day in Life", "Tips", "Favorites", "Story Time", "Home Tour", "Q&A", "Collab"],
    food: ["Recipe", "Review", "Cooking Tutorial", "What I Eat", "Kitchen Tips", "Challenge", "Q&A"],
    travel: ["Vlog", "Destination Guide", "Tips", "Hotel Review", "Culture", "Packing", "Q&A"],
    finance: ["Investing Tips", "Saving Hacks", "Market Update", "Review", "Education", "Budget", "Q&A"],
  }

  const types = contentTypes[niche] || contentTypes.lifestyle
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const result: ContentDay[] = []

  const interval = Math.max(1, Math.floor(7 / frequency))
  for (let i = 0; i < frequency && i < 7; i++) {
    const dayIndex = Math.min((i * interval) % 7, 6)
    result.push({
      day: days[dayIndex],
      contentType: types[i % types.length],
      description: `Create ${types[i % types.length].toLowerCase()} content for your ${niche} audience`,
    })
  }

  return result.sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day))
}
