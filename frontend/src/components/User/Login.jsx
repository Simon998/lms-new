import React from 'react'
import {Link} from 'react-router-dom'
import form from 'react-bootstrap/Form';

import { useEffect,useState } from "react";
import axios from "axios";

const baseURL='http://127.0.0.1:8000/api';

function Login() {
  const [studentLoginData, setstudentLoginData] = useState({
    email: '',
    password: ''
});

const[errorMsg, setErrorMsg] = useState('');

const handleChange = (event) => {
    setstudentLoginData({
        ...studentLoginData,
        [event.target.name]: event.target.value
    });
}

const submitForm = (event) => {
    event.preventDefault();
    
    const studentFormData = new FormData();
    studentFormData.append('email',studentLoginData.email);
    studentFormData.append('password', studentLoginData.password);

    try {
        axios.post(baseURL +'/student-login', studentFormData)
        .then((res)=>{
        if(res.data.bool==true){
             localStorage.setItem('studentLoginStatus', true);
             localStorage.setItem('studentId', res.data.student_id);
             window.location.href = '/user-dashboard';
        }else{
            setErrorMsg('Invalid Email or Password');
        }
    })
    }catch (error) {
        console.log(error);
    }
    
}

const studentLoginStatus = localStorage.getItem('studentLoginStatus');
if(studentLoginStatus=='true'){
    window.location.href = '/user-dashboard';

}
useEffect(() => {
    document.title = 'User Login'
});
  return (
    <div className='container mt-5'>
          <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                    <h5 className='card-header' style={{ textAlign: 'center' }}>User Login</h5>
                    <div className='card-body'>
                    {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                    {/*<form>*/}
                            <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input value={studentLoginData.email} onChange={handleChange} name='email' type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input value={studentLoginData.password} onChange={handleChange} name='password' type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            {/*
                            <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            */}
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                            <p className="mt-4">
                                Don't have an account?{' '}
                                <Link to="/user-register" className="btn btn-primary">
                                    <i className="bi bi-r-square-fill"></i>User Register
                                </Link>
                            </p>
                         {/*<form>*/}
                    </div>
                    </div>
                </div>
          </div> 
    </div>
  )
}

export default Login
