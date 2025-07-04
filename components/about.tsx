import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a passionate backend engineer with hands-on experience in designing and implementing microservices
                architecture using Spring Boot, Java, and modern DevOps practices. My expertise lies in building
                scalable systems that can handle high-traffic environments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Effigo Global, I've successfully migrated systems, optimized performance by up to 60%, and
                implemented caching solutions that reduced response times by 40%. I believe in writing clean,
                maintainable code using proven design patterns and best practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Philosophy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm skilled in applying key Object-Oriented Principles (OOP) and Design Patterns like Strategy,
                Singleton, Repository, and Factory to build reusable, scalable, and testable backend systems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently learning Low-Level Design (LLD), advanced Java multithreading, and focusing on Data Structures
                & Algorithms. I'm always eager to tackle complex system design challenges and optimize for performance
                and scalability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
