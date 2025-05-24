import React, { useEffect, useState } from 'react'
import { getEmpById, updateEmp } from '../api/studentService'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function UpdateEmp() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [emp,setEmp] =useState({name:'',email:''});
    const [message,setMessage] = useState('');
    const loadEmp = async (id)=>{
        const res = await getEmpById(id);
        setEmp(res.data);
    }
    useEffect(()=>{
        loadEmp(id);
    },id);
    const handleChange = (e)=>{
      setEmp({ ...emp, [e.target.name]: e.target.value });
        
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      updateEmp(id,emp).then((res)=>{
        setMessage("Emp Updated Successfully");
        navigate('/empList');
      })
      .catch((err)=>{
        setMessage("Error Occured ");
      })
    }
    
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <form onSubmit={handleSubmit} className="space-y-4">
    <table className="w-full">
      <tbody>
        <tr className='hover:bg-gray-50 transition-colors'>
          <th className='border border-gray-200 px-6 py-4 text-left font-medium text-gray-700 bg-gray-100'>Id</th>
          <td className='border border-gray-200 px-6 py-4'>
            <input 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              type='text' 
              name='id' 
              value={emp.id} 
              readOnly
            />
          </td>
        </tr>
        <tr className='hover:bg-gray-50 transition-colors'>
          <th className='border border-gray-200 px-6 py-4 text-left font-medium text-gray-700 bg-gray-100'>Name</th>
          <td className='border border-gray-200 px-6 py-4'>
            <input 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              type='text' 
              name='name' 
              value={emp.name} 
              onChange={handleChange}
              placeholder="Enter employee name"
            />
          </td>
        </tr>
        <tr className='hover:bg-gray-50 transition-colors'>
          <th className='border border-gray-200 px-6 py-4 text-left font-medium text-gray-700 bg-gray-100'>Email</th>
          <td className='border border-gray-200 px-6 py-4'>
            <input 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
              type='email' 
              name='email' 
              value={emp.email} 
              onChange={handleChange}
              placeholder="Enter employee email"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" className='px-6 py-4'>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
  )
}
