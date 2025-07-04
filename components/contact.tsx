import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, FileText, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">📬 Let's Connect!</h2>
        <p className="text-xl text-gray-700 mb-12">
          Ready to build clean and scalable systems together? Let's discuss opportunities!
        </p>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">siddeshwar.vasam@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+91 9347128712</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Github className="w-5 h-5 text-gray-800" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">github.com/siddeshwarv</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="mailto:siddeshwar.vasam@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
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
          </CardContent>
        </Card>

        <p className="text-gray-600 mt-8">Thanks for visiting! Let's build clean and scalable systems together 💻✨</p>
      </div>
    </section>
  )
}
