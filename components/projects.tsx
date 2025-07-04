import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Healthcare Microservices System",
      description:
        "A robust backend system with 5 microservices (Patient, Billing, Analytics, Auth, Gateway) designed using event-driven architecture and clean microservices principles",
      technologies: ["Java", "Spring Boot", "gRPC", "Kafka", "Docker", "JWT", "PostgreSQL"],
      features: [
        "🔗 Applied modular design with proper separation of concerns",
        "📬 Implemented asynchronous communication using Kafka",
        "🔐 Secured endpoints using JWT and Spring Security",
        "🧠 Employed Factory Pattern for service creation and Strategy Pattern for request handling logic",
      ],
      githubUrl: "https://github.com/siddeshwarv/patient-managment",
      year: "2024",
    },
    {
      title: "Flipkart Daily – Inventory Management System",
      description: "A clean Spring Boot architecture simulating a real-world inventory backend system",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
      features: [
        "⚙️ Structured using Repository, Singleton, and Strategy Design Patterns",
        "🔍 Includes advanced filtering, search logic, and modular layers (Controller → Service → DAO)",
        "🚀 Built as a base to demonstrate Spring Boot fundamentals, ideal for future DB integration",
      ],
      githubUrl: "https://github.com/siddeshwarv/flipkart-daily-inventory-system",
      year: "2024",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🛠️ Projects</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-green-100 text-green-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
