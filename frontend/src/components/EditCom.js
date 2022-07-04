

import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const EditCom = () => {


    useEffect(() => {
        getSingleTask()
    }, [])


    const [addData, setUserData] = useState({
        percentage: "",
        status: ""

    })

    const { value } = useParams()


    const getSingleTask = async () => {
        try {

            const response = await axios.get(`http://localhost:4000/api/tsm1/singleTaskEdit/${value}`)
            // console.log(response);
            if (response.data.success) {
                setUserData(response.data.result)
            }


        } catch (error) {
            console.log(error);
        }
    }




    const handleInputs = (e) => {
        setUserData({ ...addData, [e.target.name]: e.target.value })
    }
    const Navigate = useNavigate()
    const editTask = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:4000/api/tsm1/edittask/${value}`, { addData })
        console.log(response)

        if (response.data.success) {
            alert("task Updated Succesfully...")
            Navigate("/workProgress")
        }
    }


    return (
        <Fragment>

            <div >
                <h1>Work Progress</h1>
                <div >

                    <form >
                        <input type="text"
                            placeholder="empId"
                            className='form-control mt-2'
                            name="empId"
                            value={addData.empId}
                        />

                        <input type="text" name="projectName" id="projectName"
                            value={addData.projectName}

                            placeholder="projectName"
                            className='form-control mt-2'


                        />

                        <input type="text" name="taskName" id="taskName"
                            value={addData.taskName}
                            placeholder="taskName"
                            className='form-control mt-2'
                        />

                        <input type="text" name="assignee" id="assignee"
                            value={addData.assignee}
                            placeholder="assignee"
                            className='form-control mt-2'
                        />

                        <input type="text"
                            name="startDate"
                            value={addData.startDate}
                            placeholder="startDate"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="endDate"
                            value={addData.endDate}
                            placeholder="endDate"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="description"
                            value={addData.description}
                            placeholder="description"
                            className='form-control mt-2'
                        />
                        <input type="number"
                            name="percentage"
                            value={addData.percentage}
                            onChange={handleInputs}
                            placeholder="percentage"
                            className='form-control mt-2'
                        />

                        <div>
                            <button type="Submit" value='Edit' onClick={(e) => editTask(e)}>Submit</button>
                        </div>
                        <select className='btncss'type="text" name="status" value={addData.status} onChange={handleInputs} >
                            <option>Status</option>
                            <option value="Opend">Opend</option>
                            <option value="Closed">Closed</option>
                            <option value="InProgress">InProgress</option>
                            <option value="Pending">Pending</option>
                        </select >


                    </form>



                </div>

            </div>

        </Fragment>
    )
}

export default EditCom
