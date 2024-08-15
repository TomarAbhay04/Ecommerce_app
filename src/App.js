import React from 'react';
import './App.css';
import Footer from '../src/components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from '../src/pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Product from '../src/pages/Product.jsx';
import Products from '../src/pages/Products.jsx';
import CategoryProducts from '../src/pages/CategoryProducts.jsx';
import Cart from '../src/pages/Cart.jsx';
import Login from '../src/components/Login.jsx';
import ProtectedRoute from '../src/components/ProtectedRoute.jsx'
import {ProductProvider} from '../src/contexts/ProductContext.jsx'
import { UserProvider } from '../src/contexts/UserContext.jsx';
import { CartProvider } from '../src/contexts/CartContext.jsx'

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories/:name"
          element={
            <ProtectedRoute>
              <CategoryProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
    </ CartProvider>
    </ ProductProvider>
    </ UserProvider>
  );
}

export default App;
