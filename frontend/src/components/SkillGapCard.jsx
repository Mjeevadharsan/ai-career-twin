import './SkillGapCard.css'

export default function SkillGapCard({ skill, acquired }) {
  return (
    <div className={`skill-gap-card ${acquired ? 'acquired' : 'missing'}`}>
      <i className={`fa-solid ${acquired ? 'fa-circle-check' : 'fa-circle-xmark'}`} />
      <span>{skill.replace(/_/g, ' ')}</span>
    </div>
  )
}
