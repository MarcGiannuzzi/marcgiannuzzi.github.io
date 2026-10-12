import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Award, GraduationCap, ExternalLink, Languages } from "lucide-react"
import Link from "next/link"
import type React from "react"
import TechStack from "./tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import { content, type Lang } from "../content"

// Logos are dark marks on transparent backgrounds: a white tile keeps them readable in dark mode.
function Logo({ src, size = "md" }: { src: string; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-6 w-6 p-0.5" : "h-12 w-12 p-1.5"
  return (
    <span className={`${box} inline-flex shrink-0 items-center justify-center rounded-md border bg-white`}>
      <img src={src} alt="" className="max-h-full max-w-full object-contain" />
    </span>
  )
}

// External link when a URL is known, plain text otherwise
function MaybeLink({ href, className, children }: { href?: string; className?: string; children: React.ReactNode }) {
  if (!href) return <span className={className}>{children}</span>
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={`${className ?? ""} hover:underline`}>
      {children}
    </Link>
  )
}

export default function Portfolio({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <div lang={lang} className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-6xl mx-auto flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href={lang === "fr" ? "/fr" : "/"}>
              <span className="hidden font-bold sm:inline-block">Marc Giannuzzi</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                {t.nav.about}
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                {t.nav.experience}
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                {t.nav.education}
              </Link>
              <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
                {t.nav.skills}
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={t.switchLang.href} aria-label={t.switchLang.ariaLabel} hrefLang={lang === "fr" ? "en" : "fr"}>
                <Languages className="h-4 w-4" />
                {t.switchLang.label}
              </Link>
            </Button>
            <ThemeToggle />
            <Button variant="outline">
              <Link href={t.resume.href} className="transition-colors hover:text-foreground/80">
                {t.resume.label}
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
                {t.hero.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.hero.subtitle[0]}
                <br></br>
                {t.hero.subtitle[1]}
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
            <div className="flex flex-wrap justify-center gap-4">
              {t.ventures.map((venture) => (
                <Button key={venture.href} variant="outline" asChild>
                  <Link href={venture.href} target="_blank">
                    {venture.logo && <Logo src={venture.logo} size="sm" />}
                    {venture.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            {t.sections.experience}
          </h2>

          <div className="space-y-8">
            {t.experiences.map((exp) => (
              <Card key={`${exp.company}-${exp.title}`}>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      {exp.partners ? (
                        <div className="flex gap-2">
                          {exp.partners.map((p) => (
                            <MaybeLink key={p.href} href={p.href}>
                              <Logo src={p.logo} />
                            </MaybeLink>
                          ))}
                        </div>
                      ) : (
                        <MaybeLink href={exp.url} className="flex gap-2">
                          {exp.logos.map((logo) => (
                            <Logo key={logo} src={logo} />
                          ))}
                        </MaybeLink>
                      )}
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>
                          {exp.partners ? (
                            <>
                              {exp.partners.map((p, i) => (
                                <span key={p.href}>
                                  {i > 0 && " × "}
                                  <MaybeLink href={p.href}>{p.name}</MaybeLink>
                                </span>
                              ))}
                              {exp.location && ` • ${exp.location}`}
                            </>
                          ) : (
                            <MaybeLink href={exp.url}>{exp.company}</MaybeLink>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  {exp.links && (
                    <div className="flex flex-wrap gap-4 mb-3">
                      {exp.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                        >
                          {link.logo ? <Logo src={link.logo} size="sm" /> : <ExternalLink className="h-3 w-3" />}
                          {link.label}
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  )}
                  {exp.bullets && (
                    <ul className="text-sm text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  {exp.missions && (
                    <div className="mt-6 space-y-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {t.missionsLabel}
                      </h4>
                      {exp.missions.map((mission) => (
                        <div key={mission.client} className="rounded-lg border-l-2 border-primary bg-muted/40 p-4">
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div className="flex items-center gap-3">
                              {mission.clientLogo && (
                                <MaybeLink href={mission.clientUrl}>
                                  <Logo src={mission.clientLogo} />
                                </MaybeLink>
                              )}
                              <div>
                                <p className="font-semibold">{mission.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  <MaybeLink href={mission.clientUrl}>{mission.client}</MaybeLink>
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="shrink-0">{mission.period}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{mission.description}</p>
                          {mission.bullets && (
                            <ul className="text-sm text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                              {mission.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {mission.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* View More Button */}
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                <Link href={t.resume.href} target="_blank" className="flex items-center gap-2">
                  {t.viewFullExperience}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="education" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            {t.sections.education}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">{t.sections.educationSub}</h3>
              </div>

              {t.education.map((edu) => (
                <Card key={edu.school}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <MaybeLink href={edu.url}>
                        <Logo src={edu.logo} />
                      </MaybeLink>
                      <div>
                        <CardTitle>
                          <MaybeLink href={edu.url}>{edu.school}</MaybeLink>
                        </CardTitle>
                        <CardDescription>{edu.meta}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>
                    {edu.bullets && (
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        {edu.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {edu.tags && (
                      <div className="flex flex-wrap gap-2">
                        {edu.tags.map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">{t.sections.certifications}</h3>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <MaybeLink href={t.certifications.url}>
                      <Logo src={t.certifications.logo} />
                    </MaybeLink>
                    <div>
                      <CardTitle>
                        <MaybeLink href={t.certifications.url}>{t.certifications.provider}</MaybeLink>
                      </CardTitle>
                      <CardDescription>{t.certifications.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {t.certifications.items.map((cert) => (
                    <div key={cert.name} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.period}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            {t.sections.techStack}
          </h2>
          <TechStack lang={lang} />
        </section>
      </main>

      <footer className="border-t">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">{t.footer}</p>
          <div className="flex gap-4 sm:ml-auto">
            {t.ventures.map((venture) => (
              <Link
                key={venture.href}
                href={venture.href}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs text-gray-500 hover:underline dark:text-gray-400"
              >
                {venture.logo && <Logo src={venture.logo} size="sm" />}
                {venture.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
