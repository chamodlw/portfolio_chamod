import React from 'react';
import img1 from '../images/postman-1.jpg';
import img2 from '../images/autoroute.png';
import img3 from '../images/shimmer.png';
import img4 from '../images/curved_nav_bar.png';
import img5 from '../images/riverpod.png';
import img6 from '../images/local_notifications.png';

const articles = [
  {
    title: 'Postman',
    tag: 'API',
    description: 'Postman is a collaboration platform for API development. Helps streamline backend workflows and API testing.',
    image: img1,
    medium: 'https://medium.com/@chamodweerasinghe8/postman-65768e82f9b4',
    linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_postman-activity-7198383671102365698-2Lq8',
    color: '#f59e0b',
  },
  {
    title: 'Flutter — Auto Route',
    tag: 'Flutter',
    description: 'Auto Route is a powerful routing library for Flutter that simplifies navigation and route management with a declarative approach.',
    image: img2,
    medium: 'https://medium.com/@chamodweerasinghe8/flutter-autoroute-df86d3800e22',
    linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_flutterautoroute-activity-7296540889470943232-YYx2',
    color: '#06b6d4',
  },
  {
    title: 'Flutter — Shimmer',
    tag: 'Flutter',
    description: 'Shimmer effect enhances user experience by providing visual loading feedback while data is being fetched.',
    image: img3,
    medium: 'https://medium.com/@chamodweerasinghe8/flutter-shimmer-684c6f7006f8',
    linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_fluttershimmer-activity-7302317071915171840-nsHq',
    color: '#8b5cf6',
  },
  {
    title: 'Flutter — Curved Nav Bar',
    tag: 'Flutter',
    description: 'Easy way to develop a user-friendly bottom navigation bar using the curved navigation bar plugin.',
    image: img4,
    medium: 'https://medium.com/@chamodweerasinghe8/flutter-curved-navigation-bar-e6687cdefab3',
    linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_fluttercurved-navigation-bar-activity-7311833874110550016-2_3H',
    color: '#10b981',
  },
  {
    title: 'Flutter — Riverpod',
    tag: 'State Mgmt',
    description: 'Riverpod is a modern state management solution providing reactive and composable state management for scalable Flutter apps.',
    image: img5,
    medium: 'https://medium.com/@chamodweerasinghe8/flutter-state-management-with-riverpod-324dfb154646',
    linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_flutterstate-management-with-riverpod-activity-7320131322486628352-eB9-',
    color: '#6366f1',
  },
  {
    title: 'Flutter — Local Notifications',
    tag: 'Flutter',
    description: 'Local notifications in Flutter allow scheduling and displaying in-app notifications, enhancing user engagement with timely reminders.',
    image: img6,
    medium: 'https://medium.com/@chamodweerasinghe8/flutter-local-notifications-6d4246186c2d',
    linkedin: 'https://www.linkedin.com/posts/chamod-weerasinghe-b89aaa293_flutterlocal-notifications-activity-7343957474732908544-BkoF',
    color: '#ec4899',
  },
];

export default function Blog() {
  return (
    <div className="section" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <div className="fade-up">
          <p className="section-label">Sharing knowledge</p>
          <h2 className="section-title">
            Technical{' '}
            <span style={{ background: 'linear-gradient(135deg,#818cf8,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Writing
            </span>
          </h2>
          <p className="section-sub">
            Articles I've published on Medium covering Flutter, mobile development, and developer tools.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {articles.map((a, i) => (
            <div
              key={a.title}
              className="glass-card fade-up"
              style={{ overflow: 'hidden', transitionDelay: `${i * 70}ms` }}
            >
              {/* Image */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={a.image}
                  alt={a.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  padding: '4px 12px', borderRadius: 50, fontSize: 11, fontWeight: 600,
                  background: a.color + '30', color: a.color, border: `1px solid ${a.color}50`,
                  backdropFilter: 'blur(10px)',
                }}>
                  {a.tag}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20 }}>{a.description}</p>

                <div style={{ display: 'flex', gap: 10 }}>
                  <a
                    href={a.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      padding: '10px 0', borderRadius: 10, fontSize: 13, fontWeight: 600,
                      background: a.color + '15', color: a.color, border: `1px solid ${a.color}30`,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = a.color + '25'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = a.color + '15'; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Read on Medium
                  </a>
                  <a
                    href={a.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 44, height: 44, borderRadius: 10,
                      background: 'rgba(10,102,194,0.15)', color: '#0a66c2',
                      border: '1px solid rgba(10,102,194,0.3)',
                      transition: 'all 0.2s', flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(10,102,194,0.25)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(10,102,194,0.15)'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://medium.com/@chamodweerasinghe8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex' }}
          >
            View All Articles on Medium
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
