import { useState, useEffect } from 'react'
       import { loadAnalytics, saveAnalytics } from '../data'

       const AnalyticsDashboard = ({ username }) => {
         const [stats, setStats] = useState(
           loadAnalytics()[username] || { visits: 0, engagement: 0, clicks: 0 }
         )

         useEffect(() => {
           const interval = setInterval(() => {
             const newStats = {
               visits: stats.visits + Math.floor(Math.random() * 10),
               engagement: stats.engagement + Math.floor(Math.random() * 5),
               clicks: stats.clicks + Math.floor(Math.random() * 3),
             }
             setStats(newStats)
             const analytics = loadAnalytics()
             analytics[username] = newStats
             saveAnalytics(analytics)
           }, 5000)
           return () => clearInterval(interval)
         }, [stats, username])

         return (
           <div className="p-6">
             <h2 className="mb-4 text-2xl font-bold">Analytics Dashboard</h2>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
               <div className="p-4 bg-white rounded-lg shadow-md">
                 <h3 className="text-lg font-bold">Portfolio Visits</h3>
                 <p className="text-2xl">{stats.visits}</p>
               </div>
               <div className="p-4 bg-white rounded-lg shadow-md">
                 <h3 className="text-lg font-bold">Engagement (min)</h3>
                 <p className="text-2xl">{stats.engagement}</p>
               </div>
               <div className="p-4 bg-white rounded-lg shadow-md">
                 <h3 className="text-lg font-bold">Click-Throughs</h3>
                 <p className="text-2xl">{stats.clicks}</p>
               </div>
             </div>
           </div>
         )
       }

       export default AnalyticsDashboard