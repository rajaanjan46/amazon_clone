import React from 'react';
import { useCart } from '../context/CartContext';
import ImageWithFallback from '../components/ImageWithFallback';

export default function CartPage(){
  const { state, dispatch } = useCart();
  const total = state.items.reduce((s,i)=>s + i.quantity * i.product.price, 0);
  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-list">
        {state.items.length===0 && <div>Cart is empty</div>}
        {state.items.map(item=> (
          <div key={item.product.id} style={{display:'flex',alignItems:'center',gap:12, padding:'8px 0', borderBottom:'1px solid #eee'}}>
            <ImageWithFallback src={item.product.image} alt="" style={{width:80,height:60,objectFit:'cover'}} />
            <div style={{flex:1}}>
              <div>{item.product.title}</div>
              <div>${(item.product.price * item.quantity).toFixed(2)}</div>
            </div>
            <div>
              <button onClick={()=>dispatch({type:'dec', id:item.product.id})}>-</button>
              <span style={{padding:'0 8px'}}>{item.quantity}</span>
              <button onClick={()=>dispatch({type:'inc', id:item.product.id})}>+</button>
            </div>
            <div>
              <button onClick={()=>dispatch({type:'remove', id:item.product.id})}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:12}}>Total: <strong>${total.toFixed(2)}</strong></div>
    </div>
  );
}
