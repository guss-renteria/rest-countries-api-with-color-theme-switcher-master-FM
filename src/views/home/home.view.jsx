import { useDispatch, useSelector } from 'react-redux'
import { addPageList } from '../../reducers/countries.reducer.js'

import './_home.style.scss'

import Nav from '../../components/nav/nav.comp.jsx'
import List from '../../components/list/list.comp.jsx'

const Home = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.color_scheme.theme.name)
  const listed = useSelector(state => state.countries.listed.data)

  const addPage = () => {
    dispatch(addPageList())
  }

  return (
    <section className={ `home-view ${ theme }` }>
      <Nav />
      <List items={ listed } addPage={ addPage }/>
    </section>
  )
}

export default Home
