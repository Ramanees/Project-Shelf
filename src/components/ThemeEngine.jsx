const ThemeEngine = ({ portfolio, setPortfolio }) => {
  const themes = [
    { name: 'Light', bg: 'bg-white', text: 'text-black', border: 'border-gray-200' },
    { name: 'Dark', bg: 'bg-gray-800', text: 'text-white', border: 'border-gray-700' },
    { name: 'Minimal', bg: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-300' },
  ]

  const applyTheme = (theme) => {
    console.log('Applying theme:', theme) // Debug log
    setPortfolio({ ...portfolio, theme }) // Update portfolio with new theme
  }

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Theme Engine</h2>
      <div className="flex space-x-4">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => applyTheme(theme)}
            className={`px-4 py-2 rounded ${theme.bg} ${theme.text} ${theme.border} border hover:opacity-80`}
          >
            {theme.name}
          </button>
        ))}
      </div>
      <div className={`mt-6 p-4 rounded ${portfolio.theme.bg} ${portfolio.theme.text} ${portfolio.theme.border} border`}>
        <h3 className="text-lg font-bold">Preview</h3>
        <p>This is how your portfolio will look with the {portfolio.theme.name} theme.</p>
      </div>
    </div>
  )
}

export default ThemeEngine