import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard(props) {
  return (
    <Link  className={`product-card ${props.id}`} to={`/store/${props.id}`}>
   <div>
    <img src={require ("../images/" + props.id + ".jpg")} alt="" />
    <h5>{props.title}</h5>
    <h6>{props.print}</h6>
    <p>₪ {props.price}.00</p>
  
    </div>
    </Link>
  
  )
}
