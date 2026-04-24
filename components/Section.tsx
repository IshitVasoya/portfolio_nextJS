'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

export function Section({
  children,
  id,
  style,
}: {
  children: ReactNode
  id: string
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: '100px 0', ...style }}
    >
      {children}
    </motion.section>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 48,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 13,
          color: 'var(--accent)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}
