import { useSelector } from 'react-redux'

import './_list.style.scss'

import Item from './item.comp'
import { useRef, useEffect } from 'react'

const List = ({ items, addPage }) => {
  const theme = useSelector(state => state.color_scheme.theme.name)
  const list_ref = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const bottom = list_ref.current?.scrollTop + list_ref.current?.clientHeight - window.innerHeight

      if(window.scrollY > bottom) {
        addPage()
      }
    })
  }, [])

  return (
    <div className='list-comp' ref={ list_ref } >
      { items.map( (item, key) => (
        <Item theme={ theme } data={ item } key={ key }/>
      ))}
    </div>
  )
}

export default List
