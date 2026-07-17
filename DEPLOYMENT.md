# Full-Stack Deployment & Hardening Guide

This document describes the compilation process, containerization architecture, and production deployment protocols of the **Muhammad Hamad Systems Platform**.

---

## 📦 Build & Bundle Stage

When running the production pipeline, the application separates client and server compilation stages to ensure optimal loading speeds:

```bash
npm run build
```

The command triggers:
1. **Vite Bundling**: Compiles client-side React indices, optimizes image formats, and creates static files under the `/dist` directory.
2. **Esbuild Compilation**: Compiles the backend TypeScript file (`server.ts`) into a single bundled CommonJS file (`dist/server.cjs`) using the target `node` platform. This format eliminates native ES Module path issues and handles imports natively.

---

## 🐳 Containerization (Dockerfile)

The platform includes a hard-secured, multi-stage **Dockerfile** for hosting on serverless containers like **Google Cloud Run** or **AWS Fargate**:

- **Stage 1 (Builder)**: Uses an active Alpine base, installs dev dependencies, and executes the compile script.
- **Stage 2 (Runner)**: Pulls a minimal execution container, installs only standard production dependencies, registers a non-root system user (`expressjs`), sets file ownership, and exposes port `3000`.

To build the container locally:
```bash
docker build -t hamad-ai-platform .
```

---

## 🚀 Deployment Destinations

The workspace comes pre-configured with direct files for multiple target clouds:

### 1. Google Cloud Run (Container Ingress)
Ensure `GEMINI_API_KEY` is registered in Google Cloud Secret Manager, then deploy via standard gcloud CLI:
```bash
gcloud run deploy hamad-ai-platform \
  --source . \
  --port 3000 \
  --set-env-vars="NODE_ENV=production" \
  --set-secrets="GEMINI_API_KEY=GEMINI_API_KEY:latest" \
  --allow-unauthenticated
```

### 2. Vercel Serverless
The repository contains `/vercel.json` with secure, production-grade security headers (CSP, Frame options, XSS protection). Deploy directly using Vercel CLI:
```bash
vercel --prod
```

### 3. Cloudflare Wrangler
The `/wrangler.toml` file maps static files to Cloudflare Pages:
```bash
wrangler publish
```

---

## 🔒 Production Hardening Checklists

Before promoting an environment to public production, verify the following configurations:
- [ ] **HTTPS Redirection**: All traffic must terminate at a secure proxy layer.
- [ ] **Secret Safety**: No private keys or secret variables may exist in public directories or client-accessible files.
- [ ] **Access Control**: Verify CORS policies are limited strictly to trusted domains.
