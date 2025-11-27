import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Data Engineering & Analytics (2025)",
    skills: [
      "Apache Spark",
      "Databricks",
      "dbt (Data Build Tool)",
      "Apache Airflow",
      "Apache Kafka",
      "Apache Beam",
      "Delta Lake",
      "Dagster",
      "Metabase",
      "Looker",
      "Tableau",
      "Power BI",
      "ClickHouse",
      "Pandas",
      "Polars",
      "DuckDB",
      "Parquet",
      "..."
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Cassandra",
      "Redis",
      "Elasticsearch",
      "CouchDB",
      "Pinecone",
      "Weaviate",
      "ChromaDB",
      "FAISS",
      "Milvus",
      "Neo4j",
      "ArangoDB",
      "InfluxDB",
      "TimescaleDB",
      "AWS RDS",
      "DynamoDB",
      "Google BigQuery",
      "Azure Cosmos DB",
      "SQLite",
      "MinIO",
      "AWS S3",
      "Azure Blob Storage",
      "Google Cloud Storage",
      "..."
    ],
  },
  {
    category: "ML/AI & LLMOps",
    skills: [
      "Hugging Face",
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "Anthropic Claude",
      "Google Gemini",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "MLflow",
      "Weights & Biases",
      "Neptune.ai",
      "Kubeflow",
      "TorchServe",
      "TensorFlow Serving",
      "Comet ML",
      "..."
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Express.js",
      "GraphQL",
      "gRPC",
      "REST APIs",
      "WebSockets",
      "Server-Sent Events",
      "RabbitMQ",
      "AWS SQS/SNS",
      "Azure Service Bus",
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "Vercel",
      "..."
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "Terraform",
      "Ansible",
      "CloudFormation",
      "AWS CDK",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Datadog",
      "AWS",
      "Google Cloud Platform",
      "Microsoft Azure",
      "..."
    ],
  },
  {
    category: "Frontend & Visualization",
    skills: [
      "Streamlit",
      "Gradio",
      "Dash",
      "Panel",
      "Bokeh",
      "Next.js 14+",
      "React 18+",
      "Vue.js 3",
      "shadcn/ui",
      "Material UI",
      "Ant Design",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Plotly",
      "D3.js",
      "Chart.js",
      "Three.js",
      "..."
    ],
  }
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

