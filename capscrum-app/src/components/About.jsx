import './About.css'

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Agile First',
    desc: 'We ship in sprints, iterate fast, and deliver continuous value throughout the development cycle.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Every solution is built from the ground up to handle growth — from MVP to enterprise-grade platform.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/>
      </svg>
    ),
    title: 'Innovation Driven',
    desc: 'We stay ahead of the tech curve — adopting modern tools, patterns, and best practices proactively.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="bg-glow about-glow-1" />
      <div className="container">
        <div className="about-grid">
          {/* Left: Text content */}
          <div className="about-text" data-reveal-left>
            <div className="section-tag">
              <span>◈</span> About capScrum
            </div>
            <h2 className="section-title">
              Where <span className="gradient-text">Capability</span> Meets Agility
            </h2>
            <p className="about-intro">
              capScrum is a technology company that combines <strong>capability</strong>, <strong>agility</strong>, and <strong>innovation</strong> to deliver scalable software solutions.
            </p>
            <p className="about-desc">
              We specialize in building modern digital products using agile development processes and high-performance technologies. From startups taking their first steps to enterprises scaling their platforms — capScrum is the engineering partner you can trust.
            </p>

            {/* Mission */}
            <div className="mission-box glass-card">
              <div className="mission-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <div>
                <div className="mission-label">Our Mission</div>
                <p className="mission-text">Deliver powerful, scalable, and reliable software solutions that drive digital transformation.</p>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#services" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Explore Services
              </a>
              <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Values cards */}
          <div className="about-values" data-reveal-right>
            <div data-reveal-stagger="120">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card">
                <div className="value-icon">{v.icon}</div>
                <div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
            </div>


            {/* Visual element */}
            <div className="about-badge glass-card">
              <div className="about-badge-inner">
                <div className="about-hex">
                  <img src="/icon.png" alt="capScrum Icon" className="about-hex-img" />
                </div>
                <div className="about-badge-text">
                  <div className="about-badge-num gradient-text">5+</div>
                  <div className="about-badge-label">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
