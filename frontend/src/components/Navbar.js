import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand" to="#">
         TSM
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item">
              <Link className="nav-link" to="/adminsignup">AdminSignUP</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            
            
            
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
