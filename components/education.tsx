import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Trophy } from "lucide-react"

export default function Education() {
  const certifications = [
    "AWS Cloud Practitioner Essentials — AWS",
    "Java Bootcamp: 100+ Projects — Udemy",
    "Spring Boot 3 in 100 Steps — Udemy",
    "Git and GitHub from Scratch — Udemy",
    "Practical Web Development (22-in-1) — Udemy",
  ]

  const achievements = [
    "Solved 600+ coding problems: LeetCode, CodeChef (2*), HackerRank (3*), Codewars",
    "Reduced report latency by 35% through query optimization and caching at Effigo",
    "Consistently active participant in coding contests",
  ]

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🎓 Education & Achievements</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Bachelor of Engineering</h3>
                  <p className="text-gray-700">Information Technology</p>
                  <p className="text-sm text-gray-600">Chaitanya Bharathi Institute of Technology</p>
                  <p className="text-sm text-gray-600">Hyderabad, India</p>
                  <Badge variant="outline" className="mt-2">
                    CGPA: 8.02/10
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">2020 – 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                <Award className="w-6 h-6 text-green-600" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                <Trophy className="w-6 h-6 text-yellow-600" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">🏆</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Currently Learning */}
        <Card className="border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 text-center">🧠 Currently Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                🧱 Low-Level Design (LLD) — SOLID, OOP, UML
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                🔄 Advanced Java Multithreading & Concurrency
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                🧮 DSA Focus — Graphs, Trees, Dynamic Programming
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                🧠 Design Patterns in real backend use-cases
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
