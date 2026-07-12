'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const projects = [
  {
    title: 'Breast Cancer Detection and Prognosis Prediction Using Multi-Modal Machine Learning',
    tags: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'SHAP'],
    description:
      ['Built a two-branch breast cancer grading pipeline combining EfficientNetB7 MRI image features with Random Forest radiomic features for ensemble-based tumor classification.',
      'Reduced 80+ radiomic descriptors to 30 features using correlation filtering, ANOVA, RFE, and Random Forest importance for cleaner model training.',
      'Added SHAP and Grad-CAM explainability workflows to review feature influence and visualize CNN attention across tumor- relevant MRI regions during validation.'
      ],
    accent: '#ff6b9d',
  },
  {
    title: 'Securing User Browsing: Browser and Extension Effectiveness Against XSS Attack',
    tags: ['Python', 'Flask', 'HTML', 'CSS', 'CSP', 'Selenium', 'Browser Security'],
    description:
    ['Engineered two Flask-backed web variants with and without CSP headers to evaluate reflected XSS behavior across browser configurations and payload execution paths.',
      'Implemented five XSS attack vectors covering file uploads, URL injection, snippets, text boxes, and image errors to reproduce realistic input-sanitization failures safely.',
      'Automated cross-browser validation across six browsers and security extensions, comparing script execution, blocked payloads, and CSP mitigation behavior under repeatable test conditions.'
      ],
    accent: '#4ecdc4',
  },
  {
    title: 'Performance and Fairness Comparison of Round Robin and Lottery Scheduling Algorithm',
    tags: ['C', 'Python', 'Scheduling Algorithms', 'Statistical Analysis', 'Performance Evaluation'],
    description:
      ['Implemented dynamic Round Robin and Lottery schedulers in C, using Python analysis scripts to simulate execution across configurable quantum and ticket distributions.',
        'Measured waiting time, turnaround time, response time, and fairness across three workload scenarios, identifying scheduler behavior under balanced and burst-heavy process queues.',
        'Optimized simulation logic for repeatable experiments, reducing manual recalculation effort by automating result capture, metric aggregation, and comparative scheduler reporting outputs consistently.'
      ],
    accent: '#ffd93d',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <Section id="projects">
      <div style={{ width: '100%', margin: '0 auto', padding: '0 clamp(24px, 5vw, 60px)', }}>
        <SectionLabel>Projects</SectionLabel>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${
                  hovered === i ? p.accent + '66' : 'var(--border)'
                }`,
                borderRadius: 6,
                padding: 28,
                cursor: 'default',
                transition: 'all 0.3s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
                boxShadow:
                  hovered === i ? `0 12px 40px ${p.accent}15` : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: p.accent,
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'var(--text)',
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 14,
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                  margin: '0 0 20px',
                }}
              >
                {p.description}
              </p>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: p.accent,
                      padding: '3px 10px',
                      border: `1px solid ${p.accent}33`,
                      borderRadius: 3,
                      background: `${p.accent}0d`,
                    }}
                  >
                    {t}
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
