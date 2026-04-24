'use client'

import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Colorado Denver',
    year: '2024',
    gpa: '3.86 / 4.0',
    notes: 'Graduate Research: Multi-modal ML for Medical Imaging',
  },
  {
    degree: 'NSA Certificate in Cybersecurity & Defence',
    school: 'National Security Agency',
    year: '2024',
    gpa: null,
    notes: null,
  },
  {
    degree: 'CompTIA Network+',
    school: 'CompTIA',
    year: '2024',
    gpa: null,
    notes: null,
  },
]

export default function Education() {
  return (
    <Section id="education">
      <div style={{ padding: '0 clamp(24px, 5vw, 60px)' }}>
        <SectionLabel>Education &amp; Certifications</SectionLabel>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        >
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
                padding: '20px 24px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 6,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 17,
                    fontWeight: 700,
                    color: 'var(--text)',
                    margin: 0,
                  }}
                >
                  {ed.degree}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 13,
                    color: 'var(--accent)',
                    margin: '4px 0 0',
                  }}
                >
                  {ed.school}
                </p>
                {ed.notes && (
                  <p
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 13,
                      color: 'var(--muted)',
                      margin: '6px 0 0',
                    }}
                  >
                    {ed.notes}
                  </p>
                )}
              </div>
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 13,
                    color: 'var(--muted)',
                  }}
                >
                  {ed.year}
                </span>
                {ed.gpa && (
                  <p
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 12,
                      color: 'var(--accent)',
                      margin: '4px 0 0',
                    }}
                  >
                    GPA: {ed.gpa}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
