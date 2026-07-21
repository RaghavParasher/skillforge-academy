"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Cpu, Layers, Database, ShieldCheck, LineChart, ArrowRight, X, Sparkles, CheckCircle2, BookOpen, Terminal } from "lucide-react";

type CourseCategory = "All" | "Generative AI & LLMs" | "Cloud Native & Kubernetes" | "Data Engineering" | "Zero-Trust Security" | "AI Leadership";

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
  syllabus: {
    week: string;
    topic: string;
    details: string;
  }[];
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
      { week: "Weeks 1-3", topic: "Transformer Architecture & Prompt Engineering at Scale", details: "Deep dive into attention mechanisms, tokenization boundaries, and structured JSON generation." },
      { week: "Weeks 4-7", topic: "High-Accuracy RAG & Hybrid Search Pipelines", details: "Vector DB indexing, reranking models, chunking strategies, and preventing hallucination." },
      { week: "Weeks 8-10", topic: "Fine-Tuning Open-Source LLMs (Llama 3, Mistral)", details: "LoRA/QLoRA parameter-efficient fine-tuning on enterprise domain data using multi-GPU clusters." },
      { week: "Weeks 11-12", topic: "Production Capstone: Autonomous AI Agent Pod", details: "Deploying multi-agent tool-calling workflows with automated guardrails and telemetry." }
    ],
    prerequisites: ["Strong Python 3.x proficiency", "Basic working knowledge of REST APIs & Git", "Foundational understanding of machine learning concepts"]
  },
  {
    id: "k8s-service-mesh",
    title: "Zero-Downtime Kubernetes & Service Mesh",
    category: "Cloud Native & Kubernetes",
    duration: "8 Weeks (Part-Time)",
    level: "Intermediate - Advanced",
    description: "Master multi-cluster container orchestration, GitOps automation, and high-throughput microservice scaling across AWS and GCP.",
    tools: ["Docker", "Kubernetes", "Istio", "Terraform", "ArgoCD"],
    icon: Layers,
    color: "from-violet-500 to-indigo-600",
    syllabus: [
      { week: "Weeks 1-2", topic: "Container Hardening & Kubernetes Core Architecture", details: "Pod lifecycle management, custom resource definitions (CRDs), and RBAC controls." },
      { week: "Weeks 3-5", topic: "Service Mesh Routing & Mutual TLS (Istio)", details: "Canary deployments, circuit breaking, distributed tracing, and traffic shadowing." },
      { week: "Weeks 6-8", topic: "GitOps Continuous Delivery & Capstone Deployment", details: "Automating multi-region failover and infrastructure as code using ArgoCD & Terraform." }
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
      { week: "Weeks 1-3", topic: "Distributed Stream Processing with Apache Kafka & Spark", details: "Partitioning strategies, exactly-once semantics, and real-time stateful transformations." },
      { week: "Weeks 4-7", topic: "Modern Lakehouse Architecture (Snowflake & Delta Lake)", details: "ACID transactions on data lakes, time travel, and automated data quality assertions." },
      { week: "Weeks 8-10", topic: "Automated Data Pipelines & Capstone Architecture", details: "Orchestrating complex DAGs with Apache Airflow and dbt with automated data lineage." }
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
      { week: "Weeks 1-2", topic: "Zero-Trust Architecture & IAM Hardening", details: "Least-privilege cloud policy design and temporary credential federation." },
      { week: "Weeks 3-4", topic: "Automated Pipeline Security (SAST/DAST/SCA)", details: "Integrating container vulnerability scanning and secret detection inside GitHub Actions." },
      { week: "Weeks 5-6", topic: "Incident Response Playbooks & Capstone Audit", details: "Simulating red/blue team exercises and automated compliance reporting." }
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
      { week: "Week 1", topic: "Evaluating Enterprise AI Use Cases & Build vs. Buy", details: "Assessing ROI, model licensing costs, and long-term maintenance overhead." },
      { week: "Week 2", topic: "AI Governance, Data Privacy & SOC2 Compliance", details: "Structuring zero-data-retention agreements and enterprise IP protection." },
      { week: "Weeks 3-4", topic: "Engineering Pod Re-Architecture & Capstone Strategy", details: "Transitioning teams to AI-assisted high-velocity workflows while maintaining morale." }
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
      { week: "Weeks 1-3", topic: "Model Packaging, Versioning & Serving at Scale", details: "Containerizing ML models with high-concurrency inference endpoints using Ray Serve." },
      { week: "Weeks 4-6", topic: "Drift Detection & Automated Retraining Triggers", details: "Monitoring feature skew, prediction accuracy degradation, and real-time alerting." },
      { week: "Weeks 7-8", topic: "End-to-End MLOps Pipeline Capstone", details: "Constructing a self-healing ML lifecycle from data ingestion to canary deployment." }
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

  const filteredTracks = activeCategory === "All"
    ? courseTracks
    : courseTracks.filter((c) => c.category === activeCategory);

  return (
    <section className="section-padding bg-[#0B0F19] relative" id="programs">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen size={14} /> Comprehensive Upskilling Catalog
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Curriculum Tracks</span>
          </h2>
          <p className="text-lg text-text-muted">
            Explore our rigorous, hands-on engineering programs. Each track concludes with an on-chain verified capstone project committed directly to your organization's GitHub.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
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
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Gradient Banner */}
                  <div className={`h-24 bg-gradient-to-r ${course.color} p-6 flex items-center justify-between relative`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md shadow">
                      {course.level}
                    </span>
                    <course.icon size={36} className="text-white/90 group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="p-8">
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
                    onClick={() => setSelectedCourse(course)}
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Modal Top Header */}
              <div className={`p-8 bg-gradient-to-r ${selectedCourse.color} text-white relative`}>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 mb-2">
                  <Sparkles size={14} /> {selectedCourse.category} &bull; {selectedCourse.duration}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">{selectedCourse.title}</h3>
              </div>

              <div className="p-8 space-y-8">
                {/* Overview */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2 font-bold">Track Overview</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{selectedCourse.description}</p>
                </div>

                {/* Syllabus Breakdown */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                    <Terminal size={16} /> Weekly Syllabus & Architectural Labs
                  </h4>
                  <div className="space-y-3">
                    {selectedCourse.syllabus.map((item, idx) => (
                      <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-white text-base">{item.topic}</span>
                          <span className="text-xs font-mono px-2.5 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                            {item.week}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">Recommended Prerequisites</h4>
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
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-400">
                    Cohort starts on the 1st of every month.
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
