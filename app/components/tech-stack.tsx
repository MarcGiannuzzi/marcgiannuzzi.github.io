import { Card } from "@/components/ui/card"
import { Brain, Cloud, Code2, Database, Layout, Server, ShieldCheck, Workflow, type LucideIcon } from "lucide-react"
import type { Lang } from "../content"

interface Category {
  icon: LucideIcon
  title: Record<Lang, string>
  blurb: Record<Lang, string>
  skills: string[]
}

// Sources: CV (github.com/MarcGiannuzzi/cv) and tadata.fr expertise areas.
const categories: Category[] = [
  {
    icon: Workflow,
    title: { en: "Data Engineering", fr: "Data Engineering" },
    blurb: {
      en: "Lakehouses, pipelines and orchestration at scale.",
      fr: "Lakehouses, pipelines et orchestration à grande échelle.",
    },
    skills: ["Apache Spark", "Databricks", "dbt", "Apache Airflow", "Apache Kafka", "Apache Iceberg", "Delta Lake", "Dagster", "Apache Beam", "Kinesis", "Pandas", "Polars", "DuckDB", "Parquet", "Power BI", "Looker", "Metabase"],
  },
  {
    icon: Brain,
    title: { en: "AI, ML & LLMOps", fr: "IA, ML & LLMOps" },
    blurb: {
      en: "Generative AI, agents, RAG and MLOps, from scoping to production.",
      fr: "IA générative, agents, RAG et MLOps, du cadrage à la production.",
    },
    skills: ["LLM APIs", "LangGraph", "MCP", "RAG", "MLflow", "PyTorch", "scikit-learn", "Hugging Face", "LangChain", "LlamaIndex", "vLLM", "TensorFlow", "XGBoost", "Kubeflow", "Azure AI Studio", "DeepAR", "Temporal Fusion Transformer"],
  },
  {
    icon: ShieldCheck,
    title: { en: "Cybersecurity & Compliance", fr: "Cybersécurité & Conformité" },
    blurb: {
      en: "Security architecture, audits, cloud security and DevSecOps.",
      fr: "Architecture sécurité, audits, sécurité cloud et DevSecOps.",
    },
    skills: ["Security Architecture", "NIS2", "DORA", "ISO 27001", "DevSecOps", "EBIOS RM", "NIST CSF 2.0", "OWASP", "ANSSI", "SLSA", "Sigstore", "Elastic Stack (ELK)", "Splunk"],
  },
  {
    icon: Cloud,
    title: { en: "Cloud & DevOps", fr: "Cloud & DevOps" },
    blurb: {
      en: "Kubernetes, infrastructure as code, CI/CD and FinOps on hyperscalers and European clouds.",
      fr: "Kubernetes, infrastructure as code, CI/CD et FinOps sur hyperscalers et clouds européens.",
    },
    skills: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker", "GitHub Actions", "Azure", "Scaleway", "OVHcloud", "Helm", "Skaffold", "Argo CD", "GitLab CI/CD", "Jenkins", "Prometheus", "Grafana", "OpenTelemetry", "OpenCost"],
  },
  {
    icon: Database,
    title: { en: "Databases & Storage", fr: "Bases de données & Stockage" },
    blurb: {
      en: "Relational, document, time-series and vector stores.",
      fr: "Bases relationnelles, documentaires, séries temporelles et vectorielles.",
    },
    skills: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "AWS S3", "SQL Server", "Teradata", "DynamoDB", "ClickHouse", "Elasticsearch", "InfluxDB", "Neo4j", "Pinecone", "ChromaDB", "Google Cloud Storage"],
  },
  {
    icon: Server,
    title: { en: "Backend & APIs", fr: "Backend & APIs" },
    blurb: {
      en: "Services and APIs built for throughput and low latency.",
      fr: "Services et APIs conçus pour le débit et la faible latence.",
    },
    skills: ["FastAPI", "gRPC", "REST APIs", "AWS Lambda", "Django", "Flask", "GraphQL", "WebSockets", "RabbitMQ", "SQS / SNS", "Azure Functions", "Cloud Functions"],
  },
  {
    icon: Code2,
    title: { en: "Languages", fr: "Langages" },
    blurb: { en: "What I write every day.", fr: "Ce que j'écris au quotidien." },
    skills: ["Python", "SQL", "TypeScript", "Go", "Dart", "JavaScript", "Bash", "PowerShell"],
  },
  {
    icon: Layout,
    title: { en: "Apps & Frontend", fr: "Applications & Frontend" },
    blurb: {
      en: "Web, mobile and desktop clients, plus data apps.",
      fr: "Clients web, mobile et desktop, et applications data.",
    },
    skills: ["Flutter", "Next.js", "React", "Tailwind CSS", "shadcn/ui", "Streamlit", "Gradio", "Dash", "Plotly", "D3.js"],
  },
]

export default function TechStack({ lang = "en" }: { lang?: Lang }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Card key={category.title.en} className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{category.title[lang]}</h3>
                <p className="text-sm text-muted-foreground">{category.blurb[lang]}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
