import React , {useEffect} from "react";
import { useLocation } from 'react-router-dom';
// import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  let history = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history('/login')
  }
  let location = useLocation();
  useEffect(() => {
    
    console.log(location.pathname)
  }, [location]);
  return (
    <>
    <div className="progress-bar"></div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{height: "9vh", backgroundColor: "#000080"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">AutoRentals</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/home"> Home </Link>
                
              
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>

            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/addcar" ? "active" : ""}`} to="/addcar">Add Car</Link>
            </li>

            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/SeeCar" ? "active" : ""}`} to="/SeeCar">See Car</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
  <form className="d-flex">
    <Link className="btn bg-light mx-2" to="/login" role="button">
      Login
    </Link>
    <Link className="btn bg-light mx-Link" to="/signup" role="button">
      Signup
    </Link>
  </form>
) : (
  <div>
    <button onClick={handleLogout} className="btn bg-light">
      Logout
    </button>
    <Link className="btn bg-light mx-2" to="/history" role="button">
      History
    </Link>
  </div>
)}

          
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
