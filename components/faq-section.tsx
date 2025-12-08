"use client"

import { useState } from "react"
import { t } from "@/lib/i18n"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export function FAQSection({ faqs, title }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-foreground">{title || t("common.faq")}</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl border border-border bg-card overflow-hidden">
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-foreground">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-border px-6 py-4">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
