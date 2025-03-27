"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPageClient() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const isInView1 = useInView(ref1, { once: true, amount: 0.1 }) // Reverted from 0.3 to 0.1
  const isInView2 = useInView(ref2, { once: true, amount: 0.1 }) // Reverted from 0.3 to 0.1
  const isInView3 = useInView(ref3, { once: true, amount: 0.1 }) // Reverted from 0.3 to 0.1
  const isInView4 = useInView(ref4, { once: true, amount: 0.1 }) // Reverted from 0.3 to 0.1

  return (
    <div className="container mx-auto pb-24">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
          About Oneflare Tech Solutions
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Delivering innovative software solutions that drive business growth and efficiency
        </p>
      </motion.div>

      <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center" ref={ref1}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-primary">Our Mission</h2>
          <p className="mb-6 text-muted-foreground">
            At Oneflare Tech Solutions, our mission is to empower businesses with cutting-edge software solutions that
            streamline operations, enhance customer experiences, and drive sustainable growth. We believe in creating
            technology that solves real-world problems and delivers measurable value.
          </p>
          <p className="text-muted-foreground">
            Founded in 2015, we've grown from a small team of passionate developers to a comprehensive technology
            partner serving clients across multiple industries. Our commitment to excellence, innovation, and client
            satisfaction remains at the core of everything we do.
          </p>
        </motion.div>
        <motion.div
          className="relative h-[400px] overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Oneflare team working together"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="mb-16" ref={ref2}>
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Values
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Innovation",
              description:
                "We constantly explore new technologies and methodologies to deliver forward-thinking solutions that keep our clients ahead of the curve.",
            },
            {
              title: "Excellence",
              description:
                "We are committed to delivering the highest quality in everything we do, from code quality to customer service and support.",
            },
            {
              title: "Partnership",
              description:
                "We view our clients as partners, working collaboratively to understand their unique challenges and develop tailored solutions.",
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16" ref={ref3}>
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Industries We Serve
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Retail",
            "Hospitality",
            "Healthcare",
            "Finance",
            "Manufacturing",
            "Education",
            "Logistics",
            "Professional Services",
          ].map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="rounded-lg bg-muted p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-medium">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16 text-center" ref={ref4}>
        <motion.h2
          className="mb-4 text-3xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </motion.h2>
        <motion.p
          className="mx-auto mb-8 max-w-3xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our diverse team of experts brings together decades of experience in software development, UI/UX design,
          project management, and customer support.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "Alex Johnson", role: "CEO & Founder", image: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sarah Chen", role: "CTO", image: "https://randomuser.me/api/portraits/women/44.jpg" },
            {
              name: "Michael Rodriguez",
              role: "Lead Developer",
              image: "https://randomuser.me/api/portraits/men/68.jpg",
            },
            { name: "Priya Patel", role: "UX Director", image: "https://randomuser.me/api/portraits/women/65.jpg" },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button size="lg" className="mr-4">
          Join Our Team
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </motion.div>
    </div>
  )
}

