import React, { Fragment, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import './Home.css'
import axios from 'axios';

function Viewemp() {
  const [rowData, setRowData] = useState([])


  const columnDefs = [
    { headerName: "empName", field: "empName" },
    { headerName: "empId", field: "empId", },
    { headerName: "empMobile", field: "empMobile", },
    { headerName: "empEmail", field: "empEmail" },
    { headerName: "password", field: "password" },
    { headerName: "username", field: "username" },
    {
      headerName: "Action", field: "_id",
      cellRendererFramework: (params) => <div>
        <button className='btn_3'> <Link to={`/getsingleemp/${params.value}` } className='view_Link'>Work</Link></button>
        <button className='btn_4'> <Link to={`/getEmpid/${params.value}` } className='view_Link'>view</Link></button>
        <button className='btn_3'>Delete</button>
        <button className='btn_4'>Edite</button>
      </div>
    },
    {
      headerName: "EDIT/DELETE", field: "_id",
      cellRendererFramework: (params) => <div>
        <button className='btn_3' onClick={() => deleteData(params.value)}>Delete</button>
        <button className='btn_4'> <Link to={`/editEmployeDetails/${params.value}` } className='view_Link'>Update</Link></button>
      </div>
    }
   
  ]
  const Navigate = useNavigate()

  const deleteData=async(id)=>{
    // console.log(id)
  const confirm = window.confirm("Are you sure, you want to delete this Employe?", id)

  if (confirm) {
      const response=await axios.delete(`http://localhost:7000/deleteEmp/${id}`)
      .then(res=>{alert(res.data.message)})
      // console.log(response);
  }
  }

  const GoToassignpage = (params) => {
    console.log(params.value);
    Navigate('/asstask')
    
  }



  const onGridReady = async(params) => {
    try{
    const response = await axios.get("http://localhost:7000/getEmp")
    console.log(response);
    setRowData(response.data)
    }catch (error) {
      console.log(error);
    }
  }
  const clickedRow = (params) => {
    // console.log("params")
    let coldef = params.colDef.field
    let data = params.data
    if (coldef === "_id") {
      // console.log(data);
    }

  }
  return (
    <Fragment>
      <div><Navbar /></div>
      <div className="App">

       

<div className='ag-theme'>
<h1 className="hedingForAssigne" >Employee List</h1>
        <div className="ag-theme-alpine" style={{ height: '400px', width: '100%', textAlign: 'center', margin: 'auto' }}>
          <AgGridReact
            onCellClicked={clickedRow}
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={onGridReady}>
          </AgGridReact>
        </div>
        </div>

      </div>

    </Fragment>
  );
}



export default Viewemp