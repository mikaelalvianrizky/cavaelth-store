// ./src/components/ProductCard.jsx

import React from 'react';
import { formatCurrency } from '../data/products';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-brand-slate text-brand-off-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <h2 className="text-3xl font-bold text-center py-4 bg-brand-dark-blue">
            {product.name}
        </h2>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            {product.plans.map((plan) => (
            <div key={plan.type} className="bg-brand-off-white text-brand-dark-blue rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center border-b-2 border-brand-red pb-2">
                {plan.type}
                </h3>
                <ul className="space-y-2">
                {plan.prices.map((item) => (
                    <li key={item.duration} className="flex justify-between items-center text-sm">
                    <span>{item.duration}</span>
                    <span className="font-semibold bg-brand-mint text-brand-dark-blue px-2 py-1 rounded">
                        {formatCurrency(item.price)}
                    </span>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ProductCard;