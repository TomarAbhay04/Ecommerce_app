import React, { useContext } from 'react';
// import Categories from '../../components/Categories'
// import FeatureCard from '../../components/FeatureCard'
import Hero from '../components/Hero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Products from './Products.jsx';
import Stats from '../components/StatCard.jsx';
import ProductContext from '../contexts/ProductContext'; // Import the context

const Home = () => {
  const { products } = useContext(ProductContext); // Use context to get products

  return (
    <>
      <Hero />
      {/* <Categories/> */}
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div>Loading.....</div>
      }
      <Products />
      <Stats/>
    </>
  );
}

export default Home;
