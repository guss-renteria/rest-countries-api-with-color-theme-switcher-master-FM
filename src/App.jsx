import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loading from './views/loading/loading.view'
import NotFound from './views/not_found/not_found.view'

const HomeView = lazy(() => import('./views/home/home.view'))

function App() {
  return (
   <Router>
      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <HomeView /> }/>
          <Route path='*' element={ <NotFound /> }/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
