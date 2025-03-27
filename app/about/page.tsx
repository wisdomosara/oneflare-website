import AboutPageClient from "@/components/pageComponents/about-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Oneflare Tech Solutions | Our Mission & Values",
  description:
    "Learn about Oneflare Tech Solutions, our mission, values, and the team behind our innovative software solutions and business management tools.",
  keywords: "about Oneflare, tech company, software development team, company mission, company values",
}

export default function AboutPage() {
  return <AboutPageClient />
}

