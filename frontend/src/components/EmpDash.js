import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


const EmpDash = () => {
  return (
    <div>
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand" to="#">
          Employee Dashbord
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item">
              <Link className="nav-link" to="/workProgress">Work Progress</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employeeDetalis">details</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>

          </ul>

        </div>
        
      </div>
      
    
    
    </div>
    <div>
    <h3>
    Welcome to Employee Dashbord
    </h3>
    </div>
    </div>
  )
}

export default EmpDash

