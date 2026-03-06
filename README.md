<div align="center">

# Gunraaj Singh — Portfolio

**Electrical & Computer Engineering Student · PDEU**  
Power Electronics · Control Systems · Computer Vision · AI

[![Live Site](https://img.shields.io/badge/Visit%20Portfolio-gunraaj.github.io-6366f1?style=flat-square&logo=vercel&logoColor=white)](https://gunraaj.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gunraaj%20Singh-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gunraaj-singh/)

</div>

---

A personal portfolio website showcasing my projects in power electronics, motor control, computer vision, and AI-assisted engineering.

## Built With

- **[Astro](https://astro.build)** — Static site framework
- **TypeScript** — Type-safe configuration
- **Tailwind CSS** — Utility-first styling
- **Vanilla JavaScript** — Animations and interactions

## Features

- Responsive design with dark/light mode
- SPA-like page transitions
- Per-project case study pages at `/projects/[id]`
- Glassmorphism UI with ambient glow effects
- Central content config (`src/content/site.ts`) — no HTML editing needed

## Running Locally

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Updating Content

All portfolio data (projects, skills, links, about text) is managed in one file:

```
src/content/site.ts
```

**To update your resume:** Replace `public/resume.pdf` with your new file. No code changes needed.

## Project Structure

```
/
├── public/           # Static assets (resume.pdf, images)
├── src/
│   ├── components/   # Reusable UI components
│   ├── content/      # site.ts — single source of truth
│   ├── layouts/      # Page layout wrapper
│   └── pages/        # Routes (index, projects, experience...)
└── astro.config.mjs
```

---

<div align="center">
  <sub>© 2026 Gunraaj Singh</sub>
</div>
