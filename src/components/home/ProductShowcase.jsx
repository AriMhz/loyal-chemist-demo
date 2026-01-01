import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';
import { Sparkles, Grid3x3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductShowcase = () => {
    const [activeTab, setActiveTab] = useState('Surgical');
    const categories = ['Surgical', 'Diagnostics', 'Furniture', 'Disposables'];

    const displayedProducts = products.filter(p => p.category === activeTab);

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Premium Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-50/60 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-50/60 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 text-primary-600 font-bold uppercase tracking-[0.15em] mb-5 text-sm"
                    >
                        <Sparkles size={16} className="text-cyan-500" />
                        <span>Premium Selection</span>
                        <Sparkles size={16} className="text-cyan-500" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        Explore Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-cyan-600 to-primary-600 bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                            Catalog
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                        Browse our comprehensive collection of medical supplies, meticulously curated for quality, performance, and reliability.
                    </p>
                </motion.div>

                {/* Premium Categories Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            onClick={() => setActiveTab(category)}
                            className={`relative px-8 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-500 transform ${activeTab === category
                                ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-2xl shadow-primary-500/40 scale-105'
                                : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-primary-300 hover:bg-slate-50 hover:scale-105 active:scale-95'
                                }`}
                        >
                            {activeTab === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600 to-cyan-600"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Product Grid - Replaced Carousel for Better Layout */}
                <div className="min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                                {displayedProducts.map((product) => (
                                    <div key={product.id} className="h-full">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
