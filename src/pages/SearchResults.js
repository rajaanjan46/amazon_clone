import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import ProductGrid from '../components/ProductGrid';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults(){
  const q = useQuery().get('q') || '';
  const term = q.trim().toLowerCase();
  const items = term ? products.filter(p => p.title.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)) : [];
  return (
    <div>
      <h2>Search results for "{q}"</h2>
      {term === '' ? <div>Type a search and press Enter</div> : <ProductGrid items={items} />}
    </div>
  );
}
