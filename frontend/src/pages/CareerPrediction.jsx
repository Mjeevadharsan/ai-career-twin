import { useEffect, useState } from 'react'
import { getProfile } from '../services/profileService'
import CareerCard from '../components/CareerCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import './PageShared.css'

const COLORS = ['#3b82f6','#8b5cf6','#10b981','#f59e0b','#0ea5e9','#ec4899']

export default function CareerPrediction() {
  const [data, setData]   = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile().then(r => setData(r.data)).catch(() => {}).finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="page-loader"><i className="fa-solid fa-spinner fa-spin fa-2x" style={{color:'var(--blue-400)'}}/></div>

  const preds = data?.analysis?.predictions || []
  const chartData = preds.map(p => ({ name: p.career.replace(' ', '\n'), value: Math.round(p.probability * 100) }))

  return (
    <div className="shared-page">
      <div className="page-header">
        <h1><i className="fa-solid fa-microchip text-accent"/> Career Prediction</h1>
        <p>AI-powered career match scores based on your profile and ML model analysis.</p>
      </div>

      <div className="two-col-grid">
        <div className="glass-card">
          <h3>Match Score Chart</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData} margin={{ top:10, right:10, left:-10, bottom:60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)"/>
              <XAxis dataKey="name" tick={{ fill:'#94a3b8', fontSize:11 }} interval={0} angle={-20} textAnchor="end"/>
              <YAxis tick={{ fill:'#94a3b8', fontSize:11 }} domain={[0,100]}/>
              <Tooltip contentStyle={{ background:'#0d1426', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'white' }}/>
              <Bar dataKey="value" radius={[6,6,0,0]}>
                {chartData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="cards-col">
          {preds.map((p, i) => <CareerCard key={i} career={p.career} probability={p.probability} rank={i}/>)}
        </div>
      </div>
    </div>
  )
}
