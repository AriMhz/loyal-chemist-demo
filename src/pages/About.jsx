import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, ShieldCheck, Activity, Users, Globe, Award, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png'; // Reusing hero bg for consistency

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax & Fade Effects
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const textY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

    const stats = [
        { label: "Years of Excellence", value: "12+", icon: Award },
        { label: "Partner Clinics", value: "500+", icon: Users },
        { label: "Districts Covered", value: "40+", icon: Globe },
        { label: "Products Catalog", value: "1k+", icon: Activity },
    ];

    const values = [
        {
            title: "Our Mission",
            icon: Target,
            text: "To revolutionize healthcare delivery in Nepal by establishing a seamless, high-integrity supply chain that connects world-class manufacturers with local care providers.",
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            border: "group-hover:border-cyan-500/50"
        },
        {
            title: "Our Vision",
            icon: Eye,
            text: "To be the undisputed leader in medical logistics, recognized globally for innovation, reliability, and an unwavering commitment to patient safety.",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "group-hover:border-blue-500/50"
        },
        {
            title: "Core Values",
            icon: ShieldCheck,
            text: "Integrity, Precision, and specialized Service. We believe that every product we deliver carries the potential to save a life, and we treat it with that level of respect.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "group-hover:border-emerald-500/50"
        }
    ];

    return (
        <div ref={containerRef} className="bg-white min-h-screen text-slate-700 selection:bg-cyan-200">

            {/* --- HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-white/60 z-10" />
                    <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-30 text-center">
                    <motion.div style={{ y: textY }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-cyan-200 bg-cyan-100/50 text-cyan-700 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md"
                        >
                            Since 2012
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-sans font-bold text-slate-900 tracking-tight mb-8"
                        >
                            Pioneering the Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                of Healthcare Supply
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            More than a supplier. We are the backbone of critical care in Nepal, bringing precision logistics to the medical frontline.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* --- NARRATIVE SECTION --- */}
            <section className="py-24 relative overflow-hidden bg-white">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Loyal Standard</h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    At <span className="text-cyan-700 font-semibold">Loyal Chemist</span>, we understand that in medicine, there is no margin for error. Located in the heart of Bindabasini, Pokhara, we have dedicated over a decade to building a supply chain that healthcare professionals can trust blindly.
                                </p>
                                <p>
                                    Our philosophy is simple: <strong className="text-cyan-600">Precision in every molecule.</strong> Whether it's a life-saving surgical instrument or routine diagnostic reagents, we ensure that what you receive is authentic, handled with care, and delivered on time.
                                </p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-12">
                                <div>
                                    <span className="block text-4xl font-bold text-slate-900 mb-1">ISO</span>
                                    <span className="text-sm text-slate-500 uppercase tracking-wider">9001 Certified</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-slate-900 mb-1">100%</span>
                                    <span className="text-sm text-slate-500 uppercase tracking-wider">Quality Guarantee</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image / Graphic Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl opacity-30 blur-2xl" />
                            <div className="relative bg-white border border-slate-100 rounded-3xl p-2 shadow-xl">
                                <div className="aspect-[4/3] rounded-2xl bg-cyan-50 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent z-10" />
                                    {/* Placeholder Concept Art */}
                                    <div className="w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700">
                                    </div>

                                    {/* Floating Card */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-white/50 p-6 rounded-xl z-20 shadow-lg"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white">
                                                <ShieldCheck size={20} />
                                            </div>
                                            <div>
                                                <div className="text-slate-900 font-semibold">Verified Partner</div>
                                                <div className="text-cyan-600 text-sm">Official Distributor</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <section className="py-20 bg-cyan-50 border-y border-cyan-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center group"
                            >
                                <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                    <stat.icon className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                                <p className="text-slate-500 text-sm uppercase tracking-wider font-medium group-hover:text-cyan-600 transition-colors">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VALUES GRID --- */}
            <section className="py-32 relative bg-white">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Philosophy</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Building a legacy requires more than just transactions. It requires principles that withstand the test of time.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 relative overflow-hidden bg-cyan-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Partner with Excellence?</h2>
                    <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
                        Experience the difference of a supply chain built on precision and trust.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-cyan-900 font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all"
                    >
                        Contact Our Team
                    </motion.button>
                </div>
            </section>

        </div>
    );
};

export default About;
