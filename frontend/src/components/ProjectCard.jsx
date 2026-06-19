import './ProjectCard.css'

export default function ProjectCard({ title, index }) {
  const icons  = ['fa-cubes','fa-robot','fa-brain','fa-code','fa-chart-bar','fa-shield-halved']
  const colors = ['#3b82f6','#10b981','#8b5cf6','#f59e0b','#0ea5e9','#ec4899']
  const icon   = icons[index % icons.length]
  const color  = colors[index % colors.length]
  return (
    <div className="project-card">
      <div className="project-icon" style={{ background: `${color}18`, color }}>
        <i className={`fa-solid ${icon}`} />
      </div>
      <div className="project-info">
        <p className="project-title">{title}</p>
        <span className="project-label">Suggested Project</span>
      </div>
      <div className="project-arrow"><i className="fa-solid fa-arrow-right" /></div>
    </div>
  )
}
