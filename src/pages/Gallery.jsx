import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import surgicalImg from '../assets/service-surgical.png';
import diagImg from '../assets/service-diagnostic.png';
import burnitureImg from '../assets/service-furniture.png';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    // Gallery Data - Mix of local assets and high-quality concept placeholders
    const galleryItems = [
        {
            id: 1,
            src: surgicalImg,
            category: 'Products',
            title: 'Precision Surgical Instruments',
            desc: 'High-grade stainless steel tools ready for dispatch.'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop',
            category: 'Facility',
            title: 'Sterile Storage',
            desc: 'Climate-controlled warehousing ensuring product integrity.'
        },
        {
            id: 3,
            src: diagImg,
            category: 'Products',
            title: 'Diagnostic Excellence',
            desc: 'Latest generation monitoring devices.'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
            category: 'Team',
            title: 'Expert Consultation',
            desc: 'Our specialists discussing client requirements.'
        },
        {
            id: 5,
            src: burnitureImg,
            category: 'Products',
            title: 'Hospital Infrastructure',
            desc: 'Ergonomic furniture solutions for modern care.'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop',
            category: 'Facility',
            title: 'Dispatch Center',
            desc: 'Rapid logistics hub in Pokhara.'
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop',
            category: 'Team',
            title: 'Quality Control',
            desc: 'Rigorous inspection before every shipment.'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1999&auto=format&fit=crop',
            category: 'Products',
            title: 'Medical Consumables',
            desc: 'Bulk supply of essential disposables.'
        },
    ];

    const categories = ['All', 'Facility', 'Products', 'Team'];

    const filteredImages = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(img => img.category === activeCategory);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 text-slate-700 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-50/50 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Visual <span className="text-cyan-600">Archive</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                        A curated look into our operations, our quality, and the people behind Loyal Chemist.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 transform -translate-y-1'
                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-shadow"
                                onClick={() => setSelectedImage(image)}
                            >
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{image.category}</span>
                                    <h3 className="text-white text-xl font-bold leading-tight">{image.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Cinematic Lightbox - Keeping Dark for Contrast */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={24} />
                        </motion.button>

                        <div className="flex flex-col max-w-5xl w-full max-h-screen" onClick={(e) => e.stopPropagation()}>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", damping: 25 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20"
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full max-h-[75vh] object-contain bg-black"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-center"
                            >
                                <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                                <p className="text-slate-400 text-lg font-light">{selectedImage.desc}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
