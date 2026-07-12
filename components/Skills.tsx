'use client'

import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const skills: Record<string, string[]> = {
  'Languages': [
    'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'
  ],
  'Frontend Development': [
    'Angular', 'React.js', 'Vue.js', 'RxJS', 'NgRx', 'Redux', 'Vue Router', 'SCSS', 'Bootstrap'
  ],
  'Backend Development': ['FastAPI', 'Django', 'Flask', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets'],
  'Databases & ORM': [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'SQLAlchemy', 'Aggregation Pipelines', 'Indexing'
  ],
  'Cloud & DevOps': [
    'AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD'
  ],
  'AI, Testing & Tools': ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'PyTest', 'Jest', 'Postman', 'Swagger/OpenAPI', 'n8n', 'Git', 'GitHub', 'Jira'],
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
