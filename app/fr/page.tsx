import type { Metadata } from "next"
import Portfolio from "../components/portfolio"

export const metadata: Metadata = {
  title: "Marc Giannuzzi",
  description:
    "Marc Giannuzzi : data engineering, IA et cybersécurité, de l'architecture à la mise en production. Fondateur de Tadata et Waiyers.",
}

export default function Page() {
  return <Portfolio lang="fr" />
}
