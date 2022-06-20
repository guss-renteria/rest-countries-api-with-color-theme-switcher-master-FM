import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCountries } from '../../reducers/countries.reducer.js'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountries())
  }, [])

  return (
    <section className='home-view'>
      <h1>home</h1>
    </section>
  )
}

export default Home
