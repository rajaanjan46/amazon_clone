import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import ImageWithFallback from '../components/ImageWithFallback';

export default function ProductPage(){
  const { id } = useParams();
  const product = products.find(p=>p.id===id);
  const { dispatch } = useCart();
  if(!product) return <div>Product not found</div>;
  return (
    <div style={{display:'flex', gap:20}}>
      <div style={{flex:'1 1 300px'}}>
        <ImageWithFallback src={product.image} alt={product.title} style={{width:'100%', borderRadius:6}} />
      </div>
      <div style={{flex:'1 1 300px'}}>
        <h2>{product.title}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>Simple product description placeholder.</p>
        <button className="button" onClick={()=>dispatch({type:'add', product, quantity:1})}>Add to cart</button>
      </div>
    </div>
  );
}
