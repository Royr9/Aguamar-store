import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
    <h2>Page not found! </h2>
    <p>
        The page you are trying to reach does not exist
    </p>
    <p>go to <NavLink to="/">Home page </NavLink> </p>
    </div>
  )
}
