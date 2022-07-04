import React, {  useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from "axios"
// import {useParams} from "react-router-dom"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';


const WorkProgress = () => {
  const [rowData, setRowData] = useState([])
  const columnDefs = [
    { headerName: "empId", field: "empId" },
    { headerName: "projectName", field: "projectName" },
    { headerName: "taskName", field: "taskName", },
    { headerName: "assignee", field: "assignee", },
    { headerName: "startDate", field: "startDate" },
    { headerName: "endDate", field: "endDate" },
    { headerName: "description", field: "description" },
    { headerName: "percentage", field: "percentage" },
    { headerName: "status", field: "status" },


    {
      headerName: "Action", field: "_id",
      cellRendererFramework: (params) => <div>

      <Link to={`/editCom/${params.value}`}>Update</Link>
      </div>
    }

  ]
  // const actionButton=(params)=>{
  //   console.log(params)
  // }


  const onGridReady = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tsm1/alltask")
    //  console.log(response);

      setRowData(response.data.tasks)
    } catch (error) {
      console.log(error);
    }
  }

  // const {id}=useParams()
  // console.log(id);

  // const getSingleTask = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:4000/api/tsm1/singleTaskEdit/${id}`)
  //     console.log(response);
  //     if (response.data.success) {
  //       setAddData(response.data.result)
  //     }


  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const updateData = async (id) => {

  //   // const response = await axios.put(`http://localhost:4000/api/tsm1/edittask/${id}`, { addData })
  //   // setAddData({...addData })
  //   //   // .then(res => { alert(res.data.message) })
  //   // console.log(response)

  // }

  return (
    <div className="App">
      <h1 align="center">Work Progress</h1>
      <h3> Work</h3>
      <div className="ag-theme-alpine" style={{ height: '300px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default WorkProgress;