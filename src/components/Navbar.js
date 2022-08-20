import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../CloudbookLogo2.svg";

export default function Navbar() {
  let location = useLocation();
  let navigator = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigator('/login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Avatar Logo" style={{width: "165px"}} />
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
                <Link className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} to="/notes">
                  Notes
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
              <button onClick={handleLogout} className="btn btn-outline-dark mx-1">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
