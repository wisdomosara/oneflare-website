import Hero from "@/components/hero"
import Features from "@/components/features"
import Services from "@/components/services"
import Products from "@/components/products"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="pb-0">
      <Hero />
      <Features />
      <Services />
      <Products />
      <Testimonials />
      <CTA />
    </div>
  )
}

