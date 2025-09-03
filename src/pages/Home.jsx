import React from 'react'
import Navbar from '../components/header/Navbar';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import FastAndAccurate from '../components/home/FastAndAccurate';
import Pricing from '../components/home/Pricing';
import FAQSection from '../components/home/FAQSection';
import CTA from '../components/home/CTA';
import Footer from '../components/footer/Footer';
import Testimonials from '../components/home/Testimonial';

const Home = () => {
 return (
    <div className="">
      <Hero />
      <HowItWorks/>
      <FastAndAccurate/>
      <Testimonials/>
      <Pricing/>
      <FAQSection/>
      <CTA/>
    </div>
  );
}

export default Home