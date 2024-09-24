import React, {useState, useEffect} from 'react'
import axios from 'axios';

const OrderHistoryPage = () => {
  const [error, setError] = useState('');
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      setError('you are not authorized to view this page');
    };

    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data.users);
        console.log('Users: ', response.data.users);

      } catch (error) {
        console.log(`Error: ${error}`);
        setError(`An error occurred while trying to get users ${error.message}`);
      }
    };
    getUsers();
  }, []);
  
  if(error) {
    return <h2 className='text-red-500 text-center mt-20'>{error}</h2>
  };

  if(!users) {
    return <h2 className='text-center mt-20'>Loading............</h2>
  }

    return (
    <div>
{/*       <h1>Your Order History</h1>
      <p>These are the items you have ordered in the past.</p> */}
      <h1>User list only Admin can see</h1>
      <p>These are the users in the database </p>
        <div className='flex flex-col gap-4 ' >
          {users.map((user) => (
            <div key = {user._id} className='border border-gray-300 p-2 my-2'>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default OrderHistoryPage