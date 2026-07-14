import { useEffect, useState } from 'react'
import { getProfile } from '../services/profileService'
import CourseCard   from '../components/CourseCard'
import ProjectCard  from '../components/ProjectCard'
import './PageShared.css'

const CAREER_COURSES = {
  'AI Engineer':           ['Machine Learning Fundamentals','Deep Learning Specialization','NLP with Python','Computer Vision Basics','Generative AI & LLMs'],
  'Data Scientist':        ['Data Analysis with Python','Statistics for Data Science','SQL for Data Analytics','Power BI / Tableau','Advanced Machine Learning'],
  'Software Developer':    ['Java Full Stack Development','Data Structures & Algorithms','Spring Boot Framework','Web Development (HTML, CSS, JS)','Software Testing'],
  'Cybersecurity Analyst': ['Ethical Hacking','Network Security','Cybersecurity Fundamentals','Penetration Testing','Security Operations Center (SOC)'],
  'Cloud Engineer':        ['AWS Cloud Practitioner','Azure Fundamentals','DevOps & CI/CD','Docker & Kubernetes','Linux Administration'],
  'UI/UX Designer':        ['UI Design Fundamentals','Figma Masterclass','User Research Methods','Responsive Web Design','Interaction Design'],
}

export default function Recommendations() {
  const [data, setData]   = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile().then(r => setData(r.data)).catch(() => {}).finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="page-loader"><i className="fa-solid fa-spinner fa-spin fa-2x" style={{color:'var(--blue-400)'}}/></div>

  const top     = data?.analysis?.predictions?.[0]?.career || ''
  const courses  = CAREER_COURSES[top] || data?.analysis?.courses || []
  const projects = data?.analysis?.projects || []
  const certs    = data?.analysis?.certifications || []

  // Group into logical learning path phases
  const phases = [
    {
      name: 'Phase 1: Foundations',
      description: 'Kickstart your learning path with baseline principles, core terminology, and fundamental courses.',
      courses: courses.slice(0, 2),
      projects: projects.slice(0, 1),
      icon: 'fa-chess-pawn',
      color: '#3b82f6'
    },
    {
      name: 'Phase 2: Core Engineering',
      description: 'Deep dive into advanced structures, industrial frameworks, and interactive problem-solving.',
      courses: courses.slice(2, 4),
      projects: projects.slice(1, 2),
      icon: 'fa-chess-knight',
      color: '#8b5cf6'
    },
    {
      name: 'Phase 3: Specialization & Capstone',
      description: 'Hone your expertise with full-scale deployment projects and specialized state-of-the-art topics.',
      courses: courses.slice(4),
      projects: projects.slice(2),
      icon: 'fa-chess-king',
      color: '#10b981'
    }
  ].filter(p => p.courses.length > 0 || p.projects.length > 0)

  return (
    <div className="shared-page">
      <div className="page-header">
        <h1><i className="fa-solid fa-graduation-cap text-accent"/> Recommendations</h1>
        <p>Personalized learning roadmap designed to prepare you for the <strong>{top}</strong> role.</p>
      </div>

      <div className="roadmap-timeline">
        {phases.map((ph, idx) => (
          <div key={idx} className="timeline-phase">
            {/* Timeline icon node */}
            <div className="timeline-node" style={{ background: ph.color, boxShadow: `0 0 15px ${ph.color}40` }}>
              <i className={`fa-solid ${ph.icon}`} />
            </div>
            
            {/* Content card */}
            <div className="timeline-content glass-card">
              <div className="phase-title-section">
                <span className="phase-pill" style={{ color: ph.color, background: `${ph.color}15`, borderColor: `${ph.color}25` }}>
                  Step {idx + 1}
                </span>
                <h3 className="phase-name">{ph.name}</h3>
                <p className="phase-desc">{ph.description}</p>
              </div>

              <div className="phase-resources-grid">
                {ph.courses.length > 0 && (
                  <div className="resource-col">
                    <h4 className="resource-header"><i className="fa-solid fa-book-open" /> Recommended Courses</h4>
                    <div className="rec-list-full">
                      {ph.courses.map((c, i) => (
                        <CourseCard key={i} title={c} category={top} index={idx * 2 + i} />
                      ))}
                    </div>
                  </div>
                )}

                {ph.projects.length > 0 && (
                  <div className="resource-col">
                    <h4 className="resource-header"><i className="fa-solid fa-laptop-code" /> Hands-on Projects</h4>
                    <div className="rec-list-full">
                      {ph.projects.map((p, i) => (
                        <ProjectCard key={i} title={p} index={idx * 2 + i} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {certs.length > 0 && (
        <div className="glass-card recs-certs-v2" style={{ marginTop: '40px' }}>
          <h3 className="certs-section-title"><i className="fa-solid fa-award text-accent"/> Suggested Industry Certifications</h3>
          <p className="certs-section-desc">Validate your knowledge with these recognized credential pathways.</p>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <div key={i} className="cert-item">
                <i className="fa-solid fa-award" style={{color:'var(--warning)'}}/>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
