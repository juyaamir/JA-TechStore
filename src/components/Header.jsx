import React, {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../src/assets/ja.jpg';
import { CiLight, CiDark } from "react-icons/ci";
import DesktopNavbar from './desktopNavbar';
import MobileNavbar from './mobileNavbar';
import { useTheme } from '../Context';
import { CgProfile } from "react-icons/cg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbHeartPlus } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
const message = [
  {label: 'Welcome To JA-TechStore, The Best Place To Shop For Your Tech Needs'},
  {label: 'Save up to 50% on select major appliances, SHOP NOW!'},
]
const Header = () => {
  const[messageIndex, setMessageIndex] = useState(0);
  const {theme, toggleTheme} = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex) =>  messageIndex === 0 ? 1 : 0 );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{color: theme === 'light' ? '#000': '#fff'}}>
      <div className='text-center '>
        <Link to='/deals-of-the-day' className="bg-cyan-900  py-2 text-center md:text-xl lg:text-2xl font-bold prompt-animation sm:h-auto h-14 flex justify-center items-center ">
          {message[messageIndex].label}
        </Link>
      </div>
      <header className="mt-2">
        <div className="flex flex-wrap justify-between gap-1 items-center p-1">
          <div title='JA-TechStore.com' className='logoPosition'>
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-12 w-12 rounded-full"  />
              <h3>JA-TechStore</h3>
            </NavLink>
          </div>
          <div className="sm:flex  hidden">
            <input
              type="search"
              className="border border-gray-400 py-2 w-32 md:w-56 lg:w-96 rounded-l-lg"
              placeholder="Search for our products..."
              aria-label="Search for our products"
            />
            <button className="border border-gray-400 bg-cyan-300 rounded-r-lg p-2"><CiSearch /></button>
          </div>
          <div className="flex justify-end gap-3 headerIcons ">
            <NavLink to="/favorite" className="px-4 py-2 relative text-3xl">
            <TbHeartPlus />
              <span className="absolute top-0 right-0 bg-cyan-900 text-white rounded-full text-xs px-2 font-thin">
                2
              </span>
            </NavLink>
            <NavLink to="/cart" className="relative text-3xl px-4 py-2">
            <LiaShoppingBagSolid />
              <span className="absolute top-0 right-0 bg-cyan-900 text-white rounded-full text-xs px-2 font-thin">
                3
              </span>
            </NavLink>
            <NavLink to="/login" className="px-4 py-2 text-3xl" title='signIn'>
              <CgProfile />
            </NavLink>
            <button 
            className=''
            style={{ padding: '0.5rem ', borderRadius: '5px', fontSize: '2rem', transition: 'color 0.3s ease-in-out'}}      
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