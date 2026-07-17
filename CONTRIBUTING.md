# Contributing Guidelines

Thank you for your interest in contributing to the **Muhammad Hamad Systems Platform**. Please review this guide to align your additions with our enterprise-grade code standards and strict quality controls.

---

## 🛠️ Code Standards & Rules

To maintain high scores in our automatic code verification audits, we adhere to the following rules:

### 1. TypeScript & Type Safety
- **Named Imports Only**: Do not use object destructuring for core modules.
- **Top-Level Imports**: Place all `import` statements exclusively at the absolute top of the files.
- **Enums**: Always declare standard TypeScript `enum` blocks. Do **NOT** use `const enum`.
- **Avoid Implicit `any`**: All variables, props, and callbacks must carry explicit type definitions.

### 2. Styling & Theming
- Use **Tailwind CSS** utility classes directly in elements.
- Custom custom-property colors are mapped inside `src/index.css` under the `@theme` directive.
- **Avoid Separate Style Sheets**: All design systems must be declared inline or via utility utilities. Do not add raw inline `style={{ ... }}` attributes unless animating via `motion`.

### 3. Modularity
- **Never consolidate all code in a single file**: If a component exceeds 400 lines, extract its logic, types, or static data structures into separate helper modules (e.g., `/src/types.ts`, `/src/utils.ts`, or `/src/components/*`).

---

## 💻 Development Workflow

Follow these steps to submit additions safely:

### 1. Local Environment Setup
```bash
# Clone and install dependency structures
npm install

# Run the full-stack development environment (Boots Express + Vite Middleware)
npm run dev
```

### 2. Verification Pipelines
Before opening a PR, your branch **MUST** successfully complete local audits:
```bash
# Run TypeScript linter checks
npm run lint

# Compile and bundle full-stack production artifacts
npm run build
```

### 3. Git Branching Model
- **Branch Naming**: Use prefixed branches (e.g., `feat/agentic-feature`, `fix/telemetry-latency`).
- **Pristine Commits**: Use descriptive, imperative commit messages (e.g., `feat: integrate secure AST SQL sandbox validator`).
