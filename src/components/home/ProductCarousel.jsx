
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const ProductCarousel = ({ products, reverse = false }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    if (!products || products.length === 0) {
        return <div className="text-center py-12 text-slate-500">No products available.</div>;
    }

    return (
        <div className="relative px-4">
            {/* Custom Navigation Buttons - Positioned absolute */}
            <button
                ref={prevRef}
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 border border-slate-200 p-3 rounded-full shadow-xl text-primary-600 hover:scale-110 transition-all duration-300 hover:bg-white hover:border-primary-300 backdrop-blur-sm -ml-2 md:-ml-4 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
                aria-label="Previous slide"
            >
                <ArrowLeft size={24} />
            </button>

            <button
                ref={nextRef}
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 border border-slate-200 p-3 rounded-full shadow-xl text-primary-600 hover:scale-110 transition-all duration-300 hover:bg-white hover:border-primary-300 backdrop-blur-sm -mr-2 md:-mr-4 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
                aria-label="Next slide"
            >
                <ArrowRight size={24} />
            </button>

            <Swiper
                modules={[Navigation, Autoplay, FreeMode]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={20}
                slidesPerView={1.2}
                loop={true}
                speed={800}
                autoplay={reverse ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    pauseOnMouseEnter: true
                } : {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                freeMode={true}
                breakpoints={{
                    // Mobile
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    // sm
                    640: {
                        slidesPerView: 3.2,
                        spaceBetween: 16
                    },
                    // md
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 16
                    },
                    // lg
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                    // xl
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                    // 2xl - Show 6 cards for better fit
                    1536: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    }
                }}
                className="!pb-12 !pt-4"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="!h-auto">
                        <div className="h-full py-2 flex">
                            <ProductCard product={product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
