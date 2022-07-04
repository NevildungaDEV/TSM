import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'



const EmployeeDetails = () => {
  const [addData,setaddData] = useState([])
  console.log(addData);

  // const {id}=useParams()

  const EmployeeData = async () => {
    try {
      // const response =await axios.get(`http://localhost:4000/api/tsm1/singleEmp/${id}`)
      const response =await axios.get('http://localhost:4000/api/tsm1/empDetails')
      
      
      setaddData(response.data.emp)
      console.log(response.data);

    } catch (err) {
      console.log(err);

    }
  }
  useEffect(() => {
    EmployeeData()
  }, [])


  return (
    <Fragment>
    <div>
    <h1>Personal Detalis</h1>
    <div>
      <form>
        <input type="number"
          name="empId"
          value={addData.empId}
          placeholder='Employee ID'
          
        />

        <input type="text"
        name="empName"
        value={addData.empName}

        placeholder='Employee Name'
        
      />
      <input type="text"
      name="empEmail"
      value={addData.empEmail}
      placeholder='Employee Email'
      
    />
    <input type="text"
    name="username"
    value={addData.username}
    placeholder='Employee User Name'
  />
  <input type="text"
  name="empMobile"
  value={addData.empMobile}
  placeholder='Empolyee Phone Number'
/>

      </form>
    </div>
    </div>
    </Fragment>
  )
}

export default EmployeeDetails
