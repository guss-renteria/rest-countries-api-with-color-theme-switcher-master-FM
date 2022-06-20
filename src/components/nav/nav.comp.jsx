import { useSelector } from 'react-redux'

import './_nav.style.scss'

import Search from './search.comp'
import Filter from './filter.comp'

const Nav = () => {
  const theme = useSelector(state => state.color_scheme.theme.name)

  return (
    <nav className='nav-comp'>
      <Search theme={ theme } />
      <Filter theme={ theme } />
    </nav>
  )
}

export default Nav
