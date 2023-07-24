import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Store from '../components/Store';

export default function MainStore() {
    const products = useLoaderData();

    return(
<Store
  products= {products}
  storeName= "All products"
/>
    )

}


export async function mainStoreLoader() {
  
    const response = await fetch ("http://localhost:4000/products"); 
    
    if (response.ok) {
      
      return response.json();
    } else {
      throw Error("Failed to fetch products.");
    }
    }