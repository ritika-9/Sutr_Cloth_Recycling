import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Leaf, Users, Sparkles, Recycle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center overflow-hidden pt-20">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
                <p className="text-sm font-medium text-accent">Welcome to Circular Fashion</p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Turn Old Clothes Into Beautiful New Creations.
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Join our community-driven upcycling workshops. Transform unused garments into premium handcrafted items
                while reducing fashion waste and connecting with like-minded creators.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/workshops">
                  <Button size="lg" className="rounded-full w-full sm:w-auto gap-2">
                    Book a Workshop <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/story">
                  <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto bg-transparent">
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-96 lg:h-full min-h-96 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="/sustainable-fashion-workshop-upcycled-clothing-cre.jpg"
                alt="Upcycling workshop with vibrant fabrics"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Upcycling Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Upcycling?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast fashion generates 92 million tons of textile waste annually. We're changing that through creative,
              community-driven sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Reduce fashion waste and carbon footprint by giving clothes a second life.",
              },
              {
                icon: Sparkles,
                title: "Creativity",
                description: "Express your artistic side and create unique pieces that tell your story.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Connect with eco-conscious creators and build meaningful relationships.",
              },
              {
                icon: Recycle,
                title: "Zero Waste",
                description: "Transform materials you already own into premium handcrafted creations.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workshop Gallery Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Workshop Moments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our community creates in our workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { query: "colorful upcycled cushion covers workshop" },
              { query: "handmade tote bags fabric art" },
              { query: "sustainable fashion upcycled items display" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={`/.jpg?height=300&width=400&query=${item.query}`}
                  alt={item.query}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="rounded-full gap-2 bg-transparent">
                View Full Gallery <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">What Our Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Workshop Participant",
                quote:
                  "I came skeptical about my sewing skills, but left with a beautiful cushion cover and newfound confidence. The instructors were patient and inspiring!",
              },
              {
                name: "Marcus Williams",
                role: "Regular Attendee",
                quote:
                  "This community has transformed how I think about fashion. Every workshop feels like a creative celebration, not just a class.",
              },
              {
                name: "Amara Okonkwo",
                role: "Workshop Enthusiast",
                quote:
                  "The best part? Knowing my old clothes are becoming beautiful, useful items instead of ending up in a landfill. Sustainability feels tangible here.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-border rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-10 font-medium">Partner Cafés & Restaurants</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {["Brew & Bean", "The Green Café", "Artisan Kitchen", "Harvest House"].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-muted-foreground text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Wardrobe?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join a workshop today and discover how creativity and sustainability can go hand in hand.
          </p>
          <Link href="/workshops">
            <Button variant="secondary" size="lg" className="rounded-full gap-2">
              Book Your First Workshop <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted/50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6">
              Get updates on new workshops, community stories, and sustainability tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-background border border-border focus:border-primary focus:outline-none text-foreground"
              />
              <Button className="rounded-full w-full sm:w-auto">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
