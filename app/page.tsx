import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Marc Giannuzzi</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
                Skills
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

      <main className="flex-1 container mx-auto max-w-6xl px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Data Engineer / ML Ops 🚀
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Building digital experiences with modern technologies. Focused on creating software & data solutions.
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
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience & Education</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Professional Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">Professional Experience</h3>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Data Engineer / ML Ops</CardTitle>
                  <CardDescription>Waiyer • Current Position</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Leading data engineering initiatives and machine learning operations, focusing on building robust data pipelines
                    and implementing MLOps best practices. Working with cloud technologies to ensure scalable and efficient data solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">GCP</Badge>
                    <Badge variant="secondary">MLOps</Badge>
                    <Badge variant="secondary">Data Pipelines</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Previous Roles</CardTitle>
                  <CardDescription>Various locations in Île-de-France</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Accumulated diverse experience across multiple organizations in the Paris region, including positions in
                    Villejuif, Neuilly-sur-Seine, Nanterre, and Courbevoie. Each role contributed to developing expertise in
                    data engineering, cloud architecture, and machine learning systems.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>ESILV - École Supérieure d'Ingénieurs Léonard de Vinci</CardTitle>
                  <CardDescription>2018 - 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Engineering degree with a specialization in Computer Science, Big Data & Connected Objects.
                    Focused extensively on Data Science, gaining deep expertise in statistical analysis, machine learning algorithms,
                    and large-scale data processing systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Science</Badge>
                    <Badge variant="outline">Big Data</Badge>
                    <Badge variant="outline">IoT</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-2 mb-4 mt-8">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Google Cloud Certifications</CardTitle>
                  <CardDescription>Active Professional Credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Professional Data Engineer</h4>
                    <p className="text-xs text-muted-foreground">Issued: April 2025 • Expires: April 2027</p>
                    <p className="text-xs text-muted-foreground mt-1">Demonstrates expertise in designing, building, and maintaining data processing systems on Google Cloud.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-1">Associate Cloud Engineer</h4>
                    <p className="text-xs text-muted-foreground">Issued: April 2025 • Expires: April 2028</p>
                    <p className="text-xs text-muted-foreground mt-1">Validates proficiency in deploying applications, monitoring operations, and managing enterprise solutions.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AI Food recommandation system"
                description="Food recommndation system for healthy recipes"
                image="/images/food-ai.svg"
                link="https://github.com/MarcGiannuzzi/food.recommandation.system"
                tags={["Tensorflow", "Python", "Keras"]}
              />
              <ProjectCard
                title="Song analysis"
                description="A real-time task management application with team collaboration features."
                image="/images/song-analysis.svg"
                link="https://github.com/MarcGiannuzzi/song.analysis"
                tags={["Python", "Node.js", "Fbeamer"]}
              />
              <ProjectCard
                title="AI tools website (in construction)"
                description="Website giving user many options to automate AI related tasks"
                image="/images/ai-tools.svg"
                link="https://github.com/ta-da-ta/"
                tags={["OpenAI", "Next.js", "Python"]}
              />
            </div>
        </section>

        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-6xl flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© Marc Giannuzzi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

