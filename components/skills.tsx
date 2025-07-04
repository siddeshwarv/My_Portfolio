import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Hibernate (JPA)", "FastAPI", "JUnit", "React"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Jenkins", "Git", "Postman", "Linux", "AWS EC2", "Kafka", "Swagger"],
    },
    {
      title: "Concepts",
      skills: [
        "REST API Design",
        "Microservices",
        "Multithreading",
        "Caching",
        "Design Patterns",
        "CI/CD",
        "System Design",
      ],
    },
    {
      title: "AI Tools",
      skills: ["GitHub Copilot", "Prompt Engineering"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🔧 Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
