"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WorkshopCard from "@/components/workshop-card"
import { upcomingWorkshops, pastWorkshops } from "@/lib/workshop-data"
import { Button } from "@/components/ui/button"

export default function WorkshopsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [selectedLevel, setSelectedLevel] = useState<"All" | "Beginner" | "Intermediate" | "All Levels">("All")

  const filteredUpcoming =
    selectedLevel === "All" ? upcomingWorkshops : upcomingWorkshops.filter((w) => w.level === selectedLevel)

  const filteredPast = selectedLevel === "All" ? pastWorkshops : pastWorkshops.filter((w) => w.level === selectedLevel)

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Workshops
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Join our community and transform old clothes into beautiful handcrafted creations. Whether you're a complete
            beginner or an experienced maker, we have something for you.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Tabs */}
            <div className="flex gap-2">
              <Button
                variant={activeTab === "upcoming" ? "default" : "outline"}
                onClick={() => setActiveTab("upcoming")}
                className="rounded-full"
              >
                Upcoming ({upcomingWorkshops.length})
              </Button>
              <Button
                variant={activeTab === "past" ? "default" : "outline"}
                onClick={() => setActiveTab("past")}
                className="rounded-full"
              >
                Past Events ({pastWorkshops.length})
              </Button>
            </div>

            {/* Level Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {["All", "Beginner", "Intermediate", "All Levels"].map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  onClick={() => setSelectedLevel(level as any)}
                  size="sm"
                  className="rounded-full"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "upcoming" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpcoming.map((workshop, index) => (
                  <div key={workshop.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <WorkshopCard workshop={workshop} />
                  </div>
                ))}
              </div>
              {filteredUpcoming.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No workshops found for the selected level.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "past" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPast.map((workshop, index) => (
                  <div key={workshop.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <WorkshopCard workshop={workshop} isPast={true} />
                  </div>
                ))}
              </div>
              {filteredPast.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No past events found.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
