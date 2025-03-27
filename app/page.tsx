import HomePage from "@/components/pageComponents/home-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oneflare Tech Solutions | Innovative Software & POS Systems",
  description:
    "Oneflare Tech Solutions provides custom software development, POS systems, and business management tools to help businesses streamline operations and drive growth.",
  keywords: "software development, POS systems, business solutions, custom software, retail POS, restaurant POS",
}

export default function Home() {
  return <HomePage />
}

