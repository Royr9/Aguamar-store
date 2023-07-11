import React, { useState } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


export default function StoreLayout() {

  const featuredSuits = useLoaderData();
  console.log(featuredSuits);

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
   
    <section id='featured-swimsuits-section'>
    <div className='featured-title'>
    <h1> Featured bathing suits </h1>
    </div>
    
    
    {featuredSuits.map((suit)=> {
      return( <ProductCard
        key={suit.title}
        title={suit.title}
        print={suit.print}
        price={suit.price}
      />)
      
    })}

    </section>
    

    <NavLink  to={"men"}> <button className="btn btn-info"> Men</button></NavLink>
    <NavLink  to={"women"}><button className="btn btn-danger"> Women</button></NavLink>

    

   
 

   

    
    

    <main>
        <Outlet/>
    </main>


    </div>

  )
}


export async function featuredProductsLoader() {
  
const mResponse = await fetch("http://localhost:4000/menProducts/jammer-lazer");

const wResponse = await fetch("http://localhost:4000/womenProducts/sol-superhero");

const menSuit = await mResponse.json();

const womenSuit = await wResponse.json();

const featuredProducts = [menSuit, womenSuit];

console.log(featuredProducts);

return featuredProducts;


}
