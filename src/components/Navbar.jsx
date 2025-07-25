// ./src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // 1. Add useNavigate

const Navbar = ({ categories }) => { // 2. Removed props that are no longer passed
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // 3. Initialize the navigate function

    const activeCategory = categories.find(c => location.pathname.includes(c.toLowerCase().replace(' ', '-'))) || 'Categories';

    return (
        <nav className="bg-brand-dark-blue/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
                <div className="text-2xl font-bold text-brand-off-white">
                    <Link to="/">Cavaelth Store</Link>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-brand-silver hover:text-brand-off-white transition-colors">Home</Link>
                    
                    <div className="relative">
                        <button
                            onMouseEnter={() => setIsCategoryOpen(true)}
                            onMouseLeave={() => setIsCategoryOpen(false)}
                            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${isCategoryOpen || activeCategory !== 'Categories' ? 'bg-brand-slate text-brand-off-white' : 'text-brand-silver hover:text-brand-off-white'}`}
                        >
                            <span>{activeCategory}</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>

                        {isCategoryOpen && (
                            <div
                                onMouseEnter={() => setIsCategoryOpen(true)}
                                onMouseLeave={() => setIsCategoryOpen(false)}
                                className="absolute top-full mt-2 w-48 bg-brand-off-white rounded-md shadow-lg z-50"
                            >
                                <div className="absolute -top-2 left-1/2 -ml-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-brand-off-white"></div>
                                <div className="py-1">
                                    {categories.map(category => (
                                        <Link
                                            key={category}
                                            to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                                            onClick={() => setIsCategoryOpen(false)}
                                            className="block px-4 py-2 text-sm text-brand-dark-blue hover:bg-brand-mint"
                                        >
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-off-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                </div>
            </div>
        </div>

        {/* --- CORRECTED MOBILE MENU --- */}
        {isMenuOpen && (
            <div className="md:hidden px-4 pt-2 pb-4 border-t border-brand-slate">
            <select
                value={location.pathname} // Use the current URL path as the value
                onChange={(e) => {
                navigate(e.target.value); // Navigate to the selected path
                setIsMenuOpen(false); // Close the menu
                }}
                className="w-full px-3 py-2 rounded-md bg-brand-slate text-brand-off-white border-2 border-transparent focus:border-brand-red focus:outline-none"
            >
                {/* The option's value is now the full navigation path */}
                {categories.map(category => (
                <option 
                    key={category} 
                    value={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
                >
                    {category}
                </option>
                ))}
            </select>
            </div>
        )}
        </nav>
    );
};

export default Navbar;