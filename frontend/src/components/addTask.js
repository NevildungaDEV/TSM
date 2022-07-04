import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewTAsk = () => {
  const [addTask, setAddTask] = useState({
    empId: "",
    projectName: "",
    taskName: "",
    assignee: "",
    startDate: "",
    endDate: "",
    description: ""
  })
  const Navigate = useNavigate()

  const inputHandler = (e) => {
    setAddTask({ ...addTask, [e.target.name]: e.target.value });
  }

  const AddTaskData = async (e) => {
    e.preventDefault();
    
    try{
    const result = await axios.post(`http://localhost:4000/api/tsm1/task`, addTask)
    .then(res=>{alert(res.data.message)})
    console.log(result)
    Navigate("/assignwork")
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Fragment>
      <div>
        <form>
        <input type="text" placeholder="empId"  name="empId" value={addTask.empId} onChange={inputHandler} /><br />
        <input type="text" placeholder="Project Name"  name="projectName" value={addTask.projectName} onChange={inputHandler} /><br />
        <input type="text" placeholder="task Name"  name="taskName" value={addTask.taskName} onChange={inputHandler} /><br />
        <input type="text" placeholder=" Assignee"  name="assignee" value={addTask.assignee} onChange={inputHandler} /><br />
        <input type="date" placeholder="Start Date"  name="startDate" value={addTask.startDate} onChange={inputHandler} /><br />
        <input type="date" placeholder=" End Date"  name="endDate" value={addTask.endDate} onChange={inputHandler} /><br />
        <input type="text" placeholder=" Description"  name="description" value={addTask.description} onChange={inputHandler} /><br/>
        <button  type="submit" onClick={AddTaskData} >Submit</button>



        </form>
      </div>
    </Fragment>
  )
}

export default AddNewTAsk