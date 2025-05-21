import React, { useEffect } from 'react'
import { useState } from 'react'
import { deleteEmployee, getEmployees } from '../api/studentService';
import { Link } from 'react-router-dom'
export default function StudentList() {
    const [employees,setEmployees]=useState([]);
    useEffect(()=>{
      loadEmployee();
    },[]);
    const loadEmployee = async ()=>{
      const response = await getEmployees();
      setEmployees(response.data);
    }
    const handleDelete = (id)=>{
      
      deleteEmployee(id).then(()=>{
        alert("EMployee Deleted SuccessFully");
        loadEmployee();
      }).catch(()=>{
        alert("Error Occured");
      });

    };
  return (
    <div className="p-4">
  <h2 className='font-bold text-3xl text-purple-700 mb-4'>Employees Table</h2>
  <table className="min-w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2 text-left">Id</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
        <th className="border border-gray-300 px-4 py-2 text-left" colSpan={2}>Action</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(emp => (
        <tr key={emp.id} className="hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">{emp.id}</td>
          <td className="border border-gray-300 px-4 py-2">{emp.name}</td>
          <td className="border border-gray-300 px-4 py-2">{emp.email}</td>
          <td className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={()=>handleDelete(emp.id)}>Delete</td>
          <td className="border border-gray-300 px-4 py-2"><Link to={`/empUpdate/${emp.id}`} >Update</Link></td>

        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
