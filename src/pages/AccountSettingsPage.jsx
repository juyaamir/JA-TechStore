import React,{useState, useEffect} from 'react'
import axios from 'axios';



const AccountSettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editField, setEditField] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleEditClick = (field) => {
    setEditField(field);
    setIsEditing(true);
  }

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  //handle change
  const handleChange = (e) => {
    
    setUserData({
      ...userData, [editField]: e.target.value
    })
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      setError('You are not authorized to view this information');
      return;
    };
    const getUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data.profile);
        console.log('User Data: ', response.data.profile);
      } catch (error) {
        console.log(`Error: ${error}`);
        setError(`An error occurred while trying to get your profile`);
      }
    };
    getUserData();
  }, []);
  if(error) {
    return <p className='text-red-500 text-center'>{error}</p>
  };
  if(!userData) {
    return <p className='text-center'>Loading............</p>
  }
  return (
    <div >
        <div className='p-2'>
          <h1>Account Settings</h1>
          <p>Control, protect, and secure your account</p>
        </div>
        <div className=' border border-gray-300 rounded-md main-container my-4'>
          <div className='account-settings-container'>
          <div>
            <p className='font-bold'>Name</p>
            <p>{userData.name}</p>
          </div>
          <button onClick={() => handleEditClick('name')} className='account-settings-edit'>Edit</button>
          </div>
          <div className='account-settings-container'>
            <div className=''>
              <p className='font-bold'>Email</p>
              <p>{userData.email}</p>
            </div>
            <button onClick={() => handleEditClick('email')} className='account-settings-edit'>Edit</button >
          </div>
          <div className='account-settings-container'>
            <div className=''>
              <p className='font-bold'>Password</p>
              <p>******</p>
            </div>
            <button className='account-settings-edit'>Edit</button >
          </div>
        </div>

        {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Edit {editField}</h2>
            <input
              type="text"
              value={userData[editField]}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full p-2 mb-4"
            />
            <div className="flex justify-end">
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountSettingsPage