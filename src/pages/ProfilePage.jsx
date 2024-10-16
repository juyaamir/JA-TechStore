import React,{useState, useEffect} from 'react'
import profile from '../assets/profile.jpeg'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi"
import axios from 'axios'
const ProfilePage = () => {
  const[isEditing, setIsEditing] = useState(false);
  const [myProfile, setMyProfile] = useState('');

  //get the user from backend using axios and useEffect, local storage
  useEffect(() => {
    //get token from local storage
    const token = localStorage.getItem('token');
    if(!token) return null;

    //get user from backend
    const getUser = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Profile: ', res.data);
        setMyProfile(res.data.profile);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    getUser();
  }, [])
  return (
    <div >
      <div className='flex gap-8'>
      <div className='flex flex-col text-center w-44 justify-center items-center p-2'>
        <img src={profile} alt="image" className='h-28 w-28 rounded-full ' />
        <div className='flex gap-2 '>
          <h4 className='font-bold'> { myProfile.name} </h4>
          <button onClick={() => setIsEditing(true)} title='Change profile photo' className='text-xl hover:text-orange-400'> <FiEdit /></button>
        </div>
        
      </div>
      <div className='border border-gray-400 p-2'>
        <h1 className='font-bold '>Your Profile</h1>
        <p>Your profile preferences help us personalize recommendations for you</p>
      </div>
    </div>
    {
      isEditing && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 '>
          <div className='bg-white border border-gray-300 p-4 w-96 shadow-lg rounded-md'>
            <h1 className='font-bold mb-4'>Edit profile picture</h1>
          <div>
            <input type="file" title='upload your profile' />
          </div>
          <div className='flex justify-end mt-2'>
          <button className='bg-blue-500 text-white rounded px-4 py-2 mr-2'>Update</button>
          <button className='bg-gray-300 px-4 py-2 mr-2 rounded ' onClick={()=> setIsEditing(false)}>Cancel</button>
            
          </div>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default ProfilePage