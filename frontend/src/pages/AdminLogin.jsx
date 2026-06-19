import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './AdminLogin.css'

export default function AdminLogin() {
  const { login } = useAuth()
  const navigate  = useNavigate()
  const [form, setForm]       = useState({ username: '', password: '' })
  const [errors, setErrors]   = useState({})
  const [msg, setMsg]         = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.username.trim()) {
      e.username = 'Username or Admin Email is required.'
    }
    if (!form.password) {
      e.password = 'Password is required.'
    }
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setMsg(null)

    try {
      const res = await login(form.username.trim(), form.password)
      if (res.role !== 'ADMIN') {
        throw new Error('Access denied. You do not have administrator privileges.')
      }
      setMsg({ type: 'success', text: 'Admin identity verified. Loading console...' })
      setTimeout(() => navigate('/admin/dashboard'), 1200)
    } catch (err) {
      setMsg({ 
        type: 'error', 
        text: err.message || err.response?.data?.error || 'Authentication failed. Please verify credentials.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-particles">
        <div className="glow-orb g1"></div>
        <div className="glow-orb g2"></div>
      </div>
      
      <div className="admin-login-card fade-up">
        <div className="admin-badge">
          <div className="shield-icon">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <span className="badge-text">CONTROL PANEL</span>
        </div>

        <div className="card-header">
          <h1>Admin Sign In</h1>
          <p>Access the AI Career Twin system configurations & diagnostics</p>
        </div>

        {msg && <div className={`msg-box ${msg.type}`}>{msg.text}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className={`field ${errors.username ? 'invalid' : ''}`}>
            <label>Admin Username / Email</label>
            <div className="input-wrap">
              <i className="fa-solid fa-user-lock fi"></i>
              <input 
                type="text" 
                placeholder="admin@careertwin.com"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                disabled={loading}
              />
            </div>
            <span className="field-err">{errors.username}</span>
          </div>

          <div className={`field ${errors.password ? 'invalid' : ''}`}>
            <label>Access Code / Password</label>
            <div className="input-wrap">
              <i className="fa-solid fa-key fi"></i>
              <input 
                type={showPwd ? 'text' : 'password'} 
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                disabled={loading}
              />
              <button 
                type="button" 
                className="eye-btn" 
                onClick={() => setShowPwd(!showPwd)}
                disabled={loading}
              >
                <i className={`fa-solid ${showPwd ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
            <span className="field-err">{errors.password}</span>
          </div>

          <button type="submit" className="btn btn-primary btn-full admin-btn" disabled={loading}>
            {loading ? (
              <><i className="fa-solid fa-circle-notch fa-spin"></i> Authorizing...</>
            ) : (
              <><i className="fa-solid fa-shield-halved"></i> Verify Credentials</>
            )}
          </button>
        </form>

        <div className="footer-links">
          <Link to="/login" className="back-link">
            <i className="fa-solid fa-arrow-left"></i> Standard Student Portal
          </Link>
        </div>
      </div>
      
      <p className="admin-foot">AI Career Twin Admin Console v1.0.0 — SECURE PROTOCOL ONLY</p>
    </div>
  )
}
