import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from '../Context';
import navbarData from '../data/navbarData';
const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const {theme} = useTheme();
  return (
    <div className='ml-4 mb-4 hidden mobileNavbar '>
      {
        showMenu ? (
      <button className='left-4' onClick={() => setShowMenu(!showMenu)}>
        <p>
            <span className='flex gap-2'>
              <span className='flex flex-col gap-2'>
                <span className='border-b-4  w-12 block' style={{borderBottomColor: theme === 'light' ? '#333' : '#E0E0E0', backgroundColor: theme === 'light' ? '#F7F7F7' : '#1A1A1A'}}></span>
                <span className='border-b-4  w-12 block' style={{borderBottomColor: theme === 'light' ? '#333' : '#E0E0E0', backgroundColor: theme === 'light' ? '#F7F7F7' : '#1A1A1A'}}></span>
                <span className='border-b-4  w-12 block' style={{borderBottomColor: theme === 'light' ? '#333' : '#E0E0E0', backgroundColor: theme === 'light' ? '#F7F7F7' : '#1A1A1A'}}></span>
              </span>
              <span className='text-xl'>Menu</span>
            </span>
        </p>
      </button>
        ):(
        <button onClick={() => setShowMenu(!showMenu)} className='text-xl p-2'><span className=''>X</span> Menu</button>
        ) 
      } 
      {
        !showMenu && (
        <nav className='py-2 shadow-xl max-w-fit mb-14'>
        <ul className='flex flex-col gap-2 '>
        {
          navbarData.map((item) => (
            <li key={item.path} className='relative group'>
              <Link to={item.path} className=" p-1 hover:text-sky-500 flex justify-between gap-2" onClick={()=> setShowMenu(!showMenu)}>
              {item.label}
              {item.subMenu && (
                <span className='block'>&gt;</span> 
              )}
              </Link>
              
              {item.subMenu && (
                <ul className='absolute hidden group-hover:block left-full -top-full z-10 shadow-xl w-max ' >
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.path}>
                      <Link to='/sebItem.path' className="block p-1 hover:text-sky-500" onClick={() => setShowMenu(!showMenu)}>{subItem.label}</Link>

                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))
        }
        </ul>
      </nav>
        )
      }

    </div>
  );
};

export default MobileNavbar;