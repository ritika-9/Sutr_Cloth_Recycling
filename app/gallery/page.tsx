"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface GalleryItem {
  id: string
  image: string
  title: string
  category: "cushion" | "tote" | "table" | "decor" | "before-after"
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "cushion-1",
    title: "Vintage Floral Cushion",
    category: "cushion",
    description: "Created from a 1970s floral dress",
  },
  {
    id: "2",
    image: "tote-1",
    title: "Denim Patchwork Tote",
    category: "tote",
    description: "Upcycled from old jeans and cotton scraps",
  },
  {
    id: "3",
    image: "before-after-1",
    title: "Shirt to Cushion",
    category: "before-after",
    description: "Before and after transformation",
  },
  { id: "4", image: "decor-1", title: "Fabric Wall Hanging", category: "decor", description: "Mixed fabric art piece" },
  {
    id: "5",
    image: "table-1",
    title: "Quilted Table Runner",
    category: "table",
    description: "From vintage bedsheet scraps",
  },
  {
    id: "6",
    image: "cushion-2",
    title: "Geometric Cushion",
    category: "cushion",
    description: "Hand-painted fabric design",
  },
  {
    id: "7",
    image: "tote-2",
    title: "Canvas Tote with Appliqué",
    category: "tote",
    description: "Embellished with fabric scraps",
  },
  {
    id: "8",
    image: "before-after-2",
    title: "Dress to Tote Bag",
    category: "before-after",
    description: "Complete transformation",
  },
  {
    id: "9",
    image: "decor-2",
    title: "Mixed Media Wall Art",
    category: "decor",
    description: "Layered fabric composition",
  },
  {
    id: "10",
    image: "table-2",
    title: "Boho Placemats Set",
    category: "table",
    description: "Colorful fabric combination",
  },
  {
    id: "11",
    image: "cushion-3",
    title: "Minimalist Linen Cushion",
    category: "cushion",
    description: "Neutral tones, modern design",
  },
  {
    id: "12",
    image: "before-after-3",
    title: "Sweater to Pillow",
    category: "before-after",
    description: "Cozy upcycled creation",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | GalleryItem["category"]>("all")

  const categories = [
    { id: "all", label: "All Items", count: galleryItems.length },
    { id: "cushion", label: "Cushion Covers", count: galleryItems.filter((i) => i.category === "cushion").length },
    { id: "tote", label: "Tote Bags", count: galleryItems.filter((i) => i.category === "tote").length },
    { id: "table", label: "Table Linens", count: galleryItems.filter((i) => i.category === "table").length },
    { id: "decor", label: "Decor & Art", count: galleryItems.filter((i) => i.category === "decor").length },
    {
      id: "before-after",
      label: "Before & After",
      count: galleryItems.filter((i) => i.category === "before-after").length,
    },
  ]

  const filtered =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Discover the beautiful creations our community has made through upcycling workshops. Each piece tells a
            story of transformation and creativity.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id as any)}
                className="rounded-full"
              >
                {cat.label} ({cat.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Layout */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square md:aspect-video lg:aspect-square">
                  <img
                    src={`/ceholder-svg-key-u2xls-key-.jpg?key=u2xls&key=${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Inspired? Create Your Own!</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every item in our gallery was created by someone just like you. Join our next workshop and start your
            upcycling journey.
          </p>
          <Link href="/workshops">
            <Button variant="secondary" size="lg" className="rounded-full gap-2">
              Book a Workshop <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
