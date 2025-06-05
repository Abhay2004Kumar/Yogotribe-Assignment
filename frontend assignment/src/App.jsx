import { useState } from 'react'

function App() {
  const [fact, setFact] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRandomFact = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://catfact.ninja/fact')
      
      if (!response.ok) {
        throw new Error('Failed to fetch fact')
      }
      
      const data = await response.json()
      setFact(data.fact)
    } catch (err) {
      setError(err.message)
      setFact('')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Random Fact Fetcher</h1>
      
      <button 
        onClick={fetchRandomFact}
        disabled={isLoading}
        className={`px-6 py-3 rounded-md text-white font-medium transition-colors
          ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 cursor-pointer'}`}
      >
        {isLoading ? 'Loading...' : 'Get Random Fact'}
      </button>
      
      {error && (
        <p className="mt-4 text-red-500 font-semibold">Error: {error}</p>
      )}
      
      {fact && (
        <div className="mt-8 p-6 max-w-md w-full bg-gray-50 rounded-lg border-l-4 border-green-500">
          <h2 className="text-xl font-semibold mb-2">Here's your fact:</h2>
          <p className="text-gray-700">{fact}</p>
        </div>
      )}
    </div>
  )
}

export default App