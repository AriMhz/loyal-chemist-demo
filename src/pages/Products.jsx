import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Scissors, Syringe, Activity, Armchair, Package, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'All', label: 'All Catalogue', icon: Package },
        { id: 'Surgical', label: 'Surgical Equip', icon: Scissors },
        { id: 'Disposables', label: 'Disposables', icon: Syringe },
        { id: 'Diagnostics', label: 'Diagnostics', icon: Activity },
        { id: 'Furniture', label: 'Hospital Furniture', icon: Armchair },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 relative">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                            Global <span className="text-cyan-600">Inventory</span>
                        </h1>
                        <p className="text-slate-500 text-lg max-w-xl">
                            Premium medical supplies for elite healthcare institutions.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96 group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search catalogue..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Desktop Sidebar Filters */}
                    <div className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-28 space-y-2">
                            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-widest px-4 mb-4">Categories</h3>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${activeCategory === cat.id
                                        ? 'bg-cyan-50 border-l-2 border-cyan-500 text-cyan-700'
                                        : 'text-slate-600 hover:bg-slate-50 border-l-2 border-transparent hover:text-slate-900'
                                        }`}
                                >
                                    <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-cyan-600' : 'text-slate-400 group-hover:text-cyan-500'}`} />
                                    <span className="font-medium">{cat.label}</span>
                                    {activeCategory === cat.id && (
                                        <motion.div layoutId="activeDot" className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-sm" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Filter Toggle & Chips */}
                    <div className="lg:hidden mb-6">
                        <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${activeCategory === cat.id
                                        ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                                        : 'bg-white border-slate-200 text-slate-600 shadow-sm'
                                        }`}
                                >
                                    <cat.icon size={16} />
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-slate-500 text-sm">
                                Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> results
                            </div>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                            >
                                <AnimatePresence mode="popLayout">
                                    {filteredProducts.map((product) => (
                                        <motion.div
                                            layout
                                            key={product.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ProductCard product={product} darkMode={false} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50/50 rounded-3xl border border-slate-200 border-dashed">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-slate-300 shadow-sm border border-slate-100">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                                <p className="text-slate-500 max-w-sm">
                                    We couldn't find any items matching "{searchQuery}" in {activeCategory}. Try adjusting your filters.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                                    className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
