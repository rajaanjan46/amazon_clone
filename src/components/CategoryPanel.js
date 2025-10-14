import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function CategoryPanel({ title }){
  return (
    <div style={{background:'#fff', padding:12, borderRadius:6, minHeight:220}}>
      <h4 style={{fontSize:16}}>{title}</h4>
      <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:8, marginTop:8}}>
        <div style={{display:'grid', gap:8}}>
          <ImageWithFallback src={`https://picsum.photos/seed/${title.replace(/\s+/g,'')}/300/160`} alt="thumb" style={{width:'100%', borderRadius:4}} />
          <ImageWithFallback src={`https://picsum.photos/seed/${title}2/300/160`} alt="thumb" style={{width:'100%', borderRadius:4}} />
        </div>
        <div style={{display:'grid', gap:8}}>
          <ImageWithFallback src={`https://picsum.photos/seed/${title}3/300/160`} alt="thumb" style={{width:'100%', borderRadius:4}} />
          <ImageWithFallback src={`https://picsum.photos/seed/${title}4/300/160`} alt="thumb" style={{width:'100%', borderRadius:4}} />
        </div>
      </div>
      <div style={{marginTop:8}}><a href="#">See all offers</a></div>
    </div>
  );
}
