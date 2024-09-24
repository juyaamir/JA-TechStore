import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/ja.jpg';
import { CiLight, CiDark } from "react-icons/ci";
import DesktopNavbar from './desktopNavbar';
import MobileNavbar from './mobileNavbar';
import DashboardPage from '../pages/dashboardPage.jsx';

import { useTheme } from '../Context';
import { CgProfile } from "react-icons/cg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbHeartPlus } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

import { useAuth } from '../Context.jsx';

const message = [
  { label: 'Welcome To JA-TechStore, The Best Place To Shop For Your Tech Needs' },
  { label: 'Save up to 50% on select major appliances, SHOP NOW!' },
];

const Header = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const [showLogin, setShowLogin] = useState(false);
 // const [isAuthenticated, setIsAuthenticated] = useState(false);

 const { isAuthenticated } = useAuth(); 

  const handleToggle = (e) => {
    e.preventDefault();
    setShowLogin(prevState => !prevState);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex) => messageIndex === 0 ? 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ color: theme === 'light' ? '#000' : '#fff' }}>
      <div className='text-center '>
        <Link to='/deals-of-the-day' className="bg-cyan-900 py-2 text-center md:text-xl lg:text-2xl font-bold prompt-animation sm:h-auto h-16 flex justify-center items-center ">
          {message[messageIndex].label}
        </Link>
      </div>
      <header className="mt-2 mx-4">
        <div className="flex flex-wrap justify-between gap-1 items-center p-1">
          <div title='JA-TechStore.com' className='logoPosition'>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
              <h3>JA-TechStore</h3>
            </Link>
          </div>
          <div className="sm:flex hidden">
            <input
              type="search"
              className="border border-gray-400 py-2 w-32 md:w-56 lg:w-96 rounded-l-lg"
              placeholder="Search for our products..."
              aria-label="Search for our products"
            />
            <button className="border border-gray-400 bg-cyan-300 rounded-r-lg p-2"><CiSearch /></button>
          </div>
          <div className="flex justify-end gap-3 headerIcons ">
            <Link to="/favorite" className="px-4 py-2 relative text-3xl">
              <TbHeartPlus />
              <span className="absolute top-0 right-0 bg-cyan-900 text-white rounded-full text-xs px-2 font-thin">
                2
              </span>
            </Link>
            <Link to="/cart" className="relative text-3xl px-4 py-2 ">
              <LiaShoppingBagSolid />
              <span className="absolute top-0 right-0 bg-cyan-900 text-white rounded-full text-xs px-2 font-thin">
                3
              </span>
            </Link>

            {
              isAuthenticated ? (
              <DashboardPage />
              ) : (
          <div className='relative flex flex-col'>
            <button className="px-4 py-2 text-3xl relative" title='signIn' onClick={handleToggle}>
              <CgProfile />
            </button>
            {showLogin && (
              <div 
              className="absolute flex flex-col gap-2 top-10 -right-9 p-2 rounded-lg shadow-lg w-36 
              text-center border-x-2 border-x-gray-300 z-50 "
              >
                <button onClick={handleCloseLogin} className="text-2xl self-end hover:text-red-400">X</button>
                <Link to="/login" className="block px-2 py-1 text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg" onClick={handleCloseLogin}>Login</Link>
                <Link to="/signup" className="block px-2 py-1 " onClick={handleCloseLogin}>New here? 
                <span className='underline hover:text-green-600'>Register Now</span></Link>
              </div>
            )}
            </div>
              )
            }
            
            <button
              className=''
              style={{ padding: '0.5rem ', borderRadius: '5px', fontSize: '2rem', transition: 'color 0.3s ease-in-out' }}
              onClick={toggleTheme}
              title='Toggle Theme'
            >{theme === 'light' ? <CiLight /> : <CiDark />}</button>
          </div>
        </div>
        <div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </header>
    </div>
  );
};

export default Header;