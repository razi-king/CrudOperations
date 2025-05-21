import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentList from '../components/StudentList'
import Home from '../components/Home'
import Layout from '../components/Layout'
import AddEmp from '../components/AddEmp'
import UpdateEmp from '../components/UpdateEmp'

export default function MyRoute() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/addEmp' element={<AddEmp/>}/>
                <Route path='/empList' element={<StudentList/>}/>
                <Route path='/empUpdate/:id' element={<UpdateEmp/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
