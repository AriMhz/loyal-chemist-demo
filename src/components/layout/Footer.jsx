import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-block mb-6 group">
                            <span className="block text-2xl font-black text-white tracking-tighter">
                                LOYAL <span className="text-cyan-500">CHEMIST</span>
                            </span>
                            <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-1 group-hover:text-cyan-400 transition-colors">
                                Medical & Surgical Supplies
                            </span>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
                            Your trusted partner for high-quality medical and surgical supplies. Providing excellence in healthcare solutions across Nepal.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, href: "https://facebook.com" },
                                { icon: Instagram, href: "https://instagram.com" },
                                { icon: Twitter, href: "https://twitter.com" },
                                { icon: Linkedin, href: "https://linkedin.com" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Link Columns */}
                    <div className="lg:col-span-2 md:col-span-1">
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Gallery', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                                        <ArrowRight className="w-0 overflow-hidden group-hover:w-3.5 transition-all duration-300 text-cyan-400" size={14} />
                                        <span>{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 md:col-span-1">
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Catalog</h4>
                        <ul className="space-y-4">
                            {['Surgical Equipment', 'Medical Disposables', 'Diagnostics', 'Hospital Furniture'].map((item) => (
                                <li key={item}>
                                    <Link to="/products" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                                        <ArrowRight className="w-0 overflow-hidden group-hover:w-3.5 transition-all duration-300 text-cyan-400" size={14} />
                                        <span>{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-500 mt-1">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Headquarters</span>
                                    <span className="text-slate-400 text-sm">Pokhara-01, Bindabasini, Nepal</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-500">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Phone</span>
                                    <span className="text-slate-400 text-sm">+977 9800000000</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-500">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-sm">Email</span>
                                    <span className="text-slate-400 text-sm">info@loyalchemist.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Loyal Chemist. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link to="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
