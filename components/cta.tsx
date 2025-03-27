"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const ref = useRef(null)
  // Revert to a lower threshold
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-12 mb-0" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center shadow-xl transition-all duration-700 md:p-16 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          </div>

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
              Partner with Oneflare Tech Solutions to leverage cutting-edge technology solutions that drive growth,
              improve efficiency, and enhance customer experiences.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[160px] w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                className="min-w-[160px] w-full sm:w-auto bg-white text-primary hover:bg-white hover:text-primary px-8 py-6 text-lg font-medium"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

