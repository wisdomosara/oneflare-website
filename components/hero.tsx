"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef(null)

  // Carousel interval in milliseconds (7 seconds)
  const carouselInterval = 7000

  useEffect(() => {
    setMounted(true)
  }, [])

  const slides = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your unique business challenges and requirements.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Point of Sale (POS) Solutions",
      description: "Comprehensive systems for retail, restaurants, and service-based businesses.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Business Suite Management",
      description: "Integrated tools for managing your entire business operation from a single platform.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    // Reset the timer when manually changing slides
    resetTimer()
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    // Reset the timer when manually changing slides
    resetTimer()
  }, [slides.length])

  // Function to reset the auto-advance timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Only restart the timer if not paused
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
      }, carouselInterval)
    }
  }, [isPaused, slides.length])

  // Pause auto-advance when user interacts with carousel
  const pauseCarousel = useCallback(() => {
    setIsPaused(true)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }, [])

  // Resume auto-advance after a period of inactivity (15 seconds)
  const resumeCarousel = useCallback(() => {
    setIsPaused(false)
    resetTimer()
  }, [resetTimer])

  // Auto-advance slides
  useEffect(() => {
    if (!mounted) return

    // Initial timer setup
    resetTimer()

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [mounted, resetTimer])

  // Resume carousel after inactivity
  useEffect(() => {
    if (isPaused) {
      const resumeTimeout = setTimeout(resumeCarousel, 15000) // Resume after 15 seconds of inactivity
      return () => clearTimeout(resumeTimeout)
    }
  }, [isPaused, resumeCarousel])

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
            {/* Text content */}
            <div className="text-center md:text-left">
              <div className="mb-4 inline-block rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Oneflare Tech Solutions
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Innovative Software Solutions
              </h1>
              <p className="mb-8 text-lg text-gray-600 md:text-xl">
                Delivering scalable, secure, and customized software solutions that drive growth and streamline
                operations for businesses of all sizes.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* Carousel */}
            <div
              className="relative h-[300px] md:h-[400px]"
              onMouseEnter={() => {
                pauseCarousel()
                setIsHovering(true)
              }}
              onMouseLeave={() => {
                resumeCarousel()
                setIsHovering(false)
              }}
              onTouchStart={pauseCarousel}
              onTouchEnd={resumeCarousel}
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[current].image || "/placeholder.svg"}
                      alt={slides[current].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h2 className="mb-2 text-2xl font-bold text-white">{slides[current].title}</h2>
                        <p className="text-white/90">{slides[current].description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons - only visible on hover and on desktop */}
                <button
                  onClick={() => {
                    prevSlide()
                    pauseCarousel()
                  }}
                  className={`absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition-all hover:bg-white md:opacity-0 ${
                    isHovering ? "md:opacity-100" : ""
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    nextSlide()
                    pauseCarousel()
                  }}
                  className={`absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition-all hover:bg-white md:opacity-0 ${
                    isHovering ? "md:opacity-100" : ""
                  }`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrent(index)
                        pauseCarousel()
                      }}
                      className={`h-2 w-8 rounded-full transition-all ${
                        index === current ? "bg-white" : "bg-white/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

