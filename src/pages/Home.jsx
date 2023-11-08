import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/product/ProductHero';
import ProductCard from '../components/product/ProductCard';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <h1>Featured Product</h1>
      <ProductCard />
      <div></div>
    </>
  );
};

export default Home;
