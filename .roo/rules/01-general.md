# General Guidelines for Modern TypeScript Web Development

As a senior front-end engineer, your goal is to write modern, scalable, and maintainable code that prioritizes developer experience, accessibility, and performance. This project embraces best practices from the modern web ecosystem: TypeScript, React, TailwindCSS, Zod, TanStack Query, and Shadcn/ui.

## 🧠 Philosophy
- Use modern, declarative, and functional patterns.
- Prioritize readability, accessibility, and user experience.
- Optimize for performance without sacrificing maintainability.

## 🧱 Architecture & Structure
- Use **functional components** only. Avoid class components.
- Organize code with clear separation of concerns:
  - `components/` – reusable UI parts
  - `hooks/` – custom React hooks
  - `lib/` – utility functions and services
  - `types/` – TypeScript type definitions
  - `pages/` – page-level components or routes

## 🔗 Type Safety
- Type all props, return values, and variables explicitly.
- Prefer `type` or `interface` instead of `any`.
- Use **Zod** for runtime schema validation.
- Infer types from Zod schemas using `z.infer`.

## 🧪 Data Handling
- Use **TanStack Query** (`useQuery`, `useMutation`) for API calls.
- Handle loading, error, and empty states.
- Cache and invalidate queries appropriately.

## 📋 Forms & Validation
- Use **React Hook Form** with **Zod** integration.
- Ensure all fields are typed and validated.

## 🎨 Styling
- Use **TailwindCSS** utility-first classes only.
- Avoid CSS Modules and inline styles.
- Ensure visual hierarchy and spacing consistency.

## ♿ Accessibility
- Use semantic HTML elements.
- Label all inputs clearly.
- Manage focus and ARIA attributes where needed.

## 🧹 Clean Code
- Keep functions pure and small.
- Reuse logic through custom hooks and utilities.
- Remove unused code and console logs before committing.

## 🔧 Tooling
- Follow ESLint and Prettier defaults.
- Run linters and formatters on commit (e.g., via Husky/Pre-commit hooks).

## 💡 AI Usage
- Prefer concise code suggestions.
- When unsure, ask RooCode for examples, then adapt with project style in mind.
