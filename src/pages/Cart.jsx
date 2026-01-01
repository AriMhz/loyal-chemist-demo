import React from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-md mx-auto">
                    <div className="bg-slate-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                        <Trash2 size={40} className="text-slate-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                    <p className="text-slate-500 mb-8">Looks like you haven't added any medical supplies to your cart yet.</p>
                    <Link to="/products">
                        <Button className="font-bold">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Start Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="flex-grow">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        {/* Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-100 text-sm font-semibold text-slate-600">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                            <div className="col-span-1"></div>
                        </div>

                        {/* Items */}
                        <div className="divide-y divide-slate-100">
                            {cart.map((item) => (
                                <div key={item.id} className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center flex flex-col gap-4">
                                    {/* Product Info */}
                                    <div className="col-span-6 flex items-center gap-4">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-lg flex-shrink-0 flex items-center justify-center p-2">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm md:text-base line-clamp-2 md:line-clamp-1">{item.name}</h3>
                                            <p className="text-xs text-primary-600 font-medium uppercase mt-1">{item.category}</p>
                                        </div>
                                    </div>

                                    {/* Price Mobile Label */}
                                    <div className="flex justify-between md:hidden">
                                        <span className="text-slate-500 text-sm font-medium">Price</span>
                                        <span className="font-bold text-slate-900">Rs. {item.price.toLocaleString()}</span>
                                    </div>

                                    {/* Price Desktop */}
                                    <div className="hidden md:block col-span-2 text-center font-bold text-slate-900">
                                        Rs. {item.price.toLocaleString()}
                                    </div>

                                    {/* Quantity */}
                                    <div className="col-span-2 flex items-center justify-between md:justify-center">
                                        <span className="md:hidden text-slate-500 text-sm font-medium">Quantity</span>
                                        <div className="flex items-center border border-slate-200 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-slate-50 text-slate-600 transition-colors disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold text-slate-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-slate-50 text-slate-600 transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Total Mobile Label */}
                                    <div className="flex justify-between md:hidden border-t border-slate-50 pt-3 mt-1">
                                        <span className="text-slate-500 text-sm font-medium">Total</span>
                                        <span className="font-extrabold text-primary-700">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                                    </div>

                                    {/* Total Desktop */}
                                    <div className="hidden md:block col-span-2 text-right font-extrabold text-primary-700">
                                        Rs. {(item.price * item.quantity).toLocaleString()}
                                    </div>

                                    {/* Remove Action */}
                                    <div className="md:col-span-1 border-t md:border-t-0 pt-3 md:pt-0 flex justify-end">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors"
                                            title="Remove item"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <Link to="/products" className="text-primary-600 font-bold hover:text-primary-800 flex items-center gap-2 text-sm">
                            <ArrowLeft size={16} /> Continue Shopping
                        </Link>
                        <button
                            onClick={clearCart}
                            className="text-red-500 font-bold hover:text-red-700 text-sm"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-96 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sticky top-24">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-bold text-slate-900">Rs. {getCartTotal().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Shipping Estimate</span>
                                <span className="text-green-600 font-bold">Free</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tax Estimate</span>
                                <span className="font-bold text-slate-900">Rs. {(getCartTotal() * 0.13).toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-4 mb-8">
                            <div className="flex justify-between items-end">
                                <span className="text-base font-bold text-slate-900">Order Total</span>
                                <span className="text-2xl font-black text-primary-700">Rs. {(getCartTotal() * 1.13).toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Includes VAT and all taxes.</p>
                        </div>

                        <Button className="w-full font-bold py-4 text-base shadow-lg shadow-primary-200">
                            Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <p className="text-center text-xs text-slate-400 mt-4">
                            Secure Checkout - SSL Encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
