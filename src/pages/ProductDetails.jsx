import React, { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, ShoppingCart, Truck, ShieldCheck, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    // Find product
    const product = products.find(p => p.id === parseInt(id));

    // Handle Image Zoom
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!imageRef.current) return;

        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomPosition({ x, y });
    };

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
                <Link to="/products">
                    <Button>Back to Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-slate-500 hover:text-primary-600 mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Section */}
                    <div className="relative group">
                        <div
                            className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-8 flex items-center justify-center relative h-[400px] lg:h-[500px] cursor-crosshair"
                            onMouseEnter={() => setIsZoomed(true)}
                            onMouseLeave={() => setIsZoomed(false)}
                            onMouseMove={handleMouseMove}
                            ref={imageRef}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                                style={{ opacity: isZoomed ? 0 : 1 }}
                            />

                            {/* Zoomed Image Overlay */}
                            {isZoomed && (
                                <div
                                    className="absolute inset-0 pointer-events-none mix-blend-multiply"
                                    style={{
                                        backgroundImage: `url(${product.image})`,
                                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                        backgroundSize: '250%', // Zoom level
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                            )}

                            {/* Badges */}
                            {product.discount > 0 && (
                                <div className="absolute top-4 left-4 bg-rose-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                                    -{product.discount}% OFF
                                </div>
                            )}
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
                            Hover over image to zoom details
                        </p>
                    </div>

                    {/* Details Section */}
                    <div>
                        <div className="mb-2">
                            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                                    ))}
                                </div>
                                <span className="font-bold text-slate-700">{product.rating}</span>
                                <span className="text-slate-400 mx-1">|</span>
                                <span className="text-slate-500 text-sm">124 Reviews</span>
                            </div>
                            <span className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                                In Stock
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-end gap-3 mb-2">
                                <span className="text-4xl font-black text-slate-900">
                                    Rs. {product.price.toLocaleString()}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-xl text-slate-400 line-through mb-1">
                                        Rs. {product.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-slate-500">
                                Includes all taxes. Free shipping on orders over Rs. 5000.
                            </p>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Description</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {product.description || "High-quality medical grade equipment designed for professional healthcare settings. Certified for safety and precision."}
                            </p>

                            <ul className="mt-4 space-y-2">
                                {['Premium Medical Grade Material', 'ISO Certified Manufacturer', '1 Year Warranty', '24/7 Technical Support'].map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-600">
                                        <ShieldCheck className="w-4 h-4 text-primary-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center border border-slate-200 rounded-xl bg-white">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-l-xl transition-colors"
                                >-</button>
                                <span className="px-4 font-bold text-slate-900 w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-r-xl transition-colors"
                                >+</button>
                            </div>

                            <Button
                                onClick={() => {
                                    addToCart({ ...product, quantity });
                                    // Could add toast here
                                }}
                                className="flex-1 py-4 text-base shadow-xl shadow-primary-200"
                            >
                                <ShoppingCart className="mr-2" /> Add to Cart
                            </Button>
                        </div>

                        {/* Support Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center p-4 rounded-xl bg-blue-50 text-blue-800 border border-blue-100">
                                <Truck className="w-8 h-8 mr-3 opacity-80" />
                                <div>
                                    <h4 className="font-bold text-sm">Fast Delivery</h4>
                                    <p className="text-xs opacity-80">Within 24-48 Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100">
                                <Phone className="w-8 h-8 mr-3 opacity-80" />
                                <div>
                                    <h4 className="font-bold text-sm">Expert Support</h4>
                                    <p className="text-xs opacity-80">Call us anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
