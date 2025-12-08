export interface CalculatorMeta {
  slug: string
  name: string
  emoji: string
  description: string
  metaTitle: string
  metaDesc: string
  primaryKeyword: string
  secondaryKeywords: string[]
  formula: string
  formulaExplanation: string
  exampleCalculation: string
  faqs: { question: string; answer: string }[]
  relatedTools: string[]
  relatedCalculators: string[]
}

export const calculatorsMeta: CalculatorMeta[] = [
  {
    slug: "engagement-rate",
    name: "Engagement Rate Calculator",
    emoji: "📊",
    description:
      "Calculate your social media engagement rate to understand audience interaction and attract brand partnerships.",
    metaTitle: "Free Engagement Rate Calculator - Measure Social Media Success",
    metaDesc:
      "Calculate your engagement rate instantly. Enter your likes, comments, shares, and followers to measure performance and benchmark against industry standards.",
    primaryKeyword: "engagement rate calculator",
    secondaryKeywords: [
      "social media engagement",
      "instagram engagement",
      "tiktok engagement",
      "engagement formula",
      "calculate engagement",
    ],
    formula: "Engagement Rate = (Likes + Comments + Shares) / Followers × 100",
    formulaExplanation:
      "The engagement rate measures how actively your audience interacts with your content relative to your total follower count. A higher engagement rate indicates a more responsive audience, which is often more valuable to brands than raw follower numbers. The formula adds all engagement actions (likes, comments, and shares) and divides by your total followers, then multiplies by 100 to express as a percentage.",
    exampleCalculation:
      "If you have 50,000 followers and your recent post received 2,500 likes, 150 comments, and 100 shares: Engagement Rate = (2,500 + 150 + 100) / 50,000 × 100 = 5.5%. This is a 'Good' engagement rate, above the typical 3-6% benchmark.",
    faqs: [
      {
        question: "What is a good engagement rate?",
        answer:
          "Engagement rates above 6% are considered excellent, 3-6% is good, 1-3% is average, and below 1% is low. However, benchmarks vary by platform and follower count—micro-influencers typically have higher rates than mega-influencers.",
      },
      {
        question: "Should I include saves in engagement rate?",
        answer:
          "Yes, if your platform provides save data (like Instagram), you can include it. Saves are a strong engagement signal, indicating content worth returning to. Some calculators separate saves into a separate metric.",
      },
      {
        question: "Why does engagement rate matter?",
        answer:
          "Brands use engagement rate to evaluate influencer quality. A creator with high engagement shows their audience actually pays attention and responds, making partnerships more valuable than follower count alone.",
      },
      {
        question: "How often should I calculate engagement rate?",
        answer:
          "Calculate your average engagement rate monthly by averaging your last 10-20 posts. This gives a more accurate picture than single-post calculations. Track changes over time to see if your content strategy is improving.",
      },
      {
        question: "Does engagement rate vary by platform?",
        answer:
          "Yes, significantly. TikTok typically sees higher engagement rates due to algorithmic distribution. Instagram engagement has declined over time. LinkedIn has lower overall rates but with potentially higher-value professional engagement.",
      },
      {
        question: "Why is my engagement rate dropping?",
        answer:
          "Common causes include: posting less frequently, content not resonating with audience, algorithm changes, follower growth outpacing engagement, or buying fake followers (which don't engage).",
      },
    ],
    relatedTools: ["socialblade", "hootsuite"],
    relatedCalculators: ["collaboration-fee", "hashtag-reach"],
  },
  {
    slug: "collaboration-fee",
    name: "Collaboration Fee Estimator",
    emoji: "💰",
    description: "Estimate your worth for brand partnerships based on followers, engagement rate, and content niche.",
    metaTitle: "Collaboration Fee Calculator - Know Your Worth as an Influencer",
    metaDesc:
      "Calculate how much to charge for brand deals. Enter your stats to get estimated collaboration fees based on industry rates and your niche.",
    primaryKeyword: "influencer rate calculator",
    secondaryKeywords: [
      "collaboration fee",
      "brand deal pricing",
      "influencer pricing",
      "sponsored post rate",
      "how much to charge",
    ],
    formula: "Base Fee = Followers × (Engagement Rate / 100) × Niche Multiplier",
    formulaExplanation:
      "This formula calculates your base collaboration fee by combining your reach (followers), engagement quality (engagement rate), and market value of your niche. Different niches command different rates—finance and tech typically pay more than entertainment due to higher audience spending power. The result is a baseline; actual rates vary by deliverable complexity, usage rights, and exclusivity requirements.",
    exampleCalculation:
      "For a tech creator with 50,000 followers and 4.5% engagement: Base Fee = 50,000 × (4.5/100) × 0.18 = $405. With the ±20% range, you'd charge $324-$486 per post. Exclusivity, usage rights, or multiple deliverables would increase this.",
    faqs: [
      {
        question: "How accurate is this calculator?",
        answer:
          "This provides an estimated baseline. Actual rates vary by content type, usage rights, exclusivity, creator reputation, and brand budget. Use this as a starting point for negotiations, not a fixed rate.",
      },
      {
        question: "Should I charge more for video content?",
        answer:
          "Yes, video typically costs 2-3x more than static posts due to production time. Reels, TikToks, and YouTube integrations require more work and often deliver better results for brands.",
      },
      {
        question: "What if a brand offers less than my rate?",
        answer:
          "You can negotiate, offer reduced deliverables for their budget, or politely decline. Accepting below your rate sets precedent for future negotiations and undervalues your work.",
      },
      {
        question: "How do niche multipliers work?",
        answer:
          "Some niches have audiences with higher purchasing power or commercial intent. Finance and tech audiences are more valuable to advertisers, hence higher multipliers. Lifestyle and entertainment have broader appeal but lower per-viewer value.",
      },
      {
        question: "Should I charge per post or per campaign?",
        answer:
          "It depends on the scope. Single posts work for simple collaborations. For multi-post campaigns, offer package pricing (often with slight discount) that accounts for creative continuity and relationship building.",
      },
      {
        question: "When should I increase my rates?",
        answer:
          "Increase rates when: your engagement improves, follower count grows significantly, you've built a strong portfolio of past partnerships, or demand for collaborations exceeds your availability.",
      },
    ],
    relatedTools: ["socialblade", "hootsuite"],
    relatedCalculators: ["engagement-rate", "sponsored-post-roi"],
  },
  {
    slug: "sponsored-post-roi",
    name: "Sponsored Post ROI Calculator",
    emoji: "📈",
    description: "Calculate the return on investment for your sponsored content campaigns and brand partnerships.",
    metaTitle: "Sponsored Post ROI Calculator - Measure Campaign Profitability",
    metaDesc:
      "Calculate the ROI of influencer marketing campaigns. Enter costs, reach, conversion rate, and sale value to analyze campaign performance.",
    primaryKeyword: "influencer roi calculator",
    secondaryKeywords: [
      "sponsored post roi",
      "campaign roi",
      "influencer marketing roi",
      "brand deal roi",
      "marketing return",
    ],
    formula: "ROI = ((Conversions × Avg Sale Value) - Post Cost) / Post Cost × 100",
    formulaExplanation:
      "This formula measures the profitability of sponsored content by comparing the revenue generated to the cost of the campaign. First, we calculate expected conversions by multiplying reach by conversion rate. Then multiply conversions by average sale value to get revenue. Subtract the post cost and divide by post cost to get the ROI percentage. Positive ROI means the campaign is profitable.",
    exampleCalculation:
      "For a $500 post with 50,000 expected reach, 2% conversion rate, and $50 average sale: Conversions = 50,000 × 0.02 = 1,000. Revenue = 1,000 × $50 = $50,000. ROI = ($50,000 - $500) / $500 × 100 = 9,900%. This exceptional ROI (100%+ is considered good) shows a highly successful campaign.",
    faqs: [
      {
        question: "What's a good ROI for sponsored posts?",
        answer:
          "ROI above 100% (doubling the investment) is generally considered good. However, many successful campaigns aim for 200-500% ROI. Brand awareness campaigns may accept lower direct ROI for long-term benefits.",
      },
      {
        question: "How do I track conversions from sponsored posts?",
        answer:
          "Use unique discount codes, UTM parameters, affiliate links, or dedicated landing pages. Platform pixels can track actions. Ask brands for access to conversion data they track.",
      },
      {
        question: "What if my ROI is negative?",
        answer:
          "Negative ROI means the campaign lost money. This could indicate wrong creator-brand fit, poor content, targeting issues, or product-market problems. Analyze what went wrong before future campaigns.",
      },
      {
        question: "Should I share ROI data with brands?",
        answer:
          "Sharing positive ROI data builds trust and justifies future rate increases. Brands appreciate creators who understand business metrics. It positions you as a strategic partner, not just content creator.",
      },
      {
        question: "How does conversion rate vary by platform?",
        answer:
          "Conversion rates vary significantly. Instagram typically sees 0.5-2%, TikTok 1-3% (higher for viral content), YouTube 2-5% (due to longer attention), and email typically highest at 3-8%.",
      },
      {
        question: "What if brand doesn't share sale data?",
        answer:
          "Ask for engagement metrics and use industry conversion benchmarks to estimate. Track what you can (link clicks, code uses) and report on those metrics as proxies for business results.",
      },
    ],
    relatedTools: ["socialblade", "hootsuite"],
    relatedCalculators: ["collaboration-fee", "engagement-rate"],
  },
  {
    slug: "hashtag-reach",
    name: "Hashtag Reach Estimator",
    emoji: "#️⃣",
    description: "Estimate the additional reach potential from your hashtag strategy and optimize hashtag usage.",
    metaTitle: "Hashtag Reach Calculator - Optimize Your Hashtag Strategy",
    metaDesc:
      "Estimate how hashtags affect your content reach. Calculate optimal hashtag counts and understand how hashtag strategy impacts visibility.",
    primaryKeyword: "hashtag reach calculator",
    secondaryKeywords: [
      "hashtag strategy",
      "instagram hashtags",
      "tiktok hashtags",
      "hashtag optimization",
      "hashtag reach",
    ],
    formula: "Estimated Reach = Average Views × 0.03 × Hashtag Count (capped at 30% of avg views)",
    formulaExplanation:
      "This formula estimates the additional reach you might gain from hashtag usage. Each hashtag can potentially add about 3% to your reach through hashtag search and browse features. However, there are diminishing returns—the formula caps additional reach at 30% of your average views to reflect realistic hashtag impact. Actual results depend on hashtag relevance, competition, and timing.",
    exampleCalculation:
      "If your posts average 10,000 views and you use 15 hashtags: Additional Reach = 10,000 × 0.03 × 15 = 4,500 potential additional views. However, this is capped at 30% of average (3,000), so estimated additional reach is 3,000 views.",
    faqs: [
      {
        question: "How many hashtags should I use?",
        answer:
          "Optimal counts vary by platform. Instagram: 10-15 well-chosen hashtags. TikTok: 3-5 relevant hashtags. LinkedIn: 3-5 professional tags. More isn't always better—relevance matters more than quantity.",
      },
      {
        question: "Should I use popular or niche hashtags?",
        answer:
          "Use a mix. Popular hashtags have more competition but higher potential reach. Niche hashtags have less competition and more targeted audiences. A good strategy combines both levels.",
      },
      {
        question: "Why don't my hashtags seem to work?",
        answer:
          "Common issues: banned or restricted hashtags, irrelevant hashtags, overly competitive hashtags, or content that doesn't rank well in hashtag feeds. Focus on relevant, mid-size hashtags in your niche.",
      },
      {
        question: "Do hashtags matter on TikTok?",
        answer:
          "Yes, but less than Instagram. TikTok's algorithm primarily uses content signals. Hashtags help with categorization and search. Use relevant hashtags but focus more on content quality.",
      },
      {
        question: "Should I change hashtags for each post?",
        answer:
          "Yes, vary your hashtags based on content topic. Using identical hashtags repeatedly can appear spammy and may limit reach. Have sets of hashtags for different content categories.",
      },
      {
        question: "What are banned hashtags?",
        answer:
          "Platforms restrict hashtags associated with guideline violations. Using banned hashtags can limit your content's visibility. Check if hashtags are functional by searching them before use.",
      },
    ],
    relatedTools: ["hootsuite", "socialblade"],
    relatedCalculators: ["engagement-rate", "content-calendar"],
  },
  {
    slug: "content-calendar",
    name: "Content Calendar Generator",
    emoji: "📅",
    description: "Generate a personalized weekly content plan based on your niche and posting frequency goals.",
    metaTitle: "Content Calendar Generator - Weekly Content Plan Creator",
    metaDesc:
      "Generate a customized content calendar based on your niche and posting frequency. Get content type recommendations and posting schedules.",
    primaryKeyword: "content calendar generator",
    secondaryKeywords: [
      "content planner",
      "social media calendar",
      "posting schedule",
      "content schedule",
      "content planning tool",
    ],
    formula: "Content distribution across posting days based on niche content types",
    formulaExplanation:
      "This generator creates a balanced content schedule based on your niche and desired posting frequency. It distributes different content types (tutorials, reviews, engagement posts, etc.) across your posting days to maintain variety while staying relevant to your niche. The algorithm ensures you're not posting the same content type back-to-back and balances educational, entertaining, and engagement-driving content.",
    exampleCalculation:
      "For a Tech niche creator posting 5 days per week, the generator might create: Monday (Tutorial), Wednesday (Product Review), Thursday (Tips & Tricks), Friday (News Update), Sunday (Q&A). This provides variety while maintaining niche relevance.",
    faqs: [
      {
        question: "How far ahead should I plan content?",
        answer:
          "Plan 2-4 weeks ahead for main content while leaving room for trending topics. Having a content buffer reduces stress and ensures consistency even during busy periods.",
      },
      {
        question: "Should I post the same days every week?",
        answer:
          "Consistency helps your audience know when to expect content. However, test different days initially to find when your audience is most engaged, then establish your regular schedule.",
      },
      {
        question: "How do I balance trending content with planned content?",
        answer:
          "Keep about 20-30% of your schedule flexible for trends. When a relevant trend emerges, swap it with a planned piece (which can be rescheduled) to stay timely.",
      },
      {
        question: "What if I miss a planned posting day?",
        answer:
          "Don't panic or double-post. Either skip it or post the next scheduled day. Consistency matters more long-term than hitting every single day perfectly.",
      },
      {
        question: "Should my content calendar include engagement time?",
        answer:
          "Yes, schedule time to respond to comments and engage with your community. Posting is only half the job—engagement builds loyal audiences.",
      },
      {
        question: "How do I avoid content calendar burnout?",
        answer:
          "Be realistic about your capacity, batch create content, have evergreen content ready, and schedule breaks. Quality is more important than hitting ambitious posting frequencies.",
      },
    ],
    relatedTools: ["hootsuite", "notion-for-creators", "canva"],
    relatedCalculators: ["engagement-rate", "hashtag-reach"],
  },
]
