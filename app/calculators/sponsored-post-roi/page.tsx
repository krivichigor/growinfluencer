"use client"

import { useState } from "react"
import { calculatorsMeta } from "@/lib/data/calculators"
import { calculateSponsoredPostROI } from "@/lib/calculators"
import { CalculatorPageLayout } from "@/components/layouts/calculator-page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const meta = calculatorsMeta.find((c) => c.slug === "sponsored-post-roi")!

function SponsoredPostROICalculator() {
  const [postCost, setPostCost] = useState("")
  const [expectedReach, setExpectedReach] = useState("")
  const [conversionRate, setConversionRate] = useState("")
  const [avgSaleValue, setAvgSaleValue] = useState("")
  const [result, setResult] = useState<{ conversions: number; revenue: number; roi: number } | null>(null)

  const calculate = () => {
    const cost = Number.parseFloat(postCost) || 0
    const reach = Number.parseInt(expectedReach) || 0
    const rate = Number.parseFloat(conversionRate) || 0
    const sale = Number.parseFloat(avgSaleValue) || 0

    const data = calculateSponsoredPostROI(cost, reach, rate, sale)
    setResult(data)
  }

  const getROIStatus = (roi: number) => {
    if (roi > 100) return { text: "Excellent ROI", color: "bg-green-500" }
    if (roi > 0) return { text: "Positive ROI", color: "bg-blue-500" }
    return { text: "Negative ROI", color: "bg-red-500" }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="postCost">Post Cost ($)</Label>
          <Input
            id="postCost"
            type="number"
            placeholder="e.g., 500"
            value={postCost}
            onChange={(e) => setPostCost(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="expectedReach">Expected Reach</Label>
          <Input
            id="expectedReach"
            type="number"
            placeholder="e.g., 50000"
            value={expectedReach}
            onChange={(e) => setExpectedReach(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="conversionRate">Conversion Rate (%)</Label>
          <Input
            id="conversionRate"
            type="number"
            step="0.1"
            placeholder="e.g., 2.5"
            value={conversionRate}
            onChange={(e) => setConversionRate(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="avgSaleValue">Avg Sale Value ($)</Label>
          <Input
            id="avgSaleValue"
            type="number"
            placeholder="e.g., 50"
            value={avgSaleValue}
            onChange={(e) => setAvgSaleValue(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Calculate ROI
      </Button>

      {result && (
        <div className="mt-6 p-6 rounded-lg bg-muted/50">
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div>
              <div className="text-sm text-muted-foreground">Expected Conversions</div>
              <div className="text-2xl font-bold text-foreground">{result.conversions.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Expected Revenue</div>
              <div className="text-2xl font-bold text-foreground">${result.revenue.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">ROI</div>
              <div className="text-2xl font-bold text-primary">{result.roi.toFixed(1)}%</div>
              <Badge className={getROIStatus(result.roi).color}>{getROIStatus(result.roi).text}</Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SponsoredPostROIPage() {
  return (
    <CalculatorPageLayout meta={meta}>
      <SponsoredPostROICalculator />
    </CalculatorPageLayout>
  )
}
