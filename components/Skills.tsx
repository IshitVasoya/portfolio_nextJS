'use client'

import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const skills: Record<string, string[]> = {
  Languages: [
    'Python',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'SQL',
    'C',
    'Java',
  ],
  'Frameworks & Libraries': [
    'Angular',
    'React',
    'Node.js',
    'Express.js',
    'Next.js',
    'TensorFlow',
    'Keras',
    'scikit-learn',
  ],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
  'Cloud & DevOps': [
    'AWS EC2/S3',
    'GCP',
    'Docker',
    'GitHub Actions',
    'CI/CD',
  ],
  'Tools & Platforms': [
    'n8n',
    'WordPress',
    'ClickUp API',
    'Slack API',
    'Git',
    'Jest',
    'Mocha',
  ],
  Security: ['Wireshark', 'Burp Suite', 'Metasploit', 'JWT Auth'],
}

export default function Skills() {
  return (
    <Section id="skills">
      <div style={{ padding: '0 clamp(24px, 5vw, 60px)' }}>
        <SectionLabel>Skills &amp; Technologies</SectionLabel>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {Object.entries(skills).map(([cat, items], ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'var(--accent)',
                  marginBottom: 16,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {cat}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 12,
                      color: 'var(--text)',
                      padding: '5px 12px',
                      background: 'var(--accent-dim)',
                      borderRadius: 3,
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        'rgba(124,111,255,0.25)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--accent-dim)'
                      e.currentTarget.style.color = 'var(--text)'
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
