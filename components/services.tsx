"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, ShoppingCart, BarChart4 } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Enterprise Application Development",
        "Web & Mobile Applications",
        "API Development & Integration",
        "Legacy System Modernization",
      ],
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop",
      link: "/services",
    },
    {
      title: "Point of Sale (POS) Solutions",
      description: "Comprehensive point of sale systems for retail, restaurants, and service-based businesses.",
      icon: <ShoppingCart className="h-8 w-8" />,
      features: [
        "Retail & Restaurant POS Systems",
        "Inventory Management",
        "Customer Relationship Management",
        "Payment Processing Integration",
      ],
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop",
      link: "/services",
    },
    {
      title: "Business Suite Management Tools",
      description: "Integrated tools for managing your entire business operation from a single platform.",
      icon: <BarChart4 className="h-8 w-8" />,
      features: [
        "Project Management Systems",
        "HR & Payroll Management",
        "Financial Management Tools",
        "Business Intelligence & Analytics",
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      link: "/services",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/80 to-background p-1 shadow-xl transition-all duration-700 delay-${index * 200} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background decorative elements */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>

              <div className="relative grid gap-8 overflow-hidden rounded-xl p-8 md:grid-cols-2 md:p-10">
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-primary md:text-3xl">{service.title}</h3>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>

                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="group w-fit bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href={service.link} className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`relative h-[300px] overflow-hidden rounded-lg shadow-xl md:h-[400px] ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

