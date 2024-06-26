import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api';
function FavoriteCourses() {
    const [CourseData, setCourseData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        //fetch courses
        try{
            axios.get(baseURL +'/fetch-favorite-courses/'+studentId)
            .then((res) => {
                console.log(res);
                setCourseData(res.data);
            })
        }catch (error) {
            console.log(error);
        }
    }, []);
  return (
    <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Favorite Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created By:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CourseData.map((row, index)=>
                                <tr>
                                    <td>
                                        <div style={{ textAlign: 'center' }}>
                                        <button 
                                            className="btn btn-primary btn-md active" 
                                            style={{ width: '50%', }} >
                                            <Link style={{ textDecoration: 'none',color: 'black', fontWeight: 'bold' 
                                            }} to={`/detail/`+ row.course.id}>{row.course.title}</Link>
                                        </button>
                                    </div>
                                    </td>
                                    <td>
                                    <div style={{ textAlign: 'center' }}>
                                        <button 
                                            className="btn btn-info btn-md active" 
                                            style={{ width: '50%', }} >
                                            <Link style={{ textDecoration: 'none',color: 'black', fontWeight: 'bold' 
                                            }} to={`/instructor-detail/`+ row.course.teacher.id}>{row.course.teacher.full_name}</Link>
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default FavoriteCourses
