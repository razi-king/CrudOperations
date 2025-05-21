import React, { useEffect, useState } from 'react'
import { getEmpById } from '../api/studentService'
import { useParams } from 'react-router-dom'

export default function UpdateEmp() {
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
        e.preventDefault();
        
    }
  return (
    <div>UpdateEmp</div>
  )
}
