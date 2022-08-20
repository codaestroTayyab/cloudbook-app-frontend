import React, { useContext, useState } from "react";
import { contextForAuth } from "../contexts/AuthContext";

export default function Login() {
  const context = useContext(contextForAuth);
  const { loginUser } = context;

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    loginUser(credentials.email, credentials.password);
  };
  return (
    <div className="container" style={{ width: "30rem", marginTop: "18px", marginBottom: "3rem" }}>
      <h2 className="text-center fw-bold">Login</h2>
      <form onSubmit={handleLoginClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            placeholder="Enter Email Here"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input required type="password" name="password" placeholder="Enter Password Here" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
          <div id="passwordHelpBlock" className="form-text">
            Password should be at least 5 character
          </div>
        </div>

        <button type="submit" disabled = {credentials.password.length < 5 || credentials.email.length < 3} className="btn btn-outline-primary my-1">
          <span className="fw-semibold">Login</span>
        </button>
      </form>
    </div>
  );
}
