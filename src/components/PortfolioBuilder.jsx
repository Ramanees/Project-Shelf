import { useState } from 'react'
import CaseStudy from './CaseStudy'

const PortfolioBuilder = ({ portfolio, setPortfolio }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [newCaseStudyTitle, setNewCaseStudyTitle] = useState('')

  const addCaseStudy = () => {
    if (newCaseStudyTitle.trim()) {
      setPortfolio({
        ...portfolio,
        caseStudies: [...portfolio.caseStudies, { id: Date.now(), title: newCaseStudyTitle }],
      })
      setNewCaseStudyTitle('')
      setIsAdding(false)
    }
  }

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Portfolio Builder</h2>
      {isAdding ? (
        <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Case Study Title"
            value={newCaseStudyTitle}
            onChange={(e) => setNewCaseStudyTitle(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex space-x-2">
            <button onClick={addCaseStudy} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Save
            </button>
            <button onClick={() => setIsAdding(false)} className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Case Study
        </button>
      )}
      <div>
        {portfolio.caseStudies.map((study) => (
          <CaseStudy
            key={study.id}
            study={study}
            isEditable={true}
            onSave={(updatedStudy) => {
              setPortfolio({
                ...portfolio,
                caseStudies: portfolio.caseStudies.map((s) =>
                  s.id === updatedStudy.id ? updatedStudy : s
                ),
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioBuilder