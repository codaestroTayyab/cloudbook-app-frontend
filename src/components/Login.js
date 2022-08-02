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
    <div className="container my-4">
      <form onSubmit={handleLoginClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
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
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
          />
          <div id="passwordHelpBlock" className="form-text">
            Password should be at least 5 character
          </div>
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
}
