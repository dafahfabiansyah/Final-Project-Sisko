import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/product/ProductHero';
import ProductCard from '../components/product/ProductCard';
import Footer from '../components/common/Footer';
import '../components/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <h1 className="banner">Featured Product</h1>
      <ProductCard />
      <Footer />
      <div></div>
    </>
  );
};

export default Home;
