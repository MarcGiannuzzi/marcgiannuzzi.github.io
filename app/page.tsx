import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Marc Giannuzzi</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            <Link href="https://github.com/MarcGiannuzzi/cv/blob/main/Marc_Giannuzzi_CV_English.pdf" className="transition-colors hover:text-foreground/80">
              Resume
            </Link>
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Data Engineer / ML Ops 🚀
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/marcgiannuzzi" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/marc-giannuzzi-b098b216b/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:marc.giannuzzi@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AI Food recommandation system"
                description="Food recommndation system for healthy recipes"
                image="https://imageio.forbes.com/specials-images/imageserve/675b36c661cb5ba772796409/Woman-taking-photo-of-breakfast-served-in-cafe/0x0.jpg?width=960&dpr=1"
                link="https://github.com/MarcGiannuzzi/food.recommandation.system"
                tags={["Tensorflow", "Python", "Keras"]}
              />
              <ProjectCard
                title="Song analysis"
                description="A real-time task management application with team collaboration features."
                image="https://www.philosophytalk.org/sites/default/files/styles/large_blog__900x400_/public/silhouette-musical-note-clef-b.jpg"
                link="https://github.com/MarcGiannuzzi/song.analysis"
                tags={["Python", "Node.js", "Fbeamer"]}
              />
              <ProjectCard
                title="AI tools website (in construction)"
                description="Website giving user many options to automate AI related tasks"
                image="https://www.polytechnique-insights.com/wp-content/uploads/2024/01/adobestock_621477974-1-scaled.jpeg"
                link="https://github.com/ta-da-ta/"
                tags={["OpenAI", "Next.js", "Python"]} 
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© Marc Giannuzzi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

