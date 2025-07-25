// ./src/components/CategoryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ComingSoon from './ComingSoon'; // 1. Import the new component

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase().replace(/ /g, '-') === categoryName
  );

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-brand-off-white mb-6 capitalize">
        {categoryName.replace(/-/g, ' ')}
      </h1>

      {/* 2. Add conditional logic here */}
      {filteredProducts.length > 0 ? (
        // If products exist, show the grid
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // Otherwise, show the Coming Soon message
        <ComingSoon />
      )}
    </main>
  );
};

export default CategoryPage;