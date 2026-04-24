'use client'

import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const experiences = [
  {
    role: 'Technology & System Coordinator',
    company: 'Vosyn Inc.',
    period: '2025 — Present',
    details: [
      'Built end-to-end automation workflows connecting WordPress, ClickUp, and Slack using Python and n8n',
      'Designed REST API webhook pipelines for lead capture and task routing with zero-touch automation',
      'Deployed Bitwarden via Docker on GCP for company-wide credential management',
      'Built Python reporting scripts pulling ClickUp API data for weekly pipeline summaries',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Elluminati Inc.',
    period: '2023 — 2023',
    details: [
      'Engineered a full-stack e-commerce platform on the MEAN stack, boosting online sales by 15%',
      'Built secure REST APIs with JWT authentication, improving customer engagement by 20%',
      'Optimized MongoDB query performance and implemented pagination for large datasets',
      'Developed Angular components with TypeScript for responsive, cross-browser UIs',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Equisinfo',
    period: '2021 — 2021',
    details: [
      'Deployed real-time Node.js applications on AWS EC2 with auto-scaling configurations',
      'Built RESTful APIs handling concurrent requests with Express.js middleware patterns',
      'Managed S3 storage integration for document and media asset pipelines',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <div style={{ padding: '0 clamp(24px, 5vw, 60px)' }}>
        <SectionLabel>Experience</SectionLabel>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: 32,
                position: 'relative',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 8,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 20,
                      fontWeight: 700,
                      color: 'var(--text)',
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 14,
                      color: 'var(--accent)',
                      margin: '6px 0 0',
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    color: 'var(--muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {exp.details.map((d, di) => (
                  <div
                    key={di}
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--accent)',
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        marginTop: 5,
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 15,
                        color: 'var(--muted)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
