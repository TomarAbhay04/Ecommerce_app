import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded cart from localStorage:', storedCarts); // Debugging line
    setCarts(storedCarts);
  }, []);

  // Save cart to localStorage when carts state changes
  useEffect(() => {
    console.log('Saving cart to localStorage:', carts); // Debugging line
    localStorage.setItem('cart', JSON.stringify(carts));
  }, [carts]);

  const addToCart = (product) => {
    console.log('Adding to cart:', product); // Debugging line
    const existingProduct = carts.find(item => item.id === product.id);
    if (existingProduct) {
      setCarts(carts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    console.log('Removing from cart, id:', id); // Debugging line
    setCarts(carts.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    console.log('Increasing quantity, id:', id); // Debugging line
    setCarts(carts.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    console.log('Decreasing quantity, id:', id); // Debugging line
    setCarts(carts.map(item => {
      if (item.id === id) {
        // If quantity is 1, remove the item from the cart
        if (item.quantity === 1) {
          return null; // Mark for removal
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }).filter(item => item !== null)); // Remove null items
  };

  const getTotal = () => {
    const total = carts.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const formattedTotal = total.toFixed(2); // Format to 2 decimal places
    console.log('Total price calculated:', formattedTotal); // Debugging line
    return formattedTotal;
  };

  return (
    <CartContext.Provider value={{ carts, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
