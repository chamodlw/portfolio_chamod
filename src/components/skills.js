import React from 'react';

const techSkills = [
  {
    category: 'Web Development',
    icon: '🌐',
    color: '#6366f1',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js'],
    featured: {
      name: 'Medical Lab Management System',
      tech: 'MERN Stack',
      github: 'https://github.com/chamodlw/SW_No.14_Frontend',
      youtube: 'https://youtu.be/RtacSBP3y1Q?si=jxBOoaLwE_CWasXo',
    },
  },
  {
    category: 'Mobile Development',
    icon: '📱',
    color: '#06b6d4',
    skills: ['React Native', 'Flutter', 'Firebase', 'Dart', 'Expo'],
    featured: {
      name: 'AI Chatbot',
      tech: 'React Native + Gemini API',
      github: 'https://github.com/chamodlw/ai_chatbot.git',
      youtube: 'https://youtube.com/shorts/aePxKzuk8uI',
    },
  },
  {
    category: 'Programming Languages',
    icon: '💻',
    color: '#f59e0b',
    skills: ['JavaScript', 'Dart', 'Java', 'Python', 'C'],
  },
  {
    category: 'Tools & Platforms',
    icon: '⚙️',
    color: '#10b981',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'WordPress'],
  },
];

const softSkills = [
  { label: 'Leadership', icon: '🎯' },
  { label: 'Teamwork', icon: '🤝' },
  { label: 'Creativity', icon: '✨' },
  { label: 'Problem Solving', icon: '🧩' },
  { label: 'Adaptability', icon: '🔄' },
  { label: 'Work Ethic', icon: '💪' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Skills() {
  return (
    <div className="section" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">What I know</p>
          <h2 className="section-title">
            Technical{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Skills
            </span>
          </h2>
          <p className="section-sub">
            A curated stack of technologies I use to build robust web and mobile applications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 60 }}>
          {techSkills.map((cat, i) => (
            <div
              key={cat.category}
              className="glass-card fade-up"
              style={{ padding: 28, transitionDelay: `${i * 80}ms` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: cat.color + '20', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 22, border: `1px solid ${cat.color}30`,
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{cat.category}</h3>
                  <p style={{ fontSize: 12, color: 'var(--muted)' }}>{cat.skills.length} technologies</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: cat.featured ? 20 : 0 }}>
                {cat.skills.map((s) => (
                  <span key={s} style={{
                    padding: '4px 12px', borderRadius: 50, fontSize: 12, fontWeight: 500,
                    background: cat.color + '15', color: cat.color, border: `1px solid ${cat.color}25`,
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              {cat.featured && (
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                  <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>Featured Project</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{cat.featured.name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 12 }}>{cat.featured.tech}</p>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {[{ label: 'GitHub', href: cat.featured.github }, { label: '▶ Demo', href: cat.featured.youtube }].map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 12, color: '#94a3b8', padding: '4px 10px', borderRadius: 6, border: '1px solid var(--border)' }}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="fade-up">
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: 'var(--text2)' }}>Soft Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 60 }}>
            {softSkills.map((s) => (
              <div key={s.label} className="glass-card" style={{ padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 50 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up" style={{ textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            See My Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
