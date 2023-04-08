import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://assignment-nodejs.onrender.com/login",
        {
          email,
          password,
        }
      );

      history("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your Email"
          required
        />
      </div>
      <div className="form-group">
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
