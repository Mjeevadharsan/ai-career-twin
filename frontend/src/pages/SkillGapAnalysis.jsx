import { useEffect, useState } from 'react'
import { getProfile } from '../services/profileService'
import SkillGapCard from '../components/SkillGapCard'
import './PageShared.css'

const REQUIRED = {
  'AI Engineer':           ['Python','SQL','Machine_Learning','Deep_Learning'],
  'Data Scientist':        ['Python','SQL','Machine_Learning'],
  'Software Developer':    ['Java','JavaScript','HTML_CSS','C++'],
  'Cybersecurity Analyst': ['Networking','Linux','SQL'],
  'Cloud Engineer':        ['Cloud_Computing','Linux','Networking','SQL'],
  'UI/UX Designer':        ['UI_UX_Design','HTML_CSS','JavaScript'],
}

export default function SkillGapAnalysis() {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile().then(r => setData(r.data)).catch(() => {}).finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="page-loader"><i className="fa-solid fa-spinner fa-spin fa-2x" style={{color:'var(--blue-400)'}}/></div>

  const userSkills = [...(data?.skills || [])]
  const missing    = data?.analysis?.missing_skills || []
  const top        = data?.analysis?.predictions?.[0]?.career || ''
  const required   = REQUIRED[top] || []

  // Compute readiness score
  const totalRequired = required.length
  const acquiredCount = required.filter(s => userSkills.includes(s)).length
  const readinessScore = totalRequired > 0 ? Math.round((acquiredCount / totalRequired) * 100) : 100

  // SVG ring properties
  const radius = 46
  const strokeWidth = 8
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (readinessScore / 100) * circumference

  return (
    <div className="shared-page">
      <div className="page-header">
        <h1><i className="fa-solid fa-road text-accent"/> Skill Gap Analysis</h1>
        <p>Required vs acquired skills for your top career match: <strong>{top}</strong></p>
      </div>

      <div className="two-col-grid">
        {/* Left Column: Skill Matrix */}
        <div className="glass-card">
          <h3><i className="fa-solid fa-cubes text-accent" /> Skill Matrix</h3>
          <div className="skill-matrix-full">
            {required.map(sk => (
              <SkillGapCard key={sk} skill={sk} acquired={userSkills.includes(sk)}/>
            ))}
          </div>
          <div className="gap-legend">
            <span className="leg-item leg-acquired"><i className="fa-solid fa-circle-check"/> Acquired</span>
            <span className="leg-item leg-missing"><i className="fa-solid fa-circle-xmark"/> Missing</span>
          </div>
        </div>

        {/* Right Column: Stacked Readiness & Suggestions */}
        <div className="cards-col">
          {/* Readiness gauge */}
          <div className="glass-card skill-readiness-card">
            <h3><i className="fa-solid fa-gauge-high text-accent" /> Track Readiness</h3>
            <div className="readiness-container">
              <div className="readiness-gauge-wrap">
                <svg className="readiness-svg" width="110" height="110">
                  <circle className="readiness-bg-circle" cx="55" cy="55" r={radius} strokeWidth={strokeWidth} fill="transparent" />
                  <circle className="readiness-fill-circle" cx="55" cy="55" r={radius} strokeWidth={strokeWidth} fill="transparent" 
                    strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} stroke="url(#readinessGrad)" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="readinessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="readiness-text">
                  <span className="readiness-val">{readinessScore}%</span>
                  <span className="readiness-lbl">Ready</span>
                </div>
              </div>
              <div className="readiness-meta">
                <h4>Track Alignment Score</h4>
                <p className="readiness-desc">
                  {readinessScore === 100 
                    ? "Exceptional! You meet all core requirements for this track." 
                    : `You have unlocked ${acquiredCount} of the ${totalRequired} core skills for the ${top} profile.`}
                </p>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="glass-card">
            <h3><i className="fa-solid fa-lightbulb text-accent" /> Recommended Actions</h3>
            {missing.length === 0
              ? <p className="text-success" style={{fontSize:'0.9rem'}}><i className="fa-solid fa-circle-check"/> No critical skill gaps detected!</p>
              : missing.map((sk, i) => (
                  <div key={i} className="suggestion-item">
                    <div className="sug-icon"><i className="fa-solid fa-circle-arrow-right"/></div>
                    <div>
                      <p className="sug-skill">{sk.replace(/_/g,' ')}</p>
                      <p className="sug-desc">Add this skill to improve your {top} match score.</p>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
