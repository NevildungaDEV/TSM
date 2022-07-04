import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"


const EmpSignUP = () => {
    const [empSignup,setSignup]=useState({
        empId:"",
        empName: "",
        empEmail: "",
        username: "",
        empMobile:"",
        password:"" 

      })
 const Navigate = useNavigate()

  const InputHandeler=(e)=>{
    console.log(e);
    setSignup({...empSignup,[e.target.name]:e.target.value})
  }
  const Signupdata = async (e) => {
    e.preventDefault();
   
    const result = await axios.post(`http://localhost:4000/api/tsm1/empsignup`, empSignup)
    .then(res=>{alert(res.data.message)})
    console.log(result)
    Navigate("/login")
    
      
    
  }
  return (
    <div>
      <div>SIGN UP</div>
      <form>
      <input type="text" placeholder="Enter empId" className="form-control" name="empId" value={empSignup.empId} onChange={InputHandeler} /><br />
      <input type="text" placeholder="Enter empName" className="form-control" name="empName" value={empSignup.empName} onChange={InputHandeler} /><br />
      <input type="number" placeholder="Enter empMobile" className="form-control" name="empMobile" value={empSignup.empMobile} onChange={InputHandeler} /><br />
      <input type="text" placeholder="username" className="form-control" name="username" value={empSignup.username} onChange={InputHandeler} /><br />
      <input type="email" placeholder=" empEmail" className="form-control" name="empEmail" value={empSignup.empEmail} onChange={InputHandeler} /><br />
      <input type="password" placeholder="Enter password" className="form-control" name="password" value={empSignup.password} onChange={InputHandeler} /><br />

      <button href="#" onClick={(e) => { Signupdata(e) }}>SignUP</button>
      </form>
      <div>
      <a href="/emplogin"  >AllReady Have Account?</a>
      </div>

    </div>
  )
}

export default EmpSignUP
