import fs from "fs"
import path from "path"
import { countContent, formatCount, getContentStats } from "../lib/count-content"

/**
 * Script to update homepage-content.json with actual content counts
 * Run this during build or manually with: npx tsx scripts/update-content-stats.ts
 */
function updateContentStats() {
  const jsonPath = path.join(process.cwd(), "lib", "homepage-content.json")
  const content = JSON.parse(fs.readFileSync(jsonPath, "utf-8"))

  const counts = countContent()
  const stats = getContentStats()

  // Update quickLinks counts
  content.quickLinks = content.quickLinks.map((link: any) => {
    if (link.href === "/influencers" && counts.influencers > 0) {
      link.count = formatCount("influencers", counts.influencers)
    } else if (link.href === "/tools" && counts.tools > 0) {
      link.count = formatCount("tools", counts.tools)
    } else if (link.href === "/guides" && counts.guides > 0) {
      link.count = formatCount("guides", counts.guides)
    } else if (link.href === "/calculators" && counts.calculators > 0) {
      link.count = formatCount("calculators", counts.calculators)
    } else if (link.href === "/news") {
      link.count = "Latest"
    }
    return link
  })

  // Update stats section
  content.stats = [
    { value: stats.creatorTypes.toString(), label: "Creator Types" },
    { value: stats.toolsReviewed.toString(), label: "Tools Reviewed" },
    { value: stats.guides.toString(), label: "Guides" },
    { value: stats.calculators.toString(), label: "Calculators" },
  ]

  // Update section linkText
  if (content.sections.tools && counts.tools > 0) {
    content.sections.tools.linkText = `All ${counts.tools} tools`
  }

  // Write back to file
  fs.writeFileSync(jsonPath, JSON.stringify(content, null, 2))
  console.log("✅ Content stats updated successfully!")
  console.log("📊 Stats:", stats)
}

updateContentStats()
