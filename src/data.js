export const loadPortfolios = () => {
    return JSON.parse(localStorage.getItem('portfolios')) || {}
  }
  
  export const savePortfolios = (portfolios) => {
    localStorage.setItem('portfolios', JSON.stringify(portfolios))
  }
  
  export const loadAnalytics = () => {
    return JSON.parse(localStorage.getItem('analytics')) || {}
  }
  
  export const saveAnalytics = (analytics) => {
    localStorage.setItem('analytics', JSON.stringify(analytics))
  }