import { useContext } from 'react'
  import { Routes, Route, useNavigate } from 'react-router-dom'
  import { AuthContext } from './contexts/AuthContext'
  import Login from './pages/Login'
  import CreatorDashboard from './pages/CreatorDashboard'
  import PublicPortfolio from './pages/PublicPortfolio'

  function App() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/:username"
          element={user ? <CreatorDashboard /> : <PublicPortfolio />}
        />
      </Routes>
    )
  }

  export default App