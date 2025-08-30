import React from 'react'
import Navbar from '../components/header/Navbar';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import FastAndAccurate from '../components/home/FastAndAccurate';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import Footer from '../components/footer/Footer';
import Testimonials from '../components/home/Testimonial';

const Home = () => {
 return (
    <div className="bg-white">
      <Hero />
      <HowItWorks/>
      <FastAndAccurate/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <CTA/>
    </div>
  );
}

export default Home