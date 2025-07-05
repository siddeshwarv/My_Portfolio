import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/siddeshwar-profile.png"
            alt="Siddeshwar Vasam"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover object-top"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Siddeshwar Vasam
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-6">
            <span className="block">☕ Java Spring Boot Backend Developer</span>
            <span className="block">
              🏗️ System Design & Microservices Enthusiast
            </span>
            <span className="block">
              ⚡ DevOps-Aware & DSA-Focused Engineer
            </span>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate <strong>Java Spring Boot Developer</strong> with{" "}
            <strong>1+ years of experience</strong> building scalable backend
            systems and microservices. Skilled in designing and optimizing REST
            APIs using{" "}
            <strong>Spring Boot, PostgreSQL, Docker, and Kafka</strong>.
            Proficient in{" "}
            <strong>
              system design, SQL tuning, caching, and design patterns
            </strong>
            . Active in <strong>competitive coding</strong> with 600+ problems
            solved across LeetCode, CodeChef, HackerRank, and GeeksforGeeks.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a
              href="mailto:siddeshwar.vasam@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/siddeshwarv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://linkedin.com/in/siddeshwar-vasam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://drive.google.com/file/d/1kJuTjknKCuBNr3KfZODif0jMUuFAzQj5/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +91 9347128712
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            siddeshwar.vasam@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
}
