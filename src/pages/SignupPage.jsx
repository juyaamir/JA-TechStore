import React, {useState} from 'react'
import logo from '../assets/ja.jpg'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [showEmail, setShowEmail] = useState(true) 
  return (
    <div className='w-80 '>
      <div>
        <div >
          <Link to='/' className='flex  items-center justify-center my-3'>
            <img src={logo} alt="logo" className="h-14 w-14 rounded-full" />
            <h3>JA-TechStore</h3>
          </Link>

        </div>
        <div className='flex flex-col gap-4'>
          <form className='flex flex-col gap-5 border border-gray-300  p-4 rounded-lg'>
            <h1 className=''>Sign In</h1>
              <div className='flex flex-col gap-2'>

                <div className='flex flex-col gap-1'>
                  <label htmlFor="name">Your Name:</label>
                  <input type="text" id='name' name='name' className='border border-gray-300 rounded-md p-1'
                  placeholder='First and last name '/>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id='email' name='email' className='border border-gray-300 rounded-md p-1'
                  placeholder='Email'/>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id='password' name='password' className='border border-gray-300 rounded-md p-1'
                  placeholder='At lest 6 characters'/>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="rePassword">Re-enter password:</label>
                  <input type="password" id='rePassword' name='rePassword' className='border border-gray-300 rounded-md p-1'
                  />
                </div>
                <button type='button' className='bg-cyan-700 hover:bg-green-500 text-white p-1 w-full rounded-md'
                onClick={() => setShowEmail(!showEmail)}
                >Register now</button>
                <p className='text-sm'>
                By creating an account, you agree to JA-TechStore's <Link to='/condition-of-use' className='text-cyan-600 underline hover:text-green-500'>Conditions of Use</Link> and <Link to='/condition-of-use' className='text-cyan-600 underline hover:text-green-500'>Privacy Notice.</Link>
                </p>
              </div>
          </form>

            <div className='text-center flex flex-col gap-2 mb-8'>
            <p>Already have an account?</p>
            <Link to='/login' 
            className=' hover:text-green-500 border border-gray-300 p-1 hover:border-green-300 font-semibold rounded-md'>
            Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup