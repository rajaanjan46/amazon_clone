import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ items = [] }){
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:12}}>
      {items.map(i=> <ProductCard key={i.id} product={i} />)}
    </div>
  );
}
