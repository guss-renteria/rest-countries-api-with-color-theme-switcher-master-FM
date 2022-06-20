import { useDispatch, useSelector} from 'react-redux'
import { toggleTheme } from '../../reducers/color_scheme.reducer'

import './_header.style.scss'

const Header = ({ children }) => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.color_scheme.theme.name)

  return (
    <>
    <header className={ `header-comp ${ theme }` }>
      <h1>Where in the world?</h1>
      <button onClick={ () => dispatch(toggleTheme()) }>
        <span
          className={ theme == 'DARK' ? 'icon-moon-fill' : 'icon-moon-stroke' }
        ></span>
        <span>Dark Mode</span>
      </button>
    </header>

    { children }
    </>
  )
}

export default Header
