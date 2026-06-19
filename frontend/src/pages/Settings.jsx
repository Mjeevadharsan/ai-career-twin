import { useState } from 'react'
import { useAuth }  from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './PageShared.css'
import './Settings.css'

export default function Settings() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [confirmLogout, setConfirmLogout] = useState(false)

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="shared-page">
      <div className="page-header">
        <h1><i className="fa-solid fa-gear text-accent"/> Settings</h1>
        <p>Manage your account preferences</p>
      </div>

      <div className="settings-grid">
        <div className="glass-card">
          <h3>Account Info</h3>
          <div className="setting-row">
            <span className="set-label">Username / Email</span>
            <span className="set-value">{user?.username}</span>
          </div>
          <div className="setting-row">
            <span className="set-label">Account Type</span>
            <span className="badge badge-blue">Student</span>
          </div>
        </div>

        <div className="glass-card">
          <h3>About Project</h3>
          <div className="about-items">
            {[
              { label:'Project', value:'AI Career Twin' },
              { label:'Course',  value:'B.E. Computer Science & Engineering' },
              { label:'Year',    value:'Final Year Project – 2026' },
              { label:'Domain',  value:'AI · ML · Career Guidance · Data Analytics' },
              { label:'Backend', value:'Java Spring Boot + SQLite' },
              { label:'ML Model',value:'K-Nearest Neighbors (K=15)' },
            ].map(r => (
              <div key={r.label} className="setting-row">
                <span className="set-label">{r.label}</span>
                <span className="set-value">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card danger-zone">
          <h3>Session</h3>
          {!confirmLogout
            ? <button className="btn btn-outline" onClick={() => setConfirmLogout(true)}>
                <i className="fa-solid fa-arrow-right-from-bracket"/> Logout
              </button>
            : <div className="confirm-row">
                <p>Are you sure you want to logout?</p>
                <div style={{display:'flex',gap:10,marginTop:12}}>
                  <button className="btn btn-primary" onClick={handleLogout}><i className="fa-solid fa-check"/> Yes, Logout</button>
                  <button className="btn btn-outline" onClick={() => setConfirmLogout(false)}>Cancel</button>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
