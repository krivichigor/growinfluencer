"use client"

import { useState } from "react"
import { calculatorsMeta } from "@/lib/data/calculators"
import { calculateHashtagReach } from "@/lib/calculators"
import { CalculatorPageLayout } from "@/components/layouts/calculator-page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const meta = calculatorsMeta.find((c) => c.slug === "hashtag-reach")!

function HashtagReachCalculator() {
  const [avgViews, setAvgViews] = useState("")
  const [hashtagCount, setHashtagCount] = useState("")
  const [niche, setNiche] = useState("general")
  const [result, setResult] = useState<{ estimatedReach: number; suggestedHashtags: number } | null>(null)

  const calculate = () => {
    const views = Number.parseInt(avgViews) || 0
    const count = Number.parseInt(hashtagCount) || 0

    const data = calculateHashtagReach(views, count)
    setResult(data)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="avgViews">Average Views per Post</Label>
          <Input
            id="avgViews"
            type="number"
            placeholder="e.g., 10000"
            value={avgViews}
            onChange={(e) => setAvgViews(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="hashtagCount">Current Hashtag Count</Label>
          <Input
            id="hashtagCount"
            type="number"
            placeholder="e.g., 15"
            value={hashtagCount}
            onChange={(e) => setHashtagCount(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="niche">Content Niche</Label>
          <Select value={niche} onValueChange={setNiche}>
            <SelectTrigger>
              <SelectValue placeholder="Select niche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Estimate Hashtag Reach
      </Button>

      {result && (
        <div className="mt-6 p-6 rounded-lg bg-muted/50">
          <div className="grid gap-4 sm:grid-cols-2 text-center">
            <div>
              <div className="text-sm text-muted-foreground">Estimated Additional Reach</div>
              <div className="text-3xl font-bold text-primary">+{result.estimatedReach.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Suggested Hashtag Count</div>
              <div className="text-3xl font-bold text-foreground">{result.suggestedHashtags}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            Use a mix of popular, niche, and branded hashtags. Avoid banned or overused hashtags.
          </p>
        </div>
      )}
    </div>
  )
}

export default function HashtagReachPage() {
  return (
    <CalculatorPageLayout meta={meta}>
      <HashtagReachCalculator />
    </CalculatorPageLayout>
  )
}
