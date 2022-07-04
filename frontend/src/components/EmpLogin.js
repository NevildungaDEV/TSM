import axios from 'axios'
import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const EmpLogin = () => {
    const [empLogin,setLogin]=useState({
        empUsername:"",
        empPassword:""
    })
    const Navigate = useNavigate()
    
    const InputHandeler = (e) => {
        setLogin({ ...empLogin, [e.target.name]: e.target.value })

    }

    const empLoginData=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:4000/api/tsm1/emplogin",empLogin)
            .then(res=>{alert(res.data.message)})
            console.log(response);

            Navigate("/empDash")
        }catch(error){
            console.log(error);
        }

    }
    return (
        <div>
            <form >

                <input type="text" placeholder="empUsername" className="form-control" name="empUsername" value={empLogin.empUsername} onChange={InputHandeler}/><br />

                <input type="empPassword" placeholder=" empUsername" className="form-control" name="empPassword" value={empLogin.empPassword} onChange={InputHandeler}/><br />

                <form id="make_checkbox_select">

                    <select className="form-control">
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </form>

                <br />
                <div>
                    <button href="#" onClick={empLoginData}>Login</button>
                </div>
                <Link to="/AdminSignUP">Don't Have Account? Create New Account</Link>

            </form>
        </div>

    )
}

export default EmpLogin