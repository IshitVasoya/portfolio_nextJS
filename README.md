# Ishit Vasoya — Portfolio

Dark-themed developer portfolio built with **Next.js 14**, **TypeScript**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── globals.css        # CSS variables & global styles
│   ├── layout.tsx         # Root layout with fonts & meta
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── Nav.tsx            # Sticky nav with blur backdrop
│   ├── Hero.tsx           # Hero with headshot placeholder
│   ├── Skills.tsx         # Tech stack grid
│   ├── Experience.tsx     # Work history timeline
│   ├── Projects.tsx       # Project cards with hover effects
│   ├── Education.tsx      # Education & certifications
│   ├── Contact.tsx        # Contact links (edit URLs here)
│   └── Section.tsx        # Shared animated section wrapper
├── public/
│   └── headshot.jpg       # ← ADD YOUR PHOTO HERE
├── package.json
├── next.config.js
└── tsconfig.json
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Framer Motion
- DM Sans + JetBrains Mono fonts
- CSS variables for theming
- Static export ready
