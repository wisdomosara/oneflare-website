import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientRootLayout from "./clientLayout"

// Metadata needs to be in a separate variable since we're using 'use client'
export const metadata: Metadata = {
  title: "Oneflare Tech Solutions | Custom Software & POS Systems",
  description:
    "Oneflare Tech Solutions specializes in customized software development, POS solutions, and business suite management tools for modern enterprises.",
  icons: {
    icon: './oneflare-logo-dark.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: [
      {
        url: './oneflare-case-study-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Oneflare Tech Solutions'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
