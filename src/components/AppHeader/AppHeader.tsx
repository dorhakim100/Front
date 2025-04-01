import React from 'react'

import { Link } from 'react-router-dom'

import { Route } from '../../assets/routes/routes'

interface AppHeaderProps {
  routes: Route[];
}

export function AppHeader({ routes }: AppHeaderProps) {
  console.log(routes);
  
  return (
    <header className='header'>
      <nav>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
         
        </ul>
      </nav>
    </header>
  )
}
