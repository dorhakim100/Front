import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Route } from '../../assets/routes/routes'

interface AppHeaderProps {
  routes: Route[];
}

export function AppHeader({ routes }: AppHeaderProps) {

  const navigate = useNavigate()

  const navigateToPage = (route:string)=>{
    navigate(route)

  }
  
  
  return (
    <header className='header'>
      <nav>
        <ul>
          {routes.map((route, index) => (
            <li key={index} onClick={()=>navigateToPage(route.path)}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
         
        </ul>
      </nav>
    </header>
  )
}
