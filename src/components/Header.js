import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header(){
  const { state } = useCart();
  const qty = state.items.reduce((s,i)=>s+i.quantity,0);
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  function submitSearch(e){
    e.preventDefault();
    if(!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="header">
      <div style={{background:'#131921', padding:'8px 0'}}>
        <div className="container nav-inner" style={{alignItems:'center'}}>
          <Link to="/" style={{color:'white', fontSize:22, fontWeight:700}}>amazon</Link>
          <div style={{flex:1, padding:'0 12px'}}>
            <form onSubmit={submitSearch} style={{display:'flex'}} role="search">
              <select style={{border:'none', padding:'8px', borderTopLeftRadius:4, borderBottomLeftRadius:4}}>
                <option>All</option>
              </select>
              <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search Amazon.in" style={{flex:1, padding:'8px 12px', border:'none'}} />
              <button type="submit" style={{background:'#febd69', border:'none', padding:'8px 12px', borderTopRightRadius:4, borderBottomRightRadius:4}}>Search</button>
            </form>
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
