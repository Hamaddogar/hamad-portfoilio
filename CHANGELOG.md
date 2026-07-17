# Changelog & Versioning Strategy

This project adheres strictly to **Semantic Versioning** (`MAJOR.MINOR.PATCH`).
- **MAJOR**: Incompatible API modifications or structural topology overhauls.
- **MINOR**: Backward-compatible feature additions (e.g., adding experimental simulator nodes or telemetry indices).
- **PATCH**: Backward-compatible bug fixes, security hardening, or visual contrast refinements.

---

## [3.1.0] - 2026-07-17

This release represents the complete enterprise promotion, securing WCAG compliance, introducing extensive recruiter portals, and hard-routing full-stack server configurations.

### Added
- **Recruiter Cockpit**: Integrated dynamic, single-action dossier compilation utilities with automated resume pipelines.
- **Structured JSON-LD Schema**: Hand-crafted Person schema within `/index.html` to optimize crawler indexing and professional discoverability.
- **G-Workspace Ingress Protocols**: Established production templates for Vercel, Wrangler, and automated Dockerfile structures.
- **Interactive Markdown Support**: Configured robust markdown rendering for real-time model answers.

### Changed
- **Inline Validation Mechanics**: Replaced legacy `window.alert` browser prompts in the client inquiry and calendar forms with responsive, inline animated red alert banners.
- **Lighthouse Optimization**: Rebuilt layout images with direct CDN and modern formats to maintain a perfect score budget.

### Hardened
- **Zero-Trust AST Guards**: Expanded static query string parsers to actively block recursive database joins or nested table truncations.
- **CSP Headers**: Configured strict Content Security Policies within `vercel.json` to prevent malicious frame loading or unauthorized script injections.
- **Non-Root Execution User**: hardcoded a dedicated non-root user (`expressjs`) in Alpine Docker containers.

---

## [3.0.0] - 2026-07-12

Initial unified Full-Stack Release.

### Added
- **Express + Vite Topology**: Mounted development proxies for instant hot-module setups.
- **AI Portfolio Copilot**: Hooked server-side Gemini 3.5 Flash SDKs with localized training datasets and natural citations.
- **Interactive AI Lab**: Built live sliders for model temperatures, sparse-dense re-ranking pipelines, and PCAs.
- **Architecture Blueprints**: Rendered customized, high-contrast SVG diagram models detailing agent state supervisors.
- **Telemetry Console**: Connected live canvas mouse coordinate sensors and Recharts database throughput analytics.
