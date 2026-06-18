import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  transition: 'all 0.3s ease',
};

const innerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 32px',
  height: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          ...navStyle,
          background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
      >
        <div style={innerStyle}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            style={{
              background: 'linear-gradient(135deg,#818cf8,#22d3ee)',
              border: 'none',
              cursor: 'pointer',
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: '-0.5px',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CW.
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  background: active === l.href ? 'rgba(99,102,241,0.12)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: active === l.href ? '#818cf8' : '#94a3b8',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (active !== l.href) e.currentTarget.style.color = '#e2e8f0';
                }}
                onMouseLeave={(e) => {
                  if (active !== l.href) e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://github.com/chamodlw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 8,
                padding: '8px 20px',
                borderRadius: 50,
                border: '1px solid rgba(99,102,241,0.4)',
                fontSize: 14,
                fontWeight: 600,
                color: '#818cf8',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-burger"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: '8px 10px',
              color: '#e2e8f0',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 70,
            left: 0,
            right: 0,
            zIndex: 999,
            background: 'rgba(8,12,20,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '16px 32px 24px',
          }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 0',
                fontSize: 16,
                fontWeight: 500,
                color: active === l.href ? '#818cf8' : '#94a3b8',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
