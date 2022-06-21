import { Link } from 'react-router-dom'

import './_item.style.scss'

const Item = ({ theme, data}) => {
  const formatPopulation = (population) => {
    const format = new Intl.NumberFormat('es-US')
    return format.format(population)
  }

  return (
    <Link to={ `country/${ data.cca3 }` } className={ `item-comp ${ theme }` }>
      <img src={ data.flags.png } alt={ data.name.common } className='flag'/>
      <div className='data'>
        <h2>{ data.name.common }</h2>
        <p>
          <b>Population:</b>
          &nbsp;
          <span>{ formatPopulation(data.population) }</span>
        </p>
        <p>
          <b>Region:</b>
          &nbsp;
          <span>{ data.region }</span>
        </p>
        <p>
          <b>Capital:</b>
          &nbsp;
          <span>{ data.capital }</span>
        </p>
      </div>
    </Link>
  )
}

export default Item
