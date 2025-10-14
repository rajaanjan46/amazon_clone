import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function HeroBanner(){
  return (
    <div style={{background:'#131921', color:'white', padding:'18px 0'}}>
      <div className="container" style={{display:'flex', alignItems:'center', gap:16}}>
        <div style={{flex:'0 0 200px'}}>
          <ImageWithFallback src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" style={{height:40}} fallback="https://via.placeholder.com/150x40?text=logo" />
        </div>
        <div style={{flex:1}}>
          <div style={{background:'linear-gradient(90deg,#232f3e,#eef3fb)', height:200, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', color:'#222'}}> 
            <h2 style={{color:'#111'}}>Discover great deals — shop bestselling items</h2>
          </div>
        </div>
        <div style={{flex:'0 0 220px', textAlign:'right'}}>
          <div style={{background:'#fff', color:'#111', padding:12, borderRadius:6}}>Delivering to India</div>
        </div>
      </div>
    </div>
  );
}
