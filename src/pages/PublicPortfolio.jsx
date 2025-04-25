import { useParams } from 'react-router-dom'
import CaseStudy from '../components/CaseStudy'
import { loadPortfolios } from '../data'

const PublicPortfolio = () => {
  const { username } = useParams()
  const portfolio = loadPortfolios()[username] || {
    caseStudies: [],
    theme: { name: 'Light', bg: 'bg-white', text: 'text-black', border: 'border-gray-200' },
  }

  return (
    <div className={`min-h-screen ${portfolio.theme.bg} ${portfolio.theme.text}`}>
      <div className="container p-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">{username}'s Portfolio</h1>
        {portfolio.caseStudies.length ? (
          portfolio.caseStudies.map((study) => (
            <CaseStudy key={study.id} study={study} isEditable={false} />
          ))
        ) : (
          <p>No case studies available.</p>
        )}
      </div>
    </div>
  )
}

export default PublicPortfolio