import React, { useState } from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


export default function StoreLayout() {


  // const [userLog , setUserLog] = useState(true);

  //   function logOut() {
  //     setUserLog(false);
  //     console.log(userLog);
  //   }

  // if (userLog === false) {
  //  return <Navigate to="/" replace={true}/>
  // }
  return (
    <div className='StoreLayout'> 
    <section id='store-title-section'>
    <h1 className='store-title-content'>Store</h1>
    <div className='store-title-img'></div>
    </section>
   
   
    
    <main>
        { <Outlet/> }
      
    </main>


    </div>

  )
}


