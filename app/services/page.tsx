import ServicesPageClient from "@/components/pageComponents/services-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Oneflare Tech Solutions",
  description:
    "Explore our comprehensive range of services including custom software development, POS solutions, and business suite management tools.",
  keywords:
    "software services, POS solutions, business management, custom software development, enterprise applications",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

