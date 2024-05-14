/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Port } from "../server/Port";
import { useNavigate } from "react-router-dom";
import "./logi.css";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const response = await axios.post(`${Port}/Login`, {
        username: username,
        password: password,
      });

      console.log("Login successful:", response.data);
      localStorage.setItem("Login Token", response.data.token);
      navigate("/Upload");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Login failed. Please try again.");
    }

    console.log("username:", username);
    console.log("Password:", password);

    setusername("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <h4>Admin Login Here</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            placeholder="abc@gmail.com"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
