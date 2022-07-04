

import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployeDetails = () => {



    useEffect(() => {
        getSinglEmp()
    }, [])


    const [addEmpData, setUserData] = useState({
        empName:"",
        empId:"",
        empMobile:"",
        empEmail:"",
        password:"",
        username:""

    })
    console.log(addEmpData)

    const { value } = useParams()
console.log(value);


    const getSinglEmp = async () => {
        try {

            const response = await axios.get(`/getEmpid/${value}`)
            // console.log(response);
            setUserData(response.data)
        } catch (error) {
            console.log(error);
        }
    }




    const handleInputs = (e) => {
        setUserData({ ...addEmpData, [e.target.name]: e.target.value })
        console.log(setUserData)
    }
    const Navigate = useNavigate()


    const editEmp = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:7000/updateEmp/${value}`, { addEmpData })

        console.log(response)

        if (response.data.success) {
            alert("employee details Updated Succesfully...")
            Navigate("/viewallemp")
        }
    }


    return (
        <Fragment>

            <div >
                <h1>Edit Employee Details</h1>
                <div >

                    <form >
                        <input type="text"
                            placeholder="empId"
                            className='form-control mt-2'
                            name="empId"
                            value={addEmpData.empId}
                            onChange={handleInputs}
                        />

                        <input type="text" name="empName" id="empName"
                            value={addEmpData.empName}
                            onChange={handleInputs}
                            placeholder="empNames"
                            className='form-control mt-2'


                        />

                        <input type="text" name="empEmail" id="empEmail"
                            value={addEmpData.empEmail}
                            onChange={handleInputs}
                            placeholder="empEmail"
                            className='form-control mt-2'
                        />

                        <input type="text" name="username" id="username"
                            value={addEmpData.username}
                            onChange={handleInputs}
                            placeholder="username"
                            className='form-control mt-2'
                        />

                        <input type="text"
                            name="empMobile"
                            value={addEmpData.empMobile}
                            onChange={handleInputs}
                            placeholder="empMobile"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="password"
                            value={addEmpData.password}
                            onChange={handleInputs}
                            placeholder="password"
                            className='form-control mt-2'
                        />

                        <div>
                            <button type="Submit" value='Edit' onClick={(e) => editEmp(e)}>Submit</button>
                        </div>
                    </form>



                </div>

            </div>

        </Fragment>
    )
}

export default EditEmployeDetails
