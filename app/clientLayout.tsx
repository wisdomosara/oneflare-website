"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className={`flex-1 ${isHomePage ? "pt-0" : "pt-24"}`}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

