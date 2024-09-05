import React, {useState} from 'react'
import logo from '../assets/ja.jpg'
import { Link } from 'react-router-dom'
const LoginPage = () => {
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
            {
              showEmail ? (
                <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='font-semibold'>Enter your Email:</label>
              <input type="email" id='email' name='email' className='border border-gray-300 rounded-md p-1'
              placeholder='Email '/>
              <button type='button' className='bg-cyan-700 hover:bg-green-500 text-white p-1 w-full rounded-md'
              onClick={() => setShowEmail(!showEmail)}
              >Continue</button>
              <p className='text-sm'>
              By continuing, you agree to JA-TechStore's <Link to='/condition-of-use' className='text-cyan-600 underline hover:text-green-500'>Conditions of Use</Link> and <Link to='/condition-of-use' className='text-cyan-600 underline hover:text-green-500'>Privacy Notice.</Link>
              </p>
              </div>
              ) : (
              <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='font-semibold'>Enter your password:</label>
                <input type="password" id='password' name='password' className='border border-gray-300 rounded-md p-1'
                placeholder='Password '/>
                <button 
                type='submit' className='bg-cyan-700 hover:bg-green-500 text-white p-1 w-full rounded-md'
                onClick={() => setShowEmail(false)}>Submit
                </button>
                <Link to='/forgot-password' className='text-cyan-600 underline hover:text-green-500'>Forgot your password?</Link>
              </div>)
            }
          </form>

          {
            showEmail && (
            <div className='text-center flex flex-col gap-2 mb-8'>
            <p className='text-gray-500'>New to JA-TechStore?</p>
            <Link to='/signup' 
            className=' hover:text-green-500 border border-gray-400 p-1 hover:border-green-300 rounded-md'>
              Register in 30 seconds</Link>
          </div>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default LoginPage