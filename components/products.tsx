"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Products() {
  const products = [
    {
      name: "FlareRetail POS",
      category: "POS",
      description: "Complete point of sale system for retail businesses with inventory management.",
      price: "$1,999",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "FlareDine POS",
      category: "POS",
      description: "Specialized POS system for restaurants and cafes with table management.",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "FlareERP",
      category: "Software",
      description: "Comprehensive enterprise resource planning solution for mid-sized businesses.",
      price: "Starting at $4,999",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background" ref={ref}>
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-5xl">Featured Products</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Explore our range of innovative software solutions designed to streamline your business operations.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden border-2 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{product.category}</Badge>
                  </div>
                  <p className="mb-4 text-muted-foreground">{product.description}</p>
                  <p className="text-xl font-bold text-primary">{product.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full group" asChild>
                    <Link href="/products" className="inline-flex items-center justify-center">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <Button size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="/products" className="inline-flex items-center">
              View All Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

