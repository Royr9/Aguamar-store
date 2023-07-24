import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductCard from './ProductCard';


export default function ProductsGallery(props) {


const {products} = props;
const totalProducts = products.length;


  const [visibleProducts, setVisibleProducts] = useState([]);
  const [numVisibleProducts, setNumVisibleProducts] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);



// screen size responsiveness 

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 660) {
        setNumVisibleProducts(1);
      } else if (screenWidth > 1699) {
        setNumVisibleProducts(4);
      } else if (screenWidth > 1299)  {
        setNumVisibleProducts(3);
      }else{
        setNumVisibleProducts(2);
      }
    }
handleResize();
window.addEventListener("resize",handleResize);
return ()=>{
  window.removeEventListener("resize",handleResize)
}
   
  }, []);


useEffect(()=>{
const upFilterLimit = currentIndex + numVisibleProducts;

  let filteredArray = [];

if (upFilterLimit > totalProducts) {
  filteredArray = products.slice(currentIndex).concat(products.slice(0, upFilterLimit % totalProducts));
}else{
  filteredArray = products.slice(currentIndex, upFilterLimit);
}

  setVisibleProducts(filteredArray);




},[currentIndex, numVisibleProducts, products])

// forward arrow
 function fArrowClick(event) {

  setCurrentIndex((prevValue)=>{
    return (prevValue + 1) % totalProducts;
    })
}

// back arrow

 function dArrowClick(event) {
  setCurrentIndex((prevValue)=>{
    return (prevValue - 1 + totalProducts) % totalProducts;
    })

   }
  
  



  return (
    <div className='product-gallery-comp'>
    <button onClick={dArrowClick} name='back-arrow' className='arrow-btn back'><ArrowBackIosIcon/></button>

    {visibleProducts.map((suit, index)=> {
      return( <ProductCard
        id={suit.id}
        index={index}
        key={suit.id}
        title={suit.title}
        print={suit.print}
        price={suit.price}
      />)
    })}
   <button onClick={fArrowClick} name='forward-arrow' className='arrow-btn forward'><ArrowForwardIosIcon /></button> 
    </div>
  )
}
