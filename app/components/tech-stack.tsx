import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Cassandra",
      "CouchDB",
      "Pinecone",
      "Weaviate",
      "ChromaDB",
      "FAISS",
      "Milvus",
      "Neo4j",
      "ArangoDB",
      "InfluxDB",
      "AWS RDS",
      "DynamoDB",
      "Google BigQuery",
      "SQLite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Express.js",
      "TorchServe",
      "Elasticsearch",
      "gRPC",
      "Kafka",
      "RabbitMQ",
      "SQS",
      "AWS Lambda",
      "Vercel",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "Podman",
      "Kubernetes",
      "GitHub Actions",
      "GitLab CI/CD",
      "Terraform",
      "AWS IAM",
      "AWS",
      "GCP",
      "Azure",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Hugging Face",
      "LangChain",
      "LLamaIndex",
      "TensorFlow",
      "PyTorch",
      "MLflow",
      "Apache Airflow",
      "Grafana",
      "Apache Spark",
      "Dask",
      "Ray",
      "Polars",
      "Pytest",
      "Conda",
      "Pipenv",
      "Terraform",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "Streamlit",
      "Dash",
      "Next.js",
      "React",
      "shadcn/ui",
      "Material UI",
      "Chakra UI",
      "Tailwind CSS",
      "Redux",
      "Plotly",
      "D3.js",
      "Three.js",
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

