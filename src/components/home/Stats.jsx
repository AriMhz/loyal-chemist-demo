import React from 'react';
import { Award, Building2, Package, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { value: "10+", label: "Years Experience", icon: Award, color: "from-amber-400 to-yellow-500" },
        { value: "500+", label: "Hospitals Served", icon: Building2, color: "from-cyan-400 to-blue-500" },
        { value: "2k+", label: "Products Available", icon: Package, color: "from-emerald-400 to-teal-500" },
        { value: "100%", label: "Client Satisfaction", icon: Users, color: "from-rose-400 to-pink-500" },
    ];

    return (
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-28 md:py-36 overflow-hidden">
            {/* Premium Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Trusted by Healthcare{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                            Professionals
                        </span>
                    </h2>
                    <p className="text-lg text-primary-200/90 font-light max-w-2xl mx-auto">
                        Our numbers speak for themselves. Join thousands of satisfied healthcare providers.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative"
                            >
                                <div className="flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 hover:bg-white/10 border-2 border-transparent hover:border-white/20 backdrop-blur-sm bg-white/5">
                                    {/* Premium Icon Container */}
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`mb-6 p-5 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-2xl shadow-black/20 group-hover:shadow-cyan-500/30 transition-all duration-500`}
                                    >
                                        <Icon size={36} />
                                    </motion.div>
                                    
                                    {/* Value */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                        className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 tracking-tight bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    
                                    {/* Label */}
                                    <div className="text-sm lg:text-base text-primary-200/90 font-semibold uppercase tracking-[0.2em]">
                                        {stat.label}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
