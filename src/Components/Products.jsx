/* eslint-disable react/prop-types */
import React from 'react'
import Product from './Product'
import '../CcomponentCSS/products.css';


export default function Products(props) {
  let pro=props.product
        const maped=pro.map((item,id)=>(<Product key={item.id} data={item} />
        ));
  
    return (
    <div className="products_container">
    {maped}
    </div>
  )
}
