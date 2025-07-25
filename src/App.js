// ./src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { products } from './data/products';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import ProductCard from './components/ProductCard';

// Home Page Component (defined inside App.js for simplicity)
const HomePage = () => (
  <main className="container mx-auto p-4 md:p-8">
    <h1 className="text-3xl font-bold text-brand-off-white mb-6">All Products</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </main>
);

function App() {
  // Get unique categories and REMOVE "All"
  const categories = [
    "Streaming",
    "Game Top Up"
  ];

  return (
    <div className="min-h-screen bg-brand-dark-blue font-sans">
      <Navbar categories={categories} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>

      <footer className="text-center py-4 text-brand-silver">
        Contact: WA +628817529961 | X: @cavaelth
      </footer>
    </div>
  );
}

export default App;