import CountryCard from './CountryCard'

function CountryList({ countries, viewMode }) {
  if (!countries.length) {
    return <p className="status-card">No countries found for this search.</p>
  }

  if (viewMode === 'table') {
    return (
      <div className="table-wrapper">
        <table className="country-table">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.name?.common}>
                <td>
                  <img
                    src={country.flags?.png || country.flags?.svg || ''}
                    alt={`Flag of ${country.name?.common || 'Unknown'}`}
                    className="table-flag"
                    loading="lazy"
                  />
                </td>
                <td>{country.name?.common || 'Unknown'}</td>
                <td>{country.capital?.[0] || 'N/A'}</td>
                <td>{country.population?.toLocaleString() || 'N/A'}</td>
                <td>{country.region || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <section className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.name?.common} country={country} />
      ))}
    </section>
  )
}

export default CountryList
