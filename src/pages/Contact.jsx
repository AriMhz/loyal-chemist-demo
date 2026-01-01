import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Message simulated! Thank you.");
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Global HQ",
            value: "Pokhara-01, Bindabasini, Nepal",
            action: "Get Directions",
            color: "text-cyan-600",
            bg: "bg-cyan-50"
        },
        {
            icon: Phone,
            title: "Direct Line",
            value: "+977 9800000000",
            action: "Call Now",
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            icon: Mail,
            title: "Digital Inquiry",
            value: "info@loyalchemist.com",
            action: "Send Email",
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden text-slate-700">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50/60 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-100 bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-6">
                            24/7 Support
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Conversation</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Whether you need a complex procurement quote or technical assistance, our specialized team is ready to engineer a solution.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Info Cards & Map */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-cyan-100 transition-all duration-300 flex items-center gap-6"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{item.title}</h3>
                                        <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                                    </div>
                                    <ArrowRight className="text-slate-300 group-hover:text-cyan-500 transition-colors" size={20} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="h-80 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
                        >
                            <iframe
                                title="Loyal Chemist Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.742323456789!2d83.9856!3d28.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944567890123%3A0x1234567890123456!2sBindabasini%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1612345678900!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-cyan-50 rounded-full text-cyan-600">
                                <MessageSquare size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-rose-500 text-xs ml-1">Required</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                                    <input
                                        {...register("email", { required: true })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <span className="text-rose-500 text-xs ml-1">Required</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                <input
                                    {...register("subject", { required: true })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
                                    placeholder="Product Inquiry / Quote Request"
                                />
                                {errors.subject && <span className="text-rose-500 text-xs ml-1">Required</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Message Details</label>
                                <textarea
                                    rows={5}
                                    {...register("message", { required: true })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Describe your requirements..."
                                ></textarea>
                                {errors.message && <span className="text-rose-500 text-xs ml-1">Required</span>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Secure Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
