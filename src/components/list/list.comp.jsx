import { useSelector } from 'react-redux'

import './_list.style.scss'

import Item from './item.comp'

const List = ({ items, addPage }) => {
  const theme = useSelector(state => state.color_scheme.theme.name)

  return (
    <div className='list-comp' >
      { items.map( (item, key) => (
        <Item theme={ theme } data={ item } key={ key }/>
      ))}
    </div>
  )
}

export default List
