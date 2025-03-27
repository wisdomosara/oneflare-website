import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientRootLayout from "./clientLayout"

// Metadata needs to be in a separate variable since we're using 'use client'
export const metadata: Metadata = {
  title: "Oneflare Tech Solutions | Custom Software & POS Systems",
  description:
    "Oneflare Tech Solutions specializes in customized software development, POS solutions, and business suite management tools for modern enterprises.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}



import './globals.css'