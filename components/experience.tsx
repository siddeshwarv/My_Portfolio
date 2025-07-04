import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Product Engineer",
      company: "Effigo Global",
      location: "Hyderabad, India",
      period: "Jun 2024 – Apr 2025",
      type: "Full-Time",
      achievements: [
        "Built scalable microservices with centralized gateway and isolated logic for inbound APIs",
        "Used multithreading and Strategy Pattern to optimize concurrent request handling",
        "Replaced hardcoded YAML config with env variables, streamlining Docker-based deployments",
        "Integrated Swagger UI, reducing API validation effort by 25%",
        "Migrated report modules from Python FastAPI to Spring Boot, reducing development time by 60%",
        "Added Caffeine-based metadata caching with flush endpoints; improved response time by 40%",
        "Optimized SQL queries (30+ fields) for complex reports, improving performance by 35%",
      ],
    },
    {
      title: "Product Engineer Intern",
      company: "Effigo Global",
      location: "Hyderabad, India",
      period: "Jan 2024 – May 2024",
      type: "Internship",
      achievements: [
        "Developed REST APIs for procurement workflows using Spring Boot microservices architecture",
        "Created Kafka proof of concept for asynchronous event processing in procurement systems",
        "Contributed to bug fixes and feature enhancements in core product modules",
        "Gained hands-on experience with Docker containerization for consistent deployment environments",
      ],
    },
  ]

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">💼 Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
