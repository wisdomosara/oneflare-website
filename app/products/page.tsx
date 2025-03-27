"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, amount: 0.2 })
  const isInView2 = useInView(ref2, { once: true, amount: 0.2 })

  const products = [
    {
      id: 1,
      name: "FlareRetail POS",
      category: "pos",
      description:
        "Complete point of sale system for retail businesses with inventory management, customer tracking, and sales analytics.",
      price: "$1,999",
      features: [
        "Multi-terminal support",
        "Inventory management",
        "Customer loyalty program",
        "Sales analytics",
        "Cloud backup",
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "FlareDine POS",
      category: "pos",
      description:
        "Specialized POS system for restaurants and cafes with table management, kitchen display, and online ordering.",
      price: "$2,499",
      features: [
        "Table management",
        "Kitchen display system",
        "Online ordering",
        "Reservation system",
        "Menu management",
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "FlareERP",
      category: "software",
      description: "Comprehensive enterprise resource planning solution for mid-sized businesses.",
      price: "Starting at $4,999",
      features: [
        "Financial management",
        "HR & payroll",
        "Inventory control",
        "CRM integration",
        "Business intelligence",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "FlareProject",
      category: "software",
      description: "Project management software with task tracking, resource allocation, and reporting capabilities.",
      price: "$99/month",
      features: ["Task management", "Gantt charts", "Time tracking", "Resource allocation", "Reporting dashboard"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "FlareCRM",
      category: "software",
      description:
        "Customer relationship management system to track leads, manage sales, and improve customer service.",
      price: "$79/month",
      features: ["Contact management", "Sales pipeline", "Email marketing", "Customer support", "Analytics"],
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "FlareInventory",
      category: "management",
      description:
        "Standalone inventory management system with barcode scanning, stock alerts, and supplier management.",
      price: "$1,499",
      features: [
        "Barcode scanning",
        "Stock level alerts",
        "Supplier management",
        "Purchase orders",
        "Inventory reporting",
      ],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
    },
  ]

  return (
    <div className="container mx-auto pb-24">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">Our Products</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Explore our range of innovative software solutions designed to streamline your business operations
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="mb-12" ref={ref1}>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="pos">POS Systems</TabsTrigger>
            <TabsTrigger value="software">Software Solutions</TabsTrigger>
            <TabsTrigger value="management">Management Tools</TabsTrigger>
          </TabsList>
        </motion.div>
        <TabsContent value="all" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pos" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "pos")
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="software" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "software")
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="management" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === "management")
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-xl bg-muted p-8 md:p-12" ref={ref2}>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary">Custom Solutions</h2>
            <p className="mb-6 text-muted-foreground">
              Don't see exactly what you need? We specialize in creating custom solutions tailored to your specific
              business requirements. Our team of experts will work with you to understand your needs and develop a
              solution that fits perfectly.
            </p>
            <Button size="lg">Request a Consultation</Button>
          </motion.div>
          <motion.div
            className="relative h-[300px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Custom solutions"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-48 w-full">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <Badge>
            {product.category === "pos" ? "POS" : product.category === "software" ? "Software" : "Management"}
          </Badge>
        </div>
        <p className="mb-4 text-muted-foreground">{product.description}</p>
        <p className="mb-4 text-xl font-bold text-primary">{product.price}</p>
        <ul className="mb-4 space-y-1">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              • {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <Button variant="outline">Details</Button>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  )
}

