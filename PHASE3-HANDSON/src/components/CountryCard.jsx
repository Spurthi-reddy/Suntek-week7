function CountryCard({ country }) {
  const name = country.name?.common || 'Unknown'
  const capital = country.capital?.[0] || 'N/A'
  const population = country.population?.toLocaleString() || 'N/A'
  const region = country.region || 'N/A'
  const flag = country.flags?.png || country.flags?.svg || ''

  return (
    <article className="country-card">
      <img src={flag} alt={`Flag of ${name}`} className="country-flag" loading="lazy" />
      <div className="country-content">
        <h2>{name}</h2>
        <p>
          <span>Capital:</span> {capital}
        </p>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
      </div>
    </article>
  )
}

export default CountryCard
