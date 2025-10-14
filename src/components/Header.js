import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header(){
  const { state } = useCart();
  const qty = state.items.reduce((s,i)=>s+i.quantity,0);
  return (
    <header className="header">
      <div style={{background:'#131921', padding:'8px 0'}}>
        <div className="container nav-inner" style={{alignItems:'center'}}>
          <Link to="/" style={{color:'white', fontSize:22, fontWeight:700}}>amazon</Link>
          <div style={{flex:1, padding:'0 12px'}}>
            <div style={{display:'flex'}}>
              <select style={{border:'none', padding:'8px', borderTopLeftRadius:4, borderBottomLeftRadius:4}}>
                <option>All</option>
              </select>
              <input placeholder="Search Amazon.in" style={{flex:1, padding:'8px 12px', border:'none'}} />
              <button style={{background:'#febd69', border:'none', padding:'8px 12px', borderTopRightRadius:4, borderBottomRightRadius:4}}>Search</button>
            </div>
          </div>
          <div style={{display:'flex', gap:18, alignItems:'center'}}>
            <div style={{color:'white', textAlign:'right'}}>
              <div style={{fontSize:12}}>Hello, sign in</div>
              <div style={{fontWeight:700}}>Account & Lists</div>
            </div>
            <div style={{color:'white', textAlign:'right'}}>
              <div style={{fontSize:12}}>Returns</div>
              <div style={{fontWeight:700}}>& Orders</div>
            </div>
            <div>
              <Link to="/cart" style={{color:'white'}}>Cart ({qty})</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
