import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCountries } from '../../reducers/countries.reducer.js'

import './_home.style.scss'

import Nav from '../../components/nav/nav.comp.jsx'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountries())
  }, [])

  return (
    <section className='home-view'>
      <Nav />
    </section>
  )
}

export default Home
