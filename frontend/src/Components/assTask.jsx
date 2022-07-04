import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import * as AIIcons from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import './Home.css'



const Addtask = () => {
    //   const location=useLocation()
    //   const preUser=location.state
    //   console.log(preUser);
    

    const [addTask, setAddTask] = useState({
        projectName: "",
        taskName: "",
        username: "",
        empId: "",
        startDate: "",
        endDate: "",
        description: ""
    })
    console.log(addTask)
    useEffect(() => {

        singleemp();
    }, []);
    const { value } = useParams()
    // console.log(value);
    const singleemp = async () => {
        const response = await axios.get(`/getsingleemp/${value}`);
        console.log(response);
        setAddTask({empId:response.data.empId,username:response.data.username})
    }
    const Navigate = useNavigate()

    const inputHandler = (e) => {
        setAddTask({ ...addTask, [e.target.name]: e.target.value });
    }



    const AddTaskData = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:7000/addtask',  addTask )
            console.log(result,"asiodoiasdoas");
            if (result.data) {
                Navigate('/assignwork')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <div>
                <Navbar />
            </div>
            <div className="MainBox">
                <div className="row text-center ">
                    <div><AIIcons.AiFillFileAdd className='emplogo' /><h1 className="Firsthading">Add Task</h1></div>

                    <div >
                        <form className="AddtaskForm">
                            <input type="text" placeholder="Project Name" className="form-control" name="projectName" value={addTask.projectName} onChange={inputHandler} /><br />
                            <input type="text" placeholder="Task Name" className="form-control" name="taskName" value={addTask.taskName} onChange={inputHandler} /><br />
                            <input className="form-control" type="text" name="assignee" placeholder="Employee Name" value={addTask.username} onChange={inputHandler} /><br />
                            <input type="text" placeholder="empId" className="form-control" name="empId" value={addTask.empId} onChange={inputHandler} /><br />
                            <input type="date" placeholder="Start Date" className="form-control" name="startDate" value={addTask.startDate} onChange={inputHandler} /><br />
                            <input type="date" placeholder=" End Date" className="form-control" name="endDate" value={addTask.endDate} onChange={inputHandler} /><br />
                            <input type="text" placeholder=" Description" className="form-control" name="description" value={addTask.description} onChange={inputHandler} /><br />
                            <button className="btn" type="submit" onClick={(e) => { AddTaskData(e) }}  >Submit</button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Addtask