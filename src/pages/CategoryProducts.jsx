import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import ProductCard from '../components/ProductCard.jsx';

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [name]); // Added 'name' to the dependency array

  if (products.length === 0) return <div>Loading.....</div>;

  return <ProductCard products={products} />;
};

export default CategoryProducts;
