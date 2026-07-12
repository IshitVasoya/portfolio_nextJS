'use client'

import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Guild',
    period: 'Jan 2025 — Present',
    details: [
      'Configured FastAPI service modules for employer-sponsored learning enrollment, connecting React.js components, PostgreSQL models, and SQLAlchemy validations across learner profile update workflows for advisors daily use.',
      'Refined tuition eligibility APIs using Python and Pydantic validation, reducing enrollment exception handling by 24% while supporting employer-specific program rules and learner status changes securely.',
      'Integrated AWS S3 document uploads with backend enrollment records, enabling learners to submit reimbursement file through authenticated React.js portal screens without support intervention delays monthly.',
      'Optimized PostgreSQL queries and indexing for learner progress dashboards, improving dashboard response time by 31% during advisor review and employer reporting cycles across cohorts weekly.',
      'Automated PyTest coverage and GitHub Actions checks for enrollment API changes, catching validation issues before releases across FastAPI and React.js updates to reduce rework cycles.',
      'Monitored production API logs through AWS CloudWatch and resolved learner profile defects, lowering repeated support tickets by 18% across enrollment workflow releases and dashboard updates.'
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Elluminati Inc.',
    period: 'Jan 2023 — Aug 2023',
    details: [
      'Mapped driver, customer, and merchant workflow requirements into Angular screens for an on-demand dispatch portal supporting booking, assignment, fare visibility, and branch operations modules daily.',
      'Built Express.js APIs with MongoDB collections for trip status updates, improving dispatcher lookup time by 22% across active ride and delivery queues during rush hours.',
      'Connected RxJS-based Angular services with Node.js endpoints to refresh booking, payment, and driver availability data without full page reloads for operations staff monitoring shifts weekly.',
      'Structured Mongoose schemas for customer, driver, vehicle, and order records, keeping operational data consistent across admin modules and mobile app integrations across production releases smoothly.',
      'Tested REST APIs through Postman and fixed validation defects before release, reducing repeated QA issues by 19% during marketplace portal delivery cycles for client rollouts.'
    ],
  },
  {
    role: 'Software developer (Intern)',
    company: 'Equisinfo',
    period: 'Jul 2022 — Dec 2022',
    details: [
      'Assisted Node.js development for an internal training-request tracker, creating Express.js routes for student inquiries, batch details, counselor follow-ups, and basic status updates daily use flows.',
      'Supported basic n8n workflow automation using Python and JavaScript scripts to connect inquiry updates with ClickUp, Slack, and internal follow-up tracking processes.',
      'Normalized MySQL tables and documented API requests in Postman, reducing duplicate records by 16% while improving developer handoff clarity during admin release fixes.'
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
