import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { REGIONS, setCountries } from '../../reducers/countries.reducer'

import './_filter.style.scss'

const Filter = ({ theme }) => {
  const dispatch = useDispatch()
  const [is_drop, setDrop] = useState(false)
  const [filter_by, setFilter] = useState(undefined)

  const handleRegion = (region) =>{
    if(filter_by != region) {
      setFilter(region)
      dispatch(setCountries(REGIONS[region]))
    }
  } 

  return (
    <div
      className={ `filter-comp ${ theme } ${ is_drop ? 'drop' : '' }` }
      onClick={ () => setDrop(!is_drop)}>

      <p className='selected-region'>
        <span>Filter by Region{ filter_by ? `: ${ filter_by }` : '' }</span>
        <span className='icon-arrow'></span>
      </p>

      <ul className='region-container'>
        <li className='region' onClick={ () => handleRegion() } >All</li>
        { Object.keys(REGIONS).map((region, key) => (
          <li
            className='region' key={ key }
            onClick={ () => handleRegion(region) }
          >{ region }</li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
