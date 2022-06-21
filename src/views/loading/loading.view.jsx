import { useSelector } from 'react-redux'

import './_loading.style.scss'

const Loading = () => {
  const theme = useSelector(state => state.color_scheme.theme.name)

  return (
    <section className={ `loading-view ${ theme }` }>
      <h1>loading...</h1>
    </section>
  )
}

export default Loading
