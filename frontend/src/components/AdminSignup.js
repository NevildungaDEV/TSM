import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"


const AdminSignup = () => {
  const [Signup,setSignup]=useState({
    fullname:"",
    username: "",
    email: "",
    password: ""
    
  })
  // const dataValidation=()=>{
  //   const {username,email,password,fullname}=Signup;
  //   if(!username||!email||!password||!fullname){
  //     alert(message)
  //   }else{
  //     alert(message)
  //   }
  // }
  const Navigate = useNavigate()

  const InputHandeler=(e)=>{
    console.log(e);
    setSignup({...Signup,[e.target.name]:e.target.value})
  }
  const Signupdata = async (e) => {
    e.preventDefault();
    
   
    const result = await axios.post(`http://localhost:4000/api/tsm1/adminsignup`, Signup)
    .then(res=>{alert(res.data.message)})
    console.log(result)
    Navigate("/login")
    
      
    
  }
  return (
    <div>
      <div>SIGN UP</div>
      <form>
      <input type="text" placeholder="Enter Fullname" className="form-control" name="fullname" value={Signup.fullname} onChange={InputHandeler} pattern="[A-Za-z]"  required/><br />
      <input type="text" placeholder="UserName" className="form-control" name="username" value={Signup.username} onChange={InputHandeler} pattern="[A-Za-z]"  required="true"/><br />
      <input type="email" placeholder=" Email" className="form-control" name="email" value={Signup.email} onChange={InputHandeler} /><br />
      <input type="password" placeholder="Enter Password" className="form-control" name="password" value={Signup.password} onChange={InputHandeler} /><br />

        <button href="#" onClick={(e) => { Signupdata(e) }}>SignUP</button>
      </form>
      <div>
      <a href="/login"  >AllReady Have Account?</a>
      </div>

    </div>
  )
}

export default AdminSignup
