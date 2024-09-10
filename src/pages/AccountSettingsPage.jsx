import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const AccountSettingsPage = () => {
  const [editName, setEditName] = useState(true);
  return (
    <div className='  border-red-500 border'>
      <div className='p-2'>
        <h1>Account Settings</h1>
        <p>Control, protect, and secure your account</p>
      </div>
      <div className=' border border-gray-300 rounded-md my-2 main-container'>
        <div className='account-settings-container'>
          <div className=''>
            <p className='font-bold'>Name</p>
            <p>Juya Amir</p>
          </div>
          <Link className='account-settings-edit'>Edit</Link>
        </div>
        <div className='account-settings-container'>
          <div className=''>
            <p className='font-bold'>Email</p>
            <p>amirjuya@gmail.com</p>
          </div>
          <Link className='account-settings-edit'>Edit</Link>
        </div>
        <div className='account-settings-container'>
          <div className=''>
            <p className='font-bold'>Password</p>
            <p>******</p>
          </div>
          <Link className='account-settings-edit'>Edit</Link>
        </div>

      </div>

      {
        editName && (
          <div className='bg-red-400 '>
            <h1>Edit Name</h1>
            <form>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id='name' name='name' className='border border-gray-300 rounded-md p-1'
                    required
                    placeholder='First and last name ' />
                </div>
                <div className='flex flex-col gap-1'>
                  <button className='bg-cyan-900 text-white p-1 rounded-md'>Update</button>
                  <button className='bg-cyan-900 text-white p-1 rounded-md'>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default AccountSettingsPage