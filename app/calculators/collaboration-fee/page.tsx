"use client"

import { useState } from "react"
import { calculatorsMeta } from "@/lib/data/calculators"
import { calculateCollaborationFee } from "@/lib/calculators"
import { CalculatorPageLayout } from "@/components/layouts/calculator-page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const meta = calculatorsMeta.find((c) => c.slug === "collaboration-fee")!

const niches = [
  { value: "beauty", label: "Beauty", multiplier: 0.15 },
  { value: "tech", label: "Tech", multiplier: 0.18 },
  { value: "fitness", label: "Fitness", multiplier: 0.12 },
  { value: "lifestyle", label: "Lifestyle", multiplier: 0.1 },
  { value: "gaming", label: "Gaming", multiplier: 0.08 },
]

function CollaborationFeeCalculator() {
  const [followers, setFollowers] = useState("")
  const [engagement, setEngagement] = useState("")
  const [niche, setNiche] = useState("lifestyle")
  const [result, setResult] = useState<{ min: number; max: number } | null>(null)

  const calculate = () => {
    const f = Number.parseInt(followers) || 0
    const e = Number.parseFloat(engagement) || 0
    const nicheData = niches.find((n) => n.value === niche)!

    const fee = calculateCollaborationFee(f, e, nicheData.multiplier)
    setResult({ min: fee.min, max: fee.max })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
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
        <div>
          <Label htmlFor="engagement">Engagement Rate (%)</Label>
          <Input
            id="engagement"
            type="number"
            step="0.1"
            placeholder="e.g., 4.5"
            value={engagement}
            onChange={(e) => setEngagement(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="niche">Niche</Label>
          <Select value={niche} onValueChange={setNiche}>
            <SelectTrigger>
              <SelectValue placeholder="Select your niche" />
            </SelectTrigger>
            <SelectContent>
              {niches.map((n) => (
                <SelectItem key={n.value} value={n.value}>
                  {n.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Estimate Collaboration Fee
      </Button>

      {result && (
        <div className="mt-6 p-6 rounded-lg bg-muted/50 text-center">
          <div className="text-sm text-muted-foreground mb-2">Estimated Fee Range</div>
          <div className="text-4xl font-bold text-primary">
            ${result.min.toLocaleString()} - ${result.max.toLocaleString()}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            This estimate is based on industry averages. Actual rates may vary based on content type, exclusivity, usage
            rights, and negotiation skills.
          </p>
        </div>
      )}
    </div>
  )
}

export default function CollaborationFeePage() {
  return (
    <CalculatorPageLayout meta={meta}>
      <CollaborationFeeCalculator />
    </CalculatorPageLayout>
  )
}
