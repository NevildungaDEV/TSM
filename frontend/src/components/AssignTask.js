import React, {  useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
// import {useParams} from "react-router-dom"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



const TaskAssign=()=> {
  // const [gridApi,setGridApi]=useState(null)
  const [rowData, setRowData] = useState([])



  const columnDefs= [
    { headerName: "empId", field: "empId" },
    { headerName: "projectName", field: "projectName" },
    { headerName: "taskName", field: "taskName",},
    {headerName: "assignee",field: "assignee",},
    { headerName: "startDate", field: "startDate" },
    { headerName: "endDate", field: "endDate" },
    { headerName: "description", field: "description" },
    { headerName: "percentage", field: "percentage" },

    {headerName: "Action",field:"_id",
        cellRendererFramework:(params)=><div>
          <button onClick={()=>deleteData(params.value)}>delete</button>
         </div>},
    { headerName: "status", field:"status" }

  ]

const onGridReady=async()=>{
  try{
    const response= await axios.get("http://localhost:4000/api/tsm1/alltask")
    console.log(response);
    setRowData(response.data.tasks)
  }catch(error){
    console.log(error);
  }
}



const deleteData=async(id)=>{
  try{
    const response=await axios.delete(`http://localhost:4000/api/tsm1/deletetask/${id}`)
    .then(res=>{alert(res.data.message)})
    console.log(response);

  }catch(error){
    console.log(error);
  }
}

  return (
    <div className="App">
      <h1 align="center">AssignWork</h1>
      <h3> Work</h3>
      <div className="ag-theme-alpine" style={ {height: '300px'} }>
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
