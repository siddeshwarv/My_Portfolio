import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Siddeshwar Vasam - Backend Developer Portfolio",
  description:
    "Backend Developer with 2+ years of experience in Java, Spring Boot, microservices, and system design. Specialized in building scalable REST APIs and optimizing database performance.",
  keywords:
    "Backend Developer, Java, Spring Boot, Microservices, REST API, PostgreSQL, Docker, System Design, Software Engineer",
  authors: [{ name: "Siddeshwar Vasam" }],
  openGraph: {
    title: "Siddeshwar Vasam - Backend Developer Portfolio",
    description: "Backend Developer specializing in Java, Spring Boot, and microservices architecture",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
