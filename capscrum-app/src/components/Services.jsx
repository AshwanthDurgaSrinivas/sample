import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Application Development',
    desc: 'Custom scalable web applications using modern frameworks like React, Next.js, and Node.js.',
    color: '#00e5ff',
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.1), rgba(0,179,200,0.05))',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'High-performance cross-platform and native mobile apps for Android & iOS.',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(167,139,250,0.05))',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'Tailored software solutions built precisely for your unique business needs and workflows.',
    color: '#00b3c8',
    gradient: 'linear-gradient(135deg, rgba(0,179,200,0.1), rgba(0,229,255,0.05))',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'SaaS Product Development',
    desc: 'End-to-end SaaS platform development — from idea validation to full-scale product launch.',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(96,165,250,0.05))',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    title: 'DevOps & Cloud Solutions',
    desc: 'Cloud infrastructure setup, CI/CD pipelines, Kubernetes orchestration, and automation.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(251,191,36,0.05))',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/>
      </svg>
    ),
    title: 'API Development & Integration',
    desc: 'Secure and scalable RESTful/GraphQL API architecture and seamless third-party integrations.',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05))',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'QA & Software Testing',
    desc: 'Manual testing, automation testing with Selenium/TestNG, and performance testing to ensure product quality.',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236,73,153,0.1), rgba(244,114,182,0.05))',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="bg-glow services-glow-1" />
      <div className="bg-glow services-glow-2" />
      <div className="container">
        <div className="section-header centered" data-reveal>
          <div className="section-tag"><span>◈</span> What We Build</div>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle centered-text">
            From idea to production — we cover the full spectrum of modern software development.
          </p>
        </div>

        <div className="services-grid" data-reveal-stagger="80">
          {services.map((svc, i) => (
            <div
              key={i}
              className="service-card glass-card"
              style={{ '--svc-color': svc.color, '--svc-gradient': svc.gradient }}
            >
              <div className="svc-icon-wrap">
                <div className="svc-icon">{svc.icon}</div>
                <div className="svc-glow" />
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
