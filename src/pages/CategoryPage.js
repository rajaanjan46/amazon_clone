import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage(){
  const { slug } = useParams();
  // Filter by product.category; slug 'all' shows all products
  const items = slug === 'all' ? products : products.filter(p => p.category === slug);
  return (
    <div>
      <h2 style={{textTransform:'capitalize'}}>{slug.replace(/-/g,' ')}</h2>
      <div className="products">
        {items.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
