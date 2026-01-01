import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { getCartCount } = useCart();
    const location = useLocation();

    // Check if we are on the home page to apply special transparency rules
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-4 transition-all duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="relative w-14 h-14 md:w-16 md:h-16">
                            <img src={logo} alt="Loyal Chemist" className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-cyan-600 transition-colors">
                                LOYAL CHEMIST
                            </h1>
                            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
                                Medical & Surgical Supplies
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-cyan-700 bg-cyan-50 font-bold'
                                    : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Icon (Optional quick access) */}
                        <button className="p-2 text-slate-500 hover:text-cyan-600 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <Link to="/cart" className="relative p-2 text-slate-500 hover:text-cyan-600 transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                            {getCartCount() > 0 && (
                                <span className="absolute top-0 right-0 bg-cyan-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>

                        <Link
                            to="/contact"
                            className="bg-cyan-600 text-white hover:bg-cyan-700 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <Link to="/cart" className="relative text-slate-600">
                            <ShoppingCart className="w-5 h-5" />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-600 hover:text-slate-900 p-1"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Full Screen Menu Overlay - Portaled to body to escape stacking contexts */}
            {isMenuOpen && createPortal(
                <div className="fixed inset-0 z-[99999] bg-slate-900 flex flex-col md:hidden animate-in slide-in-from-right duration-300">

                    {/* Menu Header */}
                    <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 bg-white rounded-full p-1">
                                <img src={logo} alt="Loyal Chemist" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold text-white tracking-tight leading-none">
                                    LOYAL CHEMIST
                                </h1>
                                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                                    Medical Supply
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white hover:text-red-400 transition-colors p-2"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                    </div>

                    {/* Menu Links */}
                    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-slate-800 last:border-0">
                                <Link
                                    to={link.path}
                                    className={`flex items-center justify-between py-4 text-xl font-semibold transition-all duration-200 ${location.pathname === link.path
                                        ? 'text-cyan-400'
                                        : 'text-slate-100 hover:text-cyan-400'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <div className="pt-8">
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg active:scale-95"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
};

export default Header;
