"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { upcomingWorkshops, pastWorkshops } from "@/lib/workshop-data"
import { useParams } from "next/navigation"
import { Calendar, Clock, MapPin, Users, Package } from "lucide-react"
import Link from "next/link"

export default function WorkshopDetailPage() {
  const params = useParams()
  const workshopId = params.id as string

  const workshop = [...upcomingWorkshops, ...pastWorkshops].find((w) => w.id === workshopId)
  const [isRegistered, setIsRegistered] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  if (!workshop) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Workshop not found</h1>
            <Link href="/workshops">
              <Button className="rounded-full">Back to Workshops</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const spotsLeft = workshop.capacity - workshop.registered

  const handleRegister = () => {
    setIsRegistered(true)
    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 3000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-background via-muted to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/workshops" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Workshops
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{workshop.title}</h1>
            <p className="text-lg text-muted-foreground">{workshop.description}</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Image */}
                <div className="mb-8 rounded-3xl overflow-hidden h-96">
                  <img
                    src={`/generic-placeholder-graphic.png?key=${workshop.image}`}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <Card className="p-8 border-border rounded-2xl mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Workshop Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="text-accent" size={20} />
                        <span className="font-medium text-foreground">Date</span>
                      </div>
                      <p className="text-muted-foreground ml-8">{workshop.date}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="text-accent" size={20} />
                        <span className="font-medium text-foreground">Time</span>
                      </div>
                      <p className="text-muted-foreground ml-8">{workshop.time}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="text-accent" size={20} />
                        <span className="font-medium text-foreground">Location</span>
                      </div>
                      <p className="text-muted-foreground ml-8">{workshop.café}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="text-accent" size={20} />
                        <span className="font-medium text-foreground">Participants</span>
                      </div>
                      <p className="text-muted-foreground ml-8">
                        {workshop.registered}/{workshop.capacity}
                      </p>
                    </div>
                  </div>

                  {/* Materials */}
                  {workshop.materials.length > 0 && (
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Package className="text-accent" size={20} />
                        <span className="font-medium text-foreground">What to Bring</span>
                      </div>
                      <ul className="ml-8 space-y-2">
                        {workshop.materials.map((material, index) => (
                          <li key={index} className="text-muted-foreground">
                            • {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>

                {/* Description */}
                <Card className="p-8 border-border rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">About This Workshop</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{workshop.description}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    All materials are provided, but feel free to bring any special fabrics or items you'd like to work
                    with. Our instructors will guide you through every step, whether you're a complete beginner or
                    experienced with sewing.
                  </p>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-8 border-border rounded-2xl sticky top-20">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Workshop Price</p>
                    <p className="text-4xl font-bold text-foreground">
                      {workshop.price > 0 ? `$${workshop.price}` : "Free"}
                    </p>
                  </div>

                  <div className="mb-6 p-4 bg-accent/10 rounded-lg">
                    <p className="font-semibold text-foreground mb-1">Spots Available</p>
                    <p className="text-2xl font-bold text-accent">
                      {spotsLeft}/{workshop.capacity}
                    </p>
                  </div>

                  {!workshop.isPast && (
                    <>
                      <Button
                        onClick={handleRegister}
                        disabled={spotsLeft === 0 || isRegistered}
                        size="lg"
                        className="w-full rounded-full mb-3"
                      >
                        {isRegistered ? "✓ Registered!" : spotsLeft === 0 ? "Sold Out" : "Register Now"}
                      </Button>

                      {showConfirmation && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm text-center animate-fade-in">
                          ✓ Registration confirmed! Check your email for details.
                        </div>
                      )}
                    </>
                  )}

                  {workshop.isPast && (
                    <Button disabled size="lg" className="w-full rounded-full opacity-50">
                      Past Event
                    </Button>
                  )}

                  <Link href="/workshops">
                    <Button variant="outline" size="lg" className="w-full rounded-full mt-3 bg-transparent">
                      Browse More Workshops
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
