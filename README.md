# Enterprise AI Systems Console & Personal Platform

A production-ready, full-stack personal brand platform and cognitive systems console designed for **Muhammad Hamad** (AI Systems Architect & Educator). This platform operates as a cohesive enterprise-tier SaaS application, mimicking the architectural philosophies of OpenAI, Stripe, and Vercel.

---

## 🗺️ Architectural Topology

The application leverages a unified, high-concurrency **Express + Vite Full-Stack Topology** running inside isolated Cloud Run containers. The system exposes advanced telemetry logs, direct API model parameters, and strict zero-trust sandbox simulators.

```
                                  +------------------------+
                                  |     Client Browser     |
                                  +-----------+------------+
                                              |
                     +------------------------+------------------------+
                     | HTTPS Port 3000                                 |
                     v                                                 v
         +-----------+------------+                        +-----------+------------+
         | Static Frontend (Vite) |                        | Express API Backplane  |
         +------------------------+                        +-----------+------------+
                                                                       |
                             +------------------+------------------+---+
                             |                  |                  |
                             v                  v                  v
                     +-------+-------+  +-------+-------+  +-------+-------+
                     |  /api/health  |  | /api/assistant|  |  /api/playg/* |
                     +---------------+  +-------+-------+  +---------------+
                                                |
                                                v [telemetry User-Agent]
                                        +-------+-------+
                                        |  Gemini API   |
                                        +---------------+
```

---

## 🛠️ Feature Matrix Breakdown

1. **AI Personal Assistant**: Multi-context chatbot trained directly on Muhammad Hamad's professional corpus. Injects custom provenance citations to prevent hallucination cycles.
2. **Interactive AI Lab**: Live hyperparameter dashboards comprising:
   - **Prompt Engineering Sandbox**: Stream custom temperatures, system layers, and latency parameters.
   - **RAG Simulator**: Step through dual BM25 sparse + Dense vector scoring with Reciprocal Rank Fusion blending graphs.
   - **LangGraph cyclic runner**: Active graphical representation of conditional supervisor agent state machine loops.
   - **PCA Semantic Embedding projector**: Maps concepts to 2D scatter dimensions.
3. **Architecture Library**: Blueprint explorer containing 12 SVG diagrams detailing hybrid retrieval, cyclic agents, AST SQL parsers, and caching proxies.
4. **Client Discovery Portal**: Transmit RFPs, upload context documents with progress gauges, schedule consultations, and track pipelines.
5. **Learning Academy**: Competency assessments with live multiple-choice quiz engines, automated Python code sandboxes, and verified Masterclass diplomas.
6. **Telemetry & Heatmaps**: Active canvas coordinate logging and Recharts throughput charts.
7. **CMS Core Manager**: Edit portfolio schemas live inside `localStorage` to override default static constants on-the-fly.

---

## 🚀 Developer Setup Guide

### 1. Requirements
- Node.js version 20 or higher
- NPM package manager

### 2. Quickstart Execution
```bash
# Clone the repository and install dependency schemas
npm install

# Run the full-stack development environment (Boots Express + Vite Middleware)
npm run dev
```

### 3. Compilation & Build Pipelines
The production build compiles the frontend static indices and uses `esbuild` to bundle the backend `server.ts` into a self-contained, high-performance module:
```bash
npm run build
```

---

## 🛡️ Production Hardening & Maintenance

- **Zero-Trust SQL Translation**: Generated SQL strings are parsed into syntax trees (ASTs) before execution, verifying SELECT-only query roots and blocking nested joins or destructive actions (such as `DROP`, `TRUNCATE`, `ALTER`).
- **Memory Threshold Limits**: Ingested files are throttled under strict 128,000 token limits to preserve system performance budgets.
- **Container Deployment**: Built inside minimal Alpine node containers utilizing non-root executing users for server hardening.
- **Form Sanitization**: All client portal input forms incorporate strict sanitation to prevent cross-site scripting (XSS) vectors.
