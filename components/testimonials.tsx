"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, RetailPlus",
      content:
        "Oneflare Tech Solutions transformed our retail operations with their POS system. The implementation was smooth, and the ongoing support has been exceptional.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Michael Chen",
      position: "Operations Director, Foodie Chain",
      content:
        "The restaurant POS system from Oneflare has been a game-changer for our multi-location business. The table management and kitchen display features have significantly reduced order errors.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Jessica Williams",
      position: "CTO, Global Manufacturing Inc.",
      content:
        "We needed a custom ERP solution that could handle our complex manufacturing processes. Oneflare delivered a system that not only met but exceeded our expectations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-5xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with Oneflare Tech
              Solutions.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-8">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-muted-foreground">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

