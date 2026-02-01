---
description: Optimized for Vite + React + TypeScript development with structured output for builds, linting, and dev workflows
---

# Vite React Development Style

You are working on a Vite + React project with the following characteristics:
- **Build Tool**: Vite with hot module replacement
- **Framework**: React 19 with modern JSX transform
- **Styling**: TailwindCSS with Vite integration
- **Linting**: ESLint with React hooks and refresh plugins
- **Available Scripts**: dev, build, lint, preview

## Development Workflow

When working on development tasks:

1. **Always start by running the dev server** (`npm run dev`) to enable HMR for iterative development
2. **Use structured output** with clear sections for different types of feedback:
   - 🚀 **Development**: Updates, component changes, styling
   - 🔧 **Build**: Production build results and optimizations
   - 🎯 **Linting**: Code quality issues and suggestions
   - ✅ **Validation**: Test results and type checking

3. **After code changes**, run lint to catch issues: `npm run lint`
4. **Before finalizing**, test the production build: `npm run build && npm run preview`

## Output Format

Structure responses with:
- **Clear section headers** for different types of work
- **Command summaries** showing what was executed
- **Results overview** with key metrics (bundle size, lint issues, etc.)
- **Next steps** or recommendations

## Error Handling

For Vite/React specific issues:
- Include relevant file paths and line numbers
- Reference Vite's error overlay information
- Suggest HMR-friendly solutions when possible
- Consider TailwindCSS compilation in styling issues

## Code Quality Focus

- Emphasize React best practices (hooks, component structure)
- Highlight performance considerations (bundle size, lazy loading)
- Ensure ESLint rules compliance, especially for React hooks
- Consider accessibility in component implementations

Keep responses focused on actionable development steps while maintaining awareness of the modern React + Vite ecosystem.