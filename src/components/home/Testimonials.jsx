import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Dr. Rajesh Sharma',
        role: 'Senior Surgeon',
        initials: 'RS',
        text: "Loyal Chemist has transformed how we source our medical supplies. The inventory is vast, and the delivery is always prompt. It's a partnership we value deeply."
    },
    {
        name: 'Dr. Anjali K.C.',
        role: 'Head of Pediatrics',
        initials: 'AK',
        text: "Exceptional quality and service. Every product meets the highest standards, and their customer support is outstanding. Highly recommended for any healthcare facility."
    },
    {
        name: 'Dr. Manish Pradhan',
        role: 'Hospital Administrator',
        initials: 'MP',
        text: "The reliability and comprehensive catalog make Loyal Chemist our go-to supplier. Their commitment to excellence is evident in every interaction and product delivery."
    }
];

const Testimonials = () => {
    return (
        <section className="py-28 md:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Premium Background Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.02] pointer-events-none">
                <Quote size={600} className="text-primary-900 rotate-180" />
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 text-primary-600 font-bold uppercase tracking-[0.15em] mb-5 text-sm"
                    >
                        <Sparkles size={16} className="text-cyan-500" />
                        <span>Testimonials</span>
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Trusted by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-600">
                            Professionals
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Healthcare providers across Nepal trust Loyal Chemist for reliability, quality, and service excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative"
                        >
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100/80 flex flex-col relative h-full hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2">
                                {/* Premium Quote Icon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, rotate: 45 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, type: "spring" }}
                                    className="absolute -top-5 -right-5 bg-gradient-to-br from-primary-600 to-cyan-600 text-white p-4 rounded-2xl shadow-2xl shadow-primary-500/30 z-10"
                                >
                                    <Quote size={24} />
                                </motion.div>

                                {/* Rating Stars */}
                                <div className="flex gap-1.5 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star 
                                            key={j} 
                                            size={20} 
                                            className="text-amber-400 fill-amber-400" 
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-slate-700 text-base md:text-lg mb-8 flex-grow leading-relaxed font-light italic relative z-10">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-primary-500/30">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-cyan-500/0 group-hover:from-primary-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
