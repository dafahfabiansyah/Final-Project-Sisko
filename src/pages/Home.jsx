import React from 'react';
import Navbar from '../components/common/Navbar';
// import SlideCard from '..gti/components/product/ProductSlider';
import ProductCard from '../components/product/ProductCard';

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* <SlideCard /> */}
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
