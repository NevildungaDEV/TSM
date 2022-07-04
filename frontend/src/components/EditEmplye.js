

import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const EditEmplye = () => {


    useEffect(() => {
        getSinglEmp()
    }, [])


    const [addData, setUserData] = useState({
empId:"",
empName:"",
empEmail:"",
username:"",
empMobile:"",
password:""

    })

    const { value } = useParams()
console.log(value);


    const getSinglEmp = async () => {
        try {

            const response = await axios.get(`http://localhost:4000/api/tsm1/empED/${value}`)
            console.log(response);
            if (response.data.success) {
                setUserData(response.data.emp)
            }


        } catch (error) {
            console.log(error);
        }
    }




    const handleInputs = (e) => {
        setUserData({ ...addData, [e.target.name]: e.target.value })
    }
    const Navigate = useNavigate()
    const editEmp = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:4000/api/tsm1/empED/${value}`, { addData })
        console.log(response)

        if (response.data.success) {
            alert("employee details Updated Succesfully...")
            Navigate("/allEmpDetals")
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
                            value={addData.empId}
                            onChange={handleInputs}
                        />

                        <input type="text" name="empName" id="empName"
                            value={addData.empName}
                            onChange={handleInputs}
                            placeholder="empNames"
                            className='form-control mt-2'


                        />

                        <input type="text" name="empEmail" id="empEmail"
                            value={addData.empEmail}
                            onChange={handleInputs}
                            placeholder="empEmail"
                            className='form-control mt-2'
                        />

                        <input type="text" name="username" id="username"
                            value={addData.username}
                            onChange={handleInputs}
                            placeholder="username"
                            className='form-control mt-2'
                        />

                        <input type="text"
                            name="empMobile"
                            value={addData.empMobile}
                            onChange={handleInputs}
                            placeholder="empMobile"
                            className='form-control mt-2'
                        />
                        <input type="text"
                            name="password"
                            value={addData.password}
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

export default EditEmplye
