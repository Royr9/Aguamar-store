import React from 'react'
import { useLoaderData, useParams, Form, redirect, useActionData } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Db from '../../Db';

export default function ProductPage() {
    const { id } = useParams();
  
    const dataBase = Db();
   const product = dataBase.products.find(product => product.id === id);
    // const product = useLoaderData();
    const sizeError = useActionData();
   
  return (
    <div className='product-page'>
    <section className='product-details'>
    <div className='product-details-image'>
    <img src={require ("/src/images/" + id + ".jpg")} alt="" />

    </div>
  

   
    

    <Form className='product-details-form' method='post' action={`/store/${id}`}>
    <h2 style={{fontSize: "3vw"}}>{product.title} - {product.print}</h2>
  
    <label htmlFor="size">Sizes available &nbsp;</label> 
    <select name="sizes" size="1" required={true} id="size">
    <option value="select-size">Select size </option>
    <option value="small">S</option>
    <option value="medium">M</option>
    <option value="Large">L</option>
    <option value="Extra-large">XL</option>
    </select>

    <label htmlFor="">Quantity</label> <input name='quantity' required={true} min="1" defaultValue="1"  type="number"  />
    <p>₪ {product.price}.00</p>
    <button className='buy-now btn' type='submit'><span><ShoppingCartOutlinedIcon fontSize="small" className="cart-icon"/> </span> Add to cart </button>
    <button className="buy-now btn btn-lg" type='submit'>Buy Now</button>
    {sizeError && sizeError.error && <p className='size-error'>{sizeError.error}</p>}
    </Form>
    
   
  
    </section>
 
    

    </div>
  )
}

//loader function 


export async function productPageLoader({params}) {
    // const {id} = params;

     

    // const res = await fetch("http://localhost:4000/Products/" + id)

    // if (res.ok) {
    //     return res.json();
    // }else {
    //         throw  Error("Could not find this product");
    //     }
    return null
    }



///action function

export async function buyFormAction({request}) {
    console.log(request);

    const data = await request.formData();
       
    const submission = {
        size: data.get("sizes"),
        quantity : data.get("quantity")
    }



    ///send post request to save data to database

    if (submission.size === "select-size") {
        return {error: "Please select a size"}
    }
    
      console.log(submission);
   
    ///redirect user 
    alert("added to cart")
  return redirect("/store");
}