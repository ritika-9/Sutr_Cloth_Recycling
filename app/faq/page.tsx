"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: "workshops" | "materials" | "experience" | "general"
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "workshops",
    question: "What should I bring to a workshop?",
    answer:
      "Each workshop includes a list of recommended items to bring. Typically, you'll want to bring any old or unused clothes you'd like to transform. We provide sewing materials like thread, needles, and scissors, but feel free to bring your own if you have preferences. Most importantly, bring enthusiasm and creativity!",
  },
  {
    id: "2",
    category: "workshops",
    question: "How long does each workshop last?",
    answer:
      "Most of our workshops run for 3 hours. This gives us enough time to learn techniques, set up your project, and create something beautiful. Some special events or advanced workshops may vary in length, so check the workshop details page.",
  },
  {
    id: "3",
    category: "experience",
    question: "Are the workshops beginner-friendly?",
    answer:
      "We offer workshops at all skill levels, from complete beginner to advanced. All of our instructors are experienced and patient. They'll guide you through every step, whether you've never picked up a needle before or you're an experienced crafter. No prior experience necessary!",
  },
  {
    id: "4",
    category: "materials",
    question: "What items can I make in a workshop?",
    answer:
      "We offer workshops for creating cushion covers, tote bags, table runners, placemats, fabric wall hangings, and other decorative items. Each workshop is designed to teach specific techniques while creating a practical or beautiful end product. Check our Workshops page to see what's currently available.",
  },
  {
    id: "5",
    category: "materials",
    question: "Are materials provided?",
    answer:
      "Yes! All basic materials like thread, needles, and scissors are provided. For specialized materials, it depends on the workshop. For example, fabric paint workshops include the paints and brushes. Always check the workshop details for a complete list of what's provided and what you should bring.",
  },
  {
    id: "6",
    category: "workshops",
    question: "What is the refund or cancellation policy?",
    answer:
      "You can cancel or transfer your registration up to 7 days before the workshop for a full refund. Cancellations made within 7 days of the workshop are non-refundable but can be transferred to another person or workshop. In case of inclement weather or unforeseen circumstances, we'll reschedule or offer a full refund.",
  },
  {
    id: "7",
    category: "general",
    question: "Do I need to have my own sewing skills?",
    answer:
      "Not at all! All our workshops are designed for people of all skill levels. Our instructors teach basic sewing techniques as part of the workshop. We start from the basics and build from there. Many of our most enthusiastic participants had never sewn before their first workshop.",
  },
  {
    id: "8",
    category: "materials",
    question: "Can I bring my own fabrics or items?",
    answer:
      "We encourage you to bring any fabrics or old clothing items you'd like to work with. Bring that favorite old sweater, pile of fabric scraps, or treasured vintage dress you want to transform. Our instructors will help you adapt the project to work with your materials.",
  },
  {
    id: "9",
    category: "general",
    question: "How do I register for a workshop?",
    answer:
      "Visit our Workshops page and click \"Register Now\" on the workshop you're interested in. Fill out your information and complete the registration. You'll receive a confirmation email with all the details about the workshop, what to bring, and the exact location.",
  },
  {
    id: "10",
    category: "general",
    question: "Are workshops available on weekends?",
    answer:
      "Yes! We offer workshops throughout the week, including evenings and weekends to accommodate different schedules. Check our Workshops page to filter by date and find times that work for you.",
  },
  {
    id: "11",
    category: "materials",
    question: "What happens to items made in workshops?",
    answer:
      "You keep everything you create! All finished (or in-progress) items are yours to take home. This is your chance to create something beautiful that reflects your creativity and commitment to sustainability.",
  },
  {
    id: "12",
    category: "workshops",
    question: "Can I bring a friend?",
    answer:
      "Of course! We love community participation. Bring friends, family, or colleagues. Group bookings are available—if you have a group of 5 or more, contact us at hello@reweave.com to discuss group rates or special arrangements.",
  },
]

const categories = [
  { id: "all", label: "All Questions" },
  { id: "workshops", label: "Workshops" },
  { id: "materials", label: "Materials" },
  { id: "experience", label: "Experience" },
  { id: "general", label: "General" },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | FAQItem["category"]>("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = selectedCategory === "all" ? faqItems : faqItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Find answers to common questions about our workshops, materials, and the upcycling experience.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filtered.map((item, index) => (
              <Card
                key={item.id}
                className="border-border rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="px-6 pb-6 border-t border-border animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No questions in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Didn't find your answer?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with our team and we'll be happy to help you.
          </p>
          <a
            href="mailto:hello@reweave.com"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
