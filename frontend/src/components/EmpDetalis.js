import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';



const TaskAssign = () => {
  // const [gridApi,setGridApi]=useState(null)
  const [rowData, setRowData] = useState([])

  // const actionButton=(params)=>{
  //       console.log(params);
  //       alert(`${params.data.make} ${params.value}`)
  //     }
  const columnDefs = [
    { headerName: "empId", field: "empId" },
    { headerName: "empName", field: "empName" },
    { headerName: "empEmail", field: "empName", },
    { headerName: "username", field: "username", },
    { headerName: "empMobile", field: "empMobile" },
    { headerName: "password", field: "password" },
    {
      headerName: "Action", field: "_id",
      cellRendererFramework: (params) => <div>
        <button onClick={() => deleteData(params.value)}>Delete</button>
        <Link to={`/editemployes/${params.value}`}>Edite</Link>

      </div>
    }
  ]

  const onGridReady = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tsm1/empDetails")
      console.log(response);
      setRowData(response.data.emp)
    } catch (error) {
      console.log(error);
    }
  }

  // const deleteData = (params) => {
  //   console.log(params.value)
  // }

  const deleteData=async(id)=>{
    try{
      const response=await axios.delete(`http://localhost:4000/api/tsm1/empED/${id}`)
      .then(res=>{alert(res.data.message)})
      console.log(response);

    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1 align="center">EMPLOYEE DETAILS</h1>
      <h3>DETAILS</h3>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}>
        </AgGridReact>

      </div>
    </div>
  );
}

export default TaskAssign;
