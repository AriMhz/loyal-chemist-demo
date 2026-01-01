import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const AddToCartPopup = () => {
    const { lastAddedItem, closeSuccessPopup } = useCart();

    // Auto close after 5 seconds
    useEffect(() => {
        if (lastAddedItem) {
            const timer = setTimeout(() => {
                closeSuccessPopup();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [lastAddedItem, closeSuccessPopup]);

    return (
        <AnimatePresence>
            {lastAddedItem && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-green-50 px-4 py-3 flex items-center justify-between border-b border-green-100">
                            <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                                <CheckCircle size={18} />
                                <span>Added to Cart Successfully!</span>
                            </div>
                            <button onClick={closeSuccessPopup} className="text-slate-400 hover:text-slate-600">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex gap-4">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center p-2 border border-slate-100">
                                <img
                                    src={lastAddedItem.image}
                                    alt={lastAddedItem.name}
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-slate-900 text-sm line-clamp-1 mb-1">{lastAddedItem.name}</h4>
                                <div className="text-xs text-slate-500 mb-2 flex items-center gap-2">
                                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600">
                                        {lastAddedItem.category}
                                    </span>
                                    {lastAddedItem.discount > 0 && <span className="text-rose-500 font-bold">-{lastAddedItem.discount}% OFF</span>}
                                </div>
                                <div className="font-extrabold text-slate-900">
                                    Rs. {lastAddedItem.price.toLocaleString()}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-3 bg-slate-50 grid grid-cols-2 gap-3">
                            <button
                                onClick={closeSuccessPopup}
                                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-white hover:text-primary-600 rounded-lg border border-transparent hover:border-slate-200 transition-all"
                            >
                                Continue Shopping
                            </button>
                            <Link to="/cart" onClick={closeSuccessPopup}>
                                <button className="w-full px-4 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
                                    View Cart <ArrowRight size={14} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddToCartPopup;
