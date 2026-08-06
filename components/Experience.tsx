'use client'

import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Guild',
    period: 'Jan 2025 — Present',
    details: [
      'Developed Python-based backend services using FastAPI, Pydantic, SQLAlchemy, and PostgreSQL to support employer-sponsored enrollment workflows, implementing business rules for learner eligibility, application processing, and profile management.',
      'Built workflow-driven backend features connecting React.js applications with FastAPI services and PostgreSQL data models, enabling advisors to manage learner profiles, enrollment states, and progress tracking workflows supporting 150K+ active learners across employer-sponsored programs.',
      'Designed secure document processing workflows using AWS S3 pre-signed URLs, enabling direct client-to-cloud uploads for reimbursement documents while reducing backend file transfer overhead and improving upload reliability.',
      'Improved PostgreSQL-backed advisor dashboards by analyzing query performance, optimizing SQLAlchemy data access patterns, resolving inefficient relationship loading, and implementing indexing strategies that reduced API response latency from approximately 1.5 seconds to under 300ms.',
      'Developed asynchronous backend workflows for long-running enrollment and processing tasks, improving application responsiveness by decoupling resource-intensive operations from synchronous API request flows.',
      'Enhanced production reliability by monitoring application behavior through AWS CloudWatch, troubleshooting workflow failures, improving validation handling, and reducing recurring support escalations by approximately 15–20%.'
    ],
  },
  {
    role: 'Software Engineer – Python Backend & Integrations,',
    company: 'Crest Data',
    period: 'Oct 2021 — Jul 2023',
    details: [
      'Developed Python-based backend integration services to collect, process, and normalize data from enterprise security and observability platforms through REST APIs, delivering structured event data into Splunk environments.',
      'Built and packaged 6+ integration modules and Splunk Technology Add-ons (TAs) by transforming JSON, Syslog, and CEF payloads into standardized event structures for consistent indexing and analysis workflows.',
      'Designed scalable data ingestion workflows using Python asynchronous processing with asyncio and httpx, improving processing efficiency while handling multiple external API integrations, authentication flows, and high-volume event collection.',
      'Implemented reliable processing mechanisms using checkpoint-based state management, retry strategies, exponential backoff, and failure recovery patterns to prevent duplicate processing and maintain data consistency during service interruptions.',
      'Developed Python-based automation workflows for event enrichment and response actions, integrating external platforms to streamline repetitive operational processes.',
      'Created reusable API client libraries, integration templates, and backend components that improved development consistency and maintainability across multiple vendor integrations.',
      'Improved integration reliability by validating API behavior, payload transformations, authentication workflows, and failure scenarios through automated testing practices using pytest and unittest.mock.'
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
