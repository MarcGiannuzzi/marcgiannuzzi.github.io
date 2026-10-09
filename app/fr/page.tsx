import type { Metadata } from "next"
import Portfolio from "../components/portfolio"

export const metadata: Metadata = {
  title: "Marc Giannuzzi",
  description: "Portfolio présentant mes projets et compétences",
}

export default function Page() {
  return <Portfolio lang="fr" />
}
