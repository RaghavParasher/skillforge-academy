<div align="center">

# ⚡ SkillForge Academy — Enterprise AI & Engineering Upskilling Platform

**A State-of-the-Art, High-Velocity Workforce Upskilling & Telemetry Platform Engineered for Corporate Engineering Pods.**

[![Next.js 16](https://img.shields.io/badge/Next.js%2016-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS%204-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![SOC2 Type II](https://img.shields.io/badge/Security-SOC2%20Type%20II%20Sandboxes-10B981?style=for-the-badge&logo=shield&logoColor=white)](#)
[![Vercel Live](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://skillforge-academyy.vercel.app/)

<h3>
  🚀 <a href="https://skillforge-academyy.vercel.app/">Explore the Live Production Platform on Vercel &rarr;</a>
</h3>

<p align="center">
  <br />
  <b>Not a generic video course library.</b> SkillForge Academy embeds interactive AI coding labs, principal architect code reviews, and live Jira/GitHub PR velocity telemetry right into enterprise sprint workflows.
</p>

</div>

---

## 💎 Executive Overview

In the era of Generative AI, static video tutorials and passive certifications no longer move the needle for corporate engineering pods. **SkillForge Academy** bridges the critical gap between theoretical knowledge and mission-critical production deployment by providing:

1. **Interactive, Hands-On Architectural Labs**: Running inside zero-data-retention, SOC2 Type II isolated sandboxes.
2. **Live Engineering Velocity Telemetry**: Real-time measurement of pull request cycle times (+3.2x faster) and code quality improvements before and after upskilling cohorts.
3. **On-Chain Verified Capstone Badges**: Cryptographically signed verification tied directly to completed GitHub capstone pull requests and principal architect code reviews.

---

## 🌟 Core Interactive Platform Features

### ⚡ 1. Interactive AI ROI & Roadmap Simulator (`ROICalculator.tsx`)
Technical decision-makers and CTOs can dynamically slide parameters (`Engineering Team Size`, `Primary Upskilling Track`, `Current Readiness Level`) to model real-time financial impact:
- **Productivity Velocity Gain**: Real-time calculation of sprint velocity acceleration (up to `+50%`).
- **Time-to-Market Saved**: Instant calculation of months cut from AI feature delivery schedules.
- **Annual ROI Impact**: Estimated annual financial savings modeled in real-time ($K+).
- **Dynamic 12-Week Roadmap Generation**: Automatically builds a 3-stage custom architectural roadmap based on the selected focus area (`GenAI`, `Kubernetes`, `Data Engineering`, or `Cybersecurity`).

### 📚 2. Expandable Enterprise Curriculum Catalog (`ProgramModules.tsx`)
Featuring **6 comprehensive, part-time and intensive enterprise tracks** designed to run alongside active engineering sprints without blocking production:

| Track Name | Category | Duration | Level | Core Tech Stack |
| :--- | :--- | :--- | :--- | :--- |
| **Enterprise RAG & Agentic AI Architect** | Generative AI & LLMs | 12 Weeks | Advanced | PyTorch, LangChain, Pinecone, vLLM |
| **Zero-Downtime Kubernetes & Service Mesh** | Cloud Native Architecture | 8 Weeks | Intermediate-Adv | Kubernetes, Istio, Terraform, ArgoCD |
| **Real-Time Data Streaming & Lakehouse Mastery** | Data Engineering | 10 Weeks | Advanced | Spark, Kafka, Snowflake, dbt, Airflow |
| **Zero-Trust Cloud & DevSecOps Hardening** | Cybersecurity Defense | 6 Weeks | Intermediate | Vault, CrowdStrike, IAM, Burp Suite |
| **Staff Engineer & CTO AI Strategy Accelerator** | AI Leadership | 4 Weeks | Executive | LLM Governance, Cloud FinOps, DORA |
| **Production MLOps & Automated Retraining** | Generative AI & LLMs | 8 Weeks | Advanced | MLflow, Kubeflow, Ray, Prometheus |

> [!TIP]
> **Deep Interactive Accordions inside Syllabus Modal**: Clicking any weekly card expands detailed **Hands-On Architectural Labs**, copyable syntax-highlighted **Production Code Artifacts** (`Python`, `YAML`, `Bash`, `SQL`), and **SOC2 Capstone Acceptance Checklists**.

### 📊 3. Real-Time Governance & Analytics Dashboard (`ManagerDashboardPreview.tsx`)
A live simulation of our telemetry engine (`skillforge-governance-dashboard.enterprise.internal`):
- **Competency Matrix Benchmarks**: Visual double-progress bars tracking before vs. after technical competency gains across all active cohorts (`+52% average improvement`).
- **Cohort Engagement Tracking**: Live status of active pods, lab completion rates, and cryptographically verified badges issued.
- **ROI Velocity Telemetry Terminal**: Live simulated console output connecting to Jira & GitHub organization hooks, verifying `-78% feature delivery time` and `-74% bug rates`.

### 📬 4. Multi-Step Assessment Wizard with Live Email Payloads (`LeadForm.tsx`)
A frictionless 3-step onboarding wizard for engineering directors:
- **Step 1: Pod Profile & Objectives**: Captures organization details, cohort size, and primary engineering targets.
- **Step 2: Technical Stack Customization**: Select exact target clouds (`AWS`, `GCP`, `Azure`) and core technologies (`Kubernetes`, `PyTorch`, `Snowflake`).
- **Step 3: Executive Summary & Submission**: Generates a live proposal summary card. Upon submission, **Web3Forms** instantly delivers a comprehensive, multi-page `Custom_12_Week_Syllabus` payload right into the lead's email inbox.

---

## 🏗️ System Architecture & Modular Design

SkillForge Academy is engineered from the ground up for maximum speed, maintainability, and clean separation of concerns using **Next.js 16 App Router**:

```
skillforge-academy/
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, neon glow effects, and obsidian glassmorphism
│   │   ├── layout.tsx            # Global SEO metadata, custom typography (Inter), & OpenGraph
│   │   └── page.tsx              # Main entry point assembling 12 modular enterprise sections
│   ├── components/
│   │   ├── Navbar.tsx            # Responsive navigation with sticky glassmorphic backdrop
│   │   ├── Hero.tsx              # High-energy hero with animated telemetry badges & CTA
│   │   ├── Stats.tsx             # Key platform statistics (+3.2x velocity, 350+ pods upskilled)
│   │   ├── ROICalculator.tsx     # Interactive financial & velocity simulation engine
│   │   ├── SkillForgeEdge.tsx    # Core enterprise differentiators (SOC2, Principal Architects)
│   │   ├── ManagerDashboardPreview.tsx # Live governance analytics & telemetry terminal
│   │   ├── ProgramModules.tsx    # Interactive catalog with expandable accordions & code blocks
│   │   ├── DomainExpertise.tsx   # Clickable domain grid connected to curriculum drawer
│   │   ├── Testimonials.tsx      # Proven impact from VP of Engineering and CTO leaders
│   │   ├── FAQ.tsx               # Technical, enterprise-focused Q&A accordions
│   │   ├── LeadForm.tsx          # 3-step assessment wizard connected to Web3Forms email API
│   │   └── Footer.tsx            # Clean 3-column enterprise footer layout
│   └── lib/
│       └── utils.ts              # Tailwind class merging utility (clsx + tailwind-merge)
└── public/                       # Preserved official favicon assets
```

---

## 🛠️ Technology Stack & Engineering Best Practices

- **Core Framework**: [Next.js 16.2](https://nextjs.org/) (App Router & Server/Client Component Hybrid)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict type safety across all interfaces and state)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + Custom HSL design tokens & glassmorphic utilities (`.glass-card`, `.glass-morphism`)
- **Animation & Transitions**: [Framer Motion 11](https://www.framer.com/motion/) (Smooth layout animations, accordions, and viewport reveals)
- **Iconography**: [Lucide React](https://lucide.dev/) (Clean, modern SVG icon set)
- **Email Notifications**: [Web3Forms API](https://web3forms.com/) (Instant serverless delivery of detailed multi-page curriculum reports)

---

## ⚡ Quick-Start & Local Setup

To run SkillForge Academy on your local development environment:

### 1. Clone the Repository
```bash
git clone https://github.com/RaghavParasher/skillforge-academy.git
cd skillforge-academy
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Open in Your Browser
Navigate to [`http://localhost:3000`](http://localhost:3000) to inspect the full interactive platform locally.

---

## 🛡️ Enterprise Security & Compliance Statement

SkillForge Academy operates strictly under **SOC2 Type II** and **Zero-Trust Security** compliance standards:
- All hands-on coding labs and model fine-tuning exercises execute within isolated, zero-data-retention sandboxes or directly inside private customer VPCs.
- Proprietary corporate data, source code, and model weights never leave organizational security boundaries.

---

## 👨‍💻 Engineering Leadership & Attribution

Designed, Architected, and Engineered by **Raghav Parasher**.
- 🌐 **Live Production Link**: [https://skillforge-academyy.vercel.app/](https://skillforge-academyy.vercel.app/)
- 💻 **GitHub Repository**: [https://github.com/RaghavParasher/skillforge-academy](https://github.com/RaghavParasher/skillforge-academy)

---

<div align="center">
  <p font-mono text-xs text-slate-500>
    &copy; 2026 SkillForge Academy Inc. All rights reserved.
  </p>
</div>
