"use client"

import { useState } from "react"
import { calculatorsMeta } from "@/lib/data/calculators"
import { calculateEngagementRate, classifyEngagement } from "@/lib/calculators"
import { CalculatorPageLayout } from "@/components/layouts/calculator-page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const meta = calculatorsMeta.find((c) => c.slug === "engagement-rate")!

function EngagementRateCalculator() {
  const [likes, setLikes] = useState("")
  const [comments, setComments] = useState("")
  const [shares, setShares] = useState("")
  const [followers, setFollowers] = useState("")
  const [result, setResult] = useState<{ rate: number; classification: string } | null>(null)

  const calculate = () => {
    const l = Number.parseInt(likes) || 0
    const c = Number.parseInt(comments) || 0
    const s = Number.parseInt(shares) || 0
    const f = Number.parseInt(followers) || 1

    const rate = calculateEngagementRate(l, c, s, f)
    const classification = classifyEngagement(rate)
    setResult({ rate, classification })
  }

  const getClassificationColor = (cls: string) => {
    switch (cls) {
      case "Excellent":
        return "bg-green-500"
      case "Good":
        return "bg-blue-500"
      case "Average":
        return "bg-yellow-500"
      default:
        return "bg-red-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="likes">Total Likes</Label>
          <Input
            id="likes"
            type="number"
            placeholder="e.g., 5000"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="comments">Total Comments</Label>
          <Input
            id="comments"
            type="number"
            placeholder="e.g., 250"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="shares">Total Shares</Label>
          <Input
            id="shares"
            type="number"
            placeholder="e.g., 100"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="followers">Total Followers</Label>
          <Input
            id="followers"
            type="number"
            placeholder="e.g., 50000"
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Calculate Engagement Rate
      </Button>

      {result && (
        <div className="mt-6 p-6 rounded-lg bg-muted/50 text-center">
          <div className="text-4xl font-bold text-primary mb-2">{result.rate.toFixed(2)}%</div>
          <Badge className={getClassificationColor(result.classification)}>{result.classification}</Badge>
          <p className="mt-3 text-sm text-muted-foreground">
            {result.classification === "Excellent" &&
              "Your engagement is outstanding! Brands highly value creators with this level of audience interaction."}
            {result.classification === "Good" && "Solid engagement rate. You're building a responsive community."}
            {result.classification === "Average" && "Room for improvement. Focus on creating more interactive content."}
            {result.classification === "Low" &&
              "Consider strategies to boost engagement like CTAs and interactive content."}
          </p>
        </div>
      )}
    </div>
  )
}

export default function EngagementRatePage() {
  return (
    <CalculatorPageLayout meta={meta}>
      <EngagementRateCalculator />
    </CalculatorPageLayout>
  )
}
