import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../icons8-notebook-64.png";

export default function Navbar() {
  let location = useLocation();
  let navigator = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigator('/login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Avatar Logo" style={{ width: "40px" }} />
          </a>
          <Link className="navbar-brand" to="/">
            Cloudbook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div>
                <Link className="btn btn-primary mx-1" to="/login" role="button">
                  Login
                </Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">
                  Signup
                </Link>
              </div>
            ) : (
              <button onClick={handleLogout} className="btn btn-outline-warning mx-1">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
