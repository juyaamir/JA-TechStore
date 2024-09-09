import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpeg'
import { ImProfile } from "react-icons/im";
import { SlSettings } from "react-icons/sl";
import { PiSignOutBold } from "react-icons/pi";
import { useTheme } from '../Context';
const DashboardPage = ({setLoggedIn}) => {
  const{theme} = useTheme();
  return (
    <div className='text-xl relative group '>
      <p className=' px-4 py-2 hover:cursor-pointer'>Hello, Juya</p>
      
      <div className=' border border-gray-400 w-96 bg top-full -right-0 shadow-lg z-10 hidden group-hover:block p-6 rounded absolute'
      style={{color: theme === 'light' ? '#000' : '#fff', backgroundColor: theme === 'light' ? '#fff' : '#000' }}
      >
        <div className='flex gap-2 p-2 bg-cyan-300 rounded' >
          <img src={profile} alt="" className='h-12 w-12 border-blue-400 border rounded-full' />
          <p className='flex flex-col'><span className='font-bold text-base'>Amir Muhammad Juya</span><span className='text-sm'>Thanks for being a JA-TechStore customer</span></p>
        </div>
        <div className='flex justify-between text-base py-4 dashboard-list'>
          <ul className='font-semibold flex flex-col gap-3 '>
            <li >
              <Link to='/profile/myprofile' className='flex items-center gap-2'>
              <ImProfile className='text-xl' /> <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link to='/account/settings' className='flex items-center gap-2'>
              <SlSettings className='text-xl'/> <span>Account settings</span>
              </Link>
            </li>
            <li>
              <Link onClick={()=> {
                setLoggedIn(false);
              }} className='flex items-center gap-2'>
              <PiSignOutBold className='text-xl' /> <span>Sign Out</span>
              </Link>
            </li>
          
            <li></li>
          </ul>
          <ul className='flex flex-col gap-3 '>
            <p className='font-bold '>My Account</p>
            <li><Link to='/orders' >Order History</Link></li>
            <li><Link>Track An Order</Link></li>
            <li><Link to='/browsing-history'>Browsing History</Link></li>
          </ul>
        </div>
      </div>
      

    </div>
  )
}

export default DashboardPage