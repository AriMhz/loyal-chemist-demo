import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ImageSurgical from '../../assets/service-surgical.png';
import ImageDiagnostic from '../../assets/service-diagnostic.png';
import ImageFurniture from '../../assets/service-furniture.png';

const ServiceCard = ({ image, title, subtitle, link, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
        <Link 
            to={link || '/products'} 
            className="group relative h-[480px] w-full cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-black/10 block border border-slate-200/50"
        >
            {/* Image with Premium Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-115" 
                />
                {/* Multi-layer gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-700 group-hover:from-black/95 group-hover:via-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Glassmorphism Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/0 via-primary-900/0 to-primary-900/0 group-hover:from-primary-900/10 group-hover:via-primary-900/5 group-hover:to-primary-900/0 transition-all duration-700 backdrop-blur-0 group-hover:backdrop-blur-[2px]"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform transition-all duration-700 translate-y-0 group-hover:translate-y-[-8px]">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-cyan-300 font-semibold mb-3 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                >
                    {subtitle}
                </motion.p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight group-hover:text-cyan-100 transition-colors duration-500">
                    {title}
                </h3>
                <div className="flex items-center gap-3 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                    <span>Explore Category</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
        </Link>
    </motion.div>
);

const Services = () => {
    return (
        <section className="py-28 md:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20"
                >
                    <div className="max-w-2xl mb-8 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 text-primary-600 font-bold uppercase tracking-[0.15em] mb-4 text-sm"
                        >
                            <Sparkles size={16} className="text-cyan-500" />
                            <span>Our Expertise</span>
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                            Precision Supplies for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-600">
                                Every Medical Need
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 font-light leading-relaxed">
                            Comprehensive solutions tailored to meet the diverse requirements of modern healthcare facilities.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden md:block"
                    >
                        <Link 
                            to="/products" 
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-cyan-600 text-white font-bold hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <span>View All Categories</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    <ServiceCard
                        image={ImageSurgical}
                        title="Surgical Instruments"
                        subtitle="Precision & Durability"
                        link="/products"
                        delay={0.1}
                    />
                    <ServiceCard
                        image={ImageDiagnostic}
                        title="Advanced Diagnostics"
                        subtitle="Accuracy Matters"
                        link="/products"
                        delay={0.2}
                    />
                    <ServiceCard
                        image={ImageFurniture}
                        title="Hospital Infrastructure"
                        subtitle="Comfort & Care"
                        link="/products"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
