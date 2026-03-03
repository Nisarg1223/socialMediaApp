import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate()
if(loading){
  return(
    <h1>Loading....</h1>
  )
}

  async function handleFormSubmit(e) {
    e.preventDefault();
    await handleLogin(username, password);
    setusername("");
    setpassword("");
    navigate('/');
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form
          onSubmit={function (e) {
            handleFormSubmit(e);
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            name="email"
            placeholder="Enter email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            name="password"
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
