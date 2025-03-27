import ProductsPageClient from "@/components/pageComponents/products-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Oneflare Tech Solutions",
  description:
    "Discover our range of innovative products including FlareRetail POS, FlareDine POS, FlareERP, and other business management solutions.",
  keywords: "retail POS, restaurant POS, ERP software, business management software, inventory management",
}

export default function ProductsPage() {
  return <ProductsPageClient />
}

