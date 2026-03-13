import './TechStack.css'

const techs = [
  { name: 'React', color: '#61DAFB', emoji: '⚛️' },
  { name: 'Node.js', color: '#8CC84B', emoji: '🟢' },
  { name: 'Java', color: '#F89820', emoji: '☕' },
  { name: 'Python', color: '#FFD43B', emoji: '🐍' },
  { name: 'AWS', color: '#FF9900', emoji: '☁️' },
  { name: 'Docker', color: '#2496ED', emoji: '🐳' },
  { name: 'Kubernetes', color: '#326CE5', emoji: '⚙️' },
  { name: 'Selenium', color: '#43B02A', emoji: '🧪' },
  { name: 'TestNG', color: '#EA6100', emoji: '🔬' },
  { name: 'Next.js', color: '#ffffff', emoji: '▲' },
  { name: 'MongoDB', color: '#47A248', emoji: '🍃' },
  { name: 'PostgreSQL', color: '#336791', emoji: '🐘' },
]

export default function TechStack() {
  return (
    <section id="techstack" className="section techstack-section">
      <div className="bg-glow tech-glow-1" />
      <div className="container">
        <div className="section-header centered" data-reveal>
          <div className="section-tag"><span>◈</span> Technology Stack</div>
          <h2 className="section-title">
            Built With the <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="section-subtitle centered-text">
            We work with industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="tech-grid" data-reveal-stagger="60">
          {techs.map((tech, i) => (
            <div key={i} className="tech-card glass-card" style={{ '--tech-color': tech.color }}>
              <div className="tech-icon-wrap">
                <div className="tech-emoji">{tech.emoji}</div>
                <div className="tech-glow-ring" />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Marquee row (decorative) */}
        <div className="tech-marquee-wrap">
          <div className="tech-marquee">
            {[...techs, ...techs].map((t, i) => (
              <div key={i} className="marquee-item">
                <span>{t.emoji}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
