import React, {useState} from 'react'
import logo from '../assets/ja.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../Context.jsx'

const LoginPage = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showEmail, setShowEmail] = useState(true);
  
  //when user enter invalid email or password, we can show the error message
  const [error, setError] = useState('');

  const [input, setInput] = useState({
    email: '',
    password: '',
  });
const handleInput = (e) => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value,
    })
};
const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const res = await axios.post(`http://localhost:8000/api/auth/login`, input);
    console.log('Response: ', res.data);

    setIsAuthenticated(true);

    //save the token in the local storage
    localStorage.setItem('token', res.data.token);


    setInput({
      email: '',
      password: '',
    });
    /* navigate('/dashboard'); */
    navigate('/')

  } catch (err) {
    console.log('Error: ', err.response);
    setError(err.response.data.message);
  }

};
const handleNavigate = () => {
    navigate(-1);
};
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
          <form className='flex flex-col gap-5 border border-gray-300  p-4 rounded-lg shadow-lg' onSubmit={handleSubmit}>
            <h1 className=''>Sign In</h1>
            {error && <p className='text-red-500'>{error}</p> }
            {!showEmail && <p>{input.email} <Link className='text-cyan-700 hover:text-green-500' 
            onClick={handleNavigate}>Change</Link> </p> }
            {
              showEmail ? (
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='font-semibold'>Enter your Email:</label>
                <input type="email" id='email' name='email' value={input.email} className='border border-gray-300 rounded-md p-1'
                placeholder='Email ' onChange={handleInput} required/>
                <Link type='button' className='bg-cyan-700 hover:bg-green-500 text-white p-1 w-full rounded-md text-center'
                onClick={() => setShowEmail(!showEmail)}
                >Continue</Link>
                <p className='text-sm my-4'>
                By continuing, you agree to JA-TechStore's <Link to='/condition-of-use' className='text-cyan-600 underline hover:text-green-500'>Conditions of Use</Link> and <Link to='/condition-of-use' className='text-cyan-600 underline hover:text-green-500'>Privacy Notice.</Link>
              </p>
              </div>
              ) : (
              <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='font-semibold'>Enter your password:</label>
                <input type="password" id='password' name='password' value={input.password} className='border border-gray-300 rounded-md p-1'
                placeholder='Password ' onChange={handleInput} required/>
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