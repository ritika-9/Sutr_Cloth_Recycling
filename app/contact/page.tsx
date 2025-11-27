"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you'd send this data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Questions about our workshops? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email */}
              <Card className="p-6 border-border rounded-2xl hover:border-primary/30 transition-colors animate-fade-in">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground">Email</h3>
                </div>
                <a href="mailto:hello@reweave.com" className="text-primary hover:underline">
                  hello@reweave.com
                </a>
                <p className="text-xs text-muted-foreground mt-2">We reply within 24 hours</p>
              </Card>

              {/* Phone */}
              <Card
                className="p-6 border-border rounded-2xl hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground">Phone</h3>
                </div>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
                <p className="text-xs text-muted-foreground mt-2">Monday - Friday, 10am - 6pm</p>
              </Card>

              {/* Location */}
              <Card
                className="p-6 border-border rounded-2xl hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  ReWeave Collective
                  <br />
                  123 Creative Lane
                  <br />
                  Your City, YC 12345
                </p>
              </Card>

              {/* Hours */}
              <Card
                className="p-6 border-border rounded-2xl hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground">Hours</h3>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Mon - Fri: 10am - 6pm</p>
                  <p>Sat: 11am - 4pm</p>
                  <p>Sun: Closed</p>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 border-border rounded-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-2 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-border rounded-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 mb-6 animate-fade-in">
                    <p className="font-semibold">✓ Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none text-foreground transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="workshop">Workshop Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We respect your privacy. We'll only use your email to respond to your inquiry.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visit Us</h2>
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-border bg-muted flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1885039242374!2d-74.00601!3d40.71279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317e465e39%3A0x9c27c5cebc3f74!2s123%20Creative%20Lane%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have Quick Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our FAQ page for answers to common questions about workshops and our process.
          </p>
          <Link href="/faq">
            <Button variant="outline" size="lg" className="rounded-full bg-transparent">
              Visit FAQ
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
