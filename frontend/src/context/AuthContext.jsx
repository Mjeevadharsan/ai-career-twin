import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser]         = useState(null)   // { username }
  const [loading, setLoading]   = useState(true)

  // Restore session on mount
  useEffect(() => {
    api.get('/profile')
      .then(res => {
        setUser({
          username: res.data.username || 'User',
          role: res.data.role || 'STUDENT',
          fullName: res.data.full_name || ''
        })
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  const login = async (username, password) => {
    const res = await api.post('/login', { username, password })
    setUser({
      username: res.data.username,
      role: res.data.role,
      fullName: res.data.full_name
    })
    return res.data
  }

  const register = async (username, password, fullName = null, mobile = null) => {
    const res = await api.post('/register', { username, password, fullName, mobile })
    return res.data
  }

  const logout = async () => {
    await api.post('/logout')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
