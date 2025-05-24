import React, { useState } from 'react';
import { createEmployee } from '../api/studentService';

export default function AddEmp() {
  const [emp, setEmp] = useState({
    name: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee(emp)
      .then((res) => {
        setMessage('✅ Employee added successfully!');
        setEmp({ name: '', email: '' });
      })
      .catch((err) => {
        setError('❌ Error adding employee');
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={emp.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={emp.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add Employee
          </button>
        </div>

        {message && (
          <div className="text-center text-sm text-green-600 font-medium mt-2">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
