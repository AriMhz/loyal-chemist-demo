import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedSection from '../components/home/FeaturedSection';
import ProductShowcase from '../components/home/ProductShowcase';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedSection />
            <ProductShowcase />
            <Services />
            <Stats />
            <Testimonials />
        </>
    );
};

export default Home;
