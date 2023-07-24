import React from 'react'
import { NavLink,Link, Outlet , Form } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function RootLayout() {
  

  return (
    <div >
        <header>
        <nav className='navbar navbar-expand-lg '>
        <NavLink className="navbar-brand shown-navs" to={'/'}> Aguamar  </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <button className="navbar-toggler-icon"></button>
        </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
         <NavLink className="nav-link shown-navs" to={'/'}>About</NavLink>
         </li>
         <li className="nav-item dropdown">
         <NavLink  className="nav-link dropdown-toggle shown-navs" to={'/store'} role="button" data-bs-toggle="dropdown" aria-expanded="false"> Shop</NavLink>
         
         <ul className="dropdown-menu">
         <li><Link className="dropdown-item" to={'/store'}>Store</Link></li>

            <li><NavLink className="dropdown-item" to={'/store?filter=Men'}>Men</NavLink></li>
            <li><NavLink className="dropdown-item"  to={'/store?filter=Women'}>Women</NavLink> </li>
          </ul>
         </li>
        

         </ul>
        </div>
         <Form className="d-flex search" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </Form>
        </nav>
        
        </header>
        
        <div className='root-layout  page-container '>
        <main>
        <BreadCrumbs/>
            <Outlet />
        </main>
        </div>
        


        <footer >
        <div className='container' >
     
        <div className='row'>
          <div className='col-12  col-lg-4 policies '>
              <Link className='psuedo' > Shipping </Link>
              <Link > Returns And Exchanges </Link>
              <Link > Store Policy </Link>
              <Link > Privacy </Link>
          </div>
           <div className='col-12 col-lg-4 contact-form' >
                <Form>
                  <h1>Contact Us! </h1>

                  <input type="text" name='name' placeholder='Full name'/><br/>
                  <input type="email" name='email' placeholder='Email' /> <br/>
                  <textarea className='input' type="text" name='messageInput' maxLength="50" placeholder='Write your message...'/>
                  <button type='submit' className='btn btn-primary'>Send</button>
                </Form>
          </div>

          <div className='col-12 col-lg-4 social-media' >
          
              <h2>Follow us on social media! </h2>
              <Link to="https://www.facebook.com/profile.php?id=100091984905113" target='_blank'><FacebookIcon className='social-icon'/></Link>
              <Link to="https://www.instagram.com/aguamar_il/" target="_blank"><InstagramIcon  className='social-icon'/></Link>


            </div>    

       
        </div>
        <hr style={{color:"black"}}/>
        <p style={{textAlign: "center"}} className='copyright'>Copyright © 2023 Aguamar. All rights reserved.</p>
        </div>
        </footer>
    </div>
  )
}
