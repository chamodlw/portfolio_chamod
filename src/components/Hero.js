import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../images/chamod1.png';
// eslint-disable-next-line import/no-webpack-loader-syntax
import resumePdf from '../pdf/resume_new.pdf';

const roles = ['Full Stack Web Developer', 'Mobile App Developer', 'Graphic Designer'];

function useTypewriter(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

function ParticleCanvas() {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.a * 0.6})`;
        ctx.fill();
      });
      // Connect nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  );
}

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%), var(--bg)',
      }}
    >
      <ParticleCanvas />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 32px 80px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 60,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <span className="chip" style={{ fontSize: 12, marginBottom: 16, display: 'inline-flex' }}>
              👋 Available for opportunities
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 8,
              letterSpacing: '-1px',
            }}
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#818cf8,#22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Chamod
            </span>
          </h1>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: '-1px',
            }}
          >
            Weerasinghe
          </h1>

          <div
            style={{
              height: 40,
              marginBottom: 24,
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              fontWeight: 600,
              color: 'var(--accent2)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span>{role}</span>
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: '1.2em',
                background: 'var(--accent2)',
                animation: 'blink 1s step-end infinite',
                borderRadius: 1,
              }}
            />
          </div>

          <p
            style={{
              fontSize: 16,
              color: 'var(--text2)',
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 500,
            }}
          >
            Associate Software Engineer at ZinCaT Technology · BSc IT at University of Moratuwa.
            Passionate about building elegant web & mobile experiences that make a difference.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
            <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
              Contact Me
            </button>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              { value: '3+', label: 'Years Coding' },
              { value: '10+', label: 'Projects Built' },
              { value: '3.45', label: 'CGPA (UoM)' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg,#818cf8,#22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text2)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: profile image */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="hero-img-wrap"
        >
          <div
            style={{
              position: 'absolute',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
              animation: 'pulse-ring 3s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 290,
              height: 290,
              borderRadius: '50%',
              border: '1px solid rgba(99,102,241,0.3)',
              animation: 'spin-slow 15s linear infinite',
            }}
          >
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                style={{
                  position: 'absolute',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#818cf8',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(145px) translate(-50%, -50%)`,
                }}
              />
            ))}
          </div>
          <img
            src={profileImg}
            alt="Chamod Weerasinghe"
            style={{
              width: 240,
              height: 240,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid rgba(99,102,241,0.5)',
              boxShadow: '0 0 60px rgba(99,102,241,0.3)',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--muted)',
          fontSize: 12,
          animation: 'bounce 2s ease-in-out infinite',
          cursor: 'pointer',
        }}
        onClick={() => scrollTo('#skills')}
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pulse-ring {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-img-wrap { order: -1; }
        }
      `}</style>
    </div>
  );
}
