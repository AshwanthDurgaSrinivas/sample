import './Testimonials.css'

const testimonials = [
  {
    name: 'Rajan Verma',
    role: 'CTO, FinEdge Solutions',
    avatar: '👨‍💼',
    quote: 'capScrum transformed our legacy system into a modern, scalable SaaS platform in just 4 months. Their agile process, technical depth, and communication were exceptional. This team truly understands what it means to build for scale.',
    rating: 5,
    company: 'FinEdge Solutions',
    color: '#00e5ff',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, TalentPath',
    avatar: '👩‍💻',
    quote: 'Working with capScrum was the best decision we made as a startup. They built our entire MVP in 6 weeks, guided us through product decisions, and the quality was production-ready from day one. Highly recommend!',
    rating: 5,
    company: 'TalentPath',
    color: '#7c3aed',
  },
  {
    name: 'Ankit Bose',
    role: 'Product Lead, SwiftDeliver',
    avatar: '👨‍🔬',
    quote: 'The DevOps and cloud infrastructure work capScrum did brought our deployment time from 2 hours to 8 minutes. Their automation expertise and proactive problem-solving sets them apart from any other partner we\'ve worked with.',
    rating: 5,
    company: 'SwiftDeliver',
    color: '#10b981',
  },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array(count).fill(0).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="bg-glow test-glow-1" />
      <div className="container">
        <div className="section-header centered" data-reveal>
          <div className="section-tag"><span>◈</span> Client Testimonials</div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle centered-text">
            Real results from real clients who trusted capScrum to build their vision.
          </p>
        </div>

        <div className="testimonials-grid" data-reveal-stagger="120">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass-card" style={{ '--test-color': t.color }}>
              {/* Quote mark */}
              <div className="quote-mark">"</div>

              <Stars count={t.rating} />

              <p className="testimonial-quote">{t.quote}</p>

              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.color + '20', border: `2px solid ${t.color}40` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>

              <div className="test-border-bottom" style={{ background: `linear-gradient(90deg, ${t.color}80, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Social proof band */}
        <div className="proof-band glass-card" data-reveal-scale>
          {[
            { label: 'Client Satisfaction', value: '99%' },
            { label: 'On-time Delivery', value: '95%' },
            { label: 'Return Clients', value: '80%' },
            { label: 'Projects Delivered', value: '50+' },
          ].map((p, i) => (
            <div key={i} className="proof-item">
              <div className="proof-value gradient-text">{p.value}</div>
              <div className="proof-label">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
