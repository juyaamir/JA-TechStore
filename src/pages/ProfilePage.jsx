import React from 'react'
import profile from '../assets/profile.jpeg'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
const ProfilePage = () => {
  return (
    <div className='flex gap-8'>
      <div className='flex flex-col text-center w-44 justify-center items-center p-2'>
        <img src={profile} alt="image" className='h-28 w-28 rounded-full ' />
        <div className='flex gap-2 '>
          <h4 className='font-bold'>Amir Muhammad Juya</h4>
          <Link title='Change profile photo' className='text-xl hover:text-orange-400'> <FiEdit /></Link>
        </div>
        
      </div>
      <div className='border border-gray-400 p-2'>
        <h1 className='font-bold'>Your Profile</h1>
        <p>Your profile preferences help us personalize recommendations for you</p>
      </div>
    </div>
  )
}

export default ProfilePage