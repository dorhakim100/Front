
import { Routes, Route } from 'react-router'

import {routes} from './assets/routes/routes'

import { AppHeader } from './components/AppHeader/AppHeader'
import { AppFooter } from './components/AppFooter/AppFooter.tsx'



import './App.css'

function App() {


  return (
    <>
    <AppHeader routes={routes} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      <AppFooter />
    </>
  )
}

export default App
