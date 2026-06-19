import './CareerCard.css'

const iconMap = {
  'AI Engineer':           { icon: 'fa-brain',          color: '#3b82f6' },
  'Data Scientist':        { icon: 'fa-chart-pie',       color: '#8b5cf6' },
  'Software Developer':    { icon: 'fa-code',            color: '#10b981' },
  'Cybersecurity Analyst': { icon: 'fa-shield-halved',   color: '#f59e0b' },
  'Cloud Engineer':        { icon: 'fa-cloud-arrow-up',  color: '#0ea5e9' },
  'UI/UX Designer':        { icon: 'fa-compass-drafting',color: '#ec4899' },
}

export default function CareerCard({ career, probability, rank = 0 }) {
  const pct  = Math.round(probability * 100)
  const meta = iconMap[career] || { icon: 'fa-briefcase', color: '#94a3b8' }

  return (
    <div className={`career-card ${rank === 0 ? 'top-match' : ''}`}>
      {rank === 0 && <span className="top-badge">TOP MATCH</span>}
      <div className="career-icon" style={{ background: `${meta.color}22`, border: `1px solid ${meta.color}44` }}>
        <i className={`fa-solid ${meta.icon}`} style={{ color: meta.color }} />
      </div>
      <div className="career-info">
        <h3 className="career-name">{career}</h3>
        <div className="career-pct-row">
          <span className="career-pct" style={{ color: meta.color }}>{pct}%</span>
          <span className="career-pct-label">match</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)` }} />
        </div>
      </div>
    </div>
  )
}
