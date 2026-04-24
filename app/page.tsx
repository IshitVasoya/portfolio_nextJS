import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import './globals.css'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer
        style={{
          padding: '28px clamp(24px, 5vw, 60px)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            color: 'var(--muted)',
          }}
        >
          © 2026{' '}
          <span style={{ color: 'var(--accent)' }}>Ishit Vasoya</span> —
          Built with Next.js &amp; Framer Motion
        </p>
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            color: 'var(--muted)',
          }}
        >
          Denver, CO ·{' '}
          <span style={{ color: 'var(--accent)' }}>Open to Work</span>
        </p>
      </footer>
    </>
  )
}
