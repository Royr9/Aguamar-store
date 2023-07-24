import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Store from '../../components/Store';



export default function Men() {
const menProducts = useLoaderData();

  return (
   <Store
    products={menProducts}
   />
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