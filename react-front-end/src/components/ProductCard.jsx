import React from 'react'


export default function ProductCard(props) {
  return (
    <div className='product-card'>
    <img src={require ("../images/" + props.title + ".jpg")} alt="" />
    <h5>{props.title}</h5>
    <h6>{props.print}</h6>
    <p>₪ {props.price}.00</p>
    </div>
  )
}
