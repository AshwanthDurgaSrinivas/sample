import './WhyUs.css'

const reasons = [
  {
    icon: '⚡',
    title: 'Agile Development Process',
    desc: 'We deliver in sprints, providing continuous value and adapting rapidly to changing requirements.',
    color: '#00e5ff',
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    desc: 'Every system is architected to grow — from 100 to 10 million users without major rework.',
    color: '#7c3aed',
  },
  {
    icon: '🚀',
    title: 'Fast Development Cycles',
    desc: 'From kickoff to deployment in record time without compromising on quality or performance.',
    color: '#00b3c8',
  },
  {
    icon: '👨‍💻',
    title: 'Experienced Engineering Team',
    desc: 'Senior engineers and architects who have shipped products used by millions of users worldwide.',
    color: '#10b981',
  },
  {
    icon: '🔄',
    title: 'End-to-End Product Development',
    desc: 'A single partner from ideation, design, development, testing, all the way to production deployment.',
    color: '#2563eb',
  },
  {
    icon: '✅',
    title: 'Quality Assurance & Automation',
    desc: 'Rigorous automated testing pipelines ensure every release is stable, performant, and bug-free.',
    color: '#ec4899',
  },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="section whyus-section">
      <div className="bg-glow whyus-glow-1" />
      <div className="container">
        <div className="whyus-inner">
          {/* Left */}
          <div className="whyus-left" data-reveal-left>
            <div className="section-tag"><span>◈</span> Why capScrum</div>
            <h2 className="section-title">
              The <span className="gradient-text">capScrum</span> Advantage
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              We don't just build software — we build strategic digital assets that drive business growth and competitive advantage.
            </p>
            <div className="whyus-cta-box glass-card">
              <div className="cta-box-icon">💡</div>
              <div>
                <div className="cta-box-label">Ready to build?</div>
                <p className="cta-box-text">Let's turn your vision into a scalable digital product.</p>
              </div>
              <a href="#contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '10px 20px' }} onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Start Now
              </a>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="whyus-grid" data-reveal-stagger="90">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card glass-card" style={{ '--reason-color': r.color }}>
                <div className="reason-emoji">{r.icon}</div>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-desc">{r.desc}</p>
                <div className="reason-bar" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
