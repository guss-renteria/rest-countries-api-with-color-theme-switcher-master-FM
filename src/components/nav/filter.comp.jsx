import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REGIONS, setCountries, resetList } from '../../reducers/countries.reducer'

import './_filter.style.scss'

const Filter = ({ theme }) => {
  const dispatch = useDispatch()
  const [is_drop, setDrop] = useState(false)
  const filter = useSelector(state => state.countries.listed.filter)
  const [filter_by, setFilter] = useState(filter)

  const handleRegion = (region) =>{
    if(filter_by != region) {
      dispatch(resetList())
      dispatch(setCountries(region))
      setFilter(region)
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
