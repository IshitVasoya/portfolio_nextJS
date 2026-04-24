'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionLabel } from './Section'

const projects = [
  {
    title: 'Breast Cancer Detection Pipeline',
    tags: ['TensorFlow/Keras', 'EfficientNetB7', 'SHAP', 'Grad-CAM'],
    description:
      'Hybrid ensemble ML pipeline combining deep learning with interpretability. Achieved 95.9% classification accuracy using EfficientNetB7 with SHAP and Grad-CAM for explainable predictions on medical imaging data.',
    accent: '#ff6b9d',
  },
  {
    title: 'Multi-Modal Radiogenomics ML',
    tags: ['CNN', 'Random Forest', 'scikit-learn', 'pydicom'],
    description:
      'Graduate research combining CNN feature extraction with Random Forest classifiers for multi-modal medical imaging analysis. Built DICOM preprocessing pipelines and multi-stage feature selection workflows.',
    accent: '#4ecdc4',
  },
  {
    title: 'Vosyn Automation Platform',
    tags: ['Python', 'n8n', 'REST APIs', 'WordPress'],
    description:
      'End-to-end automation system integrating WordPress lead capture, ClickUp task routing, and Slack notifications. Replaced 30-minute daily manual processes with zero-touch workflow automation.',
    accent: '#ffd93d',
  },
  {
    title: 'E-Commerce Platform',
    tags: ['Angular', 'Node.js', 'MongoDB', 'JWT'],
    description:
      'Full-stack MEAN application with secure authentication, optimized database queries, and responsive UI components. Drove measurable improvements in sales and customer engagement metrics.',
    accent: '#7c6fff',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <Section id="projects">
      <div style={{ padding: '0 clamp(24px, 5vw, 60px)' }}>
        <SectionLabel>Projects</SectionLabel>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
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
