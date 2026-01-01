import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, ShoppingCart, Plus, Minus, Star, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const ProductQuickView = () => {
    const { quickViewProduct, closeQuickView, addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    // Reset quantity when product changes
    useEffect(() => {
        if (quickViewProduct) {
            setQuantity(1);
        }
    }, [quickViewProduct]);

    const handleAddToCart = () => {
        if (quickViewProduct) {
            addToCart(quickViewProduct, quantity);
            closeQuickView();
        }
    };

    if (!quickViewProduct) return null;

    return (
        <AnimatePresence>
            {quickViewProduct && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeQuickView}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeQuickView}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-red-500"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Side */}
                        <div className="md:w-1/2 bg-slate-50 p-8 flex items-center justify-center relative">
                            <img
                                src={quickViewProduct.image}
                                alt={quickViewProduct.name}
                                className="w-full h-48 md:h-64 object-contain mix-blend-multiply"
                            />
                            {quickViewProduct.discount > 0 && (
                                <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    -{quickViewProduct.discount}% OFF
                                </div>
                            )}
                        </div>

                        {/* Content Side */}
                        <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                            <div className="mb-auto">
                                <span className="inline-block px-2 py-1 bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                                    {quickViewProduct.category}
                                </span>

                                <Link to={`/product/${quickViewProduct.id}`} onClick={closeQuickView}>
                                    <h2 className="text-xl font-black text-slate-900 mb-2 leading-tight hover:text-primary-600 transition-colors">
                                        {quickViewProduct.name}
                                    </h2>
                                </Link>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-yellow-400">
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill={quickViewProduct.rating >= 4.5 ? "currentColor" : "none"} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">({quickViewProduct.rating || 5.0})</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-3xl font-black text-slate-900">
                                        Rs. {quickViewProduct.price.toLocaleString()}
                                    </span>
                                    {quickViewProduct.originalPrice && (
                                        <span className="text-sm text-slate-400 line-through">
                                            Rs. {quickViewProduct.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center text-xs text-slate-600">
                                        <ShieldCheck className="w-3.5 h-3.5 text-green-500 mr-2" />
                                        Generic Name: <span className="font-semibold ml-1 text-slate-900">{quickViewProduct.name}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-slate-600">
                                        <ShieldCheck className="w-3.5 h-3.5 text-green-500 mr-2" />
                                        Brand: <span className="font-semibold ml-1 text-slate-900">Loyal Chemist Official</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3 mt-4">
                                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-1 border border-slate-100">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-all"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="font-bold text-slate-900 text-sm">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition-all"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <Button
                                    onClick={handleAddToCart}
                                    className="w-full py-3 text-sm shadow-lg shadow-primary-200"
                                >
                                    <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart - Rs. {(quickViewProduct.price * quantity).toLocaleString()}
                                </Button>

                                <Link to={`/product/${quickViewProduct.id}`} onClick={closeQuickView} className="text-center">
                                    <span className="text-xs font-bold text-slate-500 hover:text-primary-600 transition-colors">
                                        View Full Details
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProductQuickView;
