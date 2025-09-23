# Amaechi's Portfolio

A professional, single-page portfolio for a senior software engineer, built with Next.js 15+, TypeScript, and Tailwind CSS 4. It features a modern, animated UI and a foundation for future expansion into a full-fledged blog and CMS.

## 🎯 Project Description

- **What it is:** A production-grade portfolio showcasing my projects, skills, experience, and professional philosophy through a seamless, single-page experience.
- **Who it’s for:** Recruiters, hiring managers, clients, and fellow developers evaluating my engineering practices and capabilities.
- **Why it matters:** It demonstrates real-world frontend architecture, performance, accessibility, and a keen eye for design and user experience.

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 4, shadcn/ui primitives, Lucide icons
- **Animations:** Framer Motion
- **Testing:** Jest & React Testing Library
- **Deployment:** Vercel

_Future plans include integrating a database like MongoDB for a blog/CMS and Zod for validation._

## 🧠 AI Integration Strategy

This project was built almost entirely using an AI-driven workflow with the Gemini CLI, demonstrating modern development practices.

- **Code Generation:** Gemini was used to scaffold all frontend components (Hero, About, Projects, Skills, Experience, Testimonials, Contact, and Navbar) based on detailed markdown specifications for each section.
- **Testing:** The testing environment using Jest and React Testing Library was configured by the AI, which also generated the initial unit tests for the `Hero` component.
- **Documentation:** This README was refactored by the AI to accurately reflect the completed work, transforming the initial project plan into a summary of the result.
- **Context-Aware Techniques:** Throughout development, the AI was provided with file contents, project structure, and diffs to maintain context and ensure consistency.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # The main single-page entry point
├── components/
│   ├── ui/                 # shadcn/ui base components
│   └── shared/             # All portfolio section components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
└── lib/
    └── utils.ts            # Core utilities
```

## 🧪 Testing

- Jest and React Testing Library are configured for component-level unit and integration testing.
- The test suite can be run with the `npm test` command.
- The current plan is to build out test coverage for all major page sections and utility functions.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Run tests
npm test
```

## 📦 Deployment

The application is configured for seamless deployment to Vercel.