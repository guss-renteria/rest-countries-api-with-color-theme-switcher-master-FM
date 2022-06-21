import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useLocation } from 'react-router-dom'

import './_country.style.scss'

const Country = () => {
  const theme = useSelector(state => state.color_scheme.theme.name)
  const [data, setData] = useState({})
  const [borders, setBorders] = useState([])
  const { code } = useParams()
  const location = useLocation()

  useEffect(() => {
    setData({})
    const _get = async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${ code }`)


      const _borders = []
      const _border_codes = response.data[0].borders || []
      for(let _code of _border_codes) {
        const _res = await axios.get(`https://restcountries.com/v3.1/alpha/${ _code }`)
        const _country = _res.data[0].name.common

        _borders.push({
          name: _country,
          code: _code
        })
      }

      setBorders(_borders)
      setData(response.data[0])
    }
    _get()
  }, [location])

  const getNativeName = (obj) => {
    const keys = Object.keys(obj)
    const last = obj[keys[keys.length-1]]

    return last.common
  }

  const formatPopulation = (population) => {
    const format = new Intl.NumberFormat('es-US')
    return format.format(population)
  }

  return (
    <section className={ `country-view ${ theme }` }>
      <Link to={-1} className='back'>
        <span className='icon-back'></span>
        <span>Back</span>
      </Link>
      { Object.keys(data).length !== 0 && (
        <div className='container'>
          <img src={ data.flags.png } alt={ data.name.common }/>

          <div className='data-container'>
            <h1>{ data.name.common }</h1>

            <div className='data-box'>
              <div className='data-box__part'>
                <p>
                  <span><b>Native Name: </b></span>
                  <span>{ getNativeName(data.name.nativeName) }</span>
                </p>
                <p>
                  <span><b>Population: </b></span>
                  <span>{ formatPopulation(data.population) }</span>
                </p>
                <p>
                  <span><b>Region: </b></span>
                  <span>{ data.region }</span>
                </p>
                <p>
                  <span><b>Sub Region: </b></span>
                  <span>{ data.subregion }</span>
                </p>
                <p>
                  <span><b>Capital: </b></span>
                  <span>{ data.capital }</span>
                </p>
              </div>
              <div className='data-box__part'>
                <p>
                  <span><b>Top Level Domain: </b></span>
                  <span>{ data.tld }</span>
                </p>
                <p>
                  <span><b>Currencies: </b></span>
                  <span>{ Object.values(data.currencies || {}).map(curr => curr.name).join(', ') }</span>
                </p>
                <p>
                  <span><b>Languages: </b></span>
                  <span>{ Object.values(data.languages || {}).map(lang => lang).join(', ') }</span>
                </p>
              </div>
            </div>

            <div className='border-countries'>
              <h2>Border Coutries:</h2>
              {
                borders.map((country, key) => (
                  <Link to={ `/country/${ country.code }` } key={ key }>{ country.name }</Link>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Country
