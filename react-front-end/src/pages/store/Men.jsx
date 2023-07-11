import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Men() {
const menProducts = useLoaderData();

  return (
    <div className='men'>
    <h1> Men </h1>
    <div className='men-products'></div>
    {menProducts.map(product => (
      <div className='men-product' key={product.id}>
         <Link to={`/store/${product.id}`}><h3> {product.title}</h3></Link> 
          <h4> {product.print} </h4>
          <p>{product.price}</p>
            </div>
    ))}
    </div>
  )
}

export async function menProductsLoader() {
  
const response = await fetch ("http://localhost:4000/menProducts"); 

if (response.ok) {
  return response.json();
} else {
  throw Error("Failed to fetch men products.");
}
}