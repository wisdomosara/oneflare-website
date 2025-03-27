import TestimonialsPageClient from "@/components/pageComponents/testimonials-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonials & Case Studies | Oneflare Tech Solutions",
  description:
    "Read what our clients say about Oneflare Tech Solutions and explore case studies showcasing how our software has transformed businesses.",
  keywords: "client testimonials, customer reviews, case studies, success stories, software implementation",
}

export default function TestimonialsPage() {
  return <TestimonialsPageClient />
}

