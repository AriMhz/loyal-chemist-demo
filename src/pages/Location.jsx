import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
    return (
        <div className="bg-white">
            <section className="bg-primary-900 py-16 text-white text-center">
                <h1 className="text-4xl font-bold mb-4">Our Location</h1>
                <p className="text-primary-100 max-w-xl mx-auto">
                    Visit us at our store in Pokhara-01, Bindabasini.
                </p>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[500px]">
                            <iframe
                                title="Loyal Chemist Full Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.742323456789!2d83.9856!3d28.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944567890123%3A0x1234567890123456!2sBindabasini%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1612345678900!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-primary-600 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Address</h3>
                                        <p className="text-slate-600">
                                            Loyal Chemist<br />
                                            Pokhara-01, Bindabasini<br />
                                            Kaski, Nepal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary-600 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Contact</h3>
                                        <p className="text-slate-600">
                                            Mobile: +977 9800000000<br />
                                            Tel: 061-123456
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <Clock className="text-primary-600 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Working Hours</h3>
                                        <p className="text-slate-600">
                                            Sun - Fri: 9:00 AM - 7:00 PM<br />
                                            Saturday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Location;
