import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Women() {
  const womenProducts = useLoaderData();

  return (
    <div className='women-store'>
        <h1>Women</h1>

        <div className='women-products'>
        {womenProducts.map(product => (
          <div key={product.id}>
          <h3> <Link to={"/store/" + product.id}> {product.title}</Link></h3>
          <h4> {product.print} </h4>
          <p>{product.price}</p>
          
            </div>
        ))}  
        
       </div>
    </div>
  )
}



//loader function 

export async function womenProductsLoader() {
  const response = await fetch("http://localhost:4000/womenProducts");

  if (response.ok) {
    return response.json();
  } else {
    throw  Error("Failed to fetch women products.");
  }
  
}