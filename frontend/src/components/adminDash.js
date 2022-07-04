import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


const adminDash = () => {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
  
          <Link className="navbar-brand" to="#">
           Admin Dashbord
          </Link>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
  
              <li className="nav-item">
                <Link className="nav-link" to="/addtask">Add Task</Link>
              </li>
              <li className="nav-item">
            <Link className="nav-link" to="/empsignup">AddEMP</Link>
          </li>
  
              <li className="nav-item">
                <Link className="nav-link" to="/allEmpDetals">Emp Detalis</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/assignwork">AssignWork</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
              
            </ul>
  
          </div>
        </div>
      </nav>
      <div>Welcome to Admin dashbord</div>
      </Fragment>
    )
}

export default adminDash
