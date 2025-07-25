import React, { useState } from 'react';

const Navbar = ({ searchTerm, onSearchChange, categories, selectedCategory, onCategoryChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // We'll use the categories as our main navigation links
    const navLinks = categories.filter(c => c !== 'All'); 

    return (
        <nav className="bg-brand-dark-blue/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
            {/* Logo / Brand Name */}
            <div className="text-2xl font-bold text-brand-off-white">
                CAVAELTH STORE
            </div>

            {/* Desktop Navigation & Search */}
            <div className="hidden md:flex items-center space-x-4">
                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-4">
                <a href="#" className="text-brand-silver hover:text-brand-off-white transition-colors">Home</a>
                {/* You can add more static links here if you want */}
                </div>

                {/* Search and Category Filter */}
                <div className="flex items-center space-x-2">
                <select
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="px-3 py-2 rounded-md bg-brand-slate text-brand-off-white border-2 border-transparent focus:border-brand-red focus:outline-none"
                >
                    {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <div className="flex">
                    <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-48 px-3 py-2 rounded-l-md bg-brand-off-white text-brand-dark-blue placeholder-brand-slate focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-brand-mint text-brand-dark-blue font-semibold rounded-r-md hover:bg-opacity-80 transition-colors">
                    Search
                    </button>
                </div>
                </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-off-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu & Search (Appears below when icon is clicked) */}
        {isMenuOpen && (
            <div className="md:hidden px-4 pt-2 pb-4 border-t border-brand-slate">
            {/* Mobile Search */}
            <div className="flex mb-4">
                <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-3 py-2 rounded-l-md bg-brand-off-white text-brand-dark-blue placeholder-brand-slate focus:outline-none"
                />
                <button className="px-4 py-2 bg-brand-mint text-brand-dark-blue font-semibold rounded-r-md hover:bg-opacity-80">
                Search
                </button>
            </div>
            {/* Mobile Category */}
            <select
                    value={selectedCategory}
                    onChange={(e) => {
                        onCategoryChange(e.target.value);
                        setIsMenuOpen(false); // Close menu on selection
                    }}
                    className="w-full px-3 py-2 rounded-md bg-brand-slate text-brand-off-white border-2 border-transparent focus:border-brand-red focus:outline-none"
                >
                    {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        )}
        </nav>
    );
};

export default Navbar;