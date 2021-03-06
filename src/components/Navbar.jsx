import React from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="navbar" className="logo" alt="logo" />
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">How Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
