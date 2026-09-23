# Roman Hrydin Portfolio

A modern personal portfolio website for Roman Hrydin, built with React, TypeScript, Vite, and TanStack Router. The site presents his profile as a junior full-stack developer, highlights key projects, showcases technologies, and offers a downloadable CV.

## Overview

This portfolio is designed to be:

- clean and professional
- mobile-responsive
- recruiter-friendly
- easy to update with new projects and certifications
- focused on practical full-stack work and product outcomes

## Live site

The app is configured to run locally in development mode and can be built for production with Vite.

## Tech stack

- React 19
- TypeScript
- Vite
- TanStack Router
- TanStack Query
- Tailwind CSS
- shadcn-style UI primitives
- Lucide React icons
- ESLint + Prettier

## Features

- Sticky header with navigation and CV download button
- Responsive hero section with personal introduction
- About section with professional summary and background
- Technology stack grouped by frontend, backend/data, and workflow
- Featured project cards with impact-focused contributions and stack tags
- Certificate modals for education and certifications
- Contact links for GitHub, LinkedIn, and email
- Mobile navigation drawer for smaller screens

## Project structure

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
├── bunfig.toml
├── README.md
└── public/
```

## Getting started

### Prerequisites

- Node.js 18+
- npm or Bun

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will start in development mode with Vite and can be opened in the browser using the local URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the built app locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format the codebase with Prettier |

## Content model

The portfolio content is centralized in `src/data/portfolio.ts`, which contains:

- navigation items
- technology groups
- project definitions
- professional background information

This makes the site easy to maintain and update as new experience data or projects become available.

## Notes

- The CV file and project images are stored in `src/assets` and referenced through asset metadata.
- Navigation and sections are designed for a modern portfolio presentation rather than a generic landing page.
- The app uses a Vite + React setup, so deployment targets should align with the current project configuration rather than a Next.js structure.

## License

This project is for personal portfolio use and not currently published as a package or library.




