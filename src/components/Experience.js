import React, { useState } from 'react';
import uomImg from '../images/uom.jpg';
import nimbusImg from '../images/nimbus.png';
import rcgImg from '../images/rcg.jpg';
import ccbcImg from '../images/ccbc.jpg';

const workItems = [
  {
    role: 'Associate Software Engineer',
    company: 'ZinCaT Technology',
    location: 'Mount Lavinia · Hybrid',
    duration: 'Aug 2025 – Present · 11 mos',
    employment: 'Full-time',
    description: 'Working as a Web & Mobile developer, building modern web applications and mobile solutions for clients using Next.js, WordPress, and React Native.',
    skills: ['Next.js', 'WordPress', 'React Native'],
    color: '#6366f1',
    logo: null,
    logoText: 'ZC',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Nimbus Venture (Pvt) Ltd',
    location: 'Nawala, Sri Lanka',
    duration: '2025 · 6 Months',
    employment: 'Internship',
    description: 'Developed a mobile application using Flutter, focusing on enhancing user experience and implementing efficient coding practices with Firebase integration.',
    skills: ['Flutter', 'Firebase', 'Dart'],
    color: '#06b6d4',
    logo: nimbusImg,
  },
];

const eduItems = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'University of Moratuwa',
    location: 'Sri Lanka',
    duration: '2022 – 2026',
    detail: 'CGPA: 3.45 · Actively participated in clubs, societies, and academic activities through collaboration and teamwork.',
    image: uomImg,
    color: '#6366f1',
  },
  {
    degree: 'Advanced Level (Physical Science)',
    institution: 'Richmond College',
    location: 'Galle',
    duration: '2017 – 2020',
    detail: 'Results: AAB · Z-score: 1.7434 · Excelled in academics and extracurricular activities.',
    image: rcgImg,
    color: '#f59e0b',
  },
  {
    degree: 'Primary to Ordinary Level',
    institution: "Christ Church Boys' College",
    location: 'Baddegama, Galle',
    duration: '2006 – 2017',
    detail: "O/L Results: 9 Distinctions · Passed scholarship exam · Senior Prefect · Active in extracurricular and academic activities.",
    image: ccbcImg,
    color: '#10b981',
  },
];

export default function Experience() {
  const [tab, setTab] = useState('work');

  return (
    <div className="section" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">My journey</p>
          <h2 className="section-title">
            Experience &{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Education
            </span>
          </h2>
          <p className="section-sub">
            My professional background and academic journey that shaped who I am as a developer.
          </p>
        </div>

        {/* Tabs */}
        <div className="fade-up" style={{ display: 'flex', gap: 4, marginBottom: 48, background: 'var(--bg2)', borderRadius: 14, padding: 6, width: 'fit-content' }}>
          {[{ key: 'work', label: '💼 Work Experience' }, { key: 'edu', label: '🎓 Education' }].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: '10px 24px',
                borderRadius: 10,
                border: 'none',
                background: tab === t.key ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'transparent',
                color: tab === t.key ? 'white' : 'var(--text2)',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s',
                boxShadow: tab === t.key ? '0 4px 15px rgba(99,102,241,0.4)' : 'none',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Work experience timeline */}
        {tab === 'work' && (
          <div key="work" style={{ position: 'relative', animation: 'tabIn 0.35s ease' }}>
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />
            {workItems.map((item, i) => (
              <div
                key={item.company}
                style={{ display: 'flex', gap: 32, marginBottom: 40, animationDelay: `${i * 80}ms` }}
              >
                {/* Dot */}
                <div style={{ position: 'relative', flexShrink: 0, width: 40 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    border: `2px solid ${item.color}`,
                    background: item.color + '20',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: item.color,
                    overflow: 'hidden', position: 'relative', zIndex: 1,
                  }}>
                    {item.logo
                      ? <img src={item.logo} alt={item.company} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : item.logoText}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card" style={{ flex: 1, padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{item.role}</h3>
                      <p style={{ fontSize: 15, fontWeight: 600, color: item.color }}>{item.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        display: 'inline-block', padding: '4px 12px', borderRadius: 50, fontSize: 12, fontWeight: 600,
                        background: item.color + '20', color: item.color, border: `1px solid ${item.color}30`, marginBottom: 6,
                      }}>
                        {item.employment}
                      </span>
                      <p style={{ fontSize: 13, color: 'var(--muted)' }}>{item.duration}</p>
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>{item.location}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 16 }}>{item.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.skills.map((s) => (
                      <span key={s} style={{
                        padding: '4px 12px', borderRadius: 50, fontSize: 12, fontWeight: 500,
                        background: item.color + '15', color: item.color, border: `1px solid ${item.color}25`,
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {tab === 'edu' && (
          <div key="edu" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, animation: 'tabIn 0.35s ease' }}>
            {eduItems.map((item, i) => (
              <div
                key={item.institution}
                className="glass-card"
                style={{ overflow: 'hidden', animation: `tabIn 0.35s ease ${i * 80}ms both` }}
              >
                <div style={{ height: 140, overflow: 'hidden' }}>
                  <img src={item.image} alt={item.institution} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{item.duration}</span>
                    <span style={{ padding: '3px 10px', borderRadius: 50, fontSize: 11, fontWeight: 600, background: item.color + '20', color: item.color }}>
                      Academic
                    </span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{item.degree}</h3>
                  <p style={{ fontSize: 13, fontWeight: 600, color: item.color, marginBottom: 12 }}>
                    {item.institution} · {item.location}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes tabIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
