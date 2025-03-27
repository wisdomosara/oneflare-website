"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, ShoppingCart, BarChart4, Shield, Zap, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and requirements.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" />,
      title: "POS Solutions",
      description: "Comprehensive point of sale systems for retail, restaurants, and service-based businesses.",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-white" />,
      title: "Business Suite Management",
      description: "Integrated tools for managing your entire business operation from a single platform.",
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and ensure business continuity.",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Fast Implementation",
      description: "Rapid deployment methodologies to get your solutions up and running quickly.",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Dedicated Support",
      description: "Ongoing technical support and training to ensure your team gets the most from your software.",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 }) // Reverted from 0.3 to 0.1

  return (
    <section className="relative overflow-hidden py-24" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto">
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Why Choose Oneflare Tech Solutions</h2>
            <p className="mx-auto max-w-3xl text-white/80">
              We deliver innovative, reliable, and scalable technology solutions that help businesses thrive in today's
              competitive landscape.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group h-full overflow-hidden rounded-xl bg-white/10 p-1 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
                <div className="flex h-full flex-col rounded-lg bg-gradient-to-br from-white/[0.15] to-transparent p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-transparent p-3 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div
          className={`mt-20 grid gap-8 rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:grid-cols-4 md:p-10 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "600ms" }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Clients Worldwide" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Technical Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

