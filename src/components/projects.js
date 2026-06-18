import React, { useState } from 'react';
import webImg from '../images/SW_project_L2.jpg';
import chatImg from '../images/chat3.png';
import bmiImg from '../images/bmi.png';
import yamanImg from '../images/yamanmachan.png';

const projects = [
  {
    id: 1,
    category: 'web',
    title: 'Medical Lab Management System',
    subtitle: 'Second Year Software Project',
    description: 'LIMS supports multiple user roles—patients, doctors, lab operators, assistants, and admins—to streamline lab operations. Offers online appointment scheduling, report tracking, and administrative management tools.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    role: 'Team Leader — Patient & System Admin interfaces',
    supervisors: 'Mr. B.H. Sudhantha (Dean, Faculty of IT) · Mr. Nisal Sudila (Senior SE, IFS)',
    image: webImg,
    links: {
      github: 'https://github.com/chamodlw/SW_No.14_Frontend',
      youtube: 'https://youtu.be/RtacSBP3y1Q?si=jxBOoaLwE_CWasXo',
      linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_lims-medical-lab-information-management-activity-7235291488153133056-zaQx',
    },
    color: '#6366f1',
  },
  {
    id: 2,
    category: 'mobile',
    title: 'AI Chatbot',
    subtitle: 'React Native Mobile App',
    description: 'An intelligent chatbot with text-to-audio conversion, powered by the Gemini API. Delivers highly interactive and accessible conversations with personalized AI responses on the go.',
    tech: ['React Native', 'Gemini API', 'Expo'],
    image: chatImg,
    links: {
      github: 'https://github.com/chamodlw/ai_chatbot.git',
      youtube: 'https://youtube.com/shorts/aePxKzuk8uI?si=oDsSaLez8bsNGVcu',
      linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_reactnative-aichatbot-mobiledevelopment-activity-7266485152216690689-Uxa8',
    },
    color: '#06b6d4',
  },
  {
    id: 3,
    category: 'mobile',
    title: 'BMI Calculator',
    subtitle: 'Flutter Mobile App',
    description: 'A clean BMI calculator built with Flutter that takes height and weight as inputs and categorizes the result as OK, Low, or High. Simple, effective health tracking on mobile.',
    tech: ['Flutter', 'Dart'],
    image: bmiImg,
    links: {
      github: 'https://github.com/chamodlw',
      youtube: 'https://youtube.com',
    },
    color: '#10b981',
  },
  {
    id: 4,
    category: 'mobile',
    title: 'YamanMachan — Transport App',
    subtitle: 'Flutter Mobile App',
    description: 'A transport-focused mobile application built with Flutter, designed to improve commuter experience and provide route management functionality.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    image: yamanImg,
    links: {
      github: 'https://github.com/chamodlw',
      youtube: 'https://youtube.com',
    },
    color: '#f59e0b',
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
];

function LinkIcon({ type }) {
  if (type === 'github') return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
  if (type === 'youtube') return <span>▶</span>;
  if (type === 'linkedin') return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  return null;
}

const linkLabels = { github: 'GitHub', youtube: 'Demo', linkedin: 'LinkedIn' };

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="section" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">
            Featured{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Projects
            </span>
          </h2>
          <p className="section-sub">
            A selection of projects that showcase my skills across web and mobile development.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="fade-up" style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                border: filter === c.key ? 'none' : '1px solid var(--border)',
                background: filter === c.key ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'transparent',
                color: filter === c.key ? 'white' : 'var(--text2)',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: filter === c.key ? '0 4px 20px rgba(99,102,241,0.4)' : 'none',
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="glass-card fade-up"
              style={{ overflow: 'hidden', transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  padding: '4px 12px', borderRadius: 50, fontSize: 11, fontWeight: 600,
                  background: p.color + '30', color: p.color, border: `1px solid ${p.color}50`,
                  backdropFilter: 'blur(10px)',
                }}>
                  {p.category.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 6 }}>{p.subtitle}</p>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: 'var(--text)' }}>{p.title}</h3>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      padding: '3px 10px', borderRadius: 50, fontSize: 11, fontWeight: 500,
                      background: p.color + '15', color: p.color, border: `1px solid ${p.color}25`,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 16 }}>
                  {expanded === p.id ? p.description : p.description.slice(0, 100) + '...'}
                </p>

                {p.role && expanded === p.id && (
                  <div style={{ background: 'rgba(99,102,241,0.08)', borderRadius: 10, padding: 14, marginBottom: 16 }}>
                    <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, marginBottom: 4 }}>My Role</p>
                    <p style={{ fontSize: 13, color: 'var(--text2)' }}>{p.role}</p>
                    {p.supervisors && (
                      <>
                        <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, marginBottom: 4, marginTop: 10 }}>Supervisors</p>
                        <p style={{ fontSize: 13, color: 'var(--text2)' }}>{p.supervisors}</p>
                      </>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {Object.entries(p.links).map(([type, href]) => (
                      <a
                        key={type}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: 5,
                          padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500,
                          border: '1px solid var(--border)', color: 'var(--text2)',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}
                      >
                        <LinkIcon type={type} />
                        {linkLabels[type]}
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text2)', fontSize: 12, fontWeight: 600,
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}
                  >
                    {expanded === p.id ? 'Less' : 'More'}
                    <span style={{ transform: expanded === p.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>▾</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
