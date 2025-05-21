import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex gap-6 px-4 items-center h-20 bg-slate-200'>
        <Link className='text-gray-500  hover:text-gray-900 transform hover:scale-125' to='/'>Home</Link>
        <Link className='text-gray-500  hover:text-gray-900 transform hover:scale-125' to='/addEmp'>Add Emp</Link>
        <Link className='text-gray-500  hover:text-gray-900 transform hover:scale-125' to='/empList'>Emp List</Link>
    </div>
  )
}
