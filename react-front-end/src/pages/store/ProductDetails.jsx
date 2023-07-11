import React from 'react'
import { useLoaderData, useParams, Form, redirect, useActionData } from 'react-router-dom';


export default function ProductDetails() {
    const { id } = useParams();
    const product = useLoaderData();
    const sizeError = useActionData();
   
  return (
    <div className='product-details-page'>
   <h1> ProductDetails</h1> 
   <p>{id}</p>
   <div className='product-details'>
    <h3>{product.title}</h3>
    <h4>{product.print}</h4>
    <p>{product.price}</p>
   </div>
    <Form method='post' action={`/store/${id}`}>
    <label htmlFor="size">Sizes available</label> 
     <select name="sizes" size="1" required={true} id="size">
     <option value="select-size">Select size</option>
    <option value="small">S</option>
    <option value="medium">M</option>
    <option value="Large">L</option>
    <option value="Extra-large">XL</option>
    </select>
    <label htmlFor="">Quantity</label> <input name='quantity' required={true} min="1" defaultValue="1"  type="number"  />
    <button type='submit'>Add to cart</button>
    <button type='submit'>Buy now</button>

    </Form>
    {sizeError && sizeError.error && <p className='size-error'>{sizeError.error}</p>}

    </div>
  )
}

//loader function 


export async function productDetailsLoader({params}) {
    const {id} = params;


    const womenRes = await fetch("http://localhost:4000/womenProducts/" + id)

    if (womenRes.ok) {
        return womenRes.json();
    }else {
        const menRes = await fetch ("http://localhost:4000/menProducts/" + id)
        if (menRes.ok) {
            return menRes.json()
        } else{
            throw  Error("Could not find this product");
        }
    }
}


///action function

export async function buyFormAction({request}) {
    console.log(request);

    const data = await request.formData();
       
    const submission = {
        size: data.get("sizes"),
        quantity : data.get("quantity")
    }

    console.log(submission);

    ///send post request to save data to database

    if (submission.size === "select-size") {
        return {error: "Please select a size"}
    }
    ///redirect user 
    alert("added to cart")
  return redirect("/store");
}