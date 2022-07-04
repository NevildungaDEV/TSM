import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from "axios"
import { useParams} from "react-router-dom"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const WorkProgress = () => {
 
 
  const [rowData,setRowData] = useState([])
  const [addData, setAddData] = useState({

    percentage:""
  })


  useEffect(()=>{
    onGridReady()
  },[])
  // const Navigate=useNavigate()
  
   const columnDefs = [
    { headerName: "empId", field: "empId" },
    { headerName: "projectName", field: "projectName" },
    { headerName: "taskName", field: "taskName"},
    {headerName: "assignee",field: "assignee"},
    { headerName: "startDate", field: "startDate" },
    { headerName: "endDate", field: "endDate"},
    { headerName: "description", field: "description" },
    { headerName: "percentage", field: "percentage" ,editable: true},
    {
      headerName: "Action", field: '_id',
      cellRendererFramework: (params) => <div>
      <button onClick={() => updateButton(params.value)}>Submit</button>
      </div>
    }
  ]
  // const actionButton=(params)=>{
  //   console.log(params)
  // }
  const {value}=useParams()
  // console.log(value);

  const onGridReady=async()=>{
    try{
      const response= await axios.get(`http://localhost:4000/api/tsm1/singleTaskEdit/${value}`)
    //  console.log(response);
      setRowData(response.data.result)
      // console.log(response.data.result)
    }catch(error){
      console.log(error);
    }
  }
  

  // const updateButton=(params)=>{
  //   console.log(params)
  // }
  // const {value}=useParams()
 
  const updateButton = async (params) => {
    console.log(value)
    
    setAddData({...addData})
    

    const response = await axios.put(`http://localhost:4000/api/tsm1/edittask/${value}`,{addData}  )
      
    console.log(response.data)
    // console.log(response.data.result.percentage)
    // const postClone=[...addData]
    
    // console.log(addData.percentage);
  } 
  

  return (
    <div className="App">
      <h1 align="center">Work Progress</h1>
      <h3> Work</h3>
      <div className="ag-theme-alpine" style={{ height: '300px' }}>
        <AgGridReact
        columnDefs={columnDefs}
        rowData={[rowData]}
        onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default WorkProgress;

// const {percentage}=response.data
    // if(response.data){
    //   // Navigate("/workProgress")
    // }
    // setRowData(
    //   rowData.map((rowData)=>{
    //     return data.result.percentage ===percentage
    //   }
    // )