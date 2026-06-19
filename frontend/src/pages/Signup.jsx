import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Auth.css'

export default function Signup() {
  const { register } = useAuth()
  const navigate     = useNavigate()
  const [form, setForm]       = useState({ name:'', email:'', mobile:'', password:'', confirm:'' })
  const [errors, setErrors]   = useState({})
  const [msg, setMsg]         = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPwd, setShowPwd] = useState(false)
  const [strength, setStrength] = useState(0)
  const [terms, setTerms]     = useState(false)

  const strengthLevels = [
    { w:'0%',   c:'transparent', t:'' },
    { w:'25%',  c:'#ef4444',     t:'Weak' },
    { w:'50%',  c:'#f59e0b',     t:'Fair' },
    { w:'75%',  c:'#3b82f6',     t:'Good' },
    { w:'100%', c:'#10b981',     t:'Strong' },
  ]

  const calcStrength = (v) => {
    let s = 0
    if (v.length >= 8)           s++
    if (/[A-Z]/.test(v))         s++
    if (/[0-9]/.test(v))         s++
    if (/[^A-Za-z0-9]/.test(v)) s++
    setStrength(s)
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2)                              e.name     = 'Enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))         e.email    = 'Enter a valid email address.'
    if (!/^[+\d\s\-]{7,15}$/.test(form.mobile))                 e.mobile   = 'Enter a valid mobile number.'
    if (form.password.length < 8)                                 e.password = 'Password must be at least 8 characters.'
    if (form.confirm !== form.password || !form.confirm)          e.confirm  = 'Passwords do not match.'
    if (!terms)                                                   e.terms    = 'Accept the terms to continue.'
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true); setMsg(null)
    try {
      await register(form.email.trim(), form.password, form.name.trim(), form.mobile.trim())
      setMsg({ type:'success', text:'Account created! Redirecting to login…' })
      setTimeout(() => navigate('/login'), 1600)
    } catch (err) {
      setMsg({ type:'error', text: err.response?.data?.error || 'Registration failed.' })
    } finally { setLoading(false) }
  }

  const sl = strengthLevels[strength]

  return (
    <div className="auth-page">
      <div className="auth-orbs">
        <div className="orb o1"/><div className="orb o2"/>
      </div>
      <div className="auth-card fade-up">
        <Link to="/" className="brand">
          <div className="brand-icon"><i className="fa-solid fa-network-wired"/></div>
          <span className="brand-name">AI Career <span>Twin</span></span>
        </Link>

        <div className="auth-head">
          <h1>Create your account</h1>
          <p>Start your AI-powered career journey today</p>
        </div>

        {msg && <div className={`msg-box ${msg.type}`}>{msg.text}</div>}

        <form onSubmit={handleSubmit} noValidate>
          {[
            { id:'name',   label:'Full Name',      icon:'fa-user',          type:'text',     placeholder:'Enter your full name' },
            { id:'email',  label:'Email Address',  icon:'fa-envelope',      type:'email',    placeholder:'you@example.com' },
            { id:'mobile', label:'Mobile Number',  icon:'fa-mobile-screen', type:'tel',      placeholder:'+91 XXXXX XXXXX' },
          ].map(f => (
            <div key={f.id} className={`field ${errors[f.id] ? 'invalid' : form[f.id] ? 'valid' : ''}`}>
              <label>{f.label}</label>
              <div className="input-wrap">
                <i className={`fa-solid ${f.icon} fi`}/>
                <input type={f.type} placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={e => setForm({...form, [f.id]: e.target.value})}/>
              </div>
              <span className="field-err">{errors[f.id]}</span>
            </div>
          ))}

          {/* Password */}
          <div className={`field ${errors.password ? 'invalid' : form.password.length >= 8 ? 'valid' : ''}`}>
            <label>Password</label>
            <div className="input-wrap">
              <i className="fa-solid fa-lock fi"/>
              <input type={showPwd ? 'text' : 'password'} placeholder="Min. 8 characters"
                value={form.password}
                onChange={e => { setForm({...form, password: e.target.value}); calcStrength(e.target.value) }}/>
              <button type="button" className="eye-btn" onClick={() => setShowPwd(!showPwd)}>
                <i className={`fa-solid ${showPwd ? 'fa-eye-slash' : 'fa-eye'}`}/>
              </button>
            </div>
            <div className="str-track"><div className="str-fill" style={{ width:sl.w, background:sl.c }}/></div>
            {sl.t && <span className="str-lbl" style={{ color:sl.c }}>{sl.t}</span>}
            <span className="field-err">{errors.password}</span>
          </div>

          {/* Confirm */}
          <div className={`field ${errors.confirm ? 'invalid' : (form.confirm && form.confirm===form.password) ? 'valid' : ''}`}>
            <label>Confirm Password</label>
            <div className="input-wrap">
              <i className="fa-solid fa-shield-halved fi"/>
              <input type="password" placeholder="Re-enter your password"
                value={form.confirm}
                onChange={e => setForm({...form, confirm: e.target.value})}/>
            </div>
            <span className="field-err">{errors.confirm}</span>
          </div>

          <label className="terms-row">
            <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)}/>
            <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
          </label>
          {errors.terms && <span className="field-err" style={{display:'block',marginTop:-10,marginBottom:10}}>{errors.terms}</span>}

          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading
              ? <><i className="fa-solid fa-spinner fa-spin"/> Creating…</>
              : <><i className="fa-solid fa-circle-nodes"/> Create Account</>}
          </button>
        </form>

        <p className="switch-link">Already have an account? <Link to="/login">Login</Link></p>
      </div>
      <p className="auth-foot">© 2026 AI Career Twin — B.E. CSE Final Year Project</p>
    </div>
  )
}
