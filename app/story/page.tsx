import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story - ReWeave Collective",
  description:
    "Discover the mission behind ReWeave Collective and how we're tackling fast fashion waste through creative community workshops.",
}

export default function StoryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted to-background overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-40"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How a passion for sustainability and creativity sparked a movement to transform the fashion industry from
              within.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">The Problem</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Every year, 92 million tons of textile waste ends up in landfills. Fast fashion has created a culture of
                disposability, where clothes are treated as temporary rather than treasured.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The environmental cost is staggering: water pollution, carbon emissions, and the exploitation of garment
                workers. But beyond the statistics, there's a deeper loss: the disconnection from the clothes we wear
                and the stories they could tell.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We realized that sustainability shouldn't feel like a sacrifice. It should feel like a celebration of
                creativity, community, and connection.
              </p>
            </div>
            <div className="relative h-96 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="/fast-fashion-waste-textile-pollution-landfill.jpg"
                alt="Environmental impact of fast fashion"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 lg:order-1 animate-fade-in">
              <img
                src="/founder-creative-designer-workshop-sustainable-fas.jpg"
                alt="ReWeave Collective founder"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">How It Started</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                What began as a personal journey transformed into a movement. Our founder, inspired by a grandmother's
                seamstress skills and frustrated by her own mountain of unworn clothes, started experimenting with
                upcycling in her tiny apartment.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                She partnered with a local café and hosted the first workshop. Fifteen people showed up. Together, they
                transformed old garments into beautiful cushion covers, tote bags, and table runners. But more
                importantly, they discovered something powerful: the joy of creating together.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That first workshop sparked a revolution. Today, ReWeave Collective has partnered with dozens of cafés
                and restaurants, hosted hundreds of workshops, and diverted thousands of kilos of textile waste from
                landfills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Mission & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Our Mission",
                description:
                  "To make sustainable fashion accessible, creative, and joyful by building a global community of makers who transform discarded textiles into beautiful handcrafted creations.",
                icon: "🎯",
              },
              {
                title: "Our Vision",
                description:
                  "A world where fashion is circular, creative expression is valued, and every piece of clothing tells a story of intentional creation and community connection.",
                icon: "✨",
              },
              {
                title: "Our Values",
                description:
                  "Sustainability, Creativity, Community, Inclusivity, Craftsmanship, and Transparency guide everything we do—from our workshops to our partnerships.",
                icon: "💚",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 border-border rounded-2xl animate-fade-in hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real numbers from our growing community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Community Members" },
              { number: "150+", label: "Workshops Hosted" },
              { number: "5K+", label: "kg Waste Diverted" },
              { number: "25+", label: "Café Partnerships" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 border-border rounded-2xl text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate makers and sustainability advocates driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia Reeves",
                role: "Founder & Creative Director",
                bio: "Fashion designer and sustainability advocate with 15 years of industry experience.",
              },
              {
                name: "James Liu",
                role: "Community Manager",
                bio: "Building connections and fostering community growth across all our partnerships.",
              },
              {
                name: "Aisha Patel",
                role: "Workshop Lead & Instructor",
                bio: "Master craftsperson and textile artist dedicated to teaching sustainable techniques.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border rounded-2xl animate-fade-in hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary/50">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of a community transforming fashion, one creative workshop at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshops">
              <Button variant="secondary" size="lg" className="rounded-full">
                Book a Workshop
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
