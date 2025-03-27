import ContactPageClient from "@/components/pageComponents/contact-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Oneflare Tech Solutions",
  description:
    "Get in touch with Oneflare Tech Solutions. Contact our team for inquiries about our software solutions, POS systems, or to request a consultation.",
  keywords: "contact Oneflare, software consultation, tech support, business solutions inquiry",
}

export default function ContactPage() {
  return <ContactPageClient />
}

