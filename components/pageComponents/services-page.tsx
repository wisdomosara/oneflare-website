"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesPageClient() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const isInView1 = useInView(ref1, { once: true, amount: 0.2 })
  const isInView2 = useInView(ref2, { once: true, amount: 0.2 })
  const isInView3 = useInView(ref3, { once: true, amount: 0.2 })
  const isInView4 = useInView(ref4, { once: true, amount: 0.2 })

  return (
    <div className="container mx-auto pb-24">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">Our Services</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </motion.div>

      <div className="mb-24">
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center" ref={ref1}>
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary">Customized Software Development</h2>
            <p className="mb-6 text-muted-foreground">
              We design and develop bespoke software solutions that address your unique business challenges and
              requirements. Our experienced team works closely with you throughout the development lifecycle to ensure
              the final product exceeds your expectations.
            </p>
            <ul className="mb-6 space-y-2">
              {[
                "Enterprise Application Development",
                "Web Application Development",
                "Mobile App Development",
                "API Development & Integration",
                "Legacy System Modernization",
                "Cloud Migration & Development",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button size="lg">Learn More</Button>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 relative h-[400px] overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop"
              alt="Custom software development"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center" ref={ref2}>
          <motion.div
            className="relative h-[400px] overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop"
              alt="Point of Sale solutions"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary">Point of Sale (POS) Solutions</h2>
            <p className="mb-6 text-muted-foreground">
              Our comprehensive POS solutions streamline your sales operations, inventory management, and customer
              interactions. Whether you're a small retail shop or a multi-location enterprise, we have the right POS
              system to meet your needs.
            </p>
            <ul className="mb-6 space-y-2">
              {[
                "Retail POS Systems",
                "Restaurant & Hospitality POS",
                "Inventory Management",
                "Customer Relationship Management",
                "Payment Processing Integration",
                "Real-time Analytics & Reporting",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button size="lg">Learn More</Button>
          </motion.div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center" ref={ref3}>
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary">Business Suite Management Tools</h2>
            <p className="mb-6 text-muted-foreground">
              Our integrated business suite management tools help you streamline operations, improve collaboration, and
              make data-driven decisions. From project management to financial tracking, our solutions provide the
              visibility and control you need.
            </p>
            <ul className="mb-6 space-y-2">
              {[
                "Project Management Systems",
                "HR & Payroll Management",
                "Financial Management Tools",
                "Document Management",
                "Business Intelligence & Analytics",
                "Workflow Automation",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button size="lg">Learn More</Button>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 relative h-[400px] overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Business suite management tools"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="rounded-xl bg-muted p-8 md:p-12" ref={ref4}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-primary">Our Development Process</h2>
          <p className="mx-auto mb-12 max-w-3xl text-muted-foreground">
            We follow a proven methodology to ensure successful project delivery and client satisfaction
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Discovery",
              description: "We work with you to understand your business needs and project requirements.",
            },
            {
              step: "2",
              title: "Planning",
              description: "We create a detailed project plan with timelines, milestones, and deliverables.",
            },
            {
              step: "3",
              title: "Development",
              description: "Our team builds your solution using agile methodologies with regular updates.",
            },
            {
              step: "4",
              title: "Deployment",
              description: "We thoroughly test and deploy your solution, providing training and support.",
            },
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="bg-primary p-4 text-center text-primary-foreground">
                  <span className="text-xl font-bold">Step {phase.step}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

