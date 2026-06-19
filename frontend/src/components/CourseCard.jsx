import './CourseCard.css'

export default function CourseCard({ title, category, index }) {
  const colors = ['#3b82f6','#8b5cf6','#10b981','#f59e0b','#0ea5e9','#ec4899']
  const color  = colors[index % colors.length]
  return (
    <div className="course-card">
      <div className="course-num" style={{ background: `${color}22`, color }}>{index + 1}</div>
      <div className="course-body">
        <span className="course-tag" style={{ color, borderColor: `${color}44`, background: `${color}11` }}>
          {category || 'Course'}
        </span>
        <p className="course-title">{title}</p>
      </div>
      <i className="fa-solid fa-circle-play course-play" style={{ color }} />
    </div>
  )
}
