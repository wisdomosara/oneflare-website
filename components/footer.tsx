import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted">
      {/* Top curved border */}
      <div className="h-16 bg-gradient-to-b from-white to-muted/50"></div>

      {/* Main footer content */}
      <div className="container mx-auto py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Company info and contact - takes 5/12 of the space */}
          <div className="space-y-6 md:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="text-xl font-bold">O</span>
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold text-primary">Oneflare</span>
                <span className="text-xl font-bold">Tech</span>
              </div>
            </Link>

            <p className="text-muted-foreground">
              Delivering innovative software solutions that drive business growth and efficiency.
            </p>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground">3-9, OluKoleosho Street, Off Medical Road, Ikeja, Lagos</p>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">oneflaretech@gmail.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Customer Service: 08101015713</p>
                <p className="text-sm text-muted-foreground">Support: 09134713980</p>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, name: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="rounded-lg bg-white/50 p-4 shadow-sm">
              <h4 className="mb-2 font-medium">Working Hours</h4>
              <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>

          {/* Empty space - takes 2/12 of the space */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Quick Links - takes 2/12 of the space */}
          <div className="space-y-6 md:col-span-2">
            <h3 className="text-lg font-semibold relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 h-1 w-12 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowRight className="mr-2 h-4 w-0 opacity-0 transition-all group-hover:w-4 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - takes 3/12 of the space */}
          <div className="space-y-6 md:col-span-3">
            <h3 className="text-lg font-semibold relative">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 h-1 w-12 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Custom Software Development", href: "/services" },
                { label: "POS Solutions", href: "/services" },
                { label: "Business Suite Management", href: "/services" },
                { label: "Mobile App Development", href: "/services" },
                { label: "Cloud Solutions", href: "/services" },
                { label: "IT Consulting", href: "/services" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowRight className="mr-2 h-4 w-0 opacity-0 transition-all group-hover:w-4 group-hover:opacity-100" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-border/30 bg-muted/80">
        <div className="container mx-auto py-6">
          <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">&copy; {2025} Oneflare Tech Solutions. All rights reserved.</p>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

