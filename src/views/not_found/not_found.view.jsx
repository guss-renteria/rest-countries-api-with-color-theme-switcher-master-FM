import { useSelector } from 'react-redux'

import './_not_found.style.scss'

const NotFound = () => {
  const theme = useSelector(state => state.color_scheme.theme.name)

  return (
    <section className={ `not-found-view ${ theme }` }>
      <h1>not found :x</h1>
    </section>
  )
}

export default NotFound
