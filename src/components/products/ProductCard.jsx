import React from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, darkMode = false }) => {
    const { openQuickView } = useCart();
    return (
        <div className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} rounded-3xl border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col h-full relative overflow-hidden hover:-translate-y-1`}>
            {/* Discount Badge */}
            {product.discount > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-rose-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-rose-200">
                    -{product.discount}%
                </div>
            )}

            {/* Image Container - Fixed Height */}
            <Link to={`/product/${product.id}`} className={`relative aspect-square w-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-50/50'} flex items-center justify-center p-0 flex-shrink-0`}>
                <img
                    src={product.image}
                    alt={product.name}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    onDragStart={(e) => e.preventDefault()}
                />
            </Link>

            {/* Content Container - Flex Grow to Fill Space */}
            <div className={`p-3 md:p-5 flex flex-col flex-grow ${darkMode ? 'bg-slate-900' : 'bg-white'} relative z-20 min-h-0`}>
                {/* Category - Fixed Height */}
                <div className="mb-2 h-5 flex items-center">
                    <span className={`text-[11px] font-bold ${darkMode ? 'text-cyan-400' : 'text-slate-400'} uppercase tracking-widest`}>
                        {product.category}
                    </span>
                </div>

                {/* Title - Fixed Height with Line Clamp */}
                <Link to={`/product/${product.id}`} className="block mb-2 md:mb-3 min-h-[2.5rem] md:min-h-[3rem] flex items-start">
                    <h3 className={`text-sm md:text-base font-bold ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-primary-600'} leading-snug transition-colors line-clamp-2`}>
                        {product.name}
                    </h3>
                </Link>

                {/* Rating - Fixed Height */}
                <div className="flex items-center gap-1.5 mb-4 h-5">
                    <Star size={14} className="text-amber-400 fill-amber-400 flex-shrink-0" />
                    <span className={`text-sm font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{product.rating || 5.0}</span>
                </div>

                {/* Spacer to push price and button to bottom */}
                <div className="flex-grow"></div>

                {/* Price Section - Fixed at Bottom */}
                <div className="mb-3 md:mb-4">
                    <div className="flex flex-col">
                        <span className={`text-lg md:text-xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} leading-none`}>
                            Rs.{product.price?.toLocaleString()}
                        </span>
                        {product.originalPrice ? (
                            <span className="text-xs text-slate-400 line-through font-medium mt-1">
                                Rs.{product.originalPrice.toLocaleString()}
                            </span>
                        ) : (
                            <span className="text-xs text-transparent mt-1">Placeholder</span>
                        )}
                    </div>
                </div>

                {/* Add to Cart Button - Fixed at Bottom */}
                <button
                    onClick={() => openQuickView(product)}
                    className={`w-full ${darkMode ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-cyan-900/30' : 'bg-slate-900 hover:bg-primary-600 text-white shadow-slate-200'} text-[10px] md:text-xs uppercase tracking-wider font-bold py-2 md:py-3 px-3 md:px-4 rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 flex-shrink-0`}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
