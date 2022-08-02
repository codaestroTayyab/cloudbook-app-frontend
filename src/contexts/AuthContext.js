import { createContext } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";

export const contextForAuth = createContext();

export default function AuthContext(props) {
  const host = "http://localhost:5000";
  const navigate = useNavigate();

  //Login Function
  const loginUser = async (email, password) => {
    const response = await fetch(`${host}/cloudbook/auth/login`, {
      //API Call
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "jwt-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZjBjOWRlM2QyYTUzYzlhN2IzYTMyIn0sImlhdCI6MTY1ODc4NDkzNH0.H3VdbxUX3SfQcqFJkMialP-g1ffkxaoJdu51hWyQ6WA",
      },
      body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
    });
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.success) {
      //Validate the response if true then
      //Save token in local storage
      localStorage.setItem("token", responseData.authToken);
      //Navigate to home page
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  //Signup Function
  const signupUser = async (name, email, password) => {
    const response = await fetch(`${host}/cloudbook/auth/createuser`, {
      //API Call
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "jwt-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkZjBjOWRlM2QyYTUzYzlhN2IzYTMyIn0sImlhdCI6MTY1ODc4NDkzNH0.H3VdbxUX3SfQcqFJkMialP-g1ffkxaoJdu51hWyQ6WA",
      },
      body: JSON.stringify({name, email, password }), // body data type must match "Content-Type" header
    });
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.success) {
      //Validate the response if true then
      //Save token in local storage
      localStorage.setItem("token", responseData.authToken);
      //Navigate to home page
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <contextForAuth.Provider value={{loginUser, signupUser}}>
        {props.children}
      </contextForAuth.Provider>
    </>
  );
}
