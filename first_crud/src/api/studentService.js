import axios from "axios";

const API = "http://localhost:8080";
export const getEmployees = ()=> axios.get(`${API}`);
export const createEmployee =(data)=> axios.post(`${API}`,data);
export const deleteEmployee =(id)=> axios.delete(`${API}/delete/${id}`);
export const getEmpById = (id)=> axios.get(`${API}/getEmpById/${id}`);
export const updateEmp = (id,data)=> axios.put(`${API}/updateEmp/${id}`,data);