'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(24px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient orb */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,111,255,0.13) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1100,
          gap: 60,
          flexWrap: 'wrap',
        }}
      >
        {/* ── Left: Text content ── */}
        <div style={{ flex: '1 1 480px', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 14,
              color: 'var(--accent)',
              marginBottom: 18,
              letterSpacing: '0.06em',
            }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Ishit Vasoya
            <span style={{ color: 'var(--accent)' }}>.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(22px, 3.5vw, 38px)',
              fontWeight: 600,
              color: 'var(--muted)',
              lineHeight: 1.2,
              margin: '12px 0 0',
            }}
          >
            Full-Stack Developer & ML Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 17,
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginTop: 28,
              maxWidth: 540,
            }}
          >
            MS Computer Science · Building scalable web applications and ML
            pipelines. Currently crafting automation systems at Vosyn Inc. Based
            in Denver, CO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ display: 'flex', gap: 16, marginTop: 36 }}
          >
            <a
              href="#projects"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                color: 'var(--bg)',
                background: 'var(--accent)',
                padding: '12px 28px',
                borderRadius: 4,
                letterSpacing: '0.04em',
                fontWeight: 600,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '12px 28px',
                borderRadius: 4,
                letterSpacing: '0.04em',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text)'
              }}
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ display: 'flex', gap: 10, marginTop: 40, flexWrap: 'wrap' }}
          >
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: 'var(--muted)',
                padding: '5px 12px',
                background: 'var(--accent-dim)',
                borderRadius: 3,
              }}
            >
              US Work Auth · No Sponsorship
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: '#4ecdc4',
                padding: '5px 12px',
                background: 'rgba(78,205,196,0.1)',
                borderRadius: 3,
              }}
            >
              Open to Work
            </span>
          </motion.div>
        </div>

        {/* ── Right: Headshot ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: '0 0 auto', position: 'relative', zIndex: 1 }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: '50%',
              border: '2px solid var(--border)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 0 60px rgba(124,111,255,0.15)',
            }}
          >
            {/*
              ╔═══════════════════════════════════════════════╗
              ║  HEADSHOT PLACEHOLDER                        ║
              ║                                              ║
              ║  Replace /public/headshot.jpg with your      ║
              ║  photo (square crop works best, min 400px).  ║
              ║                                              ║
              ║  The Image component below will display it.  ║
              ╚═══════════════════════════════════════════════╝
            */}
            <Image
              src="/headshot.jpg"
              alt="Ishit Vasoya"
              width={280}
              height={280}
              priority
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              onError={(e) => {
                // Fallback: hide the broken image and show initials
                const target = e.currentTarget as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  const fallback = document.createElement('div')
                  fallback.style.cssText = `
                    width:100%;height:100%;display:flex;align-items:center;
                    justify-content:center;background:#12121a;
                    font-family:var(--sans);font-size:72px;font-weight:800;
                    color:var(--accent);letter-spacing:0.05em;
                  `
                  fallback.textContent = 'IV'
                  parent.appendChild(fallback)
                }
              }}
            />
          </div>

          {/* Decorative ring */}
          <div
            style={{
              position: 'absolute',
              top: -8,
              left: -8,
              right: -8,
              bottom: -8,
              borderRadius: '50%',
              border: '1px solid rgba(124,111,255,0.2)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
