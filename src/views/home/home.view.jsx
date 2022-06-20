import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries } from '../../reducers/countries.reducer.js'

import './_home.style.scss'

import Nav from '../../components/nav/nav.comp.jsx'

const Home = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.color_scheme.theme.name)

  useEffect(() => {
    dispatch(setCountries())
  }, [])

  return (
    <section className={ `home-view ${ theme }` }>
      <Nav />
    </section>
  )
}

export default Home
