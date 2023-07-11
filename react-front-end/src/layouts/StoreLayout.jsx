import React, { useState } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
import banner from "/Users/roy/Development/Projects/Aguamar/react-front-end/src/images/banner.jpg";


export default function StoreLayout() {

  const featuredSuits = useLoaderData();
  console.log(featuredSuits);

  const [userLog , setUserLog] = useState(true);

    function logOut() {
      setUserLog(false);
      console.log(userLog);
    }

  if (userLog === false) {
   return <Navigate to="/" replace={true}/>
  }
  return (
    <div className='StoreLayout'> 
    <h1>Store</h1>
   

    <NavLink  to={"men"}> <button className="btn btn-info"> Men</button></NavLink>
    <NavLink  to={"women"}><button className="btn btn-danger"> Women</button></NavLink>
    <button onClick={logOut} className='btn' style={{background: "green"}}>Logout</button>
    

    <nav>

      
    </nav>
   
    <section className='featured'>
    <img src={banner} alt="" />
    <h2> Featured bathing suits </h2>
    </section>

   

    
    <div className='featured-swimsuits'>
    {featuredSuits.map((suit)=> {
      return(<div className='featured-suit' key={suit.id}> 
      <h1>{suit.title}</h1>
      <h2>{suit.print}</h2>
      <p> {suit.price}</p>
      </div>)
      
    })}
      
    

    </div>

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
