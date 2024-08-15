import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { carts, removeFromCart, increaseQuantity, decreaseQuantity, getTotal } = useContext(CartContext);

  if (carts.length === 0) {
    return <div className='h-[55vh] flex justify-center items-center text-4xl'>Cart is Empty</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts.length} Items</h2>
          </div>
          {/* Cart items */}
          {carts.map(cart => (
            <div key={cart.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img className="h-24 object-cover" src={cart.image} alt={cart.title} />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{cart.title}</span>
                  <span className="text-red-500 text-xs capitalize">{cart.category}</span>
                  <div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeFromCart(cart.id)}>Remove</div>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => decreaseQuantity(cart.id)}>
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input className="mx-2 border text-center w-8" type="text" value={cart.quantity} readOnly />
                <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => increaseQuantity(cart.id)} viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">${cart.price}</span>
              <span className="text-center w-1/5 font-semibold text-sm">${cart.price * cart.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between mt-10">
            <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.027 256c-10.573 10.573-10.573 27.774 0 38.347l86.061 86.061c15.121 15.121 40.971 4.413 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
            <div className="text-2xl font-semibold text-gray-900">Total: ${getTotal()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
