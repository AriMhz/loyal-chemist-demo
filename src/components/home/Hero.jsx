import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HeroBg from '../../assets/hero-bg.png';
import Banner1 from '../../assets/hero-banner-1.png';
import Banner2 from '../../assets/hero-banner-2.png';
import Banner3 from '../../assets/hero-banner-3.png';

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex flex-col bg-white">
            {/* Top Ad Slider - Contained & Rounded */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 z-20">
                <div className="mx-auto rounded-2xl shadow-sm overflow-hidden" style={{ maxWidth: '1000px', height: '180px' }}>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full h-full"
                    >
                        <SwiperSlide>
                            <img src={Banner1} alt="Customer Favorites" className="w-full h-full object-cover bg-blue-50" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Banner2} alt="Medical Supplies Sale" className="w-full h-full object-cover bg-blue-50" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Banner3} alt="Quality Healthcare" className="w-full h-full object-cover bg-blue-50" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Original Hero Content Below */}
            <div className="relative flex-grow flex items-center overflow-hidden">
                {/* Background Image Removed - Plain White Only */}


                {/* Decorative Blobs Removed for Plain White Look */}


                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm text-primary-700 font-semibold text-sm mb-6"
                        >
                            <ShieldCheck size={16} className="text-cyan-500" />
                            <span>Trusted by Leading Hospitals & Clinics</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
                        >
                            Advanced Medical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500">
                                Solutions for Life
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-light"
                        >
                            Loyal Chemist delivers premium pharmaceutical and surgical supplies with unmatched reliability. Experience the future of healthcare logistics today.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                        >
                            <Link
                                to="/products"
                                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <span>Explore Catalog</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/contact"
                                className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                            >
                                <span>Contact Sales</span>
                                <ChevronRight size={20} className="text-slate-400 group-hover:text-primary-600 transition-colors" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
