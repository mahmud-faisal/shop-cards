/* eslint-disable react/prop-types */
import React from 'react';
import '../CcomponentCSS/product.css';

export default function Product(props) {
    const {image,category,title,price,description,rating}=props.data;
    const {rate,count} = rating;
  return (
      <article className="product">
      <img src={image} alt={category} />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to Cart</button>
      </div>
    </article>
  );
};


