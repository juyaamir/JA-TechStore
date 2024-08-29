import React, {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../src/assets/ja.jpg';
import ThemeController from './ThemeController';
import Navbar from './Navbar';
const message = [
  {label: 'Welcome To JA-TechStore, The Best Place To Shop For Your Electronics!'},
  {label: 'Save up to 50% on select major appliances, SHOP NOW!'},
]
const Header = () => {
  const[messageIndex, setMessageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex) =>  messageIndex === 0 ? 1 : 0 );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div>
        <Link to='/deals-of-the-day' className="bg-cyan-900  p-2 text-center text-2xl font-bold prompt-animation block ">
          {message[messageIndex].label}
        </Link>
      </div>
      <header className="bg-base-300">
        <div className="flex flex-wrap justify-between gap-8 items-center p-3">
          <div title='JA-TechStore.com'>
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-12 w-12 rounded-full"  />
              <h3>JA-TechStore</h3>
            </NavLink>
          </div>
          <div className="flex">
            <input
              type="search"
              className="border border-gray-400 px-4 py-2 rounded-l-lg"
              placeholder="Search for our products..."
              aria-label="Search for our products"
            />
            <button className="bg-cyan-300 rounded-r px-4 py-2">Search</button>
          </div>
          <div className="flex flex-wrap  justify-end">
            <NavLink to="/wishlist" className="px-4 py-2 relative">
              Favorites
              <span className="absolute top-0 right-0 bg-cyan-900 text-white rounded-full text-xs px-2 font-thin">
                2
              </span>
            </NavLink>
            <NavLink to="/cart" className="relative border px-4 py-2">
              Cart
              <span className="absolute top-0 right-0 bg-cyan-900 text-white rounded-full text-xs px-2 font-thin">
                3
              </span>
            </NavLink>
            <NavLink to="/login" className="px-4 py-2">
              Sign In
            </NavLink>
            <NavLink className="px-4 py-2">
              <ThemeController />
            </NavLink>
          </div>
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;