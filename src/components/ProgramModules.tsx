"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Cpu, Layers, Database, ShieldCheck, LineChart, ArrowRight, X, Sparkles, CheckCircle2, BookOpen, Terminal, ChevronDown, Code, CheckSquare, Layers as LayersIcon } from "lucide-react";

type CourseCategory = "All" | "Generative AI & LLMs" | "Cloud Native & Kubernetes" | "Data Engineering" | "Zero-Trust Security" | "AI Leadership";

interface SyllabusItem {
  week: string;
  topic: string;
  details: string;
  labs: { title: string; desc: string }[];
  codeSnippet: { language: string; code: string };
  acceptanceCriteria: string[];
}

interface CourseTrack {
  id: string;
  title: string;
  category: CourseCategory;
  duration: string;
  level: string;
  description: string;
  tools: string[];
  icon: any;
  color: string;
  syllabus: SyllabusItem[];
  prerequisites: string[];
}

const courseTracks: CourseTrack[] = [
  {
    id: "genai-architect",
    title: "Enterprise RAG & Agentic AI Architect",
    category: "Generative AI & LLMs",
    duration: "12 Weeks (Part-Time)",
    level: "Advanced",
    description: "Build, fine-tune, and deploy production autonomous AI agents and vector retrieval pipelines over proprietary corporate data securely.",
    tools: ["PyTorch", "LangChain", "Pinecone", "OpenAI API", "vLLM"],
    icon: Cpu,
    color: "from-cyan-500 to-blue-600",
    syllabus: [
      {
        week: "Weeks 1-3",
        topic: "Transformer Architecture & Prompt Engineering at Scale",
        details: "Deep dive into attention mechanisms, tokenization boundaries, and structured JSON generation across multi-tenant APIs.",
        labs: [
          { title: "Lab 1.1: KV-Cache Profiling & Latency Benchmarks", desc: "Benchmark token generation throughput and KV-cache memory utilization when running local Llama-3-8B vs OpenAI endpoints." },
          { title: "Lab 1.2: Structured JSON & Pydantic Schema Guardrails", desc: "Build strict schema validation pipelines that enforce valid JSON responses and automated retry loops on malformed outputs." },
          { title: "Lab 1.3: Private VPC Prompt Sandbox", desc: "Configure zero-data-retention API gateway endpoints with regex + NER PII redaction before requests hit public LLMs." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 1.2: Pydantic Schema Enforcement with Guardrails
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser

class EnterpriseLeadDecision(BaseModel):
    is_qualified: bool = Field(description="True if budget > $50k and timeframe < 6 months")
    confidence_score: float = Field(description="Score between 0.0 and 1.0")
    recommended_track: str = Field(description="Exact course track ID")

parser = PydanticOutputParser(pydantic_object=EnterpriseLeadDecision)
llm = ChatOpenAI(model="gpt-4o", temperature=0.0).bind(response_format={"type": "json_object"})`
        },
        acceptanceCriteria: [
          "100% structured JSON compliance under 10,000 stress-tested malformed prompts",
          "Sub-150ms PII masking execution time over 500kb text inputs",
          "Automated fallback routing between primary and secondary LLM providers"
        ]
      },
      {
        week: "Weeks 4-7",
        topic: "High-Accuracy RAG & Hybrid Search Pipelines",
        details: "Vector DB indexing, reranking models, hierarchical chunking strategies, and preventing hallucination.",
        labs: [
          { title: "Lab 2.1: Hybrid Search with Reciprocal Rank Fusion (RRF)", desc: "Combine BM25 sparse keyword search with dense embedding similarity to maximize precision on technical jargon." },
          { title: "Lab 2.2: Cross-Encoder Reranking at Scale", desc: "Implement BAAI/bge-reranker models to re-score top-50 vector retrieved documents down to top-5 high-confidence contexts." },
          { title: "Lab 2.3: Automated Evaluation Harness (RAGAS)", desc: "Build CI/CD automated regression tests measuring faithfulness, context relevancy, and answer precision." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 2.2: Hybrid Retrieval + Cross-Encoder Reranking
from pinecone import Pinecone
from sentence_transformers import CrossEncoder

reranker = CrossEncoder("BAAI/bge-reranker-large")
dense_hits = index.query(vector=query_emb, top_k=30, include_metadata=True)
sparse_hits = index.query(sparse_vector=bm25_emb, top_k=30, include_metadata=True)

merged_docs = apply_reciprocal_rank_fusion(dense_hits, sparse_hits)
pairs = [[query_text, doc['metadata']['text']] for doc in merged_docs]
scores = reranker.predict(pairs)
top_5_context = [doc for _, doc in sorted(zip(scores, merged_docs), reverse=True)[:5]]`
        },
        acceptanceCriteria: [
          "94.5%+ retrieval precision verified across 1,000 enterprise technical documentation benchmarks",
          "Sub-200ms end-to-end vector retrieval + reranking latency under 50 concurrent requests",
          "Zero hallucinated facts when answering from contradictory policy documents"
        ]
      },
      {
        week: "Weeks 8-10",
        topic: "Fine-Tuning Open-Source LLMs (Llama 3, Mistral)",
        details: "LoRA/QLoRA parameter-efficient fine-tuning on enterprise domain data using multi-GPU clusters and vLLM serving.",
        labs: [
          { title: "Lab 3.1: QLoRA 4-bit Quantization Setup", desc: "Fine-tune Llama-3-70B on proprietary customer support logs using single-node multi-GPU A100 instances." },
          { title: "Lab 3.2: DPO (Direct Preference Optimization)", desc: "Align fine-tuned weights using enterprise human preference pairs to eliminate toxic and non-compliant responses." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 3.1: QLoRA Parameter-Efficient Fine-Tuning Configuration
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype="bfloat16"
)
lora_config = LoraConfig(
    r=16, lora_alpha=32, target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05, bias="none", task_type="CAUSAL_LM"
)`
        },
        acceptanceCriteria: [
          "Checkpoints maintain stable validation loss over 5 epochs with zero catastrophic forgetting",
          "Fine-tuned model outperforms baseline GPT-3.5 on proprietary domain accuracy benchmarks by +22%",
          "vLLM inference throughput reaches 850+ tokens/second per node"
        ]
      },
      {
        week: "Weeks 11-12",
        topic: "Production Capstone: Autonomous AI Agent Pod",
        details: "Deploying multi-agent tool-calling workflows with automated guardrails, human-in-the-loop approvals, and full telemetry.",
        labs: [
          { title: "Lab 4.1: LangGraph Multi-Agent Orchestration", desc: "Build specialized Supervisor, Researcher, Code Executor, and Auditor agents that collaboratively resolve Jira tickets." },
          { title: "Lab 4.2: Human-in-the-Loop Interruption State", desc: "Implement persistent graph checkpoints that pause execution when actions exceed $500 financial or production DB write limits." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 4.1: LangGraph Stateful Multi-Agent Supervisor
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated, Sequence
from langchain_core.messages import BaseMessage

class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    next_agent: str
    requires_human_approval: bool

workflow = StateGraph(AgentState)
workflow.add_node("supervisor", supervisor_node)
workflow.add_node("code_executor", code_executor_node)
workflow.add_conditional_edges("supervisor", lambda state: state["next_agent"])`
        },
        acceptanceCriteria: [
          "Agents successfully resolve 88% of standard multi-step synthetic DevOps tickets autonomously",
          "100% interception rate on prohibited SQL mutation operations requiring manual supervisor sign-off",
          "Cryptographic hash of completed capstone automatically submitted to blockchain badge ledger"
        ]
      }
    ],
    prerequisites: ["Strong Python 3.x proficiency", "Basic working knowledge of REST APIs & Git", "Foundational understanding of machine learning concepts"]
  },
  {
    id: "k8s-service-mesh",
    title: "Zero-Downtime Kubernetes & Service Mesh",
    category: "Cloud Native & Kubernetes",
    duration: "8 Weeks (Part-Time)",
    level: "Intermediate - Advanced",
    description: "Master multi-cluster container orchestration, GitOps continuous delivery, and high-throughput microservice scaling across AWS and GCP.",
    tools: ["Docker", "Kubernetes", "Istio", "Terraform", "ArgoCD"],
    icon: Layers,
    color: "from-violet-500 to-indigo-600",
    syllabus: [
      {
        week: "Weeks 1-2",
        topic: "Container Hardening & Kubernetes Core Architecture",
        details: "Pod lifecycle management, custom resource definitions (CRDs), security contexts, and RBAC least-privilege controls.",
        labs: [
          { title: "Lab 1.1: Rootless Pod Security Standards", desc: "Enforce Restricted Pod Security Policies preventing privilege escalation and mounting host filesystems." },
          { title: "Lab 1.2: Custom Resource Definition (CRD) & Operator Setup", desc: "Write custom controllers in Go that automatically reconcile database backup jobs." }
        ],
        codeSnippet: {
          language: "yaml",
          code: `# Lab 1.1: Hardened Pod Security Context Configuration
apiVersion: v1
kind: Pod
metadata:
  name: enterprise-api-pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 10001
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: api-server
    image: skillforge/api:v2.4
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]`
        },
        acceptanceCriteria: [
          "Zero critical CVEs reported by Trivy and Kubebench security scanners",
          "Pod starts cleanly under non-root UID 10001 with read-only filesystem enabled"
        ]
      },
      {
        week: "Weeks 3-5",
        topic: "Service Mesh Routing & Mutual TLS (Istio)",
        details: "Canary deployments, circuit breaking, distributed tracing, and automated traffic shadowing across microservices.",
        labs: [
          { title: "Lab 2.1: Zero-Trust mTLS Strict Mode", desc: "Configuring PeerAuthentication manifests ensuring 100% encrypted service-to-service communication inside the cluster." },
          { title: "Lab 2.2: Automated 10% Canary Shadowing", desc: "Route 10% of production traffic to new v2 microservice builds while monitoring error rates via Prometheus." }
        ],
        codeSnippet: {
          language: "yaml",
          code: `# Lab 2.2: Istio VirtualService Canary Routing
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: billing-service-router
spec:
  hosts:
  - billing-service.enterprise.svc.cluster.local
  http:
  - route:
    - destination:
        host: billing-service
        subset: v1
      weight: 90
    - destination:
        host: billing-service
        subset: v2-canary
      weight: 10`
        },
        acceptanceCriteria: [
          "Automated rollback triggered within 15 seconds if v2 canary error rate exceeds 0.5%",
          "End-to-end distributed tracing overhead remains under 3ms latency delta per request"
        ]
      },
      {
        week: "Weeks 6-8",
        topic: "GitOps Continuous Delivery & Capstone Deployment",
        details: "Automating multi-region failover and infrastructure as code using ArgoCD & Terraform across hybrid cloud environments.",
        labs: [
          { title: "Lab 3.1: ArgoCD Multi-Cluster ApplicationSet", desc: "Deploy identical Git-synchronized applications across US-East and EU-West Kubernetes clusters simultaneously." },
          { title: "Lab 3.2: Disaster Recovery Failover Simulation", desc: "Simulate complete AWS availability zone outage and verify automated DNS failover under 60 seconds." }
        ],
        codeSnippet: {
          language: "yaml",
          code: `# Lab 3.1: ArgoCD GitOps Application Synchronization
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: global-fintech-core
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/skillforge-org/k8s-manifests.git'
    targetRevision: HEAD
    path: charts/production
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: prod
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`
        },
        acceptanceCriteria: [
          "ArgoCD self-heals manual cluster drift within 30 seconds of unauthorized modification",
          "Terraform state locks cleanly across concurrent CI/CD runs using DynamoDB backend"
        ]
      }
    ],
    prerequisites: ["Experience with Linux command line", "Working knowledge of Docker containerization", "Basic cloud infrastructure background"]
  },
  {
    id: "data-lakehouse",
    title: "Real-Time Data Streaming & Lakehouse Mastery",
    category: "Data Engineering",
    duration: "10 Weeks (Part-Time)",
    level: "Advanced",
    description: "Architect high-throughput event processing engines and modern delta lakehouse architectures capable of handling petabytes at sub-second latency.",
    tools: ["Apache Spark", "Kafka", "Snowflake", "dbt", "Airflow"],
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    syllabus: [
      {
        week: "Weeks 1-3",
        topic: "Distributed Stream Processing with Apache Kafka & Spark",
        details: "Partitioning strategies, exactly-once semantics, stateful windowed aggregations, and dead-letter queue recovery.",
        labs: [
          { title: "Lab 1.1: Kafka Exactly-Once Transactional Producers", desc: "Configure idempotent producers and read_committed consumers to prevent duplicate financial transaction events." },
          { title: "Lab 1.2: Spark Structured Streaming Watermarks", desc: "Handle out-of-order sensor telemetry streams using 15-minute event-time watermarking." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 1.2: Spark Structured Streaming with Watermarking
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, window, expr

spark = SparkSession.builder.appName("TelemetryStreamProcessor").getOrCreate()
rawStream = spark.readStream.format("kafka").option("kafka.bootstrap.servers", "broker:9092").option("subscribe", "iot-events").load()

aggregated = rawStream.selectExpr("CAST(value AS STRING) as json") \\
    .withWatermark("timestamp", "15 minutes") \\
    .groupBy(window(col("timestamp"), "5 minutes"), col("device_id")) \\
    .agg({"temperature": "avg"})`
        },
        acceptanceCriteria: [
          "Zero data loss or duplicate records under simulated broker node failure during high load",
          "Throughput sustained at 250,000 messages/sec with sub-250ms end-to-end processing delay"
        ]
      },
      {
        week: "Weeks 4-7",
        topic: "Modern Lakehouse Architecture (Snowflake & Delta Lake)",
        details: "ACID transactions on data lakes, time travel, Z-order indexing, and automated data quality assertions.",
        labs: [
          { title: "Lab 2.1: Delta Lake Optimization & Z-Ordering", desc: "Compact small parquet files and apply Z-Order multi-dimensional clustering on high-cardinality customer IDs." },
          { title: "Lab 2.2: Snowflake Zero-Copy Cloning for CI/CD", desc: "Automate instantaneous zero-copy database snapshots before executing dbt transformation migrations." }
        ],
        codeSnippet: {
          language: "sql",
          code: `-- Lab 2.1: Delta Lake Table Optimization & Z-Order Clustering
OPTIMIZE delta.'/mnt/lakehouse/transactions'
ZORDER BY (customer_id, transaction_date);

-- Time Travel Query to inspect schema prior to ingestion anomaly
SELECT * FROM delta.'/mnt/lakehouse/transactions'
TIMESTAMP AS OF '2026-07-20 18:30:00';`
        },
        acceptanceCriteria: [
          "Query execution speed improved by +4.8x post Z-ordering on benchmark analytical queries",
          "Automated dbt test suite blocks deployment if primary keys or nullability constraints fail"
        ]
      },
      {
        week: "Weeks 8-10",
        topic: "Automated Data Pipelines & Capstone Architecture",
        details: "Orchestrating complex DAGs with Apache Airflow, integrating dbt data lineage, and building real-time dashboards.",
        labs: [
          { title: "Lab 3.1: Dynamic Airflow Task Generation", desc: "Build dynamic Airflow DAGs that auto-discover new database schemas and spin up parallel ingestion workers." },
          { title: "Lab 3.2: Capstone End-to-End Enterprise Lakehouse", desc: "Deploy complete streaming + batch unified pipeline architecture processing simulated NASDAQ tick data." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 3.1: Dynamic Airflow DAG with TaskGroup
from airflow import DAG
from airflow.utils.task_group import TaskGroup
from datetime import datetime

with DAG("enterprise_unified_pipeline", start_date=datetime(2026, 1, 1), schedule_interval="@daily") as dag:
    with TaskGroup("schema_ingestion_group") as ingestion_group:
        for schema in ["billing", "users", "telemetry"]:
            # Dynamically instantiate ingestion tasks for each target schema
            create_ingestion_task(schema)`
        },
        acceptanceCriteria: [
          "Airflow SLA alerting triggers webhook within 2 minutes if data freshness threshold is breached",
          "Full data lineage graph verifiable from source Kafka topic to target BI dashboard view"
        ]
      }
    ],
    prerequisites: ["Solid SQL and Python background", "Experience working with relational databases or ETL pipelines"]
  },
  {
    id: "devsecops-hardening",
    title: "Zero-Trust Cloud & DevSecOps Hardening",
    category: "Zero-Trust Security",
    duration: "6 Weeks (Part-Time)",
    level: "Intermediate",
    description: "Embed automated vulnerability assessment, continuous threat modeling, and immutable zero-trust boundaries into your CI/CD pipelines.",
    tools: ["HashiCorp Vault", "CrowdStrike", "AWS IAM", "Burp Suite", "SonarQube"],
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-600",
    syllabus: [
      {
        week: "Weeks 1-2",
        topic: "Zero-Trust Architecture & IAM Hardening",
        details: "Least-privilege cloud policy design, temporary credential federation (AWS IAM Roles Anywhere), and secret rotation.",
        labs: [
          { title: "Lab 1.1: HashiCorp Vault Dynamic Secrets", desc: "Configure Vault to issue ephemeral 15-minute AWS IAM credentials and database passwords that self-expire." },
          { title: "Lab 1.2: AWS Service Control Policy (SCP) Boundaries", desc: "Enforce strict organizational SCP limits preventing root access or disabling CloudTrail logging across all accounts." }
        ],
        codeSnippet: {
          language: "json",
          code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PreventCloudTrailTampering",
      "Effect": "Deny",
      "Action": ["cloudtrail:StopLogging", "cloudtrail:DeleteTrail"],
      "Resource": "*",
      "Condition": {
        "StringNotLike": { "aws:PrincipalArn": "arn:aws:iam::*:role/BreakGlassAdmin" }
      }
    }
  ]
}`
        },
        acceptanceCriteria: [
          "100% elimination of hardcoded static API keys across application source code repositories",
          "Access denied immediately upon Vault lease expiration without requiring manual revocation"
        ]
      },
      {
        week: "Weeks 3-4",
        topic: "Automated Pipeline Security (SAST/DAST/SCA)",
        details: "Integrating container vulnerability scanning, static analysis, and automated secret detection inside GitHub Actions.",
        labs: [
          { title: "Lab 2.1: Pre-Commit & GitHub Actions Security Guardrails", desc: "Embed Semgrep SAST and Gitleaks checks that automatically block pull requests containing sensitive tokens." },
          { title: "Lab 2.2: Automated DAST Container Scanning", desc: "Trigger OWASP ZAP headless dynamic scans against staging environments after every successful deployment." }
        ],
        codeSnippet: {
          language: "yaml",
          code: `# Lab 2.1: GitHub Actions DevSecOps Guardrail Workflow
name: Enterprise Security Scan
on: [pull_request]
jobs:
  security-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Gitleaks Secret Scanner
        uses: gitleaks/gitleaks-action@v2
      - name: Run Trivy Vulnerability Scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'`
        },
        acceptanceCriteria: [
          "Pipeline exits with fatal code 1 within 45 seconds when testing against known CVE injections",
          "Automated SBOM (Software Bill of Materials) generated in CycloneDX format on each release build"
        ]
      },
      {
        week: "Weeks 5-6",
        topic: "Incident Response Playbooks & Capstone Audit",
        details: "Simulating red/blue team exercises, automated containment workflows, and SOC2 compliance reporting.",
        labs: [
          { title: "Lab 3.1: Automated Incident Containment Lambda", desc: "Build AWS EventBridge + Lambda automation that instantly isolates compromised EC2 instances upon GuardDuty alerts." },
          { title: "Lab 3.2: Capstone Enterprise Security Audit", desc: "Execute complete penetration and compliance validation across simulated banking infrastructure." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 3.1: Automated Containment Lambda Handler
import boto3

ec2 = boto3.client('ec2')

def isolate_compromised_instance(event, context):
    instance_id = event['detail']['resource']['instanceDetails']['instanceId']
    # Immediately swap security group to isolated forensic network boundary
    ec2.modify_instance_attribute(
        InstanceId=instance_id,
        Groups=['sg-0forensicisolationgroup99']
    )
    return {"status": "ISOLATED", "target": instance_id}`
        },
        acceptanceCriteria: [
          "Automated isolation executes under 3 seconds from GuardDuty alert generation timestamp",
          "Full audit logs automatically forwarded to immutable WORM (Write Once Read Many) S3 bucket"
        ]
      }
    ],
    prerequisites: ["Basic understanding of CI/CD pipelines", "Familiarity with cloud platforms (AWS, GCP, or Azure)"]
  },
  {
    id: "ai-leadership",
    title: "Staff Engineer & CTO AI Strategy Accelerator",
    category: "AI Leadership",
    duration: "4 Weeks (Intensive)",
    level: "Executive",
    description: "Equip engineering leaders with frameworks for AI adoption, cloud FinOps governance, technical debt mitigation, and engineering team velocity scaling.",
    tools: ["LLM Governance", "Cloud FinOps", "DORA Metrics", "AI Ethics"],
    icon: LineChart,
    color: "from-rose-500 to-pink-600",
    syllabus: [
      {
        week: "Week 1",
        topic: "Evaluating Enterprise AI Use Cases & Build vs. Buy",
        details: "Assessing ROI, model licensing costs, token pricing economics, and long-term maintenance overhead across engineering pods.",
        labs: [
          { title: "Lab 1.1: AI FinOps & Token Cost Matrix Modeling", desc: "Build comprehensive financial projections comparing self-hosted Llama-3-70B on AWS EC2 vs OpenAI API at 50M tokens/day." },
          { title: "Lab 1.2: Technical Debt & Architectural Readiness Assessment", desc: "Audit existing monolith and microservice boundaries to identify high-ROI AI integration insertion points." }
        ],
        codeSnippet: {
          language: "yaml",
          code: `# Lab 1.1: Enterprise AI FinOps Governance Policy Matrix
governance_tier: Tier_1_Mission_Critical
budget_controls:
  monthly_hard_cap_usd: 45000
  alert_threshold_percentage: 80
routing_preferences:
  default_tier: "anthropic-claude-3.5-sonnet"
  fallback_tier: "local-vllm-mistral-7b"
data_retention:
  allow_provider_training: false
  max_cache_ttl_hours: 24`
        },
        acceptanceCriteria: [
          "Delivered executive presentation deck with clear 3-year TCO breakdown approved by finance board",
          "Automated cost anomaly alerting configured in CloudWatch triggered at $250/hour burn rate"
        ]
      },
      {
        week: "Week 2",
        topic: "AI Governance, Data Privacy & SOC2 Compliance",
        details: "Structuring zero-data-retention agreements, PII guardrails, and enterprise intellectual property protection policies.",
        labs: [
          { title: "Lab 2.1: Drafting Enterprise AI Acceptable Use Policy (AUP)", desc: "Create enforceable developer guidelines governing AI copilot code usage and open-source license contamination." },
          { title: "Lab 2.2: Automated Legal & Compliance Audit Harness", desc: "Configure automated scanning tools that verify all vendor contracts meet zero-data-retention clauses." }
        ],
        codeSnippet: {
          language: "bash",
          code: `# Lab 2.2: Automated Compliance Verification Script
#!/usr/bin/env bash
echo "Running Organization AI Governance Policy Check..."
gitleaks detect --source=. --report-path=governance-audit.json
# Check if prohibited public AI endpoints exist inside repository
if grep -rn "api.openai.com/v1" src/ --exclude-dir=node_modules; then
  echo "ERROR: Direct public OpenAI calls detected! Must route through secure Enterprise Gateway."
  exit 1
fi`
        },
        acceptanceCriteria: [
          "100% compliance rating achieved across simulated third-party SOC2 Type II audit checklist",
          "Zero instances of unauthorized public endpoint calls permitted in CI/CD pipeline checks"
        ]
      },
      {
        week: "Weeks 3-4",
        topic: "Engineering Pod Re-Architecture & Capstone Strategy",
        details: "Transitioning teams to AI-assisted high-velocity workflows while maintaining morale, measuring DORA metrics, and scaling velocity.",
        labs: [
          { title: "Lab 3.1: DORA Telemetry & PR Velocity Dashboard Setup", desc: "Connect Jira and GitHub hooks to track deployment frequency, lead time for changes, and change failure rate delta." },
          { title: "Lab 3.2: Executive Capstone Roadmap Presentation", desc: "Present a complete 12-month org-wide AI transformation strategy tailored to your company's executive board." }
        ],
        codeSnippet: {
          language: "json",
          code: `{
  "org_telemetry_snapshot": {
    "cohort_name": "Q3_Engineering_Upskill",
    "pre_cohort_dora": {
      "deployment_frequency": "Weekly",
      "lead_time_for_changes": "72_hours",
      "change_failure_rate": "14.2%"
    },
    "post_cohort_dora": {
      "deployment_frequency": "On_Demand_Daily",
      "lead_time_for_changes": "18_hours",
      "change_failure_rate": "3.1%"
    }
  }
}`
        },
        acceptanceCriteria: [
          "Demonstrated +40% improvement in pull request review velocity across pilot engineering pods",
          "Signed executive sign-off on 12-month enterprise AI roll-out roadmap"
        ]
      }
    ],
    prerequisites: ["Engineering management, tech lead, or executive responsibilities"]
  },
  {
    id: "mlops-production",
    title: "Production MLOps & Automated Retraining",
    category: "Generative AI & LLMs",
    duration: "8 Weeks (Part-Time)",
    level: "Advanced",
    description: "Bridge the gap between data science notebooks and robust production deployment with model registries, drift monitoring, and automated retraining loops.",
    tools: ["MLflow", "Kubeflow", "Apache Ray", "Prometheus", "Grafana"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-600",
    syllabus: [
      {
        week: "Weeks 1-3",
        topic: "Model Packaging, Versioning & Serving at Scale",
        details: "Containerizing ML models with high-concurrency inference endpoints using Ray Serve, Triton Inference Server, and MLflow registry.",
        labs: [
          { title: "Lab 1.1: Ray Serve Multi-Model Inference Cluster", desc: "Deploy parallel CPU/GPU workers serving embedding and completion models simultaneously with auto-scaling." },
          { title: "Lab 1.2: MLflow Model Registry & Artifact Lineage", desc: "Implement strict git-commit and data-hash tagging inside MLflow ensuring 100% reproducible model artifacts." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 1.1: Ray Serve High-Concurrency Model Serving
import ray
from ray import serve
from transformers import pipeline

@serve.deployment(num_replicas=4, ray_actor_options={"num_cpus": 2, "num_gpus": 0.25})
class EnterpriseLLMPredictor:
    def __init__(self):
        self.model = pipeline("text-generation", model="meta-llama/Llama-3-8B-Instruct")

    async def __call__(self, request):
        data = await request.json()
        return self.model(data["prompt"], max_length=256)

serve.run(EnterpriseLLMPredictor.bind())`
        },
        acceptanceCriteria: [
          "Auto-scaler spins up additional inference replicas within 10 seconds of reaching 80% CPU load",
          "100% artifact traceability from production inference endpoint back to training dataset hash"
        ]
      },
      {
        week: "Weeks 4-6",
        topic: "Drift Detection & Automated Retraining Triggers",
        details: "Monitoring feature skew, prediction accuracy degradation, and real-time alerting using Prometheus, Grafana, and Evidently AI.",
        labs: [
          { title: "Lab 2.1: Evidently AI Data Drift Dashboards", desc: "Compute Kolmogorov-Smirnov statistical tests continuously on incoming production inference prompts." },
          { title: "Lab 2.2: Automated Kubeflow Retraining Pipeline", desc: "Trigger automated Kubeflow DAG re-training runs when population stability index (PSI) exceeds 0.25." }
        ],
        codeSnippet: {
          language: "yaml",
          code: `# Lab 2.2: Prometheus Alerting Rule for Model Drift Trigger
groups:
- name: mlops_drift_alerts
  rules:
  - alert: HighFeatureDriftDetected
    expr: evidently_feature_drift_score > 0.25
    for: 15m
    labels:
      severity: critical
      pipeline: automated_retraining
    annotations:
      summary: "Feature drift exceeded acceptable threshold (0.25)"
      description: "Triggering Webhook to launch Kubeflow retraining pipeline."`
        },
        acceptanceCriteria: [
          "Automated webhook fires cleanly within 15 minutes of statistical drift threshold breach",
          "Zero human intervention required to retrain, validate, and stage updated model checkpoint"
        ]
      },
      {
        week: "Weeks 7-8",
        topic: "End-to-End MLOps Pipeline Capstone",
        details: "Constructing a self-healing ML lifecycle from data ingestion to canary deployment with automated shadow evaluation.",
        labs: [
          { title: "Lab 3.1: Shadow Evaluation & Canary Promotion", desc: "Run newly retrained models in shadow mode for 24 hours comparing predictions against active production." },
          { title: "Lab 3.2: Capstone Production MLOps Defense", desc: "Present complete architecture and demonstrate live failure recovery during real-time traffic spikes." }
        ],
        codeSnippet: {
          language: "python",
          code: `# Lab 3.1: Shadow Evaluation Traffic Comparator
def evaluate_shadow_fidelity(production_outputs, shadow_outputs):
    concordance_count = sum(1 for p, s in zip(production_outputs, shadow_outputs) if abs(p['score'] - s['score']) < 0.05)
    fidelity_ratio = concordance_count / len(production_outputs)
    if fidelity_ratio >= 0.96:
        promote_to_primary_canary()
    return fidelity_ratio`
        },
        acceptanceCriteria: [
          "Shadow model automatically promoted to primary production endpoint once 96% fidelity met over 24h",
          "Full rollback executed in under 5 seconds if canary validation metrics degrade"
        ]
      }
    ],
    prerequisites: ["Python and machine learning experience", "Basic familiarity with Docker containerization"]
  }
];

const categories: CourseCategory[] = [
  "All", "Generative AI & LLMs", "Cloud Native & Kubernetes", "Data Engineering", "Zero-Trust Security", "AI Leadership"
];

const ProgramModules = () => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("All");
  const [selectedCourse, setSelectedCourse] = useState<CourseTrack | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<{ [key: string]: boolean }>({});

  const filteredTracks = activeCategory === "All"
    ? courseTracks
    : courseTracks.filter((c) => c.category === activeCategory);

  const toggleWeek = (weekIndex: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekIndex]: !prev[weekIndex]
    }));
  };

  const toggleAllWeeks = (expand: boolean) => {
    if (!selectedCourse) return;
    const newState: { [key: string]: boolean } = {};
    selectedCourse.syllabus.forEach((_, idx) => {
      newState[idx] = expand;
    });
    setExpandedWeeks(newState);
  };

  return (
    <section className="section-padding bg-[#0B0F19] relative" id="programs">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen size={14} /> Comprehensive Upskilling Catalog
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Curriculum Tracks</span>
          </h2>
          <p className="text-lg text-text-muted">
            Designed for high-velocity engineering pods. Every track combines interactive coding labs, real-world capstones, and principal architect code reviews.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredTracks.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className={`h-2.5 w-full bg-gradient-to-r ${course.color}`} />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-cyan-400 border border-slate-800 group-hover:scale-110 transition-transform shadow-md`}>
                        <course.icon size={28} />
                      </div>
                      <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded-full text-xs font-mono font-bold">
                        {course.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                      <Clock size={14} /> {course.duration}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Tools badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {course.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[11px] font-mono rounded-md border border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-0 mt-auto">
                  <button
                    onClick={() => {
                      setSelectedCourse(course);
                      setExpandedWeeks({ 0: true }); // Open first week by default
                    }}
                    className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-bold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    View Syllabus & Labs <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Syllabus Drawer Modal Overlay */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
            >
              {/* Modal Top Header */}
              <div className={`p-8 bg-gradient-to-r ${selectedCourse.color} text-white relative shrink-0`}>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 mb-2">
                  <Sparkles size={14} /> {selectedCourse.category} &bull; {selectedCourse.duration}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-2">{selectedCourse.title}</h3>
                <p className="text-white/90 text-sm sm:text-base max-w-2xl font-sans">{selectedCourse.description}</p>
              </div>

              <div className="p-6 sm:p-8 space-y-8 flex-1 overflow-y-auto">
                {/* Expand / Collapse All Controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                    <Terminal size={16} /> Interactive Weekly Labs & Code Artifacts
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleAllWeeks(true)}
                      className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg text-xs font-mono hover:border-cyan-500/40 transition-colors"
                    >
                      + Expand All
                    </button>
                    <button
                      onClick={() => toggleAllWeeks(false)}
                      className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg text-xs font-mono hover:border-slate-700 transition-colors"
                    >
                      - Collapse All
                    </button>
                  </div>
                </div>

                {/* Syllabus Accordion Breakdown */}
                <div className="space-y-4">
                  {selectedCourse.syllabus.map((item, idx) => {
                    const isExpanded = !!expandedWeeks[idx];
                    return (
                      <div
                        key={idx}
                        className={`bg-slate-900/80 rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isExpanded ? "border-cyan-500/50 shadow-lg shadow-cyan-500/5" : "border-slate-800/80 hover:border-slate-700"
                        }`}
                      >
                        {/* Accordion Header Button */}
                        <button
                          onClick={() => toggleWeek(idx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className="text-xs font-mono px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 shrink-0 w-fit font-bold">
                              {item.week}
                            </span>
                            <span className="font-bold text-white text-base sm:text-lg">{item.topic}</span>
                          </div>
                          <div className={`shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180 text-cyan-400" : "text-slate-500"}`}>
                            <ChevronDown size={20} />
                          </div>
                        </button>

                        {/* Accordion Expanded Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6 pt-2 space-y-6 border-t border-slate-800/60">
                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                                  {item.details}
                                </p>

                                {/* Hands-On Architectural Labs */}
                                <div className="space-y-3">
                                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                                    <LayersIcon size={14} /> Architectural Labs & Hands-On Exercises:
                                  </h5>
                                  <div className="grid sm:grid-cols-2 gap-3">
                                    {item.labs.map((lab, lIdx) => (
                                      <div key={lIdx} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                                        <div className="font-bold text-sm text-white mb-1.5">{lab.title}</div>
                                        <div className="text-xs text-slate-400 leading-relaxed">{lab.desc}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Production Code Snippet */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                                      <Code size={14} /> Production Lab Artifact ({item.codeSnippet.language.toUpperCase()})
                                    </span>
                                    <span>Verified on SOC2 Sandbox</span>
                                  </div>
                                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed shadow-inner">
                                    <pre className="whitespace-pre">{item.codeSnippet.code}</pre>
                                  </div>
                                </div>

                                {/* Capstone Deliverables Checklist */}
                                <div className="space-y-2">
                                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
                                    <CheckSquare size={14} /> Capstone Acceptance Criteria:
                                  </h5>
                                  <div className="space-y-2 bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
                                    {item.acceptanceCriteria.map((crit, cIdx) => (
                                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                        <span>{crit}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Prerequisites */}
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">Recommended Prerequisites & Tooling</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedCourse.prerequisites.map((req, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action footer */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <span className="text-xs font-mono text-slate-400">
                    Cohort starts on the 1st of every month. Limited pod slots available.
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedCourse(null)}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    Enroll Engineering Pod in Track <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProgramModules;
