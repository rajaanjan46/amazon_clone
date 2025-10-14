import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product }){
  const { dispatch } = useCart();
  const add = ()=> dispatch({ type: 'add', product, quantity: 1 });
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <ImageWithFallback src={product.image} alt={product.title} />
      </Link>
      <h4>{product.title}</h4>
      <div className="price">${product.price.toFixed(2)}</div>
      <div style={{marginTop:8}}>
        <button className="button" onClick={add}>Add to cart</button>
        <Link to={`/product/${product.id}`} style={{marginLeft:8}}>View</Link>
      </div>
    </div>
  );
}
