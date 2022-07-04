

import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import AdminSignUP from "./components/AdminSignup"
import Login from "./components/Login"
// import Logout from "./components/Logout"
import Home from "./components/Home"

import EmpSignUP from './components/EmpSignUP';
import AdminDash from './components/adminDash';
import AddTask from './components/addTask';
import TaskAssign from "./components/AssignTask"
import { Fragment } from 'react';
import EmpDash from './components/EmpDash';
import EmpDetlis from "./components/EmpDetalis"
import WorkProgress from './components/WorkProgress'
import EmployeeDetails from './components/employeDetails'
// import EditTask from './components/editTask'
import EditCom from './components/EditCom';
import EditEmploye from "./components/EditEmplye"


function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/adminsignup' element={<AdminSignUP />} />
        <Route path='/allEmpDetals' element={<EmpDetlis />} />
        <Route path="/empsignup" element={<EmpSignUP />} />

        <Route path="/login" element={<Login />} />

        <Route path="/adminDash" element={<AdminDash />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/assignwork" element={<TaskAssign />} />
        <Route path="/empDash" element={<EmpDash />} />
        <Route path="/employeeDetalis" element={<EmployeeDetails />} />
        <Route path="/workProgress" element={<WorkProgress />} />

        <Route path="/editemployes/:value" element={<EditEmploye />} />

        <Route path="/editCom/:value" element={<EditCom />} />









      </Routes>
    </Fragment>
  );
}

export default App;

// <Route path='/logout' element={<Logout />}></Route>
// <Route path="/edittask/:value" element={<EditTask />} />