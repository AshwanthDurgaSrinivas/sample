import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '#00e5ff' : '#7c3aed',
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-bg-elements">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
        <div className="hero-hex-grid" />
      </div>

      <div className="container hero-content">
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <div className="hero-badge animate-fade-in-up">
            <span className="badge-dot" />
            Agile • Scalable • Innovative
          </div>

          <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Transforming Ideas Into{' '}
            <span className="gradient-text">Powerful Digital</span>{' '}
            Products
          </h1>

          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            capScrum helps startups and businesses build scalable web applications,
            mobile apps, and SaaS platforms using agile development and modern technology.
          </p>

          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            capScrum helps startups and businesses build scalable web applications,
            mobile apps, and SaaS platforms using agile development and modern technology.
          </p>

          <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="btn-primary hero-btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Start Your Project
            </a>
            <a
              href="#projects"
              className="btn-secondary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              View Our Work
            </a>
          </div>

          <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – Visual */}
        <div className="hero-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Central hex orb */}
          <div className="hero-orb animate-float">
            <div className="orb-ring orb-ring-1" />
            <div className="orb-ring orb-ring-2" />
            <div className="orb-ring orb-ring-3" />
            <div className="orb-core">
              <div className="orb-logo-container">
                <img src="/icon.png" alt="capScrum" className="orb-logo-img" />
              </div>
            </div>
          </div>

          {/* Floating feature cards around the orb */}
          <div className="hero-feature-card hfc-1 glass-card animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="hfc-icon" style={{ color: '#00e5ff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div>
              <div className="hfc-title">Agile Sprint</div>
              <div className="hfc-sub">Fast Delivery</div>
            </div>
          </div>

          <div className="hero-feature-card hfc-2 glass-card animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="hfc-icon" style={{ color: '#7c3aed' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <div>
              <div className="hfc-title">Cloud Native</div>
              <div className="hfc-sub">AWS / GCP / Azure</div>
            </div>
          </div>

          <div className="hero-feature-card hfc-3 glass-card animate-float" style={{ animationDelay: '0.8s' }}>
            <div className="hfc-icon" style={{ color: '#00b3c8' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div>
              <div className="hfc-title">Clean Code</div>
              <div className="hfc-sub">Best Practices</div>
            </div>
          </div>

          <div className="hero-feature-card hfc-4 glass-card animate-float" style={{ animationDelay: '1.6s' }}>
            <div className="hfc-icon" style={{ color: '#10b981' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <div>
              <div className="hfc-title">QA Tested</div>
              <div className="hfc-sub">Zero Bugs</div>
            </div>
          </div>

          {/* Tech dots orbit */}
          <div className="tech-orbit">
            {['⚛️','🐳','☁️','🐍'].map((emoji, i) => (
              <div key={i} className={`orbit-dot orbit-dot-${i + 1}`}>
                <span>{emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
