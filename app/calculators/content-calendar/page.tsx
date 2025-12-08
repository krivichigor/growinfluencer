"use client"

import { useState } from "react"
import { calculatorsMeta } from "@/lib/data/calculators"
import { generateContentCalendar, type ContentDay } from "@/lib/calculators"
import { CalculatorPageLayout } from "@/components/layouts/calculator-page-layout"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const meta = calculatorsMeta.find((c) => c.slug === "content-calendar")!

const niches = ["Tech", "Beauty", "Fitness", "Gaming", "Lifestyle", "Food", "Travel", "Finance"]

function ContentCalendarCalculator() {
  const [niche, setNiche] = useState("tech")
  const [frequency, setFrequency] = useState("5")
  const [result, setResult] = useState<ContentDay[] | null>(null)

  const generate = () => {
    const calendar = generateContentCalendar(niche, Number.parseInt(frequency))
    setResult(calendar)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="niche">Your Niche</Label>
          <Select value={niche} onValueChange={setNiche}>
            <SelectTrigger>
              <SelectValue placeholder="Select niche" />
            </SelectTrigger>
            <SelectContent>
              {niches.map((n) => (
                <SelectItem key={n.toLowerCase()} value={n.toLowerCase()}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="frequency">Posts per Week</Label>
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <SelectItem key={n} value={n.toString()}>
                  {n} {n === 1 ? "day" : "days"}/week
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={generate} className="w-full">
        Generate Content Calendar
      </Button>

      {result && (
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold text-lg">Your Weekly Content Plan</h3>
          {result.map((day) => (
            <Card key={day.day}>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{day.day}</div>
                    <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                  </div>
                  <Badge variant="secondary">{day.contentType}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ContentCalendarPage() {
  return (
    <CalculatorPageLayout meta={meta}>
      <ContentCalendarCalculator />
    </CalculatorPageLayout>
  )
}
