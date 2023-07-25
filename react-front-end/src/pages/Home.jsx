
import React, { useState } from 'react';
import {Link, NavLink, Navigate, Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import ProductsGallery from '../components/ProductsGallery';
import Db from '../Db';



function Home() {
    const dataBase = Db();
    const featuredSuits = dataBase.featuredProducts;
 
    
   
    return(
     <div className="home-page">
     <section className="title-section-grid">
    <div className="title-content">
    <div className="content">
    <h1> השילוב המושלם בין נוחות,סטייל ואיכות</h1>
    <h3> בגדי ים לשחייה, לאימונים ולתחרויות באיכות גבוהה</h3>
    </div>
    </div>
    <div className="shop-now-btn"> <Link to="/store"><button className="btn"> Shop Now </button></Link> </div>
   
    <div className="title-img" alt="title-img"></div>
     </section>


    <section id="men-women-section">
   
    <div className="men-women-section">
    <div className='men'>
    <NavLink  to={"/store?filter=Men"}> <button className="btn"> Men</button></NavLink>
    </div>
    <div className='women'>
    <NavLink  to={"/store?filter=Women"}><button className="btn"> Women</button></NavLink>
    </div>
    </div>
    </section>


    <section id='Featured-swimsuits-section'>
    <h1 className='section-title'> Featured Swimsuits</h1>
    <ProductsGallery products= {featuredSuits} />
    </section>


    </div>
    )
}

export default Home;





export async function featuredProductsLoader() {
  
    // const response = await fetch("http://localhost:4000/featuredProducts");
    
    // // const wResponse = await fetch("http://localhost:4000/womenProducts/sol-superhero");
    
    // // const menSuit = await mResponse.json();
    
    // // const womenSuit = await wResponse.json();
    
    // // const featuredProducts = [menSuit, womenSuit];
    
    // if (response.ok) {
    //   return response.json();
    // }
    return null
    }
    