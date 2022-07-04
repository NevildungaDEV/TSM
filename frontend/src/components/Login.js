import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


const Login = () => {
    const [Login, setLogin] = useState({
        username: "",
        password: ""
    })


    const [optRole, setoptRole] = useState()

    const Navigate = useNavigate()

    const InputHandeler = (e) => {
        setLogin({ ...Login, [e.target.name]: e.target.value })

    }
    // const {username,password}=Login

    const LoginData = async (e) => {
        e.preventDefault();
        // const {username,password}=Login
        try {
            // if(!username || !password){
            //     alert(message)
            // }
            if (optRole === "Admin") {
                const response = await axios.post("http://localhost:4000/api/tsm1/adminlogin", Login)
                    .then(res => { alert(res.data.message) })
                    console.log(response);
                    Navigate("/adminDash")
            }
            if (optRole === "Employee") {
                const response=await axios.post("http://localhost:4000/api/tsm1/emplogin",Login)
            .then(res=>{alert(res.data.message)})
            console.log(response);

            Navigate("/empDash")
            }


        } catch (error) {
            console.log(error);
        }

    }


    const handleSelectOption = (e) => {
        e.preventDefault()
        setoptRole(e.target.value)

    }


    return (
        <div>
            <form >

                <input type="text" placeholder="UserName" className="form-control" name="username" value={Login.username} onChange={InputHandeler} /><br />

                <input type="password" placeholder=" Password" className="form-control" name="password" value={Login.password} onChange={InputHandeler} /><br />

                <form id="make_checkbox_select">

                    <select className="form-control" onChange={handleSelectOption}>
                        <option>Select Usert Type</option>
                        <option value="Admin" >Admin</option>
                        <option value="Employee">User</option>
                    </select>
                </form>

                <br />
                <div>
                    <button href="#" onClick={LoginData}>Login</button>
                </div>
                <Link to="/AdminSignUP">Don't Have Account? Create New Account</Link>

            </form>
        </div>

    )
}

export default Login
