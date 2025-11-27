import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Workshop } from "@/lib/workshop-data"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

interface WorkshopCardProps {
  workshop: Workshop
  isPast?: boolean
}

export default function WorkshopCard({ workshop, isPast }: WorkshopCardProps) {
  const spotsLeft = workshop.capacity - workshop.registered

  return (
    <Card className="overflow-hidden border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 overflow-hidden group">
        <img
          src={`/generic-placeholder-graphic.png?key=${workshop.image}`}
          alt={workshop.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPast && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-foreground text-background px-4 py-2 rounded-full font-semibold">Past Event</span>
          </div>
        )}
        {spotsLeft <= 2 && spotsLeft > 0 && !isPast && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {spotsLeft} spot{spotsLeft === 1 ? "" : "s"} left
          </div>
        )}
        {spotsLeft === 0 && !isPast && (
          <div className="absolute top-3 right-3 bg-muted-foreground text-background px-3 py-1 rounded-full text-xs font-semibold">
            Sold Out
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full">
            {workshop.level}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2">{workshop.title}</h3>

        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{workshop.description}</p>

        {/* Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={16} />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={16} />
            <span>{workshop.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span>{workshop.café}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users size={16} />
            <span>
              {workshop.registered}/{workshop.capacity} registered
            </span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <div>
            {workshop.price > 0 ? (
              <p className="text-lg font-bold text-foreground">${workshop.price}</p>
            ) : (
              <p className="text-lg font-bold text-accent">Free</p>
            )}
          </div>
          <Link href={`/workshops/${workshop.id}`}>
            <Button
              disabled={spotsLeft === 0 && !isPast}
              variant={isPast ? "outline" : "default"}
              size="sm"
              className="rounded-full"
            >
              {isPast ? "View Details" : "Register Now"}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
