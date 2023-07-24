import React, { useEffect, useState, useRef } from 'react';
import { Link, redirect , useLocation} from 'react-router-dom';
import ProductCard from './ProductCard';


export default function Store(props) {
  const products = props.products;

  const [isFilterOpen, setIsFilterOpen] = useState({
    Gender: false,
    Model: false,
    Print: false,
  });

  const [visibleProducts, setVisibleProducts] = useState(products);
  const [checkedFilters, setCheckedFilters] = useState([]);

  const location = useLocation();
  


// expand filter
  function expandFilter(event) {
    const { name } = event.target;
    setIsFilterOpen((prevValue) => ({
      ...prevValue,
      [name]: !prevValue[name],
    }));
  }

  // add to checked filter state
  function filter(event) {
    
    const { name, checked } = event.target;
    if (checked) {
      setCheckedFilters((prevFilters) => [...prevFilters, name]);
    } else {
      setCheckedFilters((prevFilters) => prevFilters.filter((filter) => filter !== name));
    }
  }


  // filter products 
  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = products;

      if (checkedFilters.includes('Men') || checkedFilters.includes('Women')) {
        filteredProducts = filteredProducts.filter((product) => checkedFilters.includes(product.gender));
      }

      if (checkedFilters.includes('So') || checkedFilters.includes('Sol')) {
        filteredProducts = filteredProducts.filter((product) => checkedFilters.includes(product.title));
      }

      if (
        checkedFilters.includes('Aloha') ||
        checkedFilters.includes('Laser') ||
        checkedFilters.includes('Superhero') ||
        checkedFilters.includes('Phoenix')
      ) {
        filteredProducts = filteredProducts.filter((product) => checkedFilters.includes(product.print));
      }

      setVisibleProducts(filteredProducts);
    };

    filterProducts();

  }, [checkedFilters, products, ]);

  const checkboxRef = {
    Men: useRef(null),
    Women : useRef(null)
  } 

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');

    if (filterParam && filterParam.includes('Men')) {
      setCheckedFilters((prevFilters) => [ 'Men']);
      setIsFilterOpen((prevValue) => ({
        ...prevValue,
        Gender: true
      }));
  
      setTimeout(() => {
        if (checkboxRef.Men.current) {
          checkboxRef.Men.current.checked = true;
          checkboxRef.Women.current.checked = false;
        }
      }, 0);
    }
    else if (filterParam && filterParam.includes('Women')) {
      setCheckedFilters((prevFilters) => [ 'Women']);
      setIsFilterOpen((prevValue) => ({
        ...prevValue,
        Gender: true
      }));
  
      setTimeout(() => {
        if (checkboxRef.Women.current) {
          checkboxRef.Women.current.checked = true;
          checkboxRef.Men.current.checked = false;
        }
      }, 0);
    }
  }, [location.search]);





  return (
    <div id='store-page'>
      <h1 className='section-title'>
        <Link onClick={() => redirect('/store')}>{props.storeName}</Link>
      </h1>
      <div className="store-page-grid">
        <menu className="sort-bar">
          <h4 >Filter by</h4>
          <hr />
          <li>
            Gender <button className='plus' name="Gender" onClick={expandFilter}>
              {isFilterOpen.Gender ? "-" : "+"}
            </button>
          </li>

          {isFilterOpen.Gender && (
            <ul>
              <li><input name='Men' ref={checkboxRef.Men}  onChange={filter} type="checkbox" /><label htmlFor=""> Men</label></li>
              <li><input name='Women' ref={checkboxRef.Women} onChange={filter} type="checkbox" /><label htmlFor=""> Women</label></li>
            </ul>
          )}
          <hr />
          <li>
            Model <button name="Model" onClick={expandFilter}>
              {isFilterOpen.Model ? "-" : "+"}
            </button>
          </li>
          {isFilterOpen.Model && (
            <ul>
              <li><input name='So' onChange={filter} type="checkbox" /><label htmlFor=""> So</label></li>
              <li><input name='Sol' onChange={filter} type="checkbox" /><label htmlFor=""> Sol</label></li>
            </ul>
          )}
          <hr />
          <li>
            Print <button name="Print" onClick={expandFilter}>
              {isFilterOpen.Print ? "-" : "+"}
            </button>
          </li>
          {isFilterOpen.Print && (
            <ul>
              <li><input name='Aloha' onChange={filter} type="checkbox" /><label htmlFor=""> Aloha</label></li>
              <li><input name='Laser' onChange={filter} type="checkbox" /><label htmlFor=""> Laser</label></li>
              <li><input name='Superhero' onChange={filter} type="checkbox" /><label htmlFor=""> Superhero</label></li>
              <li><input name='Phoenix' onChange={filter} type="checkbox" /><label htmlFor=""> Phoenix</label></li>
            </ul>
          )}
        </menu>
        {visibleProducts.map((product) => (
          <div className="store-product" key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              print={product.print}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
