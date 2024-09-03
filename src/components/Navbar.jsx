import React from 'react';
import { Link } from 'react-router-dom';
import navbarData from '../data/navbarData';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useTheme } from '../Context';
const Navbar = () => {
  const {theme} = useTheme();
  return (
    <nav className=" p-2">
      <ul className="flex justify-center gap-8 font-bold">
        {navbarData.map((item) => (
          <li key={item.path} className="relative my-4 group" >
            <Link
              to={item.path}
              className="hover:text-sky-500 px-4 py-2 rounded-md flex items-center"
              aria-haspopup={!!item.subMenu}
              aria-expanded="false"
            >
              {item.label}
              {item.subMenu && (
                <RiArrowDropDownLine className="text-xl font-bold ml-1" />
              )}
            </Link>
            {item.subMenu && (
              <ul className="absolute left-0 top-full w-44 shadow-xl px-2 py-2 hidden group-hover:block z-10"
              style={{color: theme === 'light' ? '#333' : '#E0E0E0', backgroundColor: theme === 'light' ? '#F7F7F7' : '#1A1A1A'}}
              >
                {item.subMenu.map((subItem) => (
                  <li key={subItem.path} className="border-b border-gray-400 last:border-none">
                    <Link to={subItem.path} className="block p-2 hover:text-sky-500">
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
