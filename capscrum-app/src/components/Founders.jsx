import { useState } from 'react'
import './Founders.css'

const founders = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader with expertise in product strategy and scalable software development. Driving capScrum\'s mission to transform ideas into impactful digital products.',
    avatar: '/founder1.png',
    avatarWave: '/founder1_wave.gif',
    linkedin: '#',
    color: '#00e5ff',
    greeting: 'Hi! I\'m Arjun 👋',
  },
  {
    id: 2,
    name: 'Dev Sharma',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack architect with deep expertise in cloud infrastructure, microservices, and high-performance system design for enterprise-grade platforms.',
    avatar: '/founder2.png',
    avatarWave: '/founder2_wave.gif',
    linkedin: '#',
    color: '#7c3aed',
    greeting: 'Hi! I\'m Dev 👋',
  },
  {
    id: 3,
    name: 'Rohan Kapoor',
    role: 'CPO & Co-Founder',
    bio: 'Product strategist and UX enthusiast who bridges the gap between business goals and technical execution, ensuring every product delights users.',
    avatar: '/founder3.png',
    avatarWave: '/founder3_wave.gif',
    linkedin: '#',
    color: '#00b3c8',
    greeting: 'Hi! I\'m Rohan 👋',
  },
  {
    id: 4,
    name: 'Karan Patel',
    role: 'CBO & Co-Founder',
    bio: 'Business development leader with a knack for building strategic partnerships and driving growth across diverse markets and verticals.',
    avatar: '/founder4.png',
    avatarWave: '/founder4_wave.gif',
    linkedin: '#',
    color: '#10b981',
    greeting: 'Hi! I\'m Karan 👋',
  },
  {
    id: 5,
    name: 'Vivek Nair',
    role: 'Head of Engineering',
    bio: 'Engineering lead and DevOps champion focused on building robust CI/CD pipelines, scalable cloud infrastructures, and elite development teams.',
    avatar: '/founder5.png',
    avatarWave: '/founder5_wave.gif',
    linkedin: '#',
    color: '#f59e0b',
    greeting: 'Hi! I\'m Vivek 👋',
  },
  {
    id: 6,
    name: 'Ananya Rao',
    role: 'Lead Designer',
    bio: 'Creative visionary specializing in crafting seamless user experiences and modern digital interfaces that resonate with users and elevate brand identity.',
    avatar: '/founder1.png',
    avatarWave: '/founder1_wave.gif',
    linkedin: '#',
    color: '#ec4899',
    greeting: 'Hi! I\'m Ananya 👋',
  },
]

function FounderCard({ founder }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`founder-card glass-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ '--founder-color': founder.color }}
    >
      {/* Speech bubble */}
      <div className={`speech-bubble ${hovered ? 'visible' : ''}`}>
        <span>{founder.greeting}</span>
      </div>

      {/* Avatar wrapper */}
      <div className="founder-avatar-wrap">
        {/* Spinning colour ring on hover */}
        <div className="founder-avatar-ring" />

        {/* Avatar frame */}
        <div className="founder-avatar-frame">
          {/* Static avatar (idle) */}
          <img
            src={founder.avatar}
            alt={`${founder.name} - ${founder.role}`}
            className={`founder-img founder-img-static ${hovered ? 'fade-out' : 'fade-in'}`}
            loading="lazy"
            draggable={false}
          />

          {/* Animated "waving" avatar GIF (shown when hovered) */}
          <div className={`avatar-state avatar-waving ${hovered ? 'shown' : 'hidden'}`}>
            <img
              src={founder.avatarWave}
              alt={`${founder.name} waving`}
              className="founder-img founder-img-gif"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>

        {/* Glow ring */}
        <div className="founder-avatar-glow" />
      </div>

      {/* Online status */}
      <div className="founder-status">
        <span className="status-dot" />
        <span>Available</span>
      </div>

      <div className="founder-info">
        <h3 className="founder-name">{founder.name}</h3>
        <div className="founder-role" style={{ color: founder.color }}>{founder.role}</div>
        <p className="founder-bio">{founder.bio}</p>

        <a href={founder.linkedin} className="founder-linkedin" aria-label={`${founder.name} LinkedIn`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
          Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}

export default function Founders() {
  return (
    <section id="team" className="section founders-section">
      <div className="bg-glow founders-glow-1" />
      <div className="bg-glow founders-glow-2" />
      <div className="container">
        <div className="section-header centered" data-reveal>
          <div className="section-tag"><span>◈</span> Leadership Team</div>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="section-subtitle centered-text">
            Young, passionate engineers and entrepreneurs building the future of software development. Hover to say hi! 👋
          </p>
        </div>

        <div className="founders-grid" data-reveal-stagger="100">
          {founders.map(founder => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  )
}
