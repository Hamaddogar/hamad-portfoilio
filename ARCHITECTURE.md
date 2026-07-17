# Enterprise Cognitive Platform Architecture Blueprint

This document details the architectural topology, data flows, state machines, and security guardrails governing the **Muhammad Hamad Enterprise Systems Console & Personal Brand Platform**.

---

## 🗺️ System Topology

The platform implements a unified, high-concurrency **Express + Vite Server-Side Middleware Topology** executing in isolated Linux containers (GCP Cloud Run). 

```
                                  +---------------------------------------+
                                  |            Client Browser             |
                                  +-------------------+-------------------+
                                                      |
                     +--------------------------------+--------------------------------+
                     | HTTPS Port 3000                                                 |
                     v                                                                 v
         +-----------+------------+                                        +-----------+------------+
         | Static Frontend (Vite) |                                        | Express API Backplane  |
         | React 19 Client SPA    |                                        | Node.js / tsx Engine   |
         +------------------------+                                        +-----------+------------+
                                                                                       |
                                                 +-------------------------------------+-------------------------------------+
                                                 |                                     |                                     |
                                                 v                                     v                                     v
                                         +-------+-------+                     +-------+-------+                     +-------+-------+
                                         |  /api/health  |                     | /api/assistant|                     | /api/playg/*  |
                                         +---------------+                     +-------+-------+                     +---------------+
                                                                                       |
                                                                                       v
                                                                               +-------+-------+
                                                                               |  Gemini API   |
                                                                               |  SDK Engine   |
                                                                               +---------------+
```

### Key Architectural Layers:
1. **The Delivery Plane (React 19 SPA)**: Designed using high-contrast typography, customizable layouts, and motion-staggered transitions via `motion/react`. Features a global Command Palette shortcut (`Cmd + K`) for instant navigation indexing.
2. **The Ingress Plane (Express Backplane)**: Serves static assets in production, and acts as a lightweight proxy middleware in development. It is bound to host `0.0.0.0:3000` to comply with internal reverse proxy ingress configurations.
3. **The Cognitive Brain (Gemini 3.5 SDK)**: Handles contextual inquiries, system evaluation playbooks, and structured model reasoning with automatic server-side parameter streaming.

---

## 🔄 Cognitive Execution & Retrieval Pipeline

The application features advanced simulators displaying Muhammad's technical core execution strategies:

### 1. Stateful Multi-Agent LangGraph Supervisor (Simulator)
- **Problem**: Linear chains collapse when queries require human correction, recursive iterations, or parallel tool calls.
- **Solution**: A cyclic state-driven orchestration. The central supervisor node evaluates state variables, determines token budgets, delegates tasks to specialized agents (e.g., Coder, Researcher), and validates outputs before updating the state and returning control.

```
       [Input Query] ---> (Supervisor Node)
                               |
            +------------------+------------------+
            | (State Update)                      | (State Update)
            v                                     v
    (Coder Agent)                         (Researcher Agent)
            |                                     |
            +------------------+------------------+
                               v
                       (Validator Gate) ---> [Success Output]
                               |
                               v (Fails Validation)
                       [Loop State Recurse]
```

### 2. Dense-Sparse Hybrid RAG (Simulator)
- **Sparse (BM25)**: Ensures exact keyword compliance for tabular metrics and serial structures.
- **Dense (Vector Search)**: Resolves semantic query matches and conceptual clusters.
- **RRF & Re-ranking**: Combines scores via **Reciprocal Rank Fusion (RRF)** and filters top candidates using Cross-Encoder re-rankers.

---

## 🔒 Security Hardening Matrix

To prevent common injection patterns and model abuses, the system features a zero-trust architecture:

1. **AST SQL Translators**: Generated natural-language-to-SQL statements are run through sandboxed syntax tree parsers that strictly block:
   - Nested joins or arbitrary schemas.
   - Non-SELECT queries (prohibiting `DROP`, `TRUNCATE`, `DELETE`, `ALTER`).
2. **Form Validation & Sanitation**: Ingestion endpoints utilize custom, server-side parameter validators preventing Cross-Site Scripting (XSS) or buffer overruns.
3. **Memory Context Constraints**: Retains a sliding history window (capped at 128,000 token bounds) to secure models against context fatigue and memory leaks.
