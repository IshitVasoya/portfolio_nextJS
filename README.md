# Ishit Vasoya — Portfolio

Dark-themed developer portfolio built with **Next.js 14**, **TypeScript**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add Your Headshot

1. Drop your photo into the `/public` folder as `headshot.jpg`
2. Square crop works best (minimum 400×400px)
3. The Hero section will display it in a circular frame
4. If no image is found, it gracefully falls back to your initials "IV"

## Customize Your Links

Edit `components/Contact.tsx` — update the `links` array with your real URLs:

```ts
const links = [
  { label: 'GitHub',   icon: 'GH', href: 'https://github.com/YOUR_USERNAME' },
  { label: 'LinkedIn', icon: 'LI', href: 'https://linkedin.com/in/YOUR_PROFILE' },
  { label: 'Email',    icon: 'EM', href: 'mailto:your@email.com' },
  { label: 'Resume',   icon: 'CV', href: '/resume.pdf' },  // put resume.pdf in /public
]
```

## Deploy

### Vercel (recommended)
```bash
npx vercel
```

### Static Export (GitHub Pages, Netlify, etc.)
The project is configured with `output: 'export'` in `next.config.js`:
```bash
npm run build    # generates /out folder
```
Upload the `/out` folder to any static host.

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
