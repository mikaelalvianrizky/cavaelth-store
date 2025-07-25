// ./src/App.js

import React, { useState, useMemo } from 'react';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-brand-dark-blue font-sans">
      <Navbar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="container mx-auto p-4 md:p-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-brand-silver text-xl mt-10">
            No products found matching your search.
          </p>
        )}
      </main>
      
      <footer className="text-center py-4 text-brand-silver">
        Contact: WA +628817529961 | X: @cavaelth
      </footer>
    </div>
  );
}

export default App;