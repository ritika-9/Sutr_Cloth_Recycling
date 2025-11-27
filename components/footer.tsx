import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3">Sutr Collective</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Transforming old clothes into beautiful creations while reducing fashion waste and building community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:underline">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshops */}
          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="hover:underline">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@reweave.com" className="hover:underline">
                  hello@sutr.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Your City, Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter and Socials */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-sm opacity-80">© 2025 Sutr Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
