import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Store from '../../components/Store';

export default function Women() {
  const womenProducts = useLoaderData();


  return (
   <Store 
    products={womenProducts}
   />
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