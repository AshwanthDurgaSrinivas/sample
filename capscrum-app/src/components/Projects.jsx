import './Projects.css'

const projects = [
  {
    name: 'HRMS',
    category: 'Enterprise',
    desc: 'Comprehensive Human Resource Management System for automating payroll, attendance, performance tracking, and employee lifecycle management.',
    tech: ['React', 'Node.js', 'Redux', 'PostgreSQL', 'JWT'],
    color: '#00e5ff',
    icon: '👥',
  },
  {
    name: 'Inspection Report Gen',
    category: 'SaaS',
    desc: 'Automated inspection reporting platform (SaaS) for industries to generate compliant PDF reports on-site with real-time sync and custom templates.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'PDFKit', 'AWS'],
    color: '#10b981',
    icon: '📋',
  },
  {
    name: 'CRM',
    category: 'SaaS',
    desc: 'Dynamic Customer Relationship Management system featuring lead scoring, sales funnel automation, and integrated communication tools.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Socket.io', 'Redis'],
    color: '#7c3aed',
    icon: '🤝',
  },
  {
    name: 'ERP',
    category: 'Enterprise',
    desc: 'Robust Enterprise Resource Planning suite integrating finance, procurement, sales, and warehouse management into a unified dashboard.',
    tech: ['React', 'Java Spring Boot', 'MySQL', 'Docker', 'Jenkins'],
    color: '#f59e0b',
    icon: '⚙️',
  },
  {
    name: 'School & College Mgmt',
    category: 'Management',
    desc: 'All-in-one educational platform for managing admissions, timetables, examinations, student portals, and administrative workflows.',
    tech: ['Vue.js', 'Laravel', 'PHP', 'Directus', 'Azure'],
    color: '#ec4899',
    icon: '🏫',
  },
  {
    name: 'LMS Portal',
    category: 'Education',
    desc: 'Advanced Learning Management System portal with course management, live classrooms, automated grading, and student performance analytics.',
    tech: ['React', 'Express', 'PostgreSQL', 'Node.js', 'AWS'],
    color: '#3b82f6',
    icon: '💻',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="bg-glow projects-glow-1" />
      <div className="container">
        <div className="section-header centered" data-reveal>
          <div className="section-tag"><span>◈</span> Our Work</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle centered-text">
            Delivering impactful digital products across industries — each built with precision and purpose.
          </p>
        </div>

        <div className="projects-grid" data-reveal-stagger="90">
          {projects.map((proj, i) => (
            <div key={i} className="project-card glass-card" style={{ '--proj-color': proj.color }}>
              <div className="proj-header">
                <div className="proj-icon">{proj.icon}</div>
                <div className={`proj-badge`} style={{ color: proj.color, borderColor: proj.color + '40', background: proj.color + '15' }}>
                  {proj.category}
                </div>
              </div>
              <h3 className="proj-name">{proj.name}</h3>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-tech">
                {proj.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="proj-cta">
                <span>View Case Study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <div className="proj-glow-bar" style={{ background: `linear-gradient(90deg, ${proj.color}00, ${proj.color}60, ${proj.color}00)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
