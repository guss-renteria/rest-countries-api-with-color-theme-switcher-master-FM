import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/header.comp.jsx'
import Loading from './views/loading/loading.view'
import NotFound from './views/not_found/not_found.view'

const HomeView = lazy(() => import('./views/home/home.view'))

function App() {
  return (
   <Router>
      <Header>
        <Suspense fallback={ <Loading /> }>
          <Routes>
            <Route path='/' element={ <HomeView /> }/>
            <Route path='*' element={ <NotFound /> }/>
          </Routes>
        </Suspense>
      </Header>
    </Router>
  )
}

export default App
