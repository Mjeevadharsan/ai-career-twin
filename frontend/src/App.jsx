import { BrowserRouter } from 'react-router-dom'
import { AuthProvider }  from './context/AuthContext'
import AppRoutes         from './routes/AppRoutes'
import Navbar            from './components/Navbar'
import Footer            from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
          <Navbar />
          <main style={{ flex:1 }}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
