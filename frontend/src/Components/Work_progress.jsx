
import React, { Fragment, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
 import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import NavbarUser from '../Components/UserNavbar';
import { Link, Navigate} from 'react-router-dom';
import './Home.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const WorkProgress = () => {
  const location=useLocation()
   const username =location.state
   

  console.log(location.state)
  const [rowData,setRowData] = useState([])
  // console.log(rowData);



  // const actionButton=(params)=>{
  //       console.log(params);
  //       alert(`${params.data.make} ${params.value}`)
  //     }
  const columnDefs= [
    { headerName: "projectName",field: "projectName" },
    { headerName: "taskName", field: "taskName",},
    {headerName: "username",field: "username",},
    { headerName: "empId", field: "empId" },
    { headerName: "startDate", field: "startDate" },
    { headerName: "endDate", field: "endDate" },
    { headerName: "description", field: "description" },
    { headerName: "percentage", field: "percentage" },
    { headerName: "status", field: "status" },
    {headerName: "Action",field:"_id",
        cellRendererFramework:(params)=><div>
         
         <Link to={`/Updateemp/${params.value}`}  ><button className='btn_2'>Update</button></Link>

         </div>}
     
  ]
 
// const assignee =window.localStorage.getItem("username");

const onGridReady=()=>{
  console.log("grid is ready",username.username)
  const response = axios.post("http://localhost:7000/gettask",{username:username.username})
    .then(response=>{ setRowData(response.data)
      console.log(response.data)})
  // console.log(res.data)
    // let data = response.data
    
   
    Navigate("/EpmDashbord")
  }
  return (
    <Fragment>
    <div><NavbarUser/></div>
    <div className="App">
   
      <h1 className="hedingForAssigne" >Work  Progress</h1>
    
         
      <div className="ag-theme-alpine" style={ {height: '400px', width:'55%', textAlign:'center' , margin:'auto'} }>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={[rowData]}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>

    </div>

    </Fragment>
  );
}

export default WorkProgress;