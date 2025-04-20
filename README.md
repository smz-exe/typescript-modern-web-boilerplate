# RooCode TypeScript Web Template

A modern TypeScript-based web development template optimized for RooCode AI pair programming.

## Features

- ⚡ **Vite + React + TypeScript** - Fast development and build times
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧩 **Shadcn/ui** - Reusable UI components
- 📊 **TanStack Query** - Data fetching and caching
- ✅ **Zod & React Hook Form** - Type-safe form validation
- 🔍 **ESLint + Prettier** - Code quality and formatting
- 🧪 **Vitest + Testing Library** - Unit and component testing
- 🐳 **Docker + DevContainer** - Containerized development
- 🧠 **RooCode AI-ready** - Optimized for AI pair programming

## Getting Started

### Prerequisites

- Node.js 18+ (or use the included DevContainer)
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/smz-exe/modern-web-roo-template.git
cd modern-web-roo-template

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## Project Structure

```
modern-web-roo-template/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/          # UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and services
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── styles.css       # Global styles and TailwindCSS directives
├── .devcontainer/       # DevContainer configuration
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── index.html           # HTML entry point
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build for production
- `yarn preview` - Preview the production build locally

## DevContainer

This project includes a `.devcontainer/` folder for VSCode + Docker-based development. This provides a consistent development environment with all the necessary tools pre-installed.

To use the DevContainer:

1. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VSCode
2. Open the project in VSCode
3. Click the green button in the bottom-left corner and select "Reopen in Container"

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
