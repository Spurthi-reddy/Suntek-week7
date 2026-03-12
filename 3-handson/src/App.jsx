import { useEffect, useRef, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const debounceTimerRef = useRef(null)

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags',
        )

        if (!response.ok) {
          throw new Error('Unable to fetch countries. Please try again.')
        }

        const data = await response.json()
        setCountries(data)
      } catch (fetchError) {
        setError(fetchError.message || 'Something went wrong while fetching data.')
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  const handleSearch = (value) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = setTimeout(() => {
      setQuery(value)
    }, 400)
  }

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name?.common?.toLowerCase() || ''
    return countryName.includes(query.trim().toLowerCase())
  })

  return (
    <main className="app">
      <header className="app-header">
        <h1>Country Explorer</h1>
        <p>Browse all countries and search by name.</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="status-card" role="status" aria-live="polite">
          Loading countries...
        </div>
      )}

      {error && !loading && (
        <div className="status-card status-error" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="view-toggle" role="group" aria-label="Change country view">
            <button
              type="button"
              className={viewMode === 'grid' ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button
              type="button"
              className={viewMode === 'table' ? 'toggle-btn active' : 'toggle-btn'}
              onClick={() => setViewMode('table')}
            >
              Table View
            </button>
          </div>

          <p className="result-text">
            Showing {filteredCountries.length} of {countries.length} countries
          </p>
          <CountryList countries={filteredCountries} viewMode={viewMode} />
        </>
      )}
    </main>
  )
}

export default App
