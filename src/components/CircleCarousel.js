import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function CircleCarousel({ items = [] }){
  return (
    <div style={{display:'flex', gap:20, overflowX:'auto', padding:'12px 0'}}>
      {items.map(item=> (
        <div key={item.id} style={{width:160, textAlign:'center'}}>
          <div style={{width:140, height:140, borderRadius:9999, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', border:'4px solid #1f6feb', margin:'0 auto', overflow:'hidden'}}>
            <ImageWithFallback src={item.image} alt={item.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
          <div style={{marginTop:8, fontSize:13}}>{item.title}</div>
        </div>
      ))}
    </div>
  );
}
