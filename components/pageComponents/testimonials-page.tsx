"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsPageClient() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, amount: 0.2 })
  const isInView2 = useInView(ref2, { once: true, amount: 0.2 })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "RetailPlus",
      content:
        "Oneflare Tech Solutions transformed our retail operations with their POS system. The implementation was smooth, and the ongoing support has been exceptional. Our staff adapted quickly, and we've seen a 30% increase in checkout efficiency.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director",
      company: "Foodie Chain Restaurants",
      content:
        "The restaurant POS system from Oneflare has been a game-changer for our multi-location business. The table management and kitchen display features have significantly reduced order errors and improved our customer service.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 3,
      name: "Jessica Williams",
      position: "CTO",
      company: "Global Manufacturing Inc.",
      content:
        "We needed a custom ERP solution that could handle our complex manufacturing processes. Oneflare delivered a system that not only met but exceeded our expectations. The ROI has been remarkable.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Project Manager",
      company: "Construct Pro",
      content:
        "FlareProject has revolutionized how we manage our construction projects. The intuitive interface and powerful reporting capabilities have given us unprecedented visibility into our project timelines and resource allocation.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 5,
      name: "Amanda Lee",
      position: "Sales Director",
      company: "Tech Innovations Ltd",
      content:
        "The CRM system from Oneflare has helped us streamline our sales process and better track customer interactions. Our sales team loves the intuitive interface, and management appreciates the detailed analytics.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 6,
      name: "Robert Thompson",
      position: "Owner",
      company: "Thompson's Boutique",
      content:
        "As a small business owner, I needed an affordable but powerful POS solution. Oneflare's system was perfect - easy to use, reliable, and with all the features I needed. Their customer service has been outstanding.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Retail Chain Transformation",
      company: "NationalMart",
      challenge:
        "NationalMart was struggling with an outdated POS system that couldn't handle their growth to 50+ locations.",
      solution: "Implementation of FlareRetail POS with custom inventory management and centralized reporting.",
      results:
        "30% reduction in checkout time, 25% improvement in inventory accuracy, and seamless multi-location management.",
      image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Restaurant Group Efficiency",
      company: "Gourmet Dining Group",
      challenge:
        "Managing orders across 12 restaurants with different menus and workflows was causing delays and errors.",
      solution: "Deployed FlareDine POS with customized kitchen display systems and table management.",
      results:
        "Order errors reduced by 40%, average table turnover improved by 20%, and enhanced customer satisfaction.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Manufacturing Process Optimization",
      company: "PrecisionTech Manufacturing",
      challenge: "Disconnected systems were causing production delays and inventory discrepancies.",
      solution: "Custom FlareERP implementation with specialized manufacturing modules and real-time tracking.",
      results:
        "Production efficiency increased by 35%, inventory accuracy improved to 99.8%, and reporting time reduced by 75%.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <div className="container mx-auto pb-24">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">Client Success Stories</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Discover how our solutions have helped businesses across various industries achieve their goals
        </p>
      </motion.div>

      <div className="mb-20" ref={ref1}>
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
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
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div ref={ref2}>
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Case Studies
        </motion.h2>
        <div className="space-y-24">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className={`grid gap-8 md:grid-cols-2 md:items-stretch ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
            >
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <h3 className="mb-2 text-2xl font-bold">{caseStudy.title}</h3>
                <p className="mb-4 text-lg font-medium text-primary">{caseStudy.company}</p>

                <div className="mb-4">
                  <h4 className="mb-1 font-semibold">Challenge:</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="mb-1 font-semibold">Solution:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold">Results:</h4>
                  <p className="text-muted-foreground">{caseStudy.results}</p>
                </div>
              </div>
              <div
                className={`relative h-full min-h-[350px] overflow-hidden rounded-lg shadow-xl ${index % 2 === 1 ? "md:col-start-1" : ""}`}
              >
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

