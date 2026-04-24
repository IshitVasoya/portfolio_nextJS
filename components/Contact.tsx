'use client'

import { Section, SectionLabel } from './Section'

const links = [
  { label: 'GitHub', icon: 'GH', href: 'https://github.com/IshitVasoya' },       // TODO: replace with your GitHub URL
  { label: 'LinkedIn', icon: 'LI', href: 'https://www.linkedin.com/in/ishit-vasoya/' },      // TODO: replace with your LinkedIn URL
  { label: 'Email', icon: 'EM', href: 'mailto:ishitvasoya@gmail.com' }, // TODO: replace with your email
  { label: 'Resume', icon: 'CV', href: 'resume.pdf' },        // TODO: link to your resume PDF
]

export default function Contact() {
  return (
    <Section id="contact">
      <div
        style={{
          padding: '0 clamp(24px, 5vw, 60px)',
          textAlign: 'center',
        }}
      >
        <SectionLabel>Get in Touch</SectionLabel>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 32,
              fontWeight: 800,
              color: 'var(--text)',
              margin: '0 0 16px',
            }}
          >
            Let&apos;s build something
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h3>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 16,
              color: 'var(--muted)',
              lineHeight: 1.7,
              margin: '0 0 36px',
            }}
          >
            I&apos;m actively looking for full-stack, AI/ML, or
            infrastructure roles. If you think I&apos;d be a good fit for
            your team, I&apos;d love to hear from you.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 13,
                  color: 'var(--text)',
                  padding: '12px 24px',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  letterSpacing: '0.04em',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.background =
                    'rgba(124,111,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                  }}
                >
                  {l.icon}
                </span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
