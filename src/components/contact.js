import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const contactInfo = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+94 762 619 592',
    href: 'tel:+94762619592',
    color: '#6366f1',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'chamodweerasinghe8@gmail.com',
    href: 'mailto:chamodweerasinghe8@gmail.com',
    color: '#06b6d4',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+94 762 619 592',
    href: 'https://wa.me/94762619592',
    color: '#10b981',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'chamod-weerasinghe',
    href: 'https://www.linkedin.com/in/chamod-weerasinghe-b89aaa293/',
    color: '#0a66c2',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) { setStatus('error'); return; }
    setSending(true);
    emailjs.send(
      'service_l4qb9q5',
      'template_5ttw6hy',
      { name: form.name, email: form.email, phoneNumber: form.phone, message: form.message },
      '2GoenmWXZO0r3S2IL'
    ).then(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    }).catch(() => setStatus('error'))
      .finally(() => setSending(false));
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: '1px solid var(--border)',
    background: 'rgba(255,255,255,0.04)',
    color: 'var(--text)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <div className="section" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Connect
            </span>
          </h2>
          <p className="section-sub">
            Shaping the web, one pixel at a time. Let's create something extraordinary together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="contact-grid fade-up">
          {/* Left: contact info */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>Contact Information</h3>
            <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7 }}>
              I'm open to freelance projects, full-time roles, and interesting collaborations. Feel free to reach out!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: 20,
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: c.color + '20', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 20,
                    border: `1px solid ${c.color}30`,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{c.value}</p>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: 18 }}>›</div>
                </a>
              ))}
            </div>

            {/* Tagline */}
            <div className="glass-card" style={{
              padding: 24, textAlign: 'center',
              background: 'linear-gradient(135deg,rgba(99,102,241,0.1),rgba(6,182,212,0.1))',
              borderColor: 'rgba(99,102,241,0.2)',
            }}>
              <p style={{ fontSize: 15, color: 'var(--text2)', fontStyle: 'italic', lineHeight: 1.7 }}>
                "Shaping the web, one pixel at a time."
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card" style={{ padding: 36 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 28, color: 'var(--text)' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+94 7xx xxx xxx"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(99,102,241,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {status === 'success' && (
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(16,185,129,0.1)', color: '#10b981', fontSize: 14, border: '1px solid rgba(16,185,129,0.2)' }}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(239,68,68,0.1)', color: '#ef4444', fontSize: 14, border: '1px solid rgba(239,68,68,0.2)' }}>
                  ✗ Something went wrong. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                style={{
                  padding: '14px 28px', borderRadius: 12, border: 'none',
                  background: sending ? 'var(--bg3)' : 'linear-gradient(135deg,#6366f1,#06b6d4)',
                  color: 'white', fontSize: 15, fontWeight: 700,
                  cursor: sending ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: sending ? 'none' : '0 4px 20px rgba(99,102,241,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                }}
              >
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
