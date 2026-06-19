import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const { login } = useAuth()
  const navigate  = useNavigate()
  const [form,    setForm]    = useState({ username: '', password: '' })
  const [errors,  setErrors]  = useState({})
  const [msg,     setMsg]     = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.username.trim()) e.username = 'Enter your email or username.'
    if (!form.password)        e.password = 'Enter your password.'
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setMsg(null)
    try {
      const data = await login(form.username.trim(), form.password)
      if (data.role === 'ADMIN') {
        setMsg({ type: 'success', text: '✓ Admin verified — loading control panel…' })
        setTimeout(() => navigate('/admin/dashboard'), 1000)
      } else {
        setMsg({ type: 'success', text: '✓ Login successful — redirecting to dashboard…' })
        setTimeout(() => navigate('/dashboard'), 1000)
      }
    } catch (err) {
      setMsg({ type: 'error', text: err.response?.data?.error || 'Invalid credentials. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      {/* Background orbs */}
      <div className="login-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Card */}
      <div className="login-card fade-up">
        {/* Brand */}
        <Link to="/" className="login-brand">
          <div className="login-brand-icon">
            <i className="fa-solid fa-network-wired" />
          </div>
          <span className="login-brand-name">AI Career <span>Twin</span></span>
        </Link>

        <div className="login-head">
          <h1>Welcome back</h1>
          <p>Sign in to continue — students and admins use the same portal</p>
        </div>

        {msg && (
          <div className={`login-msg ${msg.type}`}>
            <i className={`fa-solid ${msg.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`} />
            {msg.text}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email / Username */}
          <div className={`login-field ${errors.username ? 'invalid' : ''}`}>
            <label htmlFor="login-username">Email or Username</label>
            <div className="login-input-wrap">
              <i className="fa-solid fa-envelope login-fi" />
              <input
                id="login-username"
                type="text"
                placeholder="Enter your email or username"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                disabled={loading}
                autoComplete="username"
              />
            </div>
            <span className="login-field-err">{errors.username}</span>
          </div>

          {/* Password */}
          <div className={`login-field ${errors.password ? 'invalid' : ''}`}>
            <label htmlFor="login-password">Password</label>
            <div className="login-input-wrap">
              <i className="fa-solid fa-lock login-fi" />
              <input
                id="login-password"
                type={showPwd ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPwd(!showPwd)}
                tabIndex={-1}
                disabled={loading}
              >
                <i className={`fa-solid ${showPwd ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
            <span className="login-field-err">{errors.password}</span>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <><i className="fa-solid fa-circle-notch fa-spin" /> Signing in…</>
            ) : (
              <><i className="fa-solid fa-arrow-right-to-bracket" /> Sign In</>
            )}
          </button>
        </form>


        <p className="login-switch">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
      </div>

      <p className="login-foot">© 2026 AI Career Twin — B.E. CSE Final Year Project</p>
    </div>
  )
}
