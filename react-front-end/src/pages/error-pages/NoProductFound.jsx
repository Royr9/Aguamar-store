import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
export default function NoProductFound() {
    const error = useRouteError();
  return (
    <div>
    <h2>Error!</h2>
    <h3>{error.message}</h3>
    <p>please go back to the <Link to={"/store"}>store</Link></p>
    </div>
  )
}
