import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  }
 
  // Removed Login from here as we'll handle it conditionally
];

const Header = () => {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Optionally, you can add a redirect to the login or home page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" aria-label="Ecommerce Logo">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ecommerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation, index) => (
            <Link key={index} to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
          ))}
        </nav>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.displayName}</span>
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
            Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" aria-label="Login Icon">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
        <Link to="/cart" className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 ml-4">
          Go to Cart
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" aria-label="Cart Icon">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
