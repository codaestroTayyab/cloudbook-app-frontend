import React, { useContext, useState } from "react";
import { contextForAuth } from "../contexts/AuthContext";

export default function Signup() {
  const context = useContext(contextForAuth);
  const { signupUser } = context;



  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSignupClick = async (event) => {
    event.preventDefault();
    signupUser(credentials.name, credentials.email, credentials.password);
  };

  return (
    <div className="container" style={{ width: "30rem", marginTop: "18px", marginBottom: "3rem" }}>
      <h2 className="text-center fw-bold">Signup</h2>
      <form onSubmit={handleSignupClick}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            required
            placeholder="Enter Name Here (Atleast 3 characters)"
            type="text"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            required
            placeholder="Enter Email Here"
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            required
            placeholder="Enter Password Here (Atleast 5 characters)"
            type="password"
            name="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
          <div id="passwordHelpBlock" className="form-text">
            Password should be at least 5 character
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            required
            type="password"
            name="cpassword"
            className="form-control"
            id="cpassword"
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled = {credentials.name.length > 2 || credentials.password.length < 5 || credentials.email.length < 3} className="btn btn-outline-primary my-3">
          <span className="fw-semibold" >Signup</span>
        </button>
      </form>
    </div>
  );
}
