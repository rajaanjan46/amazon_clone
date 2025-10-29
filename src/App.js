import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import ProductList from './components/ProductList';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SearchResults from './pages/SearchResults';

export default function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}
