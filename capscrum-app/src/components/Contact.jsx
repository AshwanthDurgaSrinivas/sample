import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error('Submission error:', data.error);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="bg-glow contact-glow-1" />
      <div className="bg-glow contact-glow-2" />
      <div className="container">
        <div className="contact-grid">
          {/* Left Info */}
          <div className="contact-info" data-reveal-left>
            <div className="section-tag"><span>◈</span> Contact Us</div>
            <h2 className="section-title">
              Let's Build Something<br />
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Have a project in mind? We'd love to hear about it. Let's discuss how capScrum can bring your vision to life.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Email Us</div>
                  <a href="mailto:info@capscrum.com" className="contact-item-value">info@capscrum.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#00e5ff">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <a href="https://linkedin.com/company/capscrum" target="_blank" rel="noopener noreferrer" className="contact-item-value">linkedin.com/company/capscrum</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <span className="contact-item-value">Hyderabad, India 🇮🇳</span>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="availability-card glass-card">
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Currently Accepting Projects</div>
                <p className="avail-desc">We have bandwidth for 2–3 new projects this quarter. Reach out early!</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form-wrap glass-card" data-reveal-right>
            <h3 className="form-title">Send us a message</h3>

            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out! We'll get back to you within 24 hours.</p>
                <button className="btn-secondary" onClick={() => setStatus(null)}>
                  Send Another
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="form-success" style={{ borderColor: '#ff4b2b' }}>
                <div className="success-icon" style={{ background: 'rgba(255, 75, 43, 0.1)', color: '#ff4b2b' }}>❌</div>
                <h4>Oops! Something went wrong</h4>
                <p>We couldn't send your message. Please try again or email us directly.</p>
                <button className="btn-secondary" onClick={() => setStatus(null)}>
                  Back to Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals..."
                    required
                    rows={5}
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="form-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
