import { useEffect, useRef } from 'react'

function SearchBar({ onSearch }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleChange = (event) => {
    onSearch(event.target.value)
  }

  return (
    <section className="search-section">
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search by country name..."
        onChange={handleChange}
        aria-label="Search country by name"
      />
    </section>
  )
}

export default SearchBar
