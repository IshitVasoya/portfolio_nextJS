'use client'

import { useState, useEffect } from 'react'

const navItems = ['Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 clamp(24px, 5vw, 60px)',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 15,
          color: 'var(--accent)',
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        IV<span style={{ color: 'var(--muted)' }}>.</span>
      </a>

      <div style={{ display: 'flex', gap: 28 }}>
        {navItems.map((n) => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 12,
              color: 'var(--muted)',
              letterSpacing: '0.06em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--accent)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--muted)')
            }
          >
            {n}
          </a>
        ))}
      </div>
    </nav>
  )
}
