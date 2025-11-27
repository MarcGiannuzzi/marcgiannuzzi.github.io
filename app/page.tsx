import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-6xl mx-auto flex h-14 items-center px-4">
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
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline">
              <Link href="https://github.com/MarcGiannuzzi/cv/blob/main/Marc_Giannuzzi_CV_English.pdf" className="transition-colors hover:text-foreground/80">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Data Engineer / ML Ops  🚀
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Building digital experiences with modern technologies. 
                <br></br>
                Focused on creating software & data solutions.
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Professional Experience</h2>

          <div className="space-y-8">
            {/* Current Position */}
            <Card>

            <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Founder</CardTitle>
                    <CardDescription>Waiyer • Paris</CardDescription>
                  </div>
                  <Badge variant="outline">Sept 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Developing tools for automating IA : https://waiyer.com
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Bazel</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Typescrip</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Data Architect</CardTitle>
                    <CardDescription>LCL (Le Crédit Lyonnais) via SFEIR • Villejuif</CardDescription>
                  </div>
                  <Badge variant="outline">Apr 2025 - Sept 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Leading the optimization of LCL's internal SNI entity organization and implementing analytical dashboards for CODIR
                  and squad leaders. Consolidating data from diverse sources and orchestrating automated processing through scalable,
                  maintainable architecture.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                  <li>Conducted comprehensive SI audit comparing PostgreSQL, MongoDB, and Teradata</li>
                  <li>Designed hybrid technical architecture (on-premise first with GCP cloud equivalents)</li>
                  <li>Orchestrated Kubernetes deployment of dockerized Python scripts</li>
                  <li>Integrated Jira APIs and other enterprise tools into data pipelines</li>
                  <li>Created dynamic Power BI dashboards for executive leadership</li>
                  <li>Led technical team of 2 data engineers and 1 Product Owner</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">GCP</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">GitLab CI/CD</Badge>
                </div>
              </CardContent>
            </Card>

            {/* SFEIR */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Data Consultant</CardTitle>
                    <CardDescription>SFEIR • Neuilly-sur-Seine</CardDescription>
                  </div>
                  <Badge variant="outline">Mar 2023 - Sept 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Working at France's premier Google Cloud Platform partner (Services 2023, Training 2024, EMEA 2025),
                  specializing in software development and technological transformation for enterprise clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">GCP</Badge>
                  <Badge variant="secondary">Technical Recruitment</Badge>
                  <Badge variant="secondary">Cloud Architecture</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Engie */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Data Engineer</CardTitle>
                    <CardDescription>Engie via Visian • Paris</CardDescription>
                  </div>
                  <Badge variant="outline">Jan 2023 - Jan 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Core member of agile team developing Mon Bonus Engie/Ecodefi+, ICE, and Ecogestes Dynamiques products
                  in SAFe framework, serving over 1.6M total customers.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                  <li>Built REST APIs handling 100k+ daily requests with sub-second latency</li>
                  <li>Architected AWS microservices and digital platforms</li>
                  <li>Scaled Deep Learning algorithms (DeepAR, Temporal Fusion Transformer)</li>
                  <li>Optimized database flows with advanced indexing and structure improvements</li>
                  <li>Led technology migration roadmap within SAFe train</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS Lambda</Badge>
                  <Badge variant="secondary">Databricks</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">Apache Airflow</Badge>
                  <Badge variant="secondary">MLflow</Badge>
                  <Badge variant="secondary">DynamoDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visian */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Data Consultant & Technical Lead</CardTitle>
                    <CardDescription>Visian • La Défense</CardDescription>
                  </div>
                  <Badge variant="outline">Jan 2023 - Jan 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Specialized consulting in large-scale data projects while leading internal innovation initiatives.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                  <li>Directed Pysquad project for internal digital product development</li>
                  <li>Coordinated generic AI implementation for multimodal inference tasks using Azure AI Studio</li>
                  <li>Built data platform for sales team to manage missions, prospects, and consultants</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Azure AI Studio</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Streamlit</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Aqua Digital Rising */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Lead Data Scientist</CardTitle>
                    <CardDescription>Aqua Digital Rising • Paris</CardDescription>
                  </div>
                  <Badge variant="outline">Aug 2021 - Oct 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Led data science initiatives for fintech startup revolutionizing sports betting through advanced analytics.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                  <li>Managed multi-database architecture (MongoDB, SQL Server, HDF5) with hundreds of GBs</li>
                  <li>Developed highly configurable REST API for front-end data aggregation</li>
                  <li>Implemented real-time statistics updates using RabbitMQ and Redis caching</li>
                  <li>Configured Azure cloud services (Functions, Web Services, Artifacts, Pipelines)</li>
                  <li>Coordinated team of 2 engineers (data scientist and front-end developer)</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL Server</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">RabbitMQ</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">InfluxDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* View More Button */}
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                <Link href="https://github.com/MarcGiannuzzi/cv/blob/main/Marc_Giannuzzi_CV_English.pdf" target="_blank" className="flex items-center gap-2">
                  View Full Experience
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="education" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Education & Certifications</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>ESILV - École Supérieure d'Ingénieurs Léonard de Vinci</CardTitle>
                  <CardDescription>2018 - 2021 • Courbevoie, France</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Master's in Computer Science, Big Data & Connected Objects with specialization in Data Science.  
                    Focused on statistical analysis, machine learning algorithms, and large-scale data processing systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Science</Badge>
                    <Badge variant="outline">Big Data</Badge>
                    <Badge variant="outline">IoT</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>University of California, Riverside</CardTitle>
                  <CardDescription>2019 - 2020 • Exchange Program</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    International exchange focusing on advanced computer science and data mining techniques.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>CS 235: Data Mining Techniques</li>
                    <li>CS 171: Introduction to Machine Learning and Data Mining</li>
                    <li>CS 009: Python Programming</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Google Cloud Platform</CardTitle>
                  <CardDescription>Professional Certifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-sm mb-1">Professional Data Engineer</h4>
                    <p className="text-xs text-muted-foreground">April 2025 - April 2027</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Expertise in designing, building, and maintaining data processing systems on Google Cloud Platform.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-sm mb-1">Associate Cloud Engineer</h4>
                    <p className="text-xs text-muted-foreground">April 2025 - April 2028</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Proficiency in deploying applications, monitoring operations, and managing enterprise cloud solutions.
                    </p>
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
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© Marc Giannuzzi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

