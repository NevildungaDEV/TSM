

import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const EditeworkAdmin = () => {



    useEffect(() => {
        getSinglEmp()
    }, [])


    const [addworkData, setworkData] = useState({
        description: "",
        endDate: "",
        percentage: "",
        projectName: "",
        startDate: "",
        status: "",
        taskName: "",
        username: "",
        empId: ""

    })
    // console.log(addworkData)

    const { value } = useParams()
    console.log(value);


    const getSinglEmp = async () => {
        try {

            const response = await axios.get(`/singletask/${value}`)
            console.log(response);
            setworkData(response.data.result)
        } catch (error) {
            console.log(error);
        }
    }




    const handleInputs = (e) => {
        setworkData({ ...addworkData, [e.target.name]: e.target.value })
        console.log(setworkData)
    }
    const Navigate = useNavigate()


    const editTask = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:7000/updatetask/${value}`, { addworkData })


        console.log(response)

        if (response.data.success) {
            alert("Task  Updated Succesfully...")
            Navigate("/assignwork")
        }
    }
    // const editTask = async (e) => {
    //     e.preventDefault();





    //     // console.log(response)
    //     console.log(response.data.result.assignee);

    //     if (response.data.success) {
    //         alert("task Updated Succesfully...")
    //         Navigate("/workprogres",{
    //             state:{
    //                 "username":response.data.result.assignee
                    
    //             }
    //         })
    //     }
    // }


    return (
        <Fragment>

            <div >
                <h1>Edit Task</h1>
                <div >

                    <form >
                        <input type="text"
                            placeholder="Project Name"
                            className='form-control mt-2'
                            name="projectName"
                            value={addworkData.projectName}
                            onChange={handleInputs}
                        />

                        <input type="text" name="taskName" id="taskName"
                            value={addworkData.taskName}
                            onChange={handleInputs}
                            placeholder="Task Name"
                            className='form-control mt-2'


                        />

                        <input type="text" name="username" id="username"
                            value={addworkData.username}
                            onChange={handleInputs}
                            placeholder="Employe Name"
                            className='form-control mt-2'
                        />

                        <input type="text" name="empId" id="empId"
                            value={addworkData.empId}
                            onChange={handleInputs}
                            placeholder="Employe ID"
                            className='form-control mt-2'
                        />

                        <input type="text"
                            name="startDate"
                            value={addworkData.startDate}
                            onChange={handleInputs}
                            placeholder="Start Date"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="endDate"
                            value={addworkData.endDate}
                            onChange={handleInputs}
                            placeholder="End Date"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="description"
                            value={addworkData.description}
                            onChange={handleInputs}
                            placeholder="Description"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="percentage"
                            value={addworkData.percentage}
                            onChange={handleInputs}
                            placeholder="Work Complete"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="status"
                            value={addworkData.status}
                            onChange={handleInputs}
                            placeholder="Status"
                            className='form-control mt-2'
                        />

                        <div>
                            <button type="Submit" value='Edit' onClick={(e) => editTask(e)}>Submit</button>
                        </div>
                    </form>



                </div>

            </div>

        </Fragment>
    )
}

export default EditeworkAdmin
