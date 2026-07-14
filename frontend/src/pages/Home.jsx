import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Home.css'

const PREVIEW_CAREERS = {
  Interest_AI: {
    career: 'AI Engineer',
    icon: 'fa-brain',
    color: '#3b82f6',
    skills: ['Python', 'SQL', 'Machine Learning', 'Deep Learning']
  },
  Interest_Web: {
    career: 'Software Developer',
    icon: 'fa-code',
    color: '#10b981',
    skills: ['Java', 'JavaScript', 'HTML/CSS', 'C++']
  },
  Interest_Cybersecurity: {
    career: 'Cybersecurity Analyst',
    icon: 'fa-shield-halved',
    color: '#f59e0b',
    skills: ['Networking', 'Linux', 'SQL', 'Security Architectures']
  },
  Interest_DataScience: {
    career: 'Data Scientist',
    icon: 'fa-chart-pie',
    color: '#8b5cf6',
    skills: ['Python', 'SQL', 'Machine Learning', 'Statistics']
  },
  Interest_Cloud: {
    career: 'Cloud Engineer',
    icon: 'fa-cloud-arrow-up',
    color: '#0ea5e9',
    skills: ['Cloud Computing', 'Linux', 'Networking', 'Docker/K8s']
  },
  Interest_UIUX: {
    career: 'UI/UX Designer',
    icon: 'fa-compass-drafting',
    color: '#ec4899',
    skills: ['UI UX Design', 'HTML/CSS', 'JavaScript', 'Figma']
  }
}

const features = [
  { icon: 'fa-circle-nodes',  color: 'var(--blue-500)', title: 'Digital Twin Profiling',  desc: 'Build a virtual clone of your academic strengths, skills, and interests.' },
  { icon: 'fa-microchip',     color: 'var(--purple-400)', title: 'ML Career Prediction',    desc: 'KNN algorithm predicts your best-fit career with confidence scores.' },
  { icon: 'fa-road',          color: 'var(--success)', title: 'Skill Gap Analysis',       desc: 'See exactly which skills you need for your target career.' },
  { icon: 'fa-graduation-cap',color: 'var(--warning)', title: 'Personalized Roadmaps',   desc: 'Get courses, projects, and certifications tailored to your goals.' },
]

export default function Home() {
  const { user } = useAuth()
  
  // Interactive widget states
  const [previewInterest, setPreviewInterest] = useState('Interest_AI')
  const [previewCGPA, setPreviewCGPA] = useState(7.5)
  const [previewProjects, setPreviewProjects] = useState(2)

  // Compute live prediction
  const predInfo = PREVIEW_CAREERS[previewInterest] || PREVIEW_CAREERS.Interest_AI
  const baseConfidence = 68
  const cgpaFactor = Math.round((previewCGPA - 6) * 5.5)
  const projFactor = previewProjects * 2.5
  const matchConfidence = Math.min(98, baseConfidence + cgpaFactor + projFactor)

  return (
    <div className="home-page-wrapper">


      {/* Hero Section referencing twin.so layout */}
      <section className="twin-hero-section">
        <div className="hero-grid-bg"></div>
        <div className="hero-content">
          <span className="hero-badge"><i className="fa-solid fa-sparkles"/> Powered by Machine Learning & KNN</span>
          <h1 className="hero-title">
            AI Career Twin
            <span className="highlight-gradient">Intelligent Career Prediction</span>
            <span className="hero-sub">& Guidance System</span>
          </h1>
          <p className="hero-desc">
            Create a personalized digital twin of your academic profile, skills, and interests.
            Our AI engine identifies your best-fit career paths, highlights skill gaps, and delivers
            tailored roadmaps with recommended courses, projects, and certifications.
          </p>
          <div className="hero-btns">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-gauge"/> Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login"  className="btn btn-primary btn-lg"><i className="fa-solid fa-arrow-right-to-bracket"/> Login</Link>
                <Link to="/signup" className="btn btn-outline btn-lg"><i className="fa-solid fa-user-plus"/> Sign Up Free</Link>
              </>
            )}
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-n">6+</span><span className="stat-l">Career Tracks</span></div>
            <div className="stat-div"/>
            <div className="stat"><span className="stat-n">1200</span><span className="stat-l">Training Samples</span></div>
            <div className="stat-div"/>
            <div className="stat"><span className="stat-n">KNN</span><span className="stat-l">ML Algorithm</span></div>
          </div>
        </div>


      </section>

      {/* Interactive Predictor Preview Widget */}
      <section className="twin-preview-section">
        <div className="preview-card glass-card">
          <div className="preview-header">
            <span className="badge badge-blue">Interactive Demo</span>
            <h2>Try a Quick AI Career Prediction</h2>
            <p>Select your primary field of interest and academic standing to see what your AI Twin predicts.</p>
          </div>
          <div className="preview-form-grid">
            <div className="preview-inputs">
              <div className="preview-field">
                <label>Primary Interest Area</label>
                <select 
                  value={previewInterest} 
                  onChange={e => setPreviewInterest(e.target.value)} 
                  className="preview-select"
                >
                  <option value="Interest_AI">AI & Machine Learning</option>
                  <option value="Interest_Web">Web Development</option>
                  <option value="Interest_Cybersecurity">Cybersecurity & Networking</option>
                  <option value="Interest_DataScience">Data Science & Analytics</option>
                  <option value="Interest_Cloud">Cloud Computing & DevOps</option>
                  <option value="Interest_UIUX">UI/UX Design & Frontend</option>
                </select>
              </div>
              <div className="preview-field">
                <div className="slider-label-row">
                  <label>Current CGPA</label>
                  <span className="slider-val-highlight">{previewCGPA.toFixed(1)}</span>
                </div>
                <input 
                  type="range" 
                  min="6.0" 
                  max="10.0" 
                  step="0.1" 
                  value={previewCGPA} 
                  onChange={e => setPreviewCGPA(parseFloat(e.target.value))} 
                  className="preview-slider" 
                />
              </div>
              <div className="preview-field">
                <div className="slider-label-row">
                  <label>Projects Completed</label>
                  <span className="slider-val-highlight">{previewProjects}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="8" 
                  value={previewProjects} 
                  onChange={e => setPreviewProjects(parseInt(e.target.value))} 
                  className="preview-slider" 
                />
              </div>
            </div>
            <div className="preview-output">
              <div className="output-inner">
                <p className="output-title">Predicted Career Match</p>
                <div className="output-career-row">
                  <div className="output-icon" style={{ background: `${predInfo.color}15`, color: predInfo.color }}>
                    <i className={`fa-solid ${predInfo.icon}`} />
                  </div>
                  <div>
                    <h4>{predInfo.career}</h4>
                    <span className="badge" style={{ background: `${predInfo.color}18`, color: predInfo.color, border: `1px solid ${predInfo.color}25` }}>
                      {matchConfidence}% Match Rate
                    </span>
                  </div>
                </div>
                <div className="output-skills-list">
                  <p className="skills-lbl">Core Skills Required:</p>
                  <div className="skills-chips">
                    {predInfo.skills.map(s => (
                      <span key={s} className="skill-preview-badge">{s}</span>
                    ))}
                  </div>
                </div>
                <Link to="/signup" className="btn btn-primary btn-full" style={{ marginTop: 'auto' }}>
                  Build Full ML Twin <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features referencing twin.so clean cards */}
      <section className="twin-features-section">
        <h2 className="section-main-title">Build smarter. Learn faster.</h2>
        <div className="twin-features-grid">
          {features.map((f, i) => (
            <div className="twin-feature-card" key={i}>
              <div className="twin-feat-icon" style={{ background:`${f.color}18`, color:f.color }}>
                <i className={`fa-solid ${f.icon}`}/>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA referencing twin.so */}
      <section className="twin-bottom-cta-section">
        <div className="cta-gradient-box">
          <h2>Ready to discover your ideal career?</h2>
          <p>Join students using AI to navigate their future path.</p>
          <div className="cta-buttons-wrapper">
            <Link to="/signup" className="btn btn-primary btn-lg"><i className="fa-solid fa-user-plus"/> Create Free Account</Link>
            <Link to="/login"  className="btn btn-outline btn-lg"><i className="fa-solid fa-arrow-right-to-bracket"/> Login</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
