import React from 'react';
import profileImg from '../images/chamod1.png';

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/chamodlw',
    color: '#e2e8f0',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chamod-weerasinghe-b89aaa293/',
    color: '#0a66c2',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/weere__cl00___/',
    color: '#e1306c',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@chamodweerasinghe8',
    color: '#00ab6c',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
  },
];

const skills = ['React.js', 'Flutter', 'Next.js', 'Node.js', 'React Native', 'WordPress', 'Firebase', 'MongoDB'];

export default function SiteFooter() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', paddingTop: 70, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* 4 column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 40,
          marginBottom: 56,
          alignItems: 'start',
        }} className="footer-grid">

          {/* Col 1: Profile */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
            {/* Animated profile image */}
            <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 20 }}>
              <div style={{
                position: 'absolute', inset: -6, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #818cf8, #6366f1)',
                animation: 'spin-footer 4s linear infinite',
              }} />
              <div style={{
                position: 'absolute', inset: -3, borderRadius: '50%',
                background: 'var(--bg)',
              }} />
              <img
                src={profileImg}
                alt="Chamod Weerasinghe"
                style={{
                  position: 'relative', zIndex: 1,
                  width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover',
                  border: '2px solid rgba(99,102,241,0.4)',
                }}
              />
              {/* Online dot */}
              <div style={{
                position: 'absolute', bottom: 2, right: 2, zIndex: 2,
                width: 14, height: 14, borderRadius: '50%',
                background: '#10b981', border: '2px solid var(--bg)',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
            </div>

            <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>Chamod Weerasinghe</h3>
            <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 10 }}>Associate Software Engineer</p>
            <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20 }}>
              Building elegant web & mobile experiences from Sri Lanka. Open to new opportunities.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: 'var(--card)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text2)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.color + '20';
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--card)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text2)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 2 }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 14, color: 'var(--text2)', textAlign: 'left',
                    padding: 0, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text2)'; }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#6366f1', display: 'inline-block', flexShrink: 0 }} />
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Skills */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 2 }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: '5px 12px', borderRadius: 50, fontSize: 12, fontWeight: 500,
                    background: 'rgba(99,102,241,0.1)', color: '#a5b4fc',
                    border: '1px solid rgba(99,102,241,0.2)',
                    transition: 'all 0.2s', cursor: 'default',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div style={{
              marginTop: 24, padding: 16, borderRadius: 12,
              background: 'linear-gradient(135deg,rgba(99,102,241,0.1),rgba(6,182,212,0.1))',
              border: '1px solid rgba(99,102,241,0.15)',
            }}>
              <p style={{ fontSize: 12, color: 'var(--text2)', fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
                "Shaping the web, one pixel at a time."
              </p>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 2 }}>Get In Touch</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '✉️', label: 'chamodweerasinghe8@gmail.com', href: 'mailto:chamodweerasinghe8@gmail.com' },
                { icon: '📞', label: '+94 762 619 592', href: 'tel:+94762619592' },
                { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/94762619592' },
                { icon: '📍', label: 'Mount Lavinia, Sri Lanka', href: null },
              ].map((c) => (
                c.href
                  ? (
                    <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text2)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text2)'; }}
                    >
                      <span style={{ fontSize: 16, width: 20, textAlign: 'center', flexShrink: 0 }}>{c.icon}</span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.label}</span>
                    </a>
                  )
                  : (
                    <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--muted)' }}>
                      <span style={{ fontSize: 16, width: 20, textAlign: 'center', flexShrink: 0 }}>{c.icon}</span>
                      {c.label}
                    </div>
                  )
              ))}
            </div>

            <button
              onClick={() => scrollTo('#contact')}
              style={{
                marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 10, border: 'none',
                background: 'linear-gradient(135deg,#6366f1,#06b6d4)',
                color: 'white', fontSize: 14, fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(99,102,241,0.35)', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.35)'; }}
            >
              Send a Message →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>
            © 2025 Chamod Weerasinghe. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>
            Designed & Developed by{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>
              Chamod Weerasinghe
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin-footer {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50%      { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
