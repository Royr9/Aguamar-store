import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function BreadCrumbs() {
    const location = useLocation();

    let currentLink = ""
    
    const crumbs = location.pathname.split("/").filter(path => path !== "")
    .map(crumb =>{
        currentLink += `/${crumb}`;

        return (
        <div key={crumb} style={{display: "inline-block"}}>
         {">"} <NavLink className="crumb" to={currentLink}>{crumb}</NavLink>
        </div>
        )
    })
    
 

  return (
    <div>
    {crumbs}
    </div>
  )
}
