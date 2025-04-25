import { useState, useEffect, useContext } from 'react'
  import { useNavigate } from 'react-router-dom'
  import { AuthContext } from '../contexts/AuthContext'
  import PortfolioBuilder from '../components/PortfolioBuilder'
  import ThemeEngine from '../components/ThemeEngine'
  import AnalyticsDashboard from '../components/AnalyticsDashboard'
  import { loadPortfolios, savePortfolios } from '../data'

  const CreatorDashboard = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const [portfolio, setPortfolio] = useState(() => {
      if (!user || !user.username) {
        return {
          caseStudies: [],
          theme: { name: 'Light', bg: 'bg-white', text: 'text-black', border: 'border-gray-200' },
        }
      }
      return loadPortfolios()[user.username] || {
        caseStudies: [],
        theme: { name: 'Light', bg: 'bg-white', text: 'text-black', border: 'border-gray-200' },
      }
    })

    useEffect(() => {
      if (user && user.username) {
        const portfolios = loadPortfolios()
        portfolios[user.username] = portfolio
        savePortfolios(portfolios)
        console.log('Portfolio updated:', portfolio)
      }
    }, [portfolio, user])

    const handleLogout = () => {
      logout()
      navigate('/')
    }

    if (!user || !user.username) {
      navigate('/')
      return null
    }

    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="flex items-center justify-between p-4 text-white bg-blue-500">
          <h1 className="text-xl font-bold">ProjectShelf</h1>
          <div className="flex items-center space-x-4">
            <span>{user.username}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </nav>
        <div className="container mx-auto">
          <PortfolioBuilder
            username={user.username}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
          <ThemeEngine key={portfolio.theme.name} portfolio={portfolio} setPortfolio={setPortfolio} />
          <AnalyticsDashboard username={user.username} />
        </div>
      </div>
    )
  }

  export default CreatorDashboard