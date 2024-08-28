import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/ja.jpg';
import ThemeController from './ThemeController';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div>
        <h3 className="bg-cyan-900 text-white p-2 text-center font-thin">
          Welcome To Our Store JA-TechStore,Save up to 50% on select major appliances. Ends 9/11 shop now
        </h3>
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