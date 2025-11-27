export interface Workshop {
  id: string
  title: string
  description: string
  date: string
  time: string
  duration: string
  location: string
  café: string
  price: number
  capacity: number
  registered: number
  image: string
  level: "Beginner" | "Intermediate" | "All Levels"
  materials: string[]
  isPast?: boolean
}

export const upcomingWorkshops: Workshop[] = [
  {
    id: "1",
    title: "Cushion Cover Creations",
    description:
      "Transform a vintage shirt into a beautiful, decorative cushion cover. Learn basic sewing techniques and fabric design principles.",
    date: "December 15, 2024",
    time: "2:00 PM - 5:00 PM",
    duration: "3 hours",
    location: "Downtown Studio",
    café: "Brew & Bean",
    price: 45,
    capacity: 12,
    registered: 8,
    level: "Beginner",
    image: "cushion-cover",
    materials: ["Old shirt or fabric", "Thread", "Needle", "Scissors"],
  },
  {
    id: "2",
    title: "Tote Bag Workshop",
    description:
      "Create a functional, stylish tote bag from repurposed fabrics. Perfect for eco-conscious shoppers and your daily essentials.",
    date: "December 22, 2024",
    time: "10:00 AM - 1:00 PM",
    duration: "3 hours",
    location: "Riverside Café",
    café: "The Green Café",
    price: 55,
    capacity: 10,
    registered: 10,
    level: "All Levels",
    image: "tote-bag",
    materials: ["Old jeans or fabric", "Handles", "Thread", "Scissors"],
  },
  {
    id: "3",
    title: "Advanced Fabric Painting",
    description:
      "Create intricate patterns and designs on upcycled textiles using eco-friendly paint. Express your artistic vision.",
    date: "January 5, 2025",
    time: "3:00 PM - 6:00 PM",
    duration: "3 hours",
    location: "Arts District",
    café: "Artisan Kitchen",
    price: 65,
    capacity: 8,
    registered: 5,
    level: "Intermediate",
    image: "fabric-painting",
    materials: ["Fabric pieces", "Eco-friendly paints", "Brushes", "Protective apron"],
  },
  {
    id: "4",
    title: "Table Runner & Placemats",
    description: "Sew elegant table linens from beautiful fabric scraps. Transform your dining experience sustainably.",
    date: "January 12, 2025",
    time: "11:00 AM - 2:00 PM",
    duration: "3 hours",
    location: "Community Center",
    café: "Harvest House",
    price: 50,
    capacity: 15,
    registered: 12,
    level: "Beginner",
    image: "table-runner",
    materials: ["Fabric scraps", "Thread", "Needle", "Scissors"],
  },
]

export const pastWorkshops: Workshop[] = [
  {
    id: "past-1",
    title: "Summer Upcycling Festival",
    description: "A full-day celebration of upcycling with multiple workshops, local artisans, and community makers.",
    date: "August 20, 2024",
    time: "10:00 AM - 6:00 PM",
    duration: "8 hours",
    location: "Central Park",
    café: "Various Partners",
    price: 0,
    capacity: 200,
    registered: 187,
    level: "All Levels",
    image: "festival",
    materials: [],
    isPast: true,
  },
  {
    id: "past-2",
    title: "Zero Waste Fashion Challenge",
    description:
      "Create an entire outfit from upcycled materials. A fun competitive event showcasing sustainable creativity.",
    date: "October 15, 2024",
    time: "1:00 PM - 4:00 PM",
    duration: "3 hours",
    location: "Fashion District",
    café: "Brew & Bean",
    price: 35,
    capacity: 20,
    registered: 20,
    level: "Intermediate",
    image: "fashion-challenge",
    materials: [],
    isPast: true,
  },
]
