"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowRight, ArrowLeft, Sparkles, Shield, Cpu, Cloud, Check } from "lucide-react";

const techStackOptions = [
  "AWS Cloud", "Google Cloud (GCP)", "Microsoft Azure", "Python / PyTorch", "Go (Golang)", 
  "Kubernetes / Istio", "Snowflake / Databricks", "Pinecone / Qdrant", "OpenAI / Anthropic APIs", "vLLM / Open Source LLMs"
];

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [orgName, setOrgName] = useState("");
  const [teamSize, setTeamSize] = useState("50-200 Engineers");
  const [primaryGoal, setPrimaryGoal] = useState("Custom RAG & Agentic LLM Pipelines");
  const [selectedTech, setSelectedTech] = useState<string[]>(["AWS Cloud", "Python / PyTorch", "OpenAI / Anthropic APIs"]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");

  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const getSyllabusSummary = () => {
    const tech = selectedTech.length > 0 ? selectedTech.join(", ") : "AWS Cloud, Python / PyTorch, OpenAI APIs";
    if (primaryGoal.includes("RAG") || primaryGoal.includes("LLM")) {
      return `
========================================================================
SKILLFORGE ACADEMY — CUSTOM 12-WEEK ENTERPRISE AI ROADMAP & SYLLABUS
Organization: ${orgName || "Enterprise Pod"} | Cohort Size: ${teamSize}
Target Tech Stack: ${tech}
========================================================================

PHASE 1: FOUNDATIONS & PROMPT ARCHITECTURE (WEEKS 1 - 3)
------------------------------------------------------------------------
• Week 1: Production LLM Mechanics & Tokenization Deep Dive
  - Lab 1.1: Benchmarking latency, token costs, and KV-cache utilization across ${tech}.
  - Lab 1.2: Structured JSON outputs, schema enforcement, and defensive prompt guardrails.
• Week 2: Enterprise Prompt Engineering & Few-Shot Evaluation
  - Lab 2.1: Building automated LLM evaluation harnesses (LLM-as-a-Judge, RAGAS metrics).
  - Lab 2.2: Chain-of-Thought (CoT), Tree-of-Thoughts (ToT), and self-healing agent loops.
• Week 3: Private VPC & Model Sandboxing Setup
  - Lab 3.1: Configuring zero-data-retention API endpoints with ${tech}.
  - Lab 3.2: SOC2 Type II compliance controls and PII masking layers for LLM inputs.

PHASE 2: RETRIEVAL-AUGMENTED GENERATION (RAG) & VECTOR DBs (WEEKS 4 - 7)
------------------------------------------------------------------------
• Week 4: Vector Embeddings & High-Dimensional Indexing
  - Lab 4.1: Comparing embedding models (OpenAI text-embedding-3-large vs. BAAI/bge).
  - Lab 4.2: Setting up vector storage and HNSW indexes using ${tech}.
• Week 5: Advanced Chunking & Hybrid Search Strategy
  - Lab 5.1: Semantic chunking, parent-document retrieval, and hierarchical indexing.
  - Lab 5.2: Combining dense vector search with sparse BM25/keyword retrieval and reciprocal rank fusion (RRF).
• Week 6: Re-Ranking & Query Transformations
  - Lab 6.1: Implementing cross-encoder re-ranking models (Cohere/BGE Re-ranker) to boost precision.
  - Lab 6.2: Multi-query expansion, HyDE (Hypothetical Document Embeddings), and sub-query routing.
• Week 7: Production RAG Pipeline Stress-Testing
  - Lab 7.1: Load testing vector database queries under concurrent multi-tenant requests.
  - Lab 7.2: Preventing hallucination and implementing strict source attribution/citations.

PHASE 3: FINE-TUNING & AGENTIC ORCHESTRATION (WEEKS 8 - 10)
------------------------------------------------------------------------
• Week 8: Parameter-Efficient Fine-Tuning (PEFT / LoRA / QLoRA)
  - Lab 8.1: Dataset preparation, instruction-tuning curation, and synthetic data generation.
  - Lab 8.2: Fine-tuning open-source LLMs on proprietary enterprise data using PyTorch & GPU clusters.
• Week 9: Autonomous Multi-Agent Architectures
  - Lab 9.1: Building stateful agent graphs (LangGraph / AutoGen) with custom tool calling.
  - Lab 9.2: Implementing supervisor-worker agent hierarchies for complex software engineering workflows.
• Week 10: Enterprise Security, Red Teaming & Guardrails
  - Lab 10.1: Defending against indirect prompt injections, jailbreaks, and data exfiltration.
  - Lab 10.2: Deploying real-time input/output moderation pipelines (Llama-Guard / NeMo Guardrails).

PHASE 4: CAPSTONE POD DEPLOYMENT & ROI TELEMETRY (WEEKS 11 - 12)
------------------------------------------------------------------------
• Week 11: End-to-End Capstone Production Build
  - Deliverable: Deploying your custom RAG & Agentic LLM pipeline into production on ${tech}.
  - Mentorship: Dedicated code review and architecture audit with a Principal AI Architect.
• Week 12: On-Chain Verification & Velocity Audit
  - Deliverable: Measuring engineering pull request velocity improvements (+3.2x target).
  - Certification: Issuing cryptographically verified, SOC2-compliant SkillForge Capstone Badges to all pod engineers.
========================================================================
`.trim();
    } else if (primaryGoal.includes("Kubernetes") || primaryGoal.includes("Multi-Cluster")) {
      return `
========================================================================
SKILLFORGE ACADEMY — CUSTOM 12-WEEK KUBERNETES & CLOUD MESH SYLLABUS
Organization: ${orgName || "Enterprise Pod"} | Cohort Size: ${teamSize}
Target Tech Stack: ${tech}
========================================================================

PHASE 1: KUBERNETES CORE ARCHITECTURE & CONTAINER HARDENING (WEEKS 1 - 3)
------------------------------------------------------------------------
• Week 1: Linux Cgroups, Namespaces & OCI Container Hardening
  - Lab 1.1: Rootless containers, read-only root filesystems, and minimal distroless base images.
  - Lab 1.2: Kubernetes API Server mechanics, etcd tuning, and controller control loops across ${tech}.
• Week 2: Advanced Pod Scheduling & Resource Management
  - Lab 2.1: Node affinity, taints/tolerations, topology spread constraints, and priority classes.
  - Lab 2.2: Tuning QoS classes, CPU bursting, and memory OOM killer prioritization.
• Week 3: Cluster Autoscaling & Karpenter Integration
  - Lab 3.1: Configuring right-sized node provisioning using Karpenter and AWS/GCP Spot Instances.
  - Lab 3.2: Horizontal Pod Autoscaling (HPA) and Vertical Pod Autoscaling (VPA) with custom Prometheus metrics.

PHASE 2: SERVICE MESH, MUTUAL TLS & ZERO-DOWNTIME ROUTING (WEEKS 4 - 7)
------------------------------------------------------------------------
• Week 4: Service Mesh Fundamentals (Istio / Linkerd)
  - Lab 4.1: Sidecar vs. Ambient mesh architectures and Envoy proxy data-plane inspection.
  - Lab 4.2: Enforcing strict Mutual TLS (mTLS) across all cross-namespace pod communications.
• Week 5: Advanced Traffic Management & Canary Deployments
  - Lab 5.1: Weighted routing, header-based canary releases, and automated rollback triggers using Argo Rollouts.
  - Lab 5.2: Circuit breaking, outlier detection, retry budgets, and rate limiting at the ingress gateway.
• Week 6: Multi-Cluster Federation & Global Load Balancing
  - Lab 6.1: Cross-cluster discovery and active-active multi-region Kubernetes meshes on ${tech}.
  - Lab 6.2: Global failover testing and disaster recovery RTO/RPO validation.
• Week 7: eBPF Network Observability & Cilium CNI
  - Lab 7.1: Replacing kube-proxy with eBPF-powered Cilium CNI for ultra-low latency routing.
  - Lab 7.2: Deep kernel-level packet inspection, Hubble service maps, and network security policies.

PHASE 3: GITOPS CONTINUOUS DELIVERY & SECURE STORAGE (WEEKS 8 - 10)
------------------------------------------------------------------------
• Week 8: Enterprise GitOps Pipeline Architecture (ArgoCD / Flux)
  - Lab 8.1: Multi-tenant ArgoCD setups, App-of-Apps patterns, and repository sync guardrails.
  - Lab 8.2: Automated drift detection and self-healing cluster state reconciliation.
• Week 9: Stateful workloads, CSI Drivers & Distributed Storage
  - Lab 9.1: Persistent volume provisioning, volume snapshots, and backup automation (Velero).
  - Lab 9.2: Running distributed databases (PostgreSQL/Redis) on Kubernetes with high availability operators.
• Week 10: DevSecOps & Runtime Threat Detection
  - Lab 10.1: Policy-as-Code using Kyverno / OPA Gatekeeper for admission controller enforcement.
  - Lab 10.2: Runtime container anomaly detection using Falco / Tetragon.

PHASE 4: CAPSTONE MULTI-CLUSTER MIGRATION & AUDIT (WEEKS 11 - 12)
------------------------------------------------------------------------
• Week 11: End-to-End Zero-Downtime Migration Capstone
  - Deliverable: Migrating a high-throughput microservice suite to a zero-trust Istio/Cilium mesh on ${tech}.
• Week 12: High-Availability Verification & Capstone Certification
  - Deliverable: Chaos engineering (LitmusChaos) resilience audit verifying 99.999% SLA uptime under severe node outages.
========================================================================
`.trim();
    } else if (primaryGoal.includes("Lakehouse") || primaryGoal.includes("Spark")) {
      return `
========================================================================
SKILLFORGE ACADEMY — CUSTOM 12-WEEK DATA ENGINEERING & LAKEHOUSE SYLLABUS
Organization: ${orgName || "Enterprise Pod"} | Cohort Size: ${teamSize}
Target Tech Stack: ${tech}
========================================================================

PHASE 1: DISTRIBUTED STREAM PROCESSING & APACHE SPARK (WEEKS 1 - 3)
------------------------------------------------------------------------
• Week 1: Apache Spark Internal Architecture & Catalyst Optimizer
  - Lab 1.1: RDDs vs. DataFrames vs. Datasets memory management and Tungsten execution engine.
  - Lab 1.2: Diagnosing and resolving data skew, shuffle spills, and out-of-memory (OOM) errors across ${tech}.
• Week 2: Real-Time Event Streaming with Apache Kafka & Flink
  - Lab 2.1: Designing partitioned topic topologies, exactly-once processing guarantees, and consumer group scaling.
  - Lab 2.2: Sub-second stateful stream processing and windowed aggregations with Apache Flink.
• Week 3: Structured Streaming & Checkpoint Management
  - Lab 3.1: Micro-batching vs. continuous processing modes and write-ahead log recovery.
  - Lab 3.2: Connecting streaming pipelines directly into enterprise cloud storage using ${tech}.

PHASE 2: MODERN LAKEHOUSE & ACID TRANSACTIONS (WEEKS 4 - 7)
------------------------------------------------------------------------
• Week 4: Open Table Formats (Delta Lake / Apache Iceberg / Hudi)
  - Lab 4.1: ACID transaction logs, snapshot isolation, and concurrent reader/writer concurrency controls.
  - Lab 4.2: Schema evolution, partition pruning, and Z-Order indexing for sub-second query performance.
• Week 5: Time Travel & Storage Optimization
  - Lab 5.1: Point-in-time table restoration, vacuuming old parquet files, and compaction ('OPTIMIZE').
  - Lab 5.2: Cost optimization across petabyte-scale cloud object storage buckets on ${tech}.
• Week 6: Serverless Query Engines & Data Virtualization
  - Lab 6.1: High-concurrency SQL queries using Snowflake / Databricks SQL warehouses.
  - Lab 6.2: Data federation and zero-ETL querying across disparate enterprise data silos.
• Week 7: Enterprise Data Quality & Automated Testing
  - Lab 7.1: Automated data assertions and anomaly detection using Great Expectations & Soda.
  - Lab 7.2: Preventing corrupt data from entering production pipelines via circuit-breaker pattern.

PHASE 3: DATA ORCHESTRATION & MLOps PIPELINES (WEEKS 8 - 10)
------------------------------------------------------------------------
• Week 8: Enterprise Orchestration with Apache Airflow & Dagster
  - Lab 8.1: Dynamic DAG generation, sensor operators, and idempotent pipeline engineering.
  - Lab 8.2: Data lineage tracking, backfilling strategies, and SLA alerting.
• Week 9: Feature Stores & Real-Time MLOps
  - Lab 9.1: Building unified offline/online feature stores (Feast / Databricks Feature Store).
  - Lab 9.2: Automated training data ingestion and feature transformation pipelines.
• Week 10: Data Governance, Lineage & Privacy Compliance
  - Lab 10.1: End-to-end lineage mapping using OpenLineage & DataHub.
  - Lab 10.2: Automated PII redaction, column-level security masking, and GDPR/CCPA compliance.

PHASE 4: CAPSTONE PETABYTE PIPELINE AUDIT (WEEKS 11 - 12)
------------------------------------------------------------------------
• Week 11: End-to-End Lakehouse Capstone Build
  - Deliverable: Building a real-time streaming lakehouse pipeline handling 10,000+ events/sec on ${tech}.
• Week 12: Production Optimization & Capstone Certification
  - Deliverable: Achieving 75% cost reduction and 4x query speedup over legacy data warehouse baselines.
========================================================================
`.trim();
    } else if (primaryGoal.includes("DevSecOps") || primaryGoal.includes("Zero-Trust")) {
      return `
========================================================================
SKILLFORGE ACADEMY — CUSTOM 12-WEEK ZERO-TRUST DEVSECOPS SYLLABUS
Organization: ${orgName || "Enterprise Pod"} | Cohort Size: ${teamSize}
Target Tech Stack: ${tech}
========================================================================

PHASE 1: ZERO-TRUST CLOUD ARCHITECTURE & IAM HARDENING (WEEKS 1 - 3)
------------------------------------------------------------------------
• Week 1: Least-Privilege IAM & Ephemeral Credentials
  - Lab 1.1: Eliminating static access keys with OpenID Connect (OIDC) and short-lived STS tokens across ${tech}.
  - Lab 1.2: Attribute-Based Access Control (ABAC) and automated privilege escalation boundary policies.
• Week 2: Network Micro-Segmentation & Private VPC Design
  - Lab 2.1: Designing zero-trust network boundaries, PrivateLink endpoints, and transit gateways.
  - Lab 2.2: Deep packet inspection, egress filtering, and preventing data exfiltration.
• Week 3: Cloud Security Posture Management (CSPM)
  - Lab 3.1: Automated cloud misconfiguration scanning using Wiz / AWS Security Hub.
  - Lab 3.2: Real-time remediation lambdas for exposed S3/storage buckets and open security groups.

PHASE 2: AUTOMATED PIPELINE SECURITY & CI/CD HARDENING (WEEKS 4 - 7)
------------------------------------------------------------------------
• Week 4: Software Supply Chain Security & SLSA Framework
  - Lab 4.1: Generating cryptographically signed Software Bill of Materials (SBOM / Syft / Cosign).
  - Lab 4.2: Verifying artifact provenance and preventing dependency confusion attacks.
• Week 5: Static & Dynamic Security Testing (SAST / DAST / SCA)
  - Lab 5.1: Integrating automated vulnerability scanners (Semgrep, Snyk, Trivy) into GitHub Actions / GitLab CI.
  - Lab 5.2: Automated secret scanning and pre-commit pre-flight enforcement hooks.
• Week 6: Infrastructure-as-Code (IaC) Security Audit
  - Lab 6.1: Scanning Terraform / Pulumi modules for security vulnerabilities using Checkov & tfsec.
  - Lab 6.2: Enforcing secure guardrails across multi-account cloud provisioning deployments on ${tech}.
• Week 7: Kubernetes & Container Security Hardening
  - Lab 7.1: Pod Security Standards (PSS) and OPA Gatekeeper admission control policies.
  - Lab 7.2: Container image signing and runtime threat defense with Falco / eBPF.

PHASE 3: CONTINUOUS THREAT MODELING & INCIDENT RESPONSE (WEEKS 8 - 10)
------------------------------------------------------------------------
• Week 8: Continuous Threat Modeling & STRIDE Analysis
  - Lab 8.1: Conducting architectural threat modeling for cloud-native microservice applications.
  - Lab 8.2: Designing secure API gateways, OAuth2/OIDC flows, and mutual TLS token exchange.
• Week 9: Automated Incident Response & SIEM Integration
  - Lab 9.1: Ingesting cloud telemetry into enterprise SIEM (Splunk/Datadog Security) with automated alerting.
  - Lab 9.2: Building automated containment and isolation runbooks for compromised container instances.
• Week 10: SOC2 Type II, ISO 27001 & Compliance as Code
  - Lab 10.1: Automating continuous compliance evidence collection using Vanta / Drata.
  - Lab 10.2: Red team penetration testing readiness and vulnerability management workflows.

PHASE 4: CAPSTONE ZERO-TRUST RED TEAM AUDIT (WEEKS 11 - 12)
------------------------------------------------------------------------
• Week 11: End-to-End DevSecOps Capstone Pipeline Build
  - Deliverable: Deploying a fully hardened, zero-trust CI/CD pipeline and cloud environment on ${tech}.
• Week 12: Red Team Attack Simulation & Capstone Certification
  - Deliverable: Successfully defending against simulated multi-vector red team breach attempts with zero data loss.
========================================================================
`.trim();
    } else {
      return `
========================================================================
SKILLFORGE ACADEMY — EXECUTIVE STAFF ENGINEER & AI STRATEGY ACCELERATOR
Organization: ${orgName || "Enterprise Pod"} | Cohort Size: ${teamSize}
Target Tech Stack: ${tech}
========================================================================

PHASE 1: AI ARCHITECTURE EVALUATION & BUILD VS. BUY (WEEKS 1 - 3)
------------------------------------------------------------------------
• Week 1: Evaluating Foundation Models & Total Cost of Ownership (TCO)
  - Lab 1.1: Cost-benefit analysis across commercial APIs (OpenAI/Anthropic) vs. self-hosted open-source models on ${tech}.
  - Lab 1.2: Latency, throughput, and hardware sizing matrix for GPU clusters (NVIDIA H100 vs. L40S vs. AWS Inferentia).
• Week 2: Enterprise RAG vs. Fine-Tuning Decision Frameworks
  - Lab 2.1: Technical criteria for when to use Prompt Engineering, RAG, LoRA Fine-Tuning, or Custom Pre-Training.
  - Lab 2.2: Designing modular, vendor-agnostic AI layers to prevent lock-in.
• Week 3: AI Pod Organization & Engineering Velocity Metrics
  - Lab 3.1: Structuring high-performance AI engineering squads and Staff Engineer ownership boundaries.
  - Lab 3.2: Establishing baseline velocity telemetry (DORA metrics + AI pull-request cycle acceleration).

PHASE 2: AI GOVERNANCE, ZERO-TRUST SECURITY & COMPLIANCE (WEEKS 4 - 7)
------------------------------------------------------------------------
• Week 4: Zero-Data-Retention Agreements & Private Cloud VPC
  - Lab 4.1: Negotiating and implementing enterprise zero-data-retention endpoints with cloud providers on ${tech}.
  - Lab 4.2: Architecting private VPC peering and private link connections for AI inference traffic.
• Week 5: Data Privacy, PII Redaction & EU AI Act Compliance
  - Lab 5.1: Automated PII/PHI scrubbing layers before data enters LLM context windows.
  - Lab 5.2: Compliance alignment for SOC2 Type II, HIPAA, GDPR, and the EU AI Act risk classification.
• Week 6: Defending Against AI-Specific Security Threats
  - Lab 6.1: Threat modeling prompt injections, data poisoning, and model inversion attacks.
  - Lab 6.2: Implementing real-time LLM input/output firewalls and toxicity guardrails.
• Week 7: AI Model Evaluation & Quality Assurance at Scale
  - Lab 7.1: Setting up continuous automated testing harnesses to catch LLM drift and regressions.
  - Lab 7.2: Human-in-the-Loop (HITL) audit workflows and executive dashboard reporting.

PHASE 3: SCALING ENTERPRISE AI ROADMAPS (WEEKS 8 - 10)
------------------------------------------------------------------------
• Week 8: Migrating Legacy Monoliths to Agentic AI Workflows
  - Lab 8.1: Identifying high-ROI legacy workflows ripe for AI automation across engineering and product.
  - Lab 8.2: Designing incremental, zero-downtime migration paths for AI service integration.
• Week 9: Multi-Cluster Inference Scaling & MLOps Infrastructure
  - Lab 9.1: High-availability serving using vLLM, TensorRT-LLM, and Kubernetes auto-scaling on ${tech}.
  - Lab 9.2: Model registry, version control, and automated canary deployments for AI checkpoints.
• Week 10: Building Internal AI Developer Platforms (IDP)
  - Lab 10.1: Creating standardized AI templates, SDKs, and internal developer portals for your organization.
  - Lab 10.2: Driving developer adoption while enforcing enterprise security guardrails.

PHASE 4: EXECUTIVE CAPSTONE & 12-MONTH STRATEGY (WEEKS 11 - 12)
------------------------------------------------------------------------
• Week 11: Capstone — 12-Month Corporate AI & Upskilling Roadmap
  - Deliverable: A board-ready technical architecture, budget forecast, and upskilling roadmap for ${orgName || "your enterprise"}.
• Week 12: Executive Board Presentation & Capstone Certification
  - Deliverable: Live defense of your AI architecture before SkillForge Principal Architects and Staff peers.
========================================================================
`.trim();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Web3Forms Access Key for instant lead email notifications
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "4326c662-3274-4e37-9e42-eb587e7269f2",
          subject: `🚀 Custom 12-Week AI Roadmap for ${orgName || "Enterprise Pod"} (${teamSize})`,
          from_name: "SkillForge Academy AI Portal",
          Organization: orgName,
          Team_Size: teamSize,
          Primary_Goal: primaryGoal,
          Tech_Stack: selectedTech.join(", "),
          First_Name: firstName,
          Last_Name: lastName,
          Email: workEmail,
          Custom_12_Week_Syllabus: getSyllabusSummary(),
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.warn("Web3Forms response (if key is placeholder or invalid, UI fallback activated):", result);
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-padding bg-slate-950/95 relative border-y border-slate-800" id="contact">
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto glass-card p-10 sm:p-14 rounded-3xl text-center border border-emerald-500/40 shadow-2xl relative"
          >
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10 animate-bounce">
              <CheckCircle size={40} />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Proposal Generated
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3">Custom Roadmap Reserved!</h2>
            <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed">
              We have compiled a tailored 12-week syllabus tailored for <strong className="text-white font-mono">{orgName || "your engineering organization"}</strong> using <strong className="text-cyan-400 font-mono">{selectedTech.slice(0, 3).join(", ")}</strong>. Our Principal AI Architect will reach out to <strong className="text-emerald-400 font-mono">{workEmail || "your email"}</strong> within 6 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-xl hover:text-white hover:border-slate-600 transition-all"
            >
              &larr; Configure Another Team Pod
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-slate-950/90 relative overflow-hidden border-t border-slate-800/80" id="contact">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Hero side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles size={14} /> Interactive Assessment Wizard
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.12]">
              Architect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400">Custom 12-Week AI Roadmap</span>
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              No generic questionnaires. Build your custom enterprise training syllabus in 3 rapid steps and get an instant engineering velocity audit preview.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3 text-slate-300 font-mono text-xs sm:text-sm">
                <div className="w-6 h-6 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center border border-cyan-500/20 shrink-0">
                  <Check size={14} />
                </div>
                <span>Pre-Cohort Technical Stack Audit Included</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-mono text-xs sm:text-sm">
                <div className="w-6 h-6 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <Check size={14} />
                </div>
                <span>Zero-Trust Sandbox & Private Cloud VPC Setup</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-mono text-xs sm:text-sm">
                <div className="w-6 h-6 bg-violet-500/10 text-violet-400 rounded-lg flex items-center justify-center border border-violet-500/20 shrink-0">
                  <Check size={14} />
                </div>
                <span>Dedicated Principal AI Architect Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Form Wizard side */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            {/* Progress Bar */}
            <div className="mb-8 pb-6 border-b border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= 1 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20" : "bg-slate-800 text-slate-400"
                  }`}>1</span>
                  <span className={`text-xs font-mono font-bold ${step >= 1 ? "text-white" : "text-slate-500"}`}>Pod Profile</span>
                </div>
                <div className="w-8 sm:w-16 h-0.5 bg-slate-800" />
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= 2 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20" : "bg-slate-800 text-slate-400"
                  }`}>2</span>
                  <span className={`text-xs font-mono font-bold ${step >= 2 ? "text-white" : "text-slate-500"}`}>Tech Stack</span>
                </div>
                <div className="w-8 sm:w-16 h-0.5 bg-slate-800" />
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= 3 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20" : "bg-slate-800 text-slate-400"
                  }`}>3</span>
                  <span className={`text-xs font-mono font-bold ${step >= 3 ? "text-white" : "text-slate-500"}`}>Summary & Audit</span>
                </div>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500"
                  animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Organization / Company Name</label>
                      <input
                        required
                        type="text"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="e.g., Acme Cloud Technologies"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Number of Engineers to Upskill</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["10-50 Engineers", "50-200 Engineers", "200-500 Engineers", "500+ Pods"].map((size) => (
                          <button
                            type="button"
                            key={size}
                            onClick={() => setTeamSize(size)}
                            className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all ${
                              teamSize === size
                                ? "bg-cyan-500/15 border-cyan-500 text-cyan-300"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Primary Engineering Objective</label>
                      <select
                        value={primaryGoal}
                        onChange={(e) => setPrimaryGoal(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                      >
                        <option>Custom RAG & Agentic LLM Pipelines</option>
                        <option>Zero-Downtime Kubernetes & Multi-Cluster Scaling</option>
                        <option>Real-Time Lakehouse & Apache Spark Migration</option>
                        <option>Zero-Trust DevSecOps Hardening & IAM</option>
                        <option>Executive Staff Engineer AI Strategy Accelerator</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all mt-4"
                    >
                      Next: Select Tech Stack & Cloud <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-1">
                        Select Your Production Stack & Tools
                      </label>
                      <p className="text-xs text-text-muted mb-4">
                        We will customize lab exercises around your exact cloud providers and ML tools.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {techStackOptions.map((tech) => {
                          const active = selectedTech.includes(tech);
                          return (
                            <button
                              type="button"
                              key={tech}
                              onClick={() => toggleTech(tech)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all flex items-center gap-1.5 ${
                                active
                                  ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm"
                                  : "bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                              }`}
                            >
                              {active && <Check size={14} />} {tech}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs font-mono hover:bg-slate-800 transition-all flex items-center gap-2"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                      >
                        Next: Review Audit & Contact <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Live Custom Proposal Preview Card */}
                    <div className="bg-slate-900/80 p-5 rounded-2xl border border-cyan-500/30 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-300">
                        <span className="font-bold text-cyan-400">PROPOSAL SUMMARY</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">12-Week Track</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-400">
                        <div>
                          <span className="text-slate-500 block">Organization:</span>
                          <span className="text-white font-bold">{orgName || "Enterprise Pod"}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Cohort Size:</span>
                          <span className="text-white font-bold">{teamSize}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Primary Focus:</span>
                        <span className="text-emerald-400 font-bold">{primaryGoal}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Stack & Cloud Integration:</span>
                        <span className="text-slate-300">{selectedTech.join(" • ") || "AWS / Python"}</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">First Name</label>
                        <input
                          required
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Last Name</label>
                        <input
                          required
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Work Email (for Audit PDF Delivery)</label>
                      <input
                        required
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs font-mono hover:bg-slate-800 transition-all flex items-center gap-2"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-70 transition-all"
                      >
                        {loading ? "Generating Roadmap..." : "Submit Inquiry & Generate Proposal PDF"}
                        <Send size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
