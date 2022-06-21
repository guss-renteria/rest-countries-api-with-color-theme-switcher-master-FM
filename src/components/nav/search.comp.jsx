import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './_search.style.scss'

const Search = ({ theme }) => {
  const countries = useSelector(state => state.countries.all)
  const [search_results, setResults] = useState([])

  const searchResult = (e) => {
    const word = e.target.value.trim().toLowerCase()

    if(word.length > 0) {
      const _res = countries.filter( country => {
        const name = country.name.common.toLowerCase()
        return name.startsWith(word)
      })
      setResults(_res)
      return
    }
    setResults([])
  }

  return (
    <div className={ `search-comp ${ theme }` }>
      <div className='icon-search'></div>
      <input type='text' placeholder='Search for a country...' className='in-search' onInput={ searchResult }/>
      <div className='search-result'>
        { search_results.map( (result, key) => (
            <Link to={ `/country/${ result.cca3 }` } key={ key }>{ result.name.common }</Link>
        ))}
      </div>
    </div>
  )
}

export default Search
